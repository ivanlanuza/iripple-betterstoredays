import { useEffect, useRef } from "react";
import { createRetailParticleScenes } from "@/lib/retailParticleScenes";
import styles from "@/styles/AnimatedHome.module.css";

// Keep the point-cloud render loop outside React, and hold a readable camera angle.
export default function AnimatedRipple({ paused, mode }) {
  const canvasRef = useRef(null);
  const modeRef = useRef(mode);
  const redrawRef = useRef(null);
  const sceneStateRef = useRef({ phase: 0, blend: mode === "retina" ? 1 : 0 });

  useEffect(() => { modeRef.current = mode; redrawRef.current?.(); }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0 };
    const position = { x: 0, y: 0 };
    const scenes = createRetailParticleScenes();
    const points = scenes.barter.map((from, index) => ({ from, to: scenes.retina[index], seed: Math.sin(index * 127.1) * 0.5 + 0.5 }));
    let width = 1;
    let height = 1;
    let frame = 0;
    let phase = sceneStateRef.current.phase;
    let lastTime = 0;
    let blend = sceneStateRef.current.blend;
    let onScreen = true;
    let disposed = false;

    function draw(time = 0) {
      frame = 0;
      const still = paused || motionPreference.matches;
      const delta = lastTime ? Math.min(time - lastTime, 40) : 16;
      lastTime = time;
      if (!still) phase += delta * 0.00012;
      blend += ((modeRef.current === "retina" ? 1 : 0) - blend) * (still ? 1 : 0.035);
      position.x += (pointer.x - position.x) * 0.04;
      position.y += (pointer.y - position.y) * 0.04;
      context.clearRect(0, 0, width, height);
      const scale = Math.min(width, height) * 0.325;
      const dotScale = Math.max(0.65, Math.min(1, Math.min(width, height) / 510));
      const turn = -0.23 + Math.sin(phase * 0.8) * 0.075 + position.x * 0.18;
      const tilt = 0.24 + blend * 0.16 + Math.sin(phase * 0.6) * 0.025 + position.y * 0.1;
      const scatter = Math.sin(blend * Math.PI);
      const dots = points.map(({ from, to, seed }) => {
        let x = from.x + (to.x - from.x) * blend;
        let y = from.y + (to.y - from.y) * blend;
        let z = from.z + (to.z - from.z) * blend;
        x += Math.sin(seed * 17 + phase) * scatter * 0.15;
        y += Math.cos(seed * 13 + phase) * scatter * 0.12 + Math.sin(phase) * 0.025;
        z += Math.sin(seed * 23 + phase) * scatter * 0.2;
        if (to.activity === 2 && !still) y += Math.sin(phase * 2 + to.x * 3) * 0.018 * blend;
        const rotatedX = x * Math.cos(turn) + z * Math.sin(turn);
        const rotatedZ = -x * Math.sin(turn) + z * Math.cos(turn);
        const rotatedY = y * Math.cos(tilt) - rotatedZ * Math.sin(tilt);
        const depth = y * Math.sin(tilt) + rotatedZ * Math.cos(tilt);
        const perspective = 5.5 / (5.5 - depth);
        const activity = from.activity + (to.activity - from.activity) * blend;
        const shimmer = activity ? 0.9 + Math.sin(phase * 3 + seed * 6) * 0.1 : 1;
        return {
          x: width * 0.52 + rotatedX * scale * perspective,
          y: height * 0.51 - rotatedY * scale * perspective,
          depth,
          radius: (1.5 + seed * 0.45) * (from.size + (to.size - from.size) * blend) * perspective * dotScale,
          red: from.red + (to.red - from.red) * blend,
          opacity: (from.opacity + (to.opacity - from.opacity) * blend) * shimmer,
        };
      }).sort((a, b) => a.depth - b.depth);

      for (const dot of dots) {
        context.fillStyle = `rgba(${Math.round(32 + dot.red * 104)},${Math.round(56 - dot.red * 24)},${Math.round(136 - dot.red * 80)},${dot.opacity})`;
        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fill();
      }
      if (!still && onScreen && !document.hidden && !disposed) frame = requestAnimationFrame(draw);
    }

    function start() {
      if (disposed || !onScreen || document.hidden) return;
      lastTime = 0;
      if (!frame) frame = requestAnimationFrame(draw);
    }
    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      start();
    }
    function move(event) {
      if (paused || motionPreference.matches) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    }
    function reset() { pointer.x = 0; pointer.y = 0; }
    function visibility() {
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
      else start();
    }
    redrawRef.current = start;
    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else { cancelAnimationFrame(frame); frame = 0; }
    });
    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerleave", reset);
    motionPreference.addEventListener("change", start);
    document.addEventListener("visibilitychange", visibility);

    return () => {
      disposed = true;
      sceneStateRef.current = { phase, blend };
      redrawRef.current = null;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", reset);
      motionPreference.removeEventListener("change", start);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [paused]);

  return <canvas ref={canvasRef} className={styles.particleCanvas} aria-hidden="true" />;
}

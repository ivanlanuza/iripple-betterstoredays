import { useEffect, useRef } from "react";
import styles from "@/styles/AnimatedHome.module.css";

// A small, dependency-free point sculpture. Keep animation outside React's render loop.
export default function AnimatedRipple({ paused, mode }) {
  const canvasRef = useRef(null);
  const modeRef = useRef(mode);
  const redrawRef = useRef(null);

  useEffect(() => { modeRef.current = mode; redrawRef.current?.(); }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0 };
    const position = { x: 0, y: 0 };
    const points = Array.from({ length: 1152 }, (_, index) => {
      const ring = Math.floor(index / 24);
      const angle = (ring / 48) * Math.PI * 2;
      const tube = ((index % 24) / 24) * Math.PI * 2;
      return { angle, tube, seed: Math.sin(index * 127.1) * 0.5 + 0.5 };
    });
    let width = 1;
    let height = 1;
    let frame = 0;
    let phase = 0;
    let lastTime = 0;
    let blend = modeRef.current === "retina" ? 1 : 0;
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
      const scale = Math.min(width, height) * 0.315;
      const turn = phase + position.x * 0.25;
      const tilt = 0.55 + Math.sin(phase * 0.7) * 0.18 + position.y * 0.2;
      const dots = points.map(({ angle, tube, seed }) => {
        const a = angle + phase * 0.3;
        const radius = 0.88 + Math.cos(tube) * 0.32;
        const wave = Math.sin(a * 3 + phase * 2) * 0.045;
        let x = (radius + wave) * Math.cos(a);
        let y = (radius + wave) * Math.sin(a);
        let z = Math.sin(tube) * 0.32;
        // The second state opens the central ring into a spherical data cloud.
        const sphereY = Math.cos(tube) * 1.05;
        const sphereRadius = Math.sin(tube) * 1.05;
        x += (sphereRadius * Math.cos(a) - x) * blend;
        y += (sphereY - y) * blend;
        z += (sphereRadius * Math.sin(a) - z) * blend;
        const rotatedX = x * Math.cos(turn) - z * Math.sin(turn);
        const rotatedZ = x * Math.sin(turn) + z * Math.cos(turn);
        const rotatedY = y * Math.cos(tilt) - rotatedZ * Math.sin(tilt);
        const depth = y * Math.sin(tilt) + rotatedZ * Math.cos(tilt);
        const perspective = 3.8 / (3.8 - depth);
        return { x: width / 2 + rotatedX * scale * perspective, y: height / 2 + rotatedY * scale * perspective, depth, radius: (1.45 + seed * 1.1) * perspective, red: Math.sin(angle + phase * 0.4) > 0.8 - blend * 0.7 };
      }).sort((a, b) => a.depth - b.depth);

      for (const dot of dots) {
        const opacity = 0.28 + ((dot.depth + 1.5) / 3) * 0.7;
        context.fillStyle = dot.red ? `rgba(136,32,56,${opacity})` : `rgba(32,56,136,${opacity})`;
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

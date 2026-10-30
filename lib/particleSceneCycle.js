const DEFAULT_HOLD_MS = 3000;
const TRANSITION_MS = 1200;

export function createParticleSceneCycle(mode, blend, holdMs = DEFAULT_HOLD_MS) {
  const target = mode === "retina" ? 1 : 0;
  return { mode, blend, from: blend, target, holdMs, elapsed: 0, transitioning: Math.abs(blend - target) > 0.001 };
}

// Hold time starts only after the sculpture has reached its destination.
export function advanceParticleSceneCycle(cycle, delta) {
  cycle.elapsed += delta;
  if (cycle.transitioning) {
    const progress = Math.min(cycle.elapsed / TRANSITION_MS, 1);
    const eased = progress * progress * (3 - 2 * progress);
    cycle.blend = cycle.from + (cycle.target - cycle.from) * eased;
    if (progress === 1) {
      cycle.blend = cycle.target;
      cycle.transitioning = false;
      cycle.elapsed = 0;
    }
  } else if (cycle.elapsed >= cycle.holdMs) {
    cycle.mode = cycle.mode === "barter" ? "retina" : "barter";
    cycle.from = cycle.blend;
    cycle.target = cycle.mode === "retina" ? 1 : 0;
    cycle.transitioning = true;
    cycle.elapsed = 0;
  }
  return cycle;
}

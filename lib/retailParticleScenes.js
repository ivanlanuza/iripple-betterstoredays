// Model the two platforms as point-cloud objects, with no textures or 3D runtime.
const STEP = 0.065;

function point(scene, x, y, z, options = {}) {
  scene.push({ x, y, z, red: 0, opacity: 0.8, size: 1, activity: 0, ...options });
}

function line(scene, from, to, options = {}, step = STEP) {
  const length = Math.hypot(...to.map((value, index) => value - from[index]));
  const count = Math.max(1, Math.ceil(length / step));
  for (let index = 0; index <= count; index += 1) {
    const t = index / count;
    point(scene, ...from.map((value, axis) => value + (to[axis] - value) * t), options);
  }
}

function surface(scene, origin, across, down, options = {}, mask = () => true) {
  const columns = Math.max(1, Math.ceil(Math.hypot(...across) / STEP));
  const rows = Math.max(1, Math.ceil(Math.hypot(...down) / STEP));
  for (let row = 0; row <= rows; row += 1) {
    for (let column = 0; column <= columns; column += 1) {
      const u = column / columns;
      const v = row / rows;
      if (mask(u, v)) point(scene, ...origin.map((value, axis) => value + across[axis] * u + down[axis] * v), options);
    }
  }
}

function rectangle(scene, x, y, width, height, z, options = {}) {
  const corners = [[x, y, z], [x + width, y, z], [x + width, y + height, z], [x, y + height, z]];
  corners.forEach((corner, index) => line(scene, corner, corners[(index + 1) % 4], options));
}

function box(scene, { x, y, z, width, height, depth }, options = {}, frontMask) {
  const left = x - width / 2;
  const bottom = y - height / 2;
  const front = z + depth / 2;
  const back = z - depth / 2;
  surface(scene, [left, bottom, front], [width, 0, 0], [0, height, 0], options, frontMask);
  surface(scene, [left, y + height / 2, back], [width, 0, 0], [0, 0, depth], { ...options, opacity: (options.opacity ?? 0.8) * 0.65 });
  for (const side of [left, left + width]) {
    surface(scene, [side, bottom, back], [0, height, 0], [0, 0, depth], { ...options, opacity: (options.opacity ?? 0.8) * 0.6 });
  }
  rectangle(scene, left, bottom, width, height, front, { ...options, opacity: 0.98, size: 1.12 });
}

function display(scene, { x, y, z, width, height, depth }) {
  box(scene, { x, y, z, width, height, depth }, { opacity: 0.85 }, (u, v) => u < 0.055 || u > 0.945 || v < 0.075 || v > 0.925);
  rectangle(scene, x - width / 2 + 0.12, y - height / 2 + 0.12, width - 0.24, height - 0.24, z + depth / 2 + 0.01, { opacity: 0.3, size: 0.65 });
}

function checkoutScene() {
  const scene = [];
  // Cash drawer, support, and the large merchant-facing touchscreen.
  box(scene, { x: -0.12, y: -0.72, z: 0.13, width: 2.05, height: 0.28, depth: 0.82 }, { opacity: 0.43, size: 0.88 });
  line(scene, [-1.06, -0.72, 0.55], [0.82, -0.72, 0.55], { opacity: 0.9 });
  rectangle(scene, -0.27, -0.8, 0.3, 0.07, 0.56, { red: 1, size: 0.85 });
  box(scene, { x: -0.2, y: -0.34, z: -0.17, width: 0.23, height: 0.5, depth: 0.24 }, { opacity: 0.75 });
  box(scene, { x: -0.2, y: -0.53, z: -0.02, width: 0.75, height: 0.08, depth: 0.5 }, { opacity: 0.7 });
  display(scene, { x: -0.2, y: 0.55, z: -0.08, width: 1.85, height: 1.25, depth: 0.16 });

  // Product tiles, a basket, and a burgundy checkout action inside the screen.
  for (const x of [-0.94, -0.56]) {
    for (const y of [0.22, 0.6]) {
      rectangle(scene, x, y, 0.27, 0.25, 0.02, { opacity: 0.6, size: 0.85 });
      surface(scene, [x + 0.06, y + 0.07, 0.025], [0.15, 0, 0], [0, 0.12, 0], { opacity: 0.32, size: 0.75 });
    }
  }
  line(scene, [-0.13, 0.1, 0.02], [-0.13, 1, 0.02], { opacity: 0.28, size: 0.7 });
  line(scene, [-0.94, 0.96, 0.02], [-0.36, 0.96, 0.02], { opacity: 0.75, size: 0.9 });
  for (const y of [0.85, 0.64, 0.43]) {
    line(scene, [0.02, y, 0.03], [0.27, y, 0.03], { opacity: 0.7, size: 0.8 });
    line(scene, [0.4, y, 0.03], [0.49, y, 0.03], { red: 1, opacity: 0.8, size: 0.8 });
  }
  surface(scene, [0.01, 0.1, 0.035], [0.5, 0, 0], [0, 0.14, 0], { red: 1, opacity: 0.9, size: 0.95, activity: 1 });

  // A card reader with a small screen and tactile keypad.
  box(scene, { x: 1.08, y: -0.3, z: 0.37, width: 0.4, height: 0.59, depth: 0.16 }, { opacity: 0.62, size: 0.8 }, (u, v) => u < 0.18 || u > 0.82 || v < 0.1 || v > 0.9);
  rectangle(scene, 0.96, -0.26, 0.24, 0.21, 0.46, { red: 1, size: 0.9 });
  line(scene, [1, -0.15, 0.47], [1.16, -0.15, 0.47], { red: 1, opacity: 0.6, size: 0.75, activity: 1 });
  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 3; column += 1) point(scene, 0.98 + column * 0.1, -0.35 - row * 0.08, 0.465, { size: 1.1, red: row === 2 && column === 2 ? 1 : 0 });
  }

  // Receipt printer and an emerging receipt, with dotted lines of print.
  box(scene, { x: -1.29, y: -0.45, z: 0.3, width: 0.38, height: 0.32, depth: 0.4 }, { opacity: 0.58, size: 0.8 });
  rectangle(scene, -1.42, -0.3, 0.26, 0.51, 0.35, { opacity: 0.7, size: 0.8 });
  for (const y of [-0.2, -0.1, 0, 0.1]) line(scene, [-1.38, y, 0.36], [-1.2, y, 0.36], { red: y === 0.1 ? 1 : 0, opacity: 0.5, size: 0.65 });
  return scene;
}

function laptopScene() {
  const scene = [];
  // Open laptop: thin display, a broad keyboard deck, and a distinct trackpad.
  display(scene, { x: 0, y: 0.47, z: -0.26, width: 2.16, height: 1.35, depth: 0.1 });
  box(scene, { x: 0, y: -0.28, z: 0.32, width: 2.4, height: 0.09, depth: 1.3 }, { opacity: 0.32, size: 0.78 });
  line(scene, [-1.08, -0.2, -0.22], [1.08, -0.2, -0.22], { opacity: 0.9, size: 1 });
  point(scene, 0, 1.105, -0.2, { size: 1.3, red: 1 });
  for (let row = 0; row < 4; row += 1) {
    for (let column = 0; column < 11; column += 1) {
      const x = -0.96 + column * 0.18;
      const z = -0.12 + row * 0.15;
      line(scene, [x, -0.222, z], [x + 0.12, -0.222, z], { opacity: 0.7, size: 0.72 }, 0.055);
      line(scene, [x, -0.222, z + 0.07], [x + 0.12, -0.222, z + 0.07], { opacity: 0.5, size: 0.65 }, 0.055);
    }
  }
  const trackpad = [[-0.33, -0.22, 0.56], [0.33, -0.22, 0.56], [0.33, -0.22, 0.84], [-0.33, -0.22, 0.84]];
  trackpad.forEach((corner, index) => line(scene, corner, trackpad[(index + 1) % 4], { red: 1, opacity: 0.75, size: 0.9 }));

  // A dashboard UI: navigation, growing columns, a trend, and a circular chart.
  const screenZ = -0.195;
  line(scene, [-0.91, 0.9, screenZ], [0.91, 0.9, screenZ], { opacity: 0.45, size: 0.7 });
  for (const y of [0.66, 0.44, 0.22, 0]) line(scene, [-0.9, y, screenZ], [-0.76, y, screenZ], { opacity: 0.6, size: 0.8 });
  line(scene, [-0.66, -0.03, screenZ], [-0.66, 0.77, screenZ], { opacity: 0.23, size: 0.65 });
  line(scene, [-0.56, 0, screenZ], [0.39, 0, screenZ], { opacity: 0.4, size: 0.7 });
  const heights = [0.23, 0.39, 0.31, 0.54, 0.67];
  heights.forEach((height, index) => {
    surface(scene, [-0.54 + index * 0.19, 0.02, screenZ + 0.005], [0.105, 0, 0], [0, height, 0], { red: 1, opacity: 0.72, size: 0.88, activity: 2 });
  });
  const trend = [[-0.51, 0.4, screenZ + 0.025], [-0.32, 0.53, screenZ + 0.025], [-0.13, 0.46, screenZ + 0.025], [0.06, 0.68, screenZ + 0.025], [0.28, 0.79, screenZ + 0.025]];
  trend.slice(1).forEach((position, index) => line(scene, trend[index], position, { red: 1, opacity: 1, size: 1, activity: 1 }, 0.035));
  for (let ring = 0; ring < 3; ring += 1) {
    for (let index = 0; index < 30; index += 1) {
      const angle = (index / 30) * Math.PI * 2;
      const radius = 0.16 + ring * 0.045;
      point(scene, 0.69 + Math.cos(angle) * radius, 0.5 + Math.sin(angle) * radius, screenZ + 0.01, { red: index < 21 ? 1 : 0, opacity: 0.85, size: 0.9, activity: 1 });
    }
  }
  for (const y of [0.1, -0.01]) {
    line(scene, [0.51, y, screenZ], [0.88, y, screenZ], { opacity: 0.65, size: 0.8 });
  }
  return scene;
}

function sample(scene, count) {
  // Spatial pairing makes the register's display become the laptop display.
  const ordered = [...scene].sort((a, b) => Math.round(a.y * 16) - Math.round(b.y * 16) || a.x - b.x || a.z - b.z);
  return Array.from({ length: count }, (_, index) => ordered[Math.floor((index / count) * ordered.length)]);
}

export function createRetailParticleScenes() {
  const barter = checkoutScene();
  const retina = laptopScene();
  const count = Math.max(barter.length, retina.length);
  return { barter: sample(barter, count), retina: sample(retina, count) };
}

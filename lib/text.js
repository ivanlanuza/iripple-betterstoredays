export function splitBlocks(text = "") {
  const t = String(text ?? "").replace(/\r\n/g, "\n").trim();
  if (!t) return [];
  return t.split(/\n\n+/g).map((b) => b.trim()).filter(Boolean);
}

export function splitTitleBody(block = "") {
  const s = String(block ?? "");
  const idx = s.indexOf("\n");
  if (idx === -1) return { title: s.trim(), body: "" };
  return { title: s.slice(0, idx).trim(), body: s.slice(idx + 1).trim() };
}

export function asArray(value) {
  if (Array.isArray(value)) return value;
  if (value == null) return [];
  return [value];
}

// Tiến trình đọc chỉ lưu trên trình duyệt của người đọc (local-first như Anam).
const READ_KEY = 'endo:read';
const LAST_KEY = 'endo:last';

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* chế độ riêng tư — bỏ qua */
  }
}

export function getRead(): Set<string> {
  return new Set(load<string[]>(READ_KEY, []));
}

export function markRead(id: string) {
  const read = getRead();
  read.add(id);
  save(READ_KEY, [...read]);
}

export function getLast(): { id: string; title: string } | null {
  return load(LAST_KEY, null);
}

export function setLast(id: string, title: string) {
  save(LAST_KEY, { id, title });
}

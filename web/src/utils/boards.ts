export function shortId(id: string) {
  return (id.split('.').pop() ?? '').toLowerCase();
}

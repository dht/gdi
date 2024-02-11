export const calculateCursors = (docTree: any, hash: string) => {
  const output: any = {
    current: null,
    next: null,
  };

  if (!docTree) return output;

  const { docs } = docTree;

  const index = docs.findIndex((d: any) => d.path === hash);
  const current = docs[index];
  const next = docs[index + 1];

  output.current = current;
  output.next = next;

  return output;
};

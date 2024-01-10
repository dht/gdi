export const sortBy = (key: string) => (a: any, b: any) => {
  if (a[key] === b[key]) {
    return 0;
  }

  return a[key] < b[key] ? -1 : 1;
};

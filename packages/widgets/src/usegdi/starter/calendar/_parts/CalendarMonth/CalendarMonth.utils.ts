export const weekNumbers = (firstDayOfWeek: number) => {
  const weekNumbers = [];

  for (let i = 0; i < 7; i++) {
    const index = (i + firstDayOfWeek) % 7;
    weekNumbers.push(index);
  }

  return weekNumbers;
};

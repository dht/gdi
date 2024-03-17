export const calcNextValue = (focusTiers: string[], clickedId: string) => {
  const output = [...focusTiers];

  if (clickedId === 'all') {
    return ['1', '2', '3', '4'];
  }

  if (clickedId === 'none') {
    return [];
  }

  const indexOf = focusTiers.indexOf(clickedId);
  if (indexOf === -1) {
    output.push(clickedId);
  } else {
    output.splice(indexOf, 1);
  }

  output.sort();

  return output;
};

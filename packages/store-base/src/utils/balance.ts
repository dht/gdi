export const parseItemsBalance = <T extends Item>(items: T[]) => {
  let balance = 0;

  return items.map((item) => {
    const { amount } = item;

    balance += amount;

    return {
      ...item,
      balance,
    };
  });
};

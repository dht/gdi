export const formatSeconds = (seconds: number) => {
  return seconds.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatPrice = (price: number) => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatCount = (price: number, noun: string) => {
  return (
    price.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) +
    ' ' +
    noun
  );
};

export const timeText = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const milliseconds = Math.floor((time % 1) * 1000);
  const millisecondsText = lz(milliseconds).slice(0, 1);

  return {
    main: `${lz(minutes)}:${lz(seconds)}.`,
    millis: millisecondsText,
  };
};

const lz = (value: number) => {
  return value.toString().padStart(2, '0');
};

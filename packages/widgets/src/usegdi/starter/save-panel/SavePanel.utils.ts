export const nextFileName = (fileName: string) => {
  // make voice_1.mp3 => voice_2.mp3
  const regex = /(\d+)\./g;
  const match = fileName.match(regex);

  if (!match) {
    return fileName;
  }

  const number = parseInt(match[0]);
  const nextNumber = number + 1;
  return fileName.replace(regex, nextNumber.toString() + '.');
};

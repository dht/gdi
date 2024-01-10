const generateData = (count: number) => {
  const output = [];

  for (let i = 0; i < count; i++) {
    const width = 300;
    const height = 200;

    const thumbRatio = 0.4;
    const thumbWidth = Math.floor(width * thumbRatio);
    const thumbHeight = Math.floor(height * thumbRatio);

    output.push({
      id: String(i),
      title: `Image ${i}`,
      ratio: width / height,
      imageThumbUrl: `https://picsum.photos/id/${i + 20}/${thumbWidth}/${thumbHeight}`,
      imageUrl: `https://picsum.photos/id/${i + 20}/${width}/${height}`,
      tags: [],
    });
  }

  return output;
};

export const data = generateData(100);

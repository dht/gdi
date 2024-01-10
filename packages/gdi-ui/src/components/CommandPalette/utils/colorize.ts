export type Part = {
  text: string;
  isColorful?: boolean;
};

export function colorize(text: string, term: string): Part[] {
  if (!term) {
    return [
      {
        text,
        isColorful: false,
      },
    ];
  }

  const output: Part[] = [];
  let memo = '';

  const addMemo = () => {
    if (!memo) {
      return;
    }

    output.push({
      text: memo,
      isColorful: false,
    });
    memo = '';
  };

  for (let i = 0; i < text.length; i++) {
    if (matchAhead(text, term, i)) {
      addMemo();

      output.push({
        text: textAhead(text, term, i),
        isColorful: true,
      });

      i += term.length - 1;
    } else {
      memo += text.substring(i, i + 1);
    }
  }

  addMemo();

  return output;
}

const textAhead = (text: string, term: string, index: number) => {
  return text.substring(index, index + term.length);
};

const matchAhead = (text: string, term: string, index: number) => {
  return textAhead(text, term, index).toLowerCase() === term.toLowerCase();
};

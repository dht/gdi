export const lz = (number: number = 0) => {
    const output = String(number);
    return '0'.repeat(2 - output.length) + output;
};

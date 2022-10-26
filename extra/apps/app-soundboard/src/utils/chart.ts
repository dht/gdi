import chroma from 'chroma-js';

const color1 = 'rgba(255, 99, 132, 1)';
const color2 = 'rgba(54, 162, 235, 1)';
const color3 = 'rgba(255, 206, 86, 1)';
const color4 = 'rgba(75, 192, 192, 1)';
const color5 = 'rgba(153, 102, 255, 1)';
const color6 = 'rgba(255, 159, 64, 1)';
const DEFAULT_COLORS = [color1, color2, color3, color4, color5, color6];
const DEFAULT_COLORS_BASIC = ['#99029d', '#96ffea', '#ffffe0'];

const generateColors = (colors: string[], count: number, alpha = 1) => {
    const output: string[] = [];
    const scale = chroma.scale(colors);

    for (let i = 0; i < count; i++) {
        output.push(
            scale(i / count)
                .alpha(alpha)
                .hex()
        );
    }

    return output;
};

const generateDataset = (input: any, colors: string[], label: string): any => {
    const dataSize = Object.keys(input).length;

    return {
        label,
        data: Object.values(input),
        backgroundColor: generateColors(colors, dataSize, 0.4),
        borderColor: generateColors(colors, dataSize, 1),
        borderWidth: 1,
    };
};

export const generateConfig = (
    inputs: any[],
    colors: string[] = DEFAULT_COLORS
) => {
    const datasets: any = [];
    const labels = Object.keys(inputs[0]);

    datasets.push(generateDataset(inputs[0], colors, 'Expected'));

    if (inputs[1]) {
        datasets.push(generateDataset(inputs[1], colors, 'Actual'));
    }

    const data = {
        labels,
        datasets,
    };

    const options: any = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return {
        data,
        options,
    };
};

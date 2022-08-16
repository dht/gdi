import Table from 'cli-table';
import path from 'path';
import { homedir } from 'os';

export const printTable = (rows: any[], colWidths: number[]) => {
    const table = new Table({
        colWidths,
    });

    rows.filter((row: any) => row[0] && row[1]).forEach((row: any) =>
        table.push(row)
    );

    console.log(table.toString());
};

export const prettyPath = (cwd: string) => {
    return path.resolve(cwd).replace(homedir(), '~');
};

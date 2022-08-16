import { Local } from '../types';

export class Command {
    public local: Local = {} as Local;

    constructor(public argv: any) {}
}

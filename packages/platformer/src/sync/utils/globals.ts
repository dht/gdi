const globals: any = {
    callbacks: [],
    sockets: {},
} as {
    callbacks: any[];
    sockets: Record<string, any>;
};

const accessors = {
    set structure(structure: any) {
        globals.structure = structure;
    },
    get structure() {
        return globals.structure;
    },
    set adapters(adapters: any) {
        globals.adapters = adapters;
    },
    get adapters() {
        return globals.adapters;
    },
};

export default accessors;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSingularAction = exports.toSingular = void 0;
var exceptions = {
    people: 'person',
};
var toSingular = function (pluralWord) {
    if (exceptions[pluralWord]) {
        return exceptions[pluralWord];
    }
    if (/[a-z]+oes$/.test(pluralWord)) {
        return pluralWord.replace(/oes$/, 'o');
    }
    if (/[a-z]+ies$/.test(pluralWord)) {
        return pluralWord.replace(/ies$/, 'y');
    }
    if (/[a-z]+es$/.test(pluralWord)) {
        return pluralWord.replace(/es$/, '');
    }
    if (/[a-z]+s$/.test(pluralWord)) {
        return pluralWord.replace(/s$/, '');
    }
    return pluralWord;
};
exports.toSingular = toSingular;
var toSingularAction = function (nodeName) {
    return (0, exports.toSingular)(nodeName).toUpperCase();
};
exports.toSingularAction = toSingularAction;

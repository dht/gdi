"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCollectionNodeBlank = void 0;
var isCollectionNodeBlank = function (collectionNode) {
    var values = Object.values(collectionNode);
    if (values.length > 1) {
        return false;
    }
    var fields = Object.keys(values[0]);
    return fields.length === 1 && fields[0] === 'id';
};
exports.isCollectionNodeBlank = isCollectionNodeBlank;

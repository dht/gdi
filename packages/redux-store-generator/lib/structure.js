"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearNodes = exports.analyzeStructure = exports.nodeToType = void 0;
var types_1 = require("./types/types");
var isQueueNode = function (value) {
    return Array.isArray(value);
};
var isCollectionNode = function (value) {
    if (typeof value !== 'object')
        return false;
    var firstKey = Object.keys(value).pop();
    return value && value[firstKey] && value[firstKey].id === firstKey;
};
var isGroupedListNode = function (value) {
    if (typeof value !== 'object')
        return false;
    var firstKey = Object.keys(value).pop();
    var firstValue = firstKey ? value[firstKey] : null;
    var items = (firstValue !== null && firstValue !== void 0 ? firstValue : {}).items;
    return isCollectionNode(value) && Array.isArray(items);
};
var isSingleNode = function (value) {
    if (typeof value !== 'object')
        return false;
    return !value['id'];
};
var nodeToType = function (value) {
    if (isQueueNode(value)) {
        return types_1.NodeType.QUEUE_NODE;
    }
    else if (isGroupedListNode(value)) {
        return types_1.NodeType.GROUPED_LIST_NODE;
    }
    else if (isCollectionNode(value)) {
        return types_1.NodeType.COLLECTION_NODE;
    }
    else if (isSingleNode(value)) {
        return types_1.NodeType.SINGLE_NODE;
    }
    return undefined;
};
exports.nodeToType = nodeToType;
var analyzeStructure = function (json) {
    var memo = {};
    return Object.keys(json).reduce(function (output, key) {
        if ((0, exports.nodeToType)(json[key])) {
            output[key] = (0, exports.nodeToType)(json[key]);
        }
        return output;
    }, memo);
};
exports.analyzeStructure = analyzeStructure;
var clearNodes = function (json, nodes) {
    // generating a new object for immutability sake
    return Object.keys(json)
        .filter(function (key) { return !nodes.includes(key); })
        .reduce(function (output, key) {
        output[key] = json[key];
        return output;
    }, {});
};
exports.clearNodes = clearNodes;

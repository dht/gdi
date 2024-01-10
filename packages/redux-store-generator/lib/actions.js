"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateActionsForStore = exports.groupedList_all = exports.groupedList_pushManyItems = exports.groupedList_clearItems = exports.groupedList_patchItem = exports.groupedList_deleteItem = exports.groupedList_popItem = exports.groupedList_pushItem = exports.groupedList_setItems = exports.groupedList_getItems = exports.groupedList_setManyAction = exports.groupedList_deleteAction = exports.groupedList_patchAction = exports.groupedList_setAction = exports.groupedList_addAction = exports.groupedList_setAllAction = exports.groupedList_getAction = exports.collection_all = exports.collection_setManyAction = exports.collection_deleteAction = exports.collection_patchAction = exports.collection_setAction = exports.collection_addAction = exports.collection_setAllAction = exports.collection_getAction = exports.queue_all = exports.queue_clearAction = exports.queue_popAction = exports.queue_pushManyAction = exports.queue_pushAction = exports.queue_setAction = exports.queue_getAction = exports.single_all = exports.single_getAction = exports.single_setAction = exports.single_patchAction = exports.SIGNATURE = void 0;
var tslib_1 = require("tslib");
var types_1 = require("./types/types");
var singular_1 = require("./singular");
var structure_1 = require("./structure");
exports.SIGNATURE = {
    '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
};
// ============== single ==============
var single_patchAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "PATCH_".concat(nodeName.toUpperCase()), payload: payload }, extra);
}; };
exports.single_patchAction = single_patchAction;
var single_setAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "SET_".concat(nodeName.toUpperCase()), payload: payload }, extra);
}; };
exports.single_setAction = single_setAction;
var single_getAction = function (nodeName, extra) { return function () {
    return tslib_1.__assign({ type: "GET_".concat(nodeName.toUpperCase()) }, extra);
}; };
exports.single_getAction = single_getAction;
var single_all = function (nodeName, extra) {
    return {
        get: (0, exports.single_getAction)(nodeName, extra),
        setAll: (0, exports.single_setAction)(nodeName, extra),
        patch: (0, exports.single_patchAction)(nodeName, extra),
    };
};
exports.single_all = single_all;
// ============== queue ==============
var queue_getAction = function (nodeName, extra) {
    return function (payload) {
        if (payload === void 0) { payload = {}; }
        return tslib_1.__assign({ type: "GET_".concat(nodeName.toUpperCase()), payload: payload }, extra);
    };
};
exports.queue_getAction = queue_getAction;
var queue_setAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "SET_".concat(nodeName.toUpperCase()), payload: payload }, extra);
}; };
exports.queue_setAction = queue_setAction;
var queue_pushAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "PUSH_".concat((0, singular_1.toSingularAction)(nodeName)), payload: payload }, extra);
}; };
exports.queue_pushAction = queue_pushAction;
var queue_pushManyAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "PUSH_MANY_".concat(nodeName.toUpperCase()), payload: {
            items: payload,
        } }, extra);
}; };
exports.queue_pushManyAction = queue_pushManyAction;
var queue_popAction = function (nodeName, extra) { return function () {
    return tslib_1.__assign({ type: "POP_".concat((0, singular_1.toSingularAction)(nodeName)) }, extra);
}; };
exports.queue_popAction = queue_popAction;
var queue_clearAction = function (nodeName, extra) { return function () {
    return tslib_1.__assign({ type: "CLEAR_".concat(nodeName.toUpperCase()) }, extra);
}; };
exports.queue_clearAction = queue_clearAction;
var queue_all = function (nodeName, extra) {
    return {
        get: (0, exports.queue_getAction)(nodeName, extra),
        setAll: (0, exports.queue_setAction)(nodeName, extra),
        push: (0, exports.queue_pushAction)(nodeName, extra),
        pop: (0, exports.queue_popAction)(nodeName, extra),
        clear: (0, exports.queue_clearAction)(nodeName, extra),
        pushMany: (0, exports.queue_pushManyAction)(nodeName, extra),
    };
};
exports.queue_all = queue_all;
// ============== collection ==============
var collection_getAction = function (nodeName, extra) {
    return function (payload) {
        if (payload === void 0) { payload = {}; }
        return tslib_1.__assign({ type: "GET_".concat(nodeName.toUpperCase()), payload: payload }, extra);
    };
};
exports.collection_getAction = collection_getAction;
var collection_setAllAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "SET_".concat(nodeName.toUpperCase()), payload: payload }, extra);
}; };
exports.collection_setAllAction = collection_setAllAction;
var collection_addAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "ADD_".concat((0, singular_1.toSingularAction)(nodeName)), payload: tslib_1.__assign({}, payload) }, extra);
}; };
exports.collection_addAction = collection_addAction;
var collection_setAction = function (nodeName, extra) { return function (id, payload) {
    return tslib_1.__assign({ type: "SET_".concat((0, singular_1.toSingularAction)(nodeName)), id: id, payload: tslib_1.__assign({}, payload) }, extra);
}; };
exports.collection_setAction = collection_setAction;
var collection_patchAction = function (nodeName, extra) { return function (id, payload) {
    return tslib_1.__assign({ type: "PATCH_".concat((0, singular_1.toSingularAction)(nodeName)), id: id, payload: tslib_1.__assign({}, payload) }, extra);
}; };
exports.collection_patchAction = collection_patchAction;
var collection_deleteAction = function (nodeName, extra) { return function (id) {
    return tslib_1.__assign({ type: "DELETE_".concat((0, singular_1.toSingularAction)(nodeName)), id: id, payload: {} }, extra);
}; };
exports.collection_deleteAction = collection_deleteAction;
var collection_setManyAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "SET_MANY_".concat(nodeName.toUpperCase()), payload: payload }, extra);
}; };
exports.collection_setManyAction = collection_setManyAction;
var collection_all = function (nodeName, extra) {
    return {
        get: (0, exports.collection_getAction)(nodeName, extra),
        setAll: (0, exports.collection_setAllAction)(nodeName, extra),
        set: (0, exports.collection_setAction)(nodeName, extra),
        add: (0, exports.collection_addAction)(nodeName, extra),
        patch: (0, exports.collection_patchAction)(nodeName, extra),
        delete: (0, exports.collection_deleteAction)(nodeName, extra),
        setMany: (0, exports.collection_setManyAction)(nodeName, extra),
    };
};
exports.collection_all = collection_all;
// ============== grouped list ==============
var groupedList_getAction = function (nodeName, extra) {
    return function (payload) {
        if (payload === void 0) { payload = {}; }
        return tslib_1.__assign({ type: "GET_".concat(nodeName.toUpperCase()), payload: payload }, extra);
    };
};
exports.groupedList_getAction = groupedList_getAction;
var groupedList_setAllAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "SET_".concat(nodeName.toUpperCase()), payload: payload }, extra);
}; };
exports.groupedList_setAllAction = groupedList_setAllAction;
var groupedList_addAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "ADD_".concat((0, singular_1.toSingularAction)(nodeName)), payload: tslib_1.__assign({}, payload) }, extra);
}; };
exports.groupedList_addAction = groupedList_addAction;
var groupedList_setAction = function (nodeName, extra) { return function (id, payload) {
    return tslib_1.__assign({ type: "SET_".concat((0, singular_1.toSingularAction)(nodeName)), id: id, payload: tslib_1.__assign({}, payload) }, extra);
}; };
exports.groupedList_setAction = groupedList_setAction;
var groupedList_patchAction = function (nodeName, extra) { return function (id, payload) {
    return tslib_1.__assign({ type: "PATCH_".concat((0, singular_1.toSingularAction)(nodeName)), id: id, payload: tslib_1.__assign({}, payload) }, extra);
}; };
exports.groupedList_patchAction = groupedList_patchAction;
var groupedList_deleteAction = function (nodeName, extra) { return function (id) {
    return tslib_1.__assign({ type: "DELETE_".concat((0, singular_1.toSingularAction)(nodeName)), id: id, payload: {} }, extra);
}; };
exports.groupedList_deleteAction = groupedList_deleteAction;
var groupedList_setManyAction = function (nodeName, extra) { return function (payload) {
    return tslib_1.__assign({ type: "SET_MANY_".concat(nodeName.toUpperCase()), payload: payload }, extra);
}; };
exports.groupedList_setManyAction = groupedList_setManyAction;
var groupedList_getItems = function (nodeName, extra) { return function (id, payload) {
    return tslib_1.__assign({ type: "GET_".concat(nodeName.toUpperCase(), "_ITEMS"), id: id, payload: tslib_1.__assign({}, payload) }, extra);
}; };
exports.groupedList_getItems = groupedList_getItems;
var groupedList_setItems = function (nodeName, extra) { return function (id, payload) {
    return tslib_1.__assign({ type: "SET_".concat(nodeName.toUpperCase(), "_ITEMS"), id: id, payload: {
            items: payload,
        } }, extra);
}; };
exports.groupedList_setItems = groupedList_setItems;
var groupedList_pushItem = function (nodeName, extra) { return function (id, payload) {
    return tslib_1.__assign({ type: "PUSH_".concat(nodeName.toUpperCase(), "_ITEM"), id: id, payload: {
            items: [payload],
        } }, extra);
}; };
exports.groupedList_pushItem = groupedList_pushItem;
var groupedList_popItem = function (nodeName, extra) { return function (id) {
    return tslib_1.__assign({ type: "POP_".concat(nodeName.toUpperCase(), "_ITEM"), id: id, payload: {} }, extra);
}; };
exports.groupedList_popItem = groupedList_popItem;
var groupedList_deleteItem = function (nodeName, extra) { return function (id, itemId) {
    return tslib_1.__assign({ type: "DELETE_".concat(nodeName.toUpperCase(), "_ITEM"), id: id, itemId: itemId, payload: {} }, extra);
}; };
exports.groupedList_deleteItem = groupedList_deleteItem;
var groupedList_patchItem = function (nodeName, extra) {
    return function (id, itemId, payload) {
        return tslib_1.__assign({ type: "PATCH_".concat(nodeName.toUpperCase(), "_ITEM"), id: id, itemId: itemId, payload: tslib_1.__assign({}, payload) }, extra);
    };
};
exports.groupedList_patchItem = groupedList_patchItem;
var groupedList_clearItems = function (nodeName, extra) { return function (id) {
    return tslib_1.__assign({ type: "CLEAR_".concat(nodeName.toUpperCase(), "_ITEMS"), id: id, payload: {} }, extra);
}; };
exports.groupedList_clearItems = groupedList_clearItems;
var groupedList_pushManyItems = function (nodeName, extra) { return function (id, payload) {
    return tslib_1.__assign({ type: "PUSH_MANY_".concat(nodeName.toUpperCase(), "_ITEMS"), id: id, payload: {
            items: payload,
        } }, extra);
}; };
exports.groupedList_pushManyItems = groupedList_pushManyItems;
var groupedList_all = function (nodeName, extra) {
    return {
        get: (0, exports.groupedList_getAction)(nodeName, extra),
        setAll: (0, exports.groupedList_setAllAction)(nodeName, extra),
        set: (0, exports.groupedList_setAction)(nodeName, extra),
        add: (0, exports.groupedList_addAction)(nodeName, extra),
        patch: (0, exports.groupedList_patchAction)(nodeName, extra),
        delete: (0, exports.groupedList_deleteAction)(nodeName, extra),
        setMany: (0, exports.groupedList_setManyAction)(nodeName, extra),
        getItems: (0, exports.groupedList_getItems)(nodeName, extra),
        setItems: (0, exports.groupedList_setItems)(nodeName, extra),
        pushItem: (0, exports.groupedList_pushItem)(nodeName, extra),
        patchItem: (0, exports.groupedList_patchItem)(nodeName, extra),
        deleteItem: (0, exports.groupedList_deleteItem)(nodeName, extra),
        popItem: (0, exports.groupedList_popItem)(nodeName, extra),
        clearItems: (0, exports.groupedList_clearItems)(nodeName, extra),
        pushManyItems: (0, exports.groupedList_pushManyItems)(nodeName, extra),
    };
};
exports.groupedList_all = groupedList_all;
// ============== from store structure ==============
var generateActionsForStore = function (storeState) {
    var output = {};
    var keys = Object.keys(storeState);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var value = storeState[key];
        var type = (0, structure_1.nodeToType)(value);
        switch (type) {
            case types_1.NodeType.SINGLE_NODE:
                output[key] = (0, exports.single_all)(String(key), exports.SIGNATURE);
                break;
            case types_1.NodeType.QUEUE_NODE:
                output[key] = (0, exports.queue_all)(String(key), exports.SIGNATURE);
                break;
            case types_1.NodeType.COLLECTION_NODE:
                output[key] = (0, exports.collection_all)(String(key), exports.SIGNATURE);
                break;
            case types_1.NodeType.GROUPED_LIST_NODE:
                output[key] = (0, exports.groupedList_all)(String(key), exports.SIGNATURE);
                break;
        }
    }
    return output;
};
exports.generateActionsForStore = generateActionsForStore;

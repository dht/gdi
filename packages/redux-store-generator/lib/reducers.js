"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReducersForStore = exports.generateGroupedList = exports.generateCollection = exports.generateQueue = exports.generateSingle = void 0;
var tslib_1 = require("tslib");
var singular_1 = require("./singular");
var structure_1 = require("./structure");
var types_1 = require("./types/types");
var generateSingle = function (nodeName) {
    return function (state, action) {
        if (state === void 0) { state = {}; }
        switch (action.type) {
            case "SET_".concat(nodeName.toUpperCase()):
                return tslib_1.__assign({}, action.payload);
            case "PATCH_".concat(nodeName.toUpperCase()):
                return tslib_1.__assign(tslib_1.__assign({}, state), action.payload);
            default:
                return state !== null && state !== void 0 ? state : {};
        }
    };
};
exports.generateSingle = generateSingle;
var generateQueue = function (nodeName) {
    return function (state, action) {
        var _a;
        if (state === void 0) { state = []; }
        var newState;
        switch (action.type) {
            case "SET_".concat(nodeName.toUpperCase()):
                return tslib_1.__assign({}, action.payload);
            case "PUSH_".concat((0, singular_1.toSingularAction)(nodeName)):
                return tslib_1.__spreadArray(tslib_1.__spreadArray([], state, true), [action.payload], false);
            case "POP_".concat((0, singular_1.toSingularAction)(nodeName)):
                newState = tslib_1.__spreadArray([], state, true);
                newState.pop();
                return newState;
            case "CLEAR_".concat(nodeName.toUpperCase()):
                return [];
            case "PUSH_MANY_".concat(nodeName.toUpperCase()):
                var _b = ((_a = action.payload) !== null && _a !== void 0 ? _a : {}).items, items = _b === void 0 ? [] : _b;
                return tslib_1.__spreadArray(tslib_1.__spreadArray([], state, true), (items !== null && items !== void 0 ? items : []), true);
            default:
                return state !== null && state !== void 0 ? state : [];
        }
    };
};
exports.generateQueue = generateQueue;
var generateCollection = function (nodeName) {
    var item = function (state, action) {
        if (state === void 0) { state = {}; }
        switch (action.type) {
            case "SET_".concat((0, singular_1.toSingularAction)(nodeName)):
                return tslib_1.__assign({}, action.payload);
            case "PATCH_".concat((0, singular_1.toSingularAction)(nodeName)):
                return tslib_1.__assign(tslib_1.__assign({}, state), action.payload);
            default:
                return state;
        }
    };
    var items = function (state, action) {
        var _a;
        if (state === void 0) { state = {}; }
        var newState;
        var id = action.id;
        switch (action.type) {
            case "SET_".concat(nodeName.toUpperCase()):
                return action.payload;
            case "SET_".concat((0, singular_1.toSingularAction)(nodeName)):
            case "PATCH_".concat((0, singular_1.toSingularAction)(nodeName)):
                if (!id) {
                    return state;
                }
                return tslib_1.__assign(tslib_1.__assign({}, state), (_a = {}, _a[id] = item(state[id], action), _a));
            case "DELETE_".concat((0, singular_1.toSingularAction)(nodeName)):
                if (!id) {
                    return state;
                }
                newState = tslib_1.__assign({}, state);
                delete newState[id];
                return newState;
            case "SET_MANY_".concat(nodeName.toUpperCase()):
                return tslib_1.__assign(tslib_1.__assign({}, state), action.payload);
            default:
                return state !== null && state !== void 0 ? state : {};
        }
    };
    return items;
};
exports.generateCollection = generateCollection;
var generateGroupedList = function (nodeName) {
    var listItems = function (state, action) {
        var _a;
        if (state === void 0) { state = []; }
        var newState;
        var itemId = action.itemId;
        var _b = ((_a = action.payload) !== null && _a !== void 0 ? _a : {}).items, items = _b === void 0 ? [] : _b;
        var data = tslib_1.__assign({}, action.payload);
        switch (action.type) {
            case "SET_".concat(nodeName.toUpperCase(), "_ITEMS"):
                return items;
            case "PUSH_".concat(nodeName.toUpperCase(), "_ITEM"):
            case "PUSH_MANY_".concat(nodeName.toUpperCase(), "_ITEMS"):
                var ids_1 = items.map(function (i) { return i.id; });
                var output = tslib_1.__spreadArray([], state, true).filter(function (i) { return !ids_1.includes(i.id); });
                output.push.apply(output, items);
                return output;
            case "POP_".concat(nodeName.toUpperCase(), "_ITEM"):
                newState = tslib_1.__spreadArray([], state, true);
                newState.pop();
                return newState;
            case "DELETE_".concat(nodeName.toUpperCase(), "_ITEM"):
                newState = tslib_1.__spreadArray([], state, true);
                return newState.filter(function (i) { return i.id !== itemId; });
            case "PATCH_".concat(nodeName.toUpperCase(), "_ITEM"):
                newState = tslib_1.__spreadArray([], state, true);
                delete data['id'];
                return newState.map(function (i) {
                    return i.id !== itemId
                        ? i
                        : tslib_1.__assign(tslib_1.__assign({}, i), data);
                });
            case "CLEAR_".concat(nodeName.toUpperCase(), "_ITEMS"):
                return [];
            default:
                return state !== null && state !== void 0 ? state : [];
        }
    };
    var item = function (state, action) {
        if (state === void 0) { state = {}; }
        switch (action.type) {
            case "SET_".concat((0, singular_1.toSingularAction)(nodeName)):
                return tslib_1.__assign({}, action.payload);
            case "PATCH_".concat((0, singular_1.toSingularAction)(nodeName)):
                return tslib_1.__assign(tslib_1.__assign({}, state), action.payload);
            case "SET_".concat(nodeName.toUpperCase(), "_ITEMS"):
            case "PUSH_".concat(nodeName.toUpperCase(), "_ITEM"):
            case "POP_".concat(nodeName.toUpperCase(), "_ITEM"):
            case "DELETE_".concat(nodeName.toUpperCase(), "_ITEM"):
            case "PATCH_".concat(nodeName.toUpperCase(), "_ITEM"):
            case "CLEAR_".concat(nodeName.toUpperCase(), "_ITEMS"):
            case "PUSH_MANY_".concat(nodeName.toUpperCase(), "_ITEMS"):
                return tslib_1.__assign(tslib_1.__assign({}, state), { items: listItems(state.items, action) });
            default:
                return state;
        }
    };
    var items = function (state, action) {
        var _a;
        if (state === void 0) { state = {}; }
        var newState;
        var id = action.id;
        switch (action.type) {
            case "SET_".concat(nodeName.toUpperCase()):
                return tslib_1.__assign({}, action.payload);
            case "SET_".concat((0, singular_1.toSingularAction)(nodeName)):
            case "PATCH_".concat((0, singular_1.toSingularAction)(nodeName)):
            case "SET_".concat(nodeName.toUpperCase(), "_ITEMS"):
            case "PUSH_".concat(nodeName.toUpperCase(), "_ITEM"):
            case "POP_".concat(nodeName.toUpperCase(), "_ITEM"):
            case "DELETE_".concat(nodeName.toUpperCase(), "_ITEM"):
            case "PATCH_".concat(nodeName.toUpperCase(), "_ITEM"):
            case "CLEAR_".concat(nodeName.toUpperCase(), "_ITEMS"):
            case "PUSH_MANY_".concat(nodeName.toUpperCase(), "_ITEMS"):
                if (!id) {
                    return state;
                }
                return tslib_1.__assign(tslib_1.__assign({}, state), (_a = {}, _a[id] = item(state[id], action), _a));
            case "DELETE_".concat((0, singular_1.toSingularAction)(nodeName)):
                if (!id) {
                    return state;
                }
                newState = tslib_1.__assign({}, state);
                delete newState[id];
                return newState;
            case "SET_MANY_".concat(nodeName.toUpperCase()):
                return tslib_1.__assign(tslib_1.__assign({}, state), action.payload);
            default:
                return state !== null && state !== void 0 ? state : {};
        }
    };
    return items;
};
exports.generateGroupedList = generateGroupedList;
var generateReducersForStore = function (storeState) {
    var output = {};
    var keys = Object.keys(storeState);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var type = (0, structure_1.nodeToType)(storeState[key]);
        switch (type) {
            case types_1.NodeType.SINGLE_NODE:
                output[key] = (0, exports.generateSingle)(String(key));
                break;
            case types_1.NodeType.QUEUE_NODE:
                output[key] = (0, exports.generateQueue)(String(key));
                break;
            case types_1.NodeType.COLLECTION_NODE:
                output[key] = (0, exports.generateCollection)(String(key));
                break;
            case types_1.NodeType.GROUPED_LIST_NODE:
                output[key] = (0, exports.generateGroupedList)(String(key));
                break;
        }
    }
    return output;
};
exports.generateReducersForStore = generateReducersForStore;

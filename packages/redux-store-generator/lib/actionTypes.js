"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateActionTypesDictionaryForStore = exports.generateActionTypesForStore = exports.groupedList_actionTypes = exports.collection_actionTypes = exports.queue_actionTypes = exports.single_actionTypes = void 0;
var types_1 = require("./types/types");
var singular_1 = require("./singular");
var structure_1 = require("./structure");
// ============== single ==============
var single_actionTypes = function (nodeName) {
    return {
        get: "GET_".concat(nodeName.toUpperCase()),
        setAll: "SET_".concat(nodeName.toUpperCase()),
        patch: "PATCH_".concat(nodeName.toUpperCase()),
    };
};
exports.single_actionTypes = single_actionTypes;
// ============== queue ==============
var queue_actionTypes = function (nodeName) {
    return {
        get: "GET_".concat(nodeName.toUpperCase()),
        setAll: "SET_".concat(nodeName.toUpperCase()),
        push: "PUSH_".concat((0, singular_1.toSingularAction)(nodeName)),
        pop: "POP_".concat((0, singular_1.toSingularAction)(nodeName)),
        clear: "CLEAR_".concat(nodeName.toUpperCase()),
    };
};
exports.queue_actionTypes = queue_actionTypes;
// ============== collection ==============
var collection_actionTypes = function (nodeName) {
    return {
        get: "GET_".concat(nodeName.toUpperCase()),
        setAll: "SET_".concat(nodeName.toUpperCase()),
        set: "SET_".concat((0, singular_1.toSingularAction)(nodeName)),
        add: "ADD_".concat((0, singular_1.toSingularAction)(nodeName)),
        patch: "PATCH_".concat((0, singular_1.toSingularAction)(nodeName)),
        delete: "DELETE_".concat((0, singular_1.toSingularAction)(nodeName)),
    };
};
exports.collection_actionTypes = collection_actionTypes;
// ============== grouped list ==============
var groupedList_actionTypes = function (nodeName) {
    return {
        get: "GET_".concat(nodeName.toUpperCase()),
        setAll: "SET_".concat(nodeName.toUpperCase()),
        set: "SET_".concat((0, singular_1.toSingularAction)(nodeName)),
        add: "ADD_".concat((0, singular_1.toSingularAction)(nodeName)),
        patch: "PATCH_".concat((0, singular_1.toSingularAction)(nodeName)),
        delete: "DELETE_".concat((0, singular_1.toSingularAction)(nodeName)),
        getItems: "GET_".concat(nodeName.toUpperCase(), "_ITEMS"),
        setItems: "SET_".concat(nodeName.toUpperCase(), "_ITEMS"),
        pushItem: "PUSH_".concat(nodeName.toUpperCase(), "_ITEM"),
        popItem: "POP_".concat(nodeName.toUpperCase(), "_ITEM"),
        deleteItem: "DELETE_".concat(nodeName.toUpperCase(), "_ITEM"),
        patchItem: "PATCH_".concat(nodeName.toUpperCase(), "_ITEM"),
        clearItems: "CLEAR_".concat(nodeName.toUpperCase(), "_ITEMS"),
        pushManyItems: "PUSH_MANY_".concat(nodeName.toUpperCase(), "_ITEMS"),
    };
};
exports.groupedList_actionTypes = groupedList_actionTypes;
// ============== from store structure ==============
var generateActionTypesForStore = function (storeState) {
    var output = {};
    var keys = Object.keys(storeState);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var value = storeState[key];
        var type = (0, structure_1.nodeToType)(value);
        switch (type) {
            case types_1.NodeType.SINGLE_NODE:
                output[key] = (0, exports.single_actionTypes)(String(key));
                break;
            case types_1.NodeType.QUEUE_NODE:
                output[key] = (0, exports.queue_actionTypes)(String(key));
                break;
            case types_1.NodeType.COLLECTION_NODE:
                output[key] = (0, exports.collection_actionTypes)(String(key));
                break;
            case types_1.NodeType.GROUPED_LIST_NODE:
                output[key] = (0, exports.groupedList_actionTypes)(String(key));
                break;
        }
    }
    return output;
};
exports.generateActionTypesForStore = generateActionTypesForStore;
var GET_VERBS = ['get'];
var LOCAL_VERBS = [
    'setAll',
    'set',
    'setMany',
    'pushMany',
    'setItems',
    'pushManyItems',
];
var generateActionTypesDictionaryForStore = function (storeState) {
    var output = {};
    var storeActionTypes = (0, exports.generateActionTypesForStore)(storeState);
    var nodeKeys = Object.keys(storeActionTypes);
    var _loop_1 = function (nodeName) {
        var bag = storeActionTypes[nodeName];
        Object.keys(bag).forEach(function (apiVerb) {
            var actionType = bag[apiVerb];
            output[actionType] = {
                id: actionType,
                verb: apiVerb,
                nodeName: nodeName,
            };
            if (LOCAL_VERBS.includes(apiVerb)) {
                output[actionType].isLocal = true;
            }
            if (GET_VERBS.includes(apiVerb)) {
                output[actionType].isGet = true;
            }
        });
    };
    for (var _i = 0, nodeKeys_1 = nodeKeys; _i < nodeKeys_1.length; _i++) {
        var nodeName = nodeKeys_1[_i];
        _loop_1(nodeName);
    }
    return output;
};
exports.generateActionTypesDictionaryForStore = generateActionTypesDictionaryForStore;

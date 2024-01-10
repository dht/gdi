"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearStore = void 0;
var actions_1 = require("./actions");
var info_1 = require("./info");
var clearStore = function (store, ignoreNodes) {
    if (ignoreNodes === void 0) { ignoreNodes = []; }
    var actions = (0, actions_1.generateActionsForStore)(store.getState());
    var state = store.getState();
    var collectionSetAllActions = (0, info_1.getNodeActions)(state, function (nodeType) { return nodeType === 'COLLECTION_NODE'; }, 'setAll');
    for (var _i = 0, collectionSetAllActions_1 = collectionSetAllActions; _i < collectionSetAllActions_1.length; _i++) {
        var apiInfo = collectionSetAllActions_1[_i];
        var _a = apiInfo, verb = _a.verb, nodeName = _a.nodeName;
        var action = (0, info_1.get)(actions, [nodeName, verb], null);
        if (!action || ignoreNodes.includes(nodeName)) {
            continue;
        }
        store.dispatch(action({}));
    }
};
exports.clearStore = clearStore;

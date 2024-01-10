"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.getNodeActions = void 0;
var actionTypes_1 = require("./actionTypes");
var structure_1 = require("./structure");
var getNodeActions = function (initialState, predicate, verb) {
    var actionTypeToInfo = (0, actionTypes_1.generateActionTypesDictionaryForStore)(initialState);
    var structure = (0, structure_1.analyzeStructure)(initialState);
    var output = [];
    Object.keys(structure)
        .filter(function (node) {
        var nodeType = structure[node];
        return predicate(nodeType);
    })
        .forEach(function (node) {
        var info = Object.values(actionTypeToInfo).find(function (i) {
            return i.nodeName === node && i.verb === verb;
        });
        if (info) {
            output.push(info);
        }
    });
    return output;
};
exports.getNodeActions = getNodeActions;
var get = function (obj, path, defaultValue) {
    var output = obj;
    for (var i = 0; i < path.length; i++) {
        var key = path[i];
        if (key in output === false) {
            return defaultValue;
        }
        output = output[key];
    }
    return output;
};
exports.get = get;

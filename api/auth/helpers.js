"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidRequest = exports.validateSignInBody = exports.validateSignUpBody = void 0;
var regExps = __importStar(require("../../@core/utils/reg_exps"));
function validateSignUpBody(reqBody) {
    var userArguments = ['email', 'firstName', 'lastName', 'password'];
    return isValidRequest(reqBody, userArguments);
}
exports.validateSignUpBody = validateSignUpBody;
function validateSignInBody(reqBody) {
    var userArguments = ['email', 'password'];
    return isValidRequest(reqBody, userArguments);
}
exports.validateSignInBody = validateSignInBody;
function isValidRequest(reqBody, payloadKeys) {
    var inputKeys = Object.keys(reqBody);
    var isAllKeysExist = JSON.stringify(payloadKeys.sort()) === JSON.stringify(inputKeys.sort());
    var isValidData = !inputKeys.some(function (key) {
        var isNotValid = !isValidCredential(reqBody[key], key);
        return isNotValid;
    });
    return isAllKeysExist && isValidData;
}
exports.isValidRequest = isValidRequest;
function isValidCredential(value, name) {
    switch (name) {
        case 'email': {
            return regExps.email.test(value);
        }
        case 'firstName':
        case 'lastName': {
            return regExps.letters.test(value);
        }
        case 'password': {
            return value.replace(/\s/g, '').length > 8;
        }
        default:
            return false;
    }
}

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
exports.encodeToken = exports.generateToken = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var errors_1 = require("../errors");
function generateToken(credential) {
    if (!process.env.SECRET_KEY) {
        throw new errors_1.Err.InternalError();
    }
    return jwt.sign({
        credential: credential,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 12)
    }, process.env.SECRET_KEY);
}
exports.generateToken = generateToken;
function encodeToken(token) {
    if (!process.env.SECRET_KEY) {
        throw new errors_1.Err.InternalError();
    }
    try {
        var decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        if (!decodedToken.exp || Number(decodedToken.exp) < (Date.now() / 1000)) {
            throw new errors_1.Err.UnauthorizedError();
        }
        return decodedToken.credential;
    }
    catch (err) {
        throw new errors_1.Err.UnauthorizedError();
    }
}
exports.encodeToken = encodeToken;

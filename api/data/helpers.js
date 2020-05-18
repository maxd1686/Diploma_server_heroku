"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPostDataPayloadValid = void 0;
function isPostDataPayloadValid(reqBody) {
    if (typeof reqBody === 'object') {
        return JSON.stringify(Object.keys(reqBody)) === JSON.stringify(['data']) && typeof reqBody.data === 'string';
    }
    return false;
}
exports.isPostDataPayloadValid = isPostDataPayloadValid;

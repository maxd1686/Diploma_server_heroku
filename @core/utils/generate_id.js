"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidRegExp = void 0;
var id = function (m, d, h, s) {
    if (m === void 0) { m = Math; }
    if (d === void 0) { d = Date; }
    if (h === void 0) { h = 16; }
    if (s === void 0) { s = function (s) { return m.floor(s).toString(h); }; }
    return (s(d.now() / 1000) + ' '.repeat(h)
        .replace(/./g, function () { return s(m.random() * h); }));
};
exports.uuidRegExp = /[0-9a-f]{24}/;
exports.default = id;

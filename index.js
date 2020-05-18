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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config({ path: '.env' });
}
var auth_1 = require("./api/auth");
var data_1 = require("./api/data");
var middlewares_1 = require("./@core/middlewares");
var app = express_1.default();
var aliveAt = new Date().toISOString();
app.use(bodyParser.json());
app.use(cors_1.default());
app.options('*', cors_1.default({
    optionsSuccessStatus: 200,
}));
app.get('/', function (req, res, next) {
    res.status(200).send({
        aliveAt: aliveAt,
        timestamp: new Date().toISOString(),
        uptime: Date.now() - new Date(aliveAt).getTime(),
    });
    next();
});
app.post('/sign_up', auth_1.AuthController.signUp);
app.post('/sign_in', auth_1.AuthController.signIn);
app.get('/get_data', data_1.DataController.get);
app.post('/post_data', data_1.DataController.post);
app.use(middlewares_1.ErrorHandler);
app.listen(process.env.PORT, function () { return console.log("Server started on port " + process.env.PORT); });

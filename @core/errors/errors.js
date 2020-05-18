"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.UserAlreadyTakenError = exports.UnauthorizedError = exports.InvalidTokenError = exports.RouteNotFoundError = exports.InternalError = exports.BaseError = void 0;
var BaseError = (function (_super) {
    __extends(BaseError, _super);
    function BaseError(input) {
        if (input === void 0) { input = {}; }
        var _this = _super.call(this, input.message) || this;
        _this.family = 'base_error';
        _this.status = input.status;
        _this.code = input.code;
        _this.message = input.message;
        return _this;
    }
    BaseError.prototype.toJSON = function () {
        return JSON.stringify({
            message: this.message,
            status: this.status,
            code: this.code,
        });
    };
    return BaseError;
}(Error));
exports.BaseError = BaseError;
var InternalError = (function (_super) {
    __extends(InternalError, _super);
    function InternalError() {
        return _super.call(this, {
            message: 'Something went wrong. Check yout request payload',
            code: 'internal_error',
            status: 500,
        }) || this;
    }
    return InternalError;
}(BaseError));
exports.InternalError = InternalError;
var RouteNotFoundError = (function (_super) {
    __extends(RouteNotFoundError, _super);
    function RouteNotFoundError() {
        return _super.call(this, {
            message: "Route is not found",
            code: 'route_not_found',
            status: 404,
        }) || this;
    }
    return RouteNotFoundError;
}(BaseError));
exports.RouteNotFoundError = RouteNotFoundError;
var InvalidTokenError = (function (_super) {
    __extends(InvalidTokenError, _super);
    function InvalidTokenError() {
        return _super.call(this, {
            message: 'Token validation failed.',
            code: 'invalid_token',
            status: 401,
        }) || this;
    }
    return InvalidTokenError;
}(BaseError));
exports.InvalidTokenError = InvalidTokenError;
var UnauthorizedError = (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError() {
        return _super.call(this, {
            message: 'Authorization failed.',
            code: 'unauthorized',
            status: 401,
        }) || this;
    }
    return UnauthorizedError;
}(BaseError));
exports.UnauthorizedError = UnauthorizedError;
var UserAlreadyTakenError = (function (_super) {
    __extends(UserAlreadyTakenError, _super);
    function UserAlreadyTakenError() {
        return _super.call(this, {
            message: 'This user is already taken',
            code: 'conflict',
            status: 401,
        }) || this;
    }
    return UserAlreadyTakenError;
}(BaseError));
exports.UserAlreadyTakenError = UserAlreadyTakenError;
var ValidationError = (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError() {
        return _super.call(this, {
            message: 'Payload data is not valid',
            code: 'invalid_data',
            status: 401,
        }) || this;
    }
    return ValidationError;
}(BaseError));
exports.ValidationError = ValidationError;

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const prb = $root.prb = (() => {

    const prb = {};

    prb.WalkieRoles = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WR_CLIENT"] = 0;
        values[valuesById[1] = "WR_DATA_PROVIDER_INT"] = 1;
        values[valuesById[2] = "WR_DATA_PROVIDER_EXT"] = 2;
        values[valuesById[3] = "WR_LIFECYCLE_MANAGER"] = 3;
        values[valuesById[4] = "WR_TRADER"] = 4;
        return values;
    })();

    prb.WalkieSystemInfo = (function() {

        function WalkieSystemInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        WalkieSystemInfo.prototype.hostname = "";
        WalkieSystemInfo.prototype.peerId = "";
        WalkieSystemInfo.prototype.role = 0;
        WalkieSystemInfo.prototype.chainIdentity = "";
        WalkieSystemInfo.prototype.bridgeIdentity = "";
        WalkieSystemInfo.prototype.auth = 0;

        WalkieSystemInfo.create = function create(properties) {
            return new WalkieSystemInfo(properties);
        };

        WalkieSystemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                writer.uint32(10).string(message.hostname);
            if (message.peerId != null && Object.hasOwnProperty.call(message, "peerId"))
                writer.uint32(18).string(message.peerId);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(24).int32(message.role);
            if (message.chainIdentity != null && Object.hasOwnProperty.call(message, "chainIdentity"))
                writer.uint32(34).string(message.chainIdentity);
            if (message.bridgeIdentity != null && Object.hasOwnProperty.call(message, "bridgeIdentity"))
                writer.uint32(42).string(message.bridgeIdentity);
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                writer.uint32(48).int32(message.auth);
            return writer;
        };

        WalkieSystemInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        WalkieSystemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.WalkieSystemInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hostname = reader.string();
                    break;
                case 2:
                    message.peerId = reader.string();
                    break;
                case 3:
                    message.role = reader.int32();
                    break;
                case 4:
                    message.chainIdentity = reader.string();
                    break;
                case 5:
                    message.bridgeIdentity = reader.string();
                    break;
                case 6:
                    message.auth = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        WalkieSystemInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WalkieSystemInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                if (!$util.isString(message.peerId))
                    return "peerId: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.chainIdentity != null && message.hasOwnProperty("chainIdentity"))
                if (!$util.isString(message.chainIdentity))
                    return "chainIdentity: string expected";
            if (message.bridgeIdentity != null && message.hasOwnProperty("bridgeIdentity"))
                if (!$util.isString(message.bridgeIdentity))
                    return "bridgeIdentity: string expected";
            if (message.auth != null && message.hasOwnProperty("auth"))
                switch (message.auth) {
                default:
                    return "auth: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        WalkieSystemInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.WalkieSystemInfo)
                return object;
            let message = new $root.prb.WalkieSystemInfo();
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            if (object.peerId != null)
                message.peerId = String(object.peerId);
            switch (object.role) {
            case "WR_CLIENT":
            case 0:
                message.role = 0;
                break;
            case "WR_DATA_PROVIDER_INT":
            case 1:
                message.role = 1;
                break;
            case "WR_DATA_PROVIDER_EXT":
            case 2:
                message.role = 2;
                break;
            case "WR_LIFECYCLE_MANAGER":
            case 3:
                message.role = 3;
                break;
            case "WR_TRADER":
            case 4:
                message.role = 4;
                break;
            }
            if (object.chainIdentity != null)
                message.chainIdentity = String(object.chainIdentity);
            if (object.bridgeIdentity != null)
                message.bridgeIdentity = String(object.bridgeIdentity);
            switch (object.auth) {
            case "AS_NONE":
            case 0:
                message.auth = 0;
                break;
            case "AS_NEED_AUTH":
            case 1:
                message.auth = 1;
                break;
            case "AS_GRANTED":
            case 2:
                message.auth = 2;
                break;
            case "AS_REJECTED":
            case 3:
                message.auth = 3;
                break;
            case "AS_BLOCKED":
            case 4:
                message.auth = 4;
                break;
            }
            return message;
        };

        WalkieSystemInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.hostname = "";
                object.peerId = "";
                object.role = options.enums === String ? "WR_CLIENT" : 0;
                object.chainIdentity = "";
                object.bridgeIdentity = "";
                object.auth = options.enums === String ? "AS_NONE" : 0;
            }
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                object.hostname = message.hostname;
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                object.peerId = message.peerId;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.prb.WalkieRoles[message.role] : message.role;
            if (message.chainIdentity != null && message.hasOwnProperty("chainIdentity"))
                object.chainIdentity = message.chainIdentity;
            if (message.bridgeIdentity != null && message.hasOwnProperty("bridgeIdentity"))
                object.bridgeIdentity = message.bridgeIdentity;
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = options.enums === String ? $root.prb.AuthStatus[message.auth] : message.auth;
            return object;
        };

        WalkieSystemInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WalkieSystemInfo;
    })();

    prb.WalkieRpcRequestWrapper = (function() {

        function WalkieRpcRequestWrapper(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        WalkieRpcRequestWrapper.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        WalkieRpcRequestWrapper.prototype.nonce = "";
        WalkieRpcRequestWrapper.prototype.data = $util.newBuffer([]);
        WalkieRpcRequestWrapper.prototype.method = "";

        WalkieRpcRequestWrapper.create = function create(properties) {
            return new WalkieRpcRequestWrapper(properties);
        };

        WalkieRpcRequestWrapper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(8).uint64(message.createdAt);
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(18).string(message.nonce);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(26).bytes(message.data);
            if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                writer.uint32(34).string(message.method);
            return writer;
        };

        WalkieRpcRequestWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        WalkieRpcRequestWrapper.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.WalkieRpcRequestWrapper();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.createdAt = reader.uint64();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.method = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        WalkieRpcRequestWrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WalkieRpcRequestWrapper.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                    return "createdAt: integer|Long expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isString(message.nonce))
                    return "nonce: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.method != null && message.hasOwnProperty("method"))
                if (!$util.isString(message.method))
                    return "method: string expected";
            return null;
        };

        WalkieRpcRequestWrapper.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.WalkieRpcRequestWrapper)
                return object;
            let message = new $root.prb.WalkieRpcRequestWrapper();
            if (object.createdAt != null)
                if ($util.Long)
                    (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = true;
                else if (typeof object.createdAt === "string")
                    message.createdAt = parseInt(object.createdAt, 10);
                else if (typeof object.createdAt === "number")
                    message.createdAt = object.createdAt;
                else if (typeof object.createdAt === "object")
                    message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber(true);
            if (object.nonce != null)
                message.nonce = String(object.nonce);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.method != null)
                message.method = String(object.method);
            return message;
        };

        WalkieRpcRequestWrapper.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdAt = options.longs === String ? "0" : 0;
                object.nonce = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.method = "";
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (typeof message.createdAt === "number")
                    object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
                else
                    object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber(true) : message.createdAt;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = message.method;
            return object;
        };

        WalkieRpcRequestWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WalkieRpcRequestWrapper;
    })();

    prb.WalkieRpcResponseWrapper = (function() {

        function WalkieRpcResponseWrapper(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        WalkieRpcResponseWrapper.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        WalkieRpcResponseWrapper.prototype.requestNonce = "";
        WalkieRpcResponseWrapper.prototype.nonce = "";
        WalkieRpcResponseWrapper.prototype.data = $util.newBuffer([]);
        WalkieRpcResponseWrapper.prototype.hasError = false;
        WalkieRpcResponseWrapper.prototype.error = null;

        WalkieRpcResponseWrapper.create = function create(properties) {
            return new WalkieRpcResponseWrapper(properties);
        };

        WalkieRpcResponseWrapper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(8).uint64(message.createdAt);
            if (message.requestNonce != null && Object.hasOwnProperty.call(message, "requestNonce"))
                writer.uint32(18).string(message.requestNonce);
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(26).string(message.nonce);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(34).bytes(message.data);
            if (message.hasError != null && Object.hasOwnProperty.call(message, "hasError"))
                writer.uint32(40).bool(message.hasError);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.prb.error.ResponseError.encode(message.error, writer.uint32(50).fork()).ldelim();
            return writer;
        };

        WalkieRpcResponseWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        WalkieRpcResponseWrapper.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.WalkieRpcResponseWrapper();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.createdAt = reader.uint64();
                    break;
                case 2:
                    message.requestNonce = reader.string();
                    break;
                case 3:
                    message.nonce = reader.string();
                    break;
                case 4:
                    message.data = reader.bytes();
                    break;
                case 5:
                    message.hasError = reader.bool();
                    break;
                case 6:
                    message.error = $root.prb.error.ResponseError.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        WalkieRpcResponseWrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WalkieRpcResponseWrapper.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                    return "createdAt: integer|Long expected";
            if (message.requestNonce != null && message.hasOwnProperty("requestNonce"))
                if (!$util.isString(message.requestNonce))
                    return "requestNonce: string expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isString(message.nonce))
                    return "nonce: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.hasError != null && message.hasOwnProperty("hasError"))
                if (typeof message.hasError !== "boolean")
                    return "hasError: boolean expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                let error = $root.prb.error.ResponseError.verify(message.error);
                if (error)
                    return "error." + error;
            }
            return null;
        };

        WalkieRpcResponseWrapper.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.WalkieRpcResponseWrapper)
                return object;
            let message = new $root.prb.WalkieRpcResponseWrapper();
            if (object.createdAt != null)
                if ($util.Long)
                    (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = true;
                else if (typeof object.createdAt === "string")
                    message.createdAt = parseInt(object.createdAt, 10);
                else if (typeof object.createdAt === "number")
                    message.createdAt = object.createdAt;
                else if (typeof object.createdAt === "object")
                    message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber(true);
            if (object.requestNonce != null)
                message.requestNonce = String(object.requestNonce);
            if (object.nonce != null)
                message.nonce = String(object.nonce);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.hasError != null)
                message.hasError = Boolean(object.hasError);
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".prb.WalkieRpcResponseWrapper.error: object expected");
                message.error = $root.prb.error.ResponseError.fromObject(object.error);
            }
            return message;
        };

        WalkieRpcResponseWrapper.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdAt = options.longs === String ? "0" : 0;
                object.requestNonce = "";
                object.nonce = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.hasError = false;
                object.error = null;
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (typeof message.createdAt === "number")
                    object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
                else
                    object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber(true) : message.createdAt;
            if (message.requestNonce != null && message.hasOwnProperty("requestNonce"))
                object.requestNonce = message.requestNonce;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.hasError != null && message.hasOwnProperty("hasError"))
                object.hasError = message.hasError;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.prb.error.ResponseError.toObject(message.error, options);
            return object;
        };

        WalkieRpcResponseWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WalkieRpcResponseWrapper;
    })();

    prb.WalkieBroadcastWrapper = (function() {

        function WalkieBroadcastWrapper(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        WalkieBroadcastWrapper.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        WalkieBroadcastWrapper.prototype.nonce = "";
        WalkieBroadcastWrapper.prototype.data = $util.newBuffer([]);
        WalkieBroadcastWrapper.prototype.method = "";

        WalkieBroadcastWrapper.create = function create(properties) {
            return new WalkieBroadcastWrapper(properties);
        };

        WalkieBroadcastWrapper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(8).uint64(message.createdAt);
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(18).string(message.nonce);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(26).bytes(message.data);
            if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                writer.uint32(34).string(message.method);
            return writer;
        };

        WalkieBroadcastWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        WalkieBroadcastWrapper.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.WalkieBroadcastWrapper();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.createdAt = reader.uint64();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.method = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        WalkieBroadcastWrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WalkieBroadcastWrapper.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                    return "createdAt: integer|Long expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isString(message.nonce))
                    return "nonce: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.method != null && message.hasOwnProperty("method"))
                if (!$util.isString(message.method))
                    return "method: string expected";
            return null;
        };

        WalkieBroadcastWrapper.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.WalkieBroadcastWrapper)
                return object;
            let message = new $root.prb.WalkieBroadcastWrapper();
            if (object.createdAt != null)
                if ($util.Long)
                    (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = true;
                else if (typeof object.createdAt === "string")
                    message.createdAt = parseInt(object.createdAt, 10);
                else if (typeof object.createdAt === "number")
                    message.createdAt = object.createdAt;
                else if (typeof object.createdAt === "object")
                    message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber(true);
            if (object.nonce != null)
                message.nonce = String(object.nonce);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.method != null)
                message.method = String(object.method);
            return message;
        };

        WalkieBroadcastWrapper.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdAt = options.longs === String ? "0" : 0;
                object.nonce = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.method = "";
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (typeof message.createdAt === "number")
                    object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
                else
                    object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber(true) : message.createdAt;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = message.method;
            return object;
        };

        WalkieBroadcastWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WalkieBroadcastWrapper;
    })();

    prb.AuthStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AS_NONE"] = 0;
        values[valuesById[1] = "AS_NEED_AUTH"] = 1;
        values[valuesById[2] = "AS_GRANTED"] = 2;
        values[valuesById[3] = "AS_REJECTED"] = 3;
        values[valuesById[4] = "AS_BLOCKED"] = 4;
        return values;
    })();

    prb.AuthType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AT_NONE"] = 0;
        values[valuesById[1] = "AT_PSK"] = 1;
        values[valuesById[2] = "AT_WHITE_LIST"] = 2;
        return values;
    })();

    prb.AuthRequest = (function() {

        function AuthRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        AuthRequest.prototype.type = 0;
        AuthRequest.prototype.authString = "";

        AuthRequest.create = function create(properties) {
            return new AuthRequest(properties);
        };

        AuthRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(8).int32(message.type);
            if (message.authString != null && Object.hasOwnProperty.call(message, "authString"))
                writer.uint32(18).string(message.authString);
            return writer;
        };

        AuthRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        AuthRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.AuthRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.authString = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        AuthRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AuthRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.authString != null && message.hasOwnProperty("authString"))
                if (!$util.isString(message.authString))
                    return "authString: string expected";
            return null;
        };

        AuthRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.AuthRequest)
                return object;
            let message = new $root.prb.AuthRequest();
            switch (object.type) {
            case "AT_NONE":
            case 0:
                message.type = 0;
                break;
            case "AT_PSK":
            case 1:
                message.type = 1;
                break;
            case "AT_WHITE_LIST":
            case 2:
                message.type = 2;
                break;
            }
            if (object.authString != null)
                message.authString = String(object.authString);
            return message;
        };

        AuthRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "AT_NONE" : 0;
                object.authString = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.prb.AuthType[message.type] : message.type;
            if (message.authString != null && message.hasOwnProperty("authString"))
                object.authString = message.authString;
            return object;
        };

        AuthRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthRequest;
    })();

    prb.AuthResponse = (function() {

        function AuthResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        AuthResponse.prototype.status = 0;
        AuthResponse.prototype.type = 0;
        AuthResponse.prototype.peerId = "";

        AuthResponse.create = function create(properties) {
            return new AuthResponse(properties);
        };

        AuthResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(8).int32(message.status);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(16).int32(message.type);
            if (message.peerId != null && Object.hasOwnProperty.call(message, "peerId"))
                writer.uint32(26).string(message.peerId);
            return writer;
        };

        AuthResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        AuthResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.AuthResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.peerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        AuthResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AuthResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                if (!$util.isString(message.peerId))
                    return "peerId: string expected";
            return null;
        };

        AuthResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.AuthResponse)
                return object;
            let message = new $root.prb.AuthResponse();
            switch (object.status) {
            case "AS_NONE":
            case 0:
                message.status = 0;
                break;
            case "AS_NEED_AUTH":
            case 1:
                message.status = 1;
                break;
            case "AS_GRANTED":
            case 2:
                message.status = 2;
                break;
            case "AS_REJECTED":
            case 3:
                message.status = 3;
                break;
            case "AS_BLOCKED":
            case 4:
                message.status = 4;
                break;
            }
            switch (object.type) {
            case "AT_NONE":
            case 0:
                message.type = 0;
                break;
            case "AT_PSK":
            case 1:
                message.type = 1;
                break;
            case "AT_WHITE_LIST":
            case 2:
                message.type = 2;
                break;
            }
            if (object.peerId != null)
                message.peerId = String(object.peerId);
            return message;
        };

        AuthResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "AS_NONE" : 0;
                object.type = options.enums === String ? "AT_NONE" : 0;
                object.peerId = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.prb.AuthStatus[message.status] : message.status;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.prb.AuthType[message.type] : message.type;
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                object.peerId = message.peerId;
            return object;
        };

        AuthResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthResponse;
    })();

    prb.WalkieRpc = (function() {

        function WalkieRpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (WalkieRpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = WalkieRpc;

        WalkieRpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };


        Object.defineProperty(WalkieRpc.prototype.hello = function hello(request, callback) {
            return this.rpcCall(hello, $root.prb.WalkieSystemInfo, $root.prb.WalkieSystemInfo, request, callback);
        }, "name", { value: "Hello" });


        Object.defineProperty(WalkieRpc.prototype.auth = function auth(request, callback) {
            return this.rpcCall(auth, $root.prb.AuthRequest, $root.prb.AuthResponse, request, callback);
        }, "name", { value: "Auth" });


        Object.defineProperty(WalkieRpc.prototype.getDataProviderInfo = function getDataProviderInfo(request, callback) {
            return this.rpcCall(getDataProviderInfo, $root.prb.Empty, $root.prb.data_provider.Info, request, callback);
        }, "name", { value: "GetDataProviderInfo" });


        Object.defineProperty(WalkieRpc.prototype.getBlobByKey = function getBlobByKey(request, callback) {
            return this.rpcCall(getBlobByKey, $root.prb.data_provider.GetBlobByKey, $root.prb.data_provider.RawBlob, request, callback);
        }, "name", { value: "GetBlobByKey" });


        Object.defineProperty(WalkieRpc.prototype.wantBlob = function wantBlob(request, callback) {
            return this.rpcCall(wantBlob, $root.prb.data_provider.WantBlob, $root.prb.data_provider.BlobMeta, request, callback);
        }, "name", { value: "WantBlob" });


        Object.defineProperty(WalkieRpc.prototype.getBlobWithToken = function getBlobWithToken(request, callback) {
            return this.rpcCall(getBlobWithToken, $root.prb.data_provider.GetBlob, $root.prb.data_provider.Blob, request, callback);
        }, "name", { value: "GetBlobWithToken" });


        Object.defineProperty(WalkieRpc.prototype.listPool = function listPool(request, callback) {
            return this.rpcCall(listPool, $root.prb.Empty, $root.prb.lifecycle.PoolList, request, callback);
        }, "name", { value: "ListPool" });


        Object.defineProperty(WalkieRpc.prototype.createPool = function createPool(request, callback) {
            return this.rpcCall(createPool, $root.prb.lifecycle.CreatePool, $root.prb.lifecycle.PoolList, request, callback);
        }, "name", { value: "CreatePool" });


        Object.defineProperty(WalkieRpc.prototype.updatePool = function updatePool(request, callback) {
            return this.rpcCall(updatePool, $root.prb.lifecycle.UpdatePool, $root.prb.lifecycle.PoolList, request, callback);
        }, "name", { value: "UpdatePool" });


        Object.defineProperty(WalkieRpc.prototype.listWorker = function listWorker(request, callback) {
            return this.rpcCall(listWorker, $root.prb.Empty, $root.prb.lifecycle.WorkerList, request, callback);
        }, "name", { value: "ListWorker" });


        Object.defineProperty(WalkieRpc.prototype.createWorker = function createWorker(request, callback) {
            return this.rpcCall(createWorker, $root.prb.lifecycle.CreateWorker, $root.prb.lifecycle.WorkerList, request, callback);
        }, "name", { value: "CreateWorker" });


        Object.defineProperty(WalkieRpc.prototype.updateWorker = function updateWorker(request, callback) {
            return this.rpcCall(updateWorker, $root.prb.lifecycle.UpdateWorker, $root.prb.lifecycle.WorkerList, request, callback);
        }, "name", { value: "UpdateWorker" });


        Object.defineProperty(WalkieRpc.prototype.restartWorker = function restartWorker(request, callback) {
            return this.rpcCall(restartWorker, $root.prb.lifecycle.UuidQueryRequest, $root.prb.WorkerStateUpdate, request, callback);
        }, "name", { value: "RestartWorker" });


        Object.defineProperty(WalkieRpc.prototype.refreshRaAndRestartWorker = function refreshRaAndRestartWorker(request, callback) {
            return this.rpcCall(refreshRaAndRestartWorker, $root.prb.lifecycle.UuidQueryRequest, $root.prb.WorkerStateUpdate, request, callback);
        }, "name", { value: "RefreshRaAndRestartWorker" });


        Object.defineProperty(WalkieRpc.prototype.kickWorker = function kickWorker(request, callback) {
            return this.rpcCall(kickWorker, $root.prb.lifecycle.UuidQueryRequest, $root.prb.WorkerStateUpdate, request, callback);
        }, "name", { value: "KickWorker" });


        Object.defineProperty(WalkieRpc.prototype.getWorkerStatus = function getWorkerStatus(request, callback) {
            return this.rpcCall(getWorkerStatus, $root.prb.lifecycle.UuidQueryRequest, $root.prb.WorkerStateUpdate, request, callback);
        }, "name", { value: "GetWorkerStatus" });

        return WalkieRpc;
    })();

    prb.WalkieBroadcast = (function() {

        function WalkieBroadcast(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (WalkieBroadcast.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = WalkieBroadcast;

        WalkieBroadcast.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        return WalkieBroadcast;
    })();

    prb.Empty = (function() {

        function Empty(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Empty();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Empty)
                return object;
            return new $root.prb.Empty();
        };

        Empty.toObject = function toObject() {
            return {};
        };

        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    prb.Placeholder = (function() {

        function Placeholder(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Placeholder.create = function create(properties) {
            return new Placeholder(properties);
        };

        Placeholder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        Placeholder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Placeholder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Placeholder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Placeholder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Placeholder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        Placeholder.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Placeholder)
                return object;
            return new $root.prb.Placeholder();
        };

        Placeholder.toObject = function toObject() {
            return {};
        };

        Placeholder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Placeholder;
    })();

    prb.Ack = (function() {

        function Ack(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Ack.prototype.ack = false;

        Ack.create = function create(properties) {
            return new Ack(properties);
        };

        Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ack != null && Object.hasOwnProperty.call(message, "ack"))
                writer.uint32(8).bool(message.ack);
            return writer;
        };

        Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Ack();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ack = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ack != null && message.hasOwnProperty("ack"))
                if (typeof message.ack !== "boolean")
                    return "ack: boolean expected";
            return null;
        };

        Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Ack)
                return object;
            let message = new $root.prb.Ack();
            if (object.ack != null)
                message.ack = Boolean(object.ack);
            return message;
        };

        Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.ack = false;
            if (message.ack != null && message.hasOwnProperty("ack"))
                object.ack = message.ack;
            return object;
        };

        Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ack;
    })();

    prb.BN = (function() {

        function BN(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BN.prototype.value = "";

        BN.create = function create(properties) {
            return new BN(properties);
        };

        BN.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(10).string(message.value);
            return writer;
        };

        BN.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BN.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.BN();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BN.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BN.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        BN.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.BN)
                return object;
            let message = new $root.prb.BN();
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        BN.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.value = "";
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        BN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BN;
    })();

    prb.FullAccount = (function() {

        function FullAccount(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        FullAccount.prototype.mnemonic = "";
        FullAccount.prototype.polkadotJson = "";
        FullAccount.prototype.ss58Phala = "";
        FullAccount.prototype.ss58Polkadot = "";

        FullAccount.create = function create(properties) {
            return new FullAccount(properties);
        };

        FullAccount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mnemonic != null && Object.hasOwnProperty.call(message, "mnemonic"))
                writer.uint32(10).string(message.mnemonic);
            if (message.polkadotJson != null && Object.hasOwnProperty.call(message, "polkadotJson"))
                writer.uint32(18).string(message.polkadotJson);
            if (message.ss58Phala != null && Object.hasOwnProperty.call(message, "ss58Phala"))
                writer.uint32(26).string(message.ss58Phala);
            if (message.ss58Polkadot != null && Object.hasOwnProperty.call(message, "ss58Polkadot"))
                writer.uint32(34).string(message.ss58Polkadot);
            return writer;
        };

        FullAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        FullAccount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.FullAccount();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mnemonic = reader.string();
                    break;
                case 2:
                    message.polkadotJson = reader.string();
                    break;
                case 3:
                    message.ss58Phala = reader.string();
                    break;
                case 4:
                    message.ss58Polkadot = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        FullAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        FullAccount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mnemonic != null && message.hasOwnProperty("mnemonic"))
                if (!$util.isString(message.mnemonic))
                    return "mnemonic: string expected";
            if (message.polkadotJson != null && message.hasOwnProperty("polkadotJson"))
                if (!$util.isString(message.polkadotJson))
                    return "polkadotJson: string expected";
            if (message.ss58Phala != null && message.hasOwnProperty("ss58Phala"))
                if (!$util.isString(message.ss58Phala))
                    return "ss58Phala: string expected";
            if (message.ss58Polkadot != null && message.hasOwnProperty("ss58Polkadot"))
                if (!$util.isString(message.ss58Polkadot))
                    return "ss58Polkadot: string expected";
            return null;
        };

        FullAccount.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.FullAccount)
                return object;
            let message = new $root.prb.FullAccount();
            if (object.mnemonic != null)
                message.mnemonic = String(object.mnemonic);
            if (object.polkadotJson != null)
                message.polkadotJson = String(object.polkadotJson);
            if (object.ss58Phala != null)
                message.ss58Phala = String(object.ss58Phala);
            if (object.ss58Polkadot != null)
                message.ss58Polkadot = String(object.ss58Polkadot);
            return message;
        };

        FullAccount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.mnemonic = "";
                object.polkadotJson = "";
                object.ss58Phala = "";
                object.ss58Polkadot = "";
            }
            if (message.mnemonic != null && message.hasOwnProperty("mnemonic"))
                object.mnemonic = message.mnemonic;
            if (message.polkadotJson != null && message.hasOwnProperty("polkadotJson"))
                object.polkadotJson = message.polkadotJson;
            if (message.ss58Phala != null && message.hasOwnProperty("ss58Phala"))
                object.ss58Phala = message.ss58Phala;
            if (message.ss58Polkadot != null && message.hasOwnProperty("ss58Polkadot"))
                object.ss58Polkadot = message.ss58Polkadot;
            return object;
        };

        FullAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FullAccount;
    })();

    prb.Account = (function() {

        function Account(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Account.prototype.ss58Phala = "";
        Account.prototype.ss58Polkadot = "";

        Account.create = function create(properties) {
            return new Account(properties);
        };

        Account.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ss58Phala != null && Object.hasOwnProperty.call(message, "ss58Phala"))
                writer.uint32(10).string(message.ss58Phala);
            if (message.ss58Polkadot != null && Object.hasOwnProperty.call(message, "ss58Polkadot"))
                writer.uint32(18).string(message.ss58Polkadot);
            return writer;
        };

        Account.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Account.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Account();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ss58Phala = reader.string();
                    break;
                case 2:
                    message.ss58Polkadot = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Account.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Account.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ss58Phala != null && message.hasOwnProperty("ss58Phala"))
                if (!$util.isString(message.ss58Phala))
                    return "ss58Phala: string expected";
            if (message.ss58Polkadot != null && message.hasOwnProperty("ss58Polkadot"))
                if (!$util.isString(message.ss58Polkadot))
                    return "ss58Polkadot: string expected";
            return null;
        };

        Account.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Account)
                return object;
            let message = new $root.prb.Account();
            if (object.ss58Phala != null)
                message.ss58Phala = String(object.ss58Phala);
            if (object.ss58Polkadot != null)
                message.ss58Polkadot = String(object.ss58Polkadot);
            return message;
        };

        Account.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ss58Phala = "";
                object.ss58Polkadot = "";
            }
            if (message.ss58Phala != null && message.hasOwnProperty("ss58Phala"))
                object.ss58Phala = message.ss58Phala;
            if (message.ss58Polkadot != null && message.hasOwnProperty("ss58Polkadot"))
                object.ss58Polkadot = message.ss58Polkadot;
            return object;
        };

        Account.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Account;
    })();

    prb.error = (function() {

        const error = {};

        error.ResponseErrorType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "SERVER"] = 1;
            values[valuesById[2] = "NOT_FOUND"] = 2;
            values[valuesById[3] = "DUPLICATED"] = 3;
            values[valuesById[4] = "UNAUTHORIZED"] = 4;
            return values;
        })();

        error.ResponseError = (function() {

            function ResponseError(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            ResponseError.prototype.type = 0;
            ResponseError.prototype.message = "";

            ResponseError.create = function create(properties) {
                return new ResponseError(properties);
            };

            ResponseError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(8).int32(message.type);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(18).string(message.message);
                return writer;
            };

            ResponseError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            ResponseError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.error.ResponseError();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            ResponseError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            ResponseError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            ResponseError.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.error.ResponseError)
                    return object;
                let message = new $root.prb.error.ResponseError();
                switch (object.type) {
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "SERVER":
                case 1:
                    message.type = 1;
                    break;
                case "NOT_FOUND":
                case 2:
                    message.type = 2;
                    break;
                case "DUPLICATED":
                case 3:
                    message.type = 3;
                    break;
                case "UNAUTHORIZED":
                case 4:
                    message.type = 4;
                    break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            ResponseError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "UNKNOWN" : 0;
                    object.message = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.prb.error.ResponseErrorType[message.type] : message.type;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            ResponseError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseError;
        })();

        return error;
    })();

    prb.db = (function() {

        const db = {};

        db.ParentBlock = (function() {

            function ParentBlock(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            ParentBlock.prototype.number = 0;
            ParentBlock.prototype.hash = $util.newBuffer([]);
            ParentBlock.prototype.header = $util.newBuffer([]);
            ParentBlock.prototype.setId = 0;
            ParentBlock.prototype.hasJustification = false;
            ParentBlock.prototype.syncHeaderData = $util.newBuffer([]);
            ParentBlock.prototype.authoritySetChange = $util.newBuffer([]);
            ParentBlock.prototype.paraNumber = 0;
            ParentBlock.prototype.paraProof = $util.newBuffer([]);

            ParentBlock.create = function create(properties) {
                return new ParentBlock(properties);
            };

            ParentBlock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(8).uint32(message.number);
                if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                    writer.uint32(18).bytes(message.hash);
                if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                    writer.uint32(26).bytes(message.header);
                if (message.setId != null && Object.hasOwnProperty.call(message, "setId"))
                    writer.uint32(32).uint32(message.setId);
                if (message.hasJustification != null && Object.hasOwnProperty.call(message, "hasJustification"))
                    writer.uint32(40).bool(message.hasJustification);
                if (message.syncHeaderData != null && Object.hasOwnProperty.call(message, "syncHeaderData"))
                    writer.uint32(50).bytes(message.syncHeaderData);
                if (message.authoritySetChange != null && Object.hasOwnProperty.call(message, "authoritySetChange"))
                    writer.uint32(58).bytes(message.authoritySetChange);
                if (message.paraNumber != null && Object.hasOwnProperty.call(message, "paraNumber"))
                    writer.uint32(64).uint32(message.paraNumber);
                if (message.paraProof != null && Object.hasOwnProperty.call(message, "paraProof"))
                    writer.uint32(74).bytes(message.paraProof);
                return writer;
            };

            ParentBlock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            ParentBlock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.db.ParentBlock();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.number = reader.uint32();
                        break;
                    case 2:
                        message.hash = reader.bytes();
                        break;
                    case 3:
                        message.header = reader.bytes();
                        break;
                    case 4:
                        message.setId = reader.uint32();
                        break;
                    case 5:
                        message.hasJustification = reader.bool();
                        break;
                    case 6:
                        message.syncHeaderData = reader.bytes();
                        break;
                    case 7:
                        message.authoritySetChange = reader.bytes();
                        break;
                    case 8:
                        message.paraNumber = reader.uint32();
                        break;
                    case 9:
                        message.paraProof = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            ParentBlock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            ParentBlock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                        return "hash: buffer expected";
                if (message.header != null && message.hasOwnProperty("header"))
                    if (!(message.header && typeof message.header.length === "number" || $util.isString(message.header)))
                        return "header: buffer expected";
                if (message.setId != null && message.hasOwnProperty("setId"))
                    if (!$util.isInteger(message.setId))
                        return "setId: integer expected";
                if (message.hasJustification != null && message.hasOwnProperty("hasJustification"))
                    if (typeof message.hasJustification !== "boolean")
                        return "hasJustification: boolean expected";
                if (message.syncHeaderData != null && message.hasOwnProperty("syncHeaderData"))
                    if (!(message.syncHeaderData && typeof message.syncHeaderData.length === "number" || $util.isString(message.syncHeaderData)))
                        return "syncHeaderData: buffer expected";
                if (message.authoritySetChange != null && message.hasOwnProperty("authoritySetChange"))
                    if (!(message.authoritySetChange && typeof message.authoritySetChange.length === "number" || $util.isString(message.authoritySetChange)))
                        return "authoritySetChange: buffer expected";
                if (message.paraNumber != null && message.hasOwnProperty("paraNumber"))
                    if (!$util.isInteger(message.paraNumber))
                        return "paraNumber: integer expected";
                if (message.paraProof != null && message.hasOwnProperty("paraProof"))
                    if (!(message.paraProof && typeof message.paraProof.length === "number" || $util.isString(message.paraProof)))
                        return "paraProof: buffer expected";
                return null;
            };

            ParentBlock.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.db.ParentBlock)
                    return object;
                let message = new $root.prb.db.ParentBlock();
                if (object.number != null)
                    message.number = object.number >>> 0;
                if (object.hash != null)
                    if (typeof object.hash === "string")
                        $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                    else if (object.hash.length)
                        message.hash = object.hash;
                if (object.header != null)
                    if (typeof object.header === "string")
                        $util.base64.decode(object.header, message.header = $util.newBuffer($util.base64.length(object.header)), 0);
                    else if (object.header.length)
                        message.header = object.header;
                if (object.setId != null)
                    message.setId = object.setId >>> 0;
                if (object.hasJustification != null)
                    message.hasJustification = Boolean(object.hasJustification);
                if (object.syncHeaderData != null)
                    if (typeof object.syncHeaderData === "string")
                        $util.base64.decode(object.syncHeaderData, message.syncHeaderData = $util.newBuffer($util.base64.length(object.syncHeaderData)), 0);
                    else if (object.syncHeaderData.length)
                        message.syncHeaderData = object.syncHeaderData;
                if (object.authoritySetChange != null)
                    if (typeof object.authoritySetChange === "string")
                        $util.base64.decode(object.authoritySetChange, message.authoritySetChange = $util.newBuffer($util.base64.length(object.authoritySetChange)), 0);
                    else if (object.authoritySetChange.length)
                        message.authoritySetChange = object.authoritySetChange;
                if (object.paraNumber != null)
                    message.paraNumber = object.paraNumber >>> 0;
                if (object.paraProof != null)
                    if (typeof object.paraProof === "string")
                        $util.base64.decode(object.paraProof, message.paraProof = $util.newBuffer($util.base64.length(object.paraProof)), 0);
                    else if (object.paraProof.length)
                        message.paraProof = object.paraProof;
                return message;
            };

            ParentBlock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.number = 0;
                    if (options.bytes === String)
                        object.hash = "";
                    else {
                        object.hash = [];
                        if (options.bytes !== Array)
                            object.hash = $util.newBuffer(object.hash);
                    }
                    if (options.bytes === String)
                        object.header = "";
                    else {
                        object.header = [];
                        if (options.bytes !== Array)
                            object.header = $util.newBuffer(object.header);
                    }
                    object.setId = 0;
                    object.hasJustification = false;
                    if (options.bytes === String)
                        object.syncHeaderData = "";
                    else {
                        object.syncHeaderData = [];
                        if (options.bytes !== Array)
                            object.syncHeaderData = $util.newBuffer(object.syncHeaderData);
                    }
                    if (options.bytes === String)
                        object.authoritySetChange = "";
                    else {
                        object.authoritySetChange = [];
                        if (options.bytes !== Array)
                            object.authoritySetChange = $util.newBuffer(object.authoritySetChange);
                    }
                    object.paraNumber = 0;
                    if (options.bytes === String)
                        object.paraProof = "";
                    else {
                        object.paraProof = [];
                        if (options.bytes !== Array)
                            object.paraProof = $util.newBuffer(object.paraProof);
                    }
                }
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.hash != null && message.hasOwnProperty("hash"))
                    object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                if (message.header != null && message.hasOwnProperty("header"))
                    object.header = options.bytes === String ? $util.base64.encode(message.header, 0, message.header.length) : options.bytes === Array ? Array.prototype.slice.call(message.header) : message.header;
                if (message.setId != null && message.hasOwnProperty("setId"))
                    object.setId = message.setId;
                if (message.hasJustification != null && message.hasOwnProperty("hasJustification"))
                    object.hasJustification = message.hasJustification;
                if (message.syncHeaderData != null && message.hasOwnProperty("syncHeaderData"))
                    object.syncHeaderData = options.bytes === String ? $util.base64.encode(message.syncHeaderData, 0, message.syncHeaderData.length) : options.bytes === Array ? Array.prototype.slice.call(message.syncHeaderData) : message.syncHeaderData;
                if (message.authoritySetChange != null && message.hasOwnProperty("authoritySetChange"))
                    object.authoritySetChange = options.bytes === String ? $util.base64.encode(message.authoritySetChange, 0, message.authoritySetChange.length) : options.bytes === Array ? Array.prototype.slice.call(message.authoritySetChange) : message.authoritySetChange;
                if (message.paraNumber != null && message.hasOwnProperty("paraNumber"))
                    object.paraNumber = message.paraNumber;
                if (message.paraProof != null && message.hasOwnProperty("paraProof"))
                    object.paraProof = options.bytes === String ? $util.base64.encode(message.paraProof, 0, message.paraProof.length) : options.bytes === Array ? Array.prototype.slice.call(message.paraProof) : message.paraProof;
                return object;
            };

            ParentBlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ParentBlock;
        })();

        db.ParaBlock = (function() {

            function ParaBlock(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            ParaBlock.prototype.number = 0;
            ParaBlock.prototype.hash = $util.newBuffer([]);
            ParaBlock.prototype.header = $util.newBuffer([]);
            ParaBlock.prototype.dispatchBlockData = $util.newBuffer([]);

            ParaBlock.create = function create(properties) {
                return new ParaBlock(properties);
            };

            ParaBlock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(8).uint32(message.number);
                if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                    writer.uint32(18).bytes(message.hash);
                if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                    writer.uint32(26).bytes(message.header);
                if (message.dispatchBlockData != null && Object.hasOwnProperty.call(message, "dispatchBlockData"))
                    writer.uint32(42).bytes(message.dispatchBlockData);
                return writer;
            };

            ParaBlock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            ParaBlock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.db.ParaBlock();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.number = reader.uint32();
                        break;
                    case 2:
                        message.hash = reader.bytes();
                        break;
                    case 3:
                        message.header = reader.bytes();
                        break;
                    case 5:
                        message.dispatchBlockData = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            ParaBlock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            ParaBlock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                        return "hash: buffer expected";
                if (message.header != null && message.hasOwnProperty("header"))
                    if (!(message.header && typeof message.header.length === "number" || $util.isString(message.header)))
                        return "header: buffer expected";
                if (message.dispatchBlockData != null && message.hasOwnProperty("dispatchBlockData"))
                    if (!(message.dispatchBlockData && typeof message.dispatchBlockData.length === "number" || $util.isString(message.dispatchBlockData)))
                        return "dispatchBlockData: buffer expected";
                return null;
            };

            ParaBlock.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.db.ParaBlock)
                    return object;
                let message = new $root.prb.db.ParaBlock();
                if (object.number != null)
                    message.number = object.number >>> 0;
                if (object.hash != null)
                    if (typeof object.hash === "string")
                        $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                    else if (object.hash.length)
                        message.hash = object.hash;
                if (object.header != null)
                    if (typeof object.header === "string")
                        $util.base64.decode(object.header, message.header = $util.newBuffer($util.base64.length(object.header)), 0);
                    else if (object.header.length)
                        message.header = object.header;
                if (object.dispatchBlockData != null)
                    if (typeof object.dispatchBlockData === "string")
                        $util.base64.decode(object.dispatchBlockData, message.dispatchBlockData = $util.newBuffer($util.base64.length(object.dispatchBlockData)), 0);
                    else if (object.dispatchBlockData.length)
                        message.dispatchBlockData = object.dispatchBlockData;
                return message;
            };

            ParaBlock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.number = 0;
                    if (options.bytes === String)
                        object.hash = "";
                    else {
                        object.hash = [];
                        if (options.bytes !== Array)
                            object.hash = $util.newBuffer(object.hash);
                    }
                    if (options.bytes === String)
                        object.header = "";
                    else {
                        object.header = [];
                        if (options.bytes !== Array)
                            object.header = $util.newBuffer(object.header);
                    }
                    if (options.bytes === String)
                        object.dispatchBlockData = "";
                    else {
                        object.dispatchBlockData = [];
                        if (options.bytes !== Array)
                            object.dispatchBlockData = $util.newBuffer(object.dispatchBlockData);
                    }
                }
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.hash != null && message.hasOwnProperty("hash"))
                    object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                if (message.header != null && message.hasOwnProperty("header"))
                    object.header = options.bytes === String ? $util.base64.encode(message.header, 0, message.header.length) : options.bytes === Array ? Array.prototype.slice.call(message.header) : message.header;
                if (message.dispatchBlockData != null && message.hasOwnProperty("dispatchBlockData"))
                    object.dispatchBlockData = options.bytes === String ? $util.base64.encode(message.dispatchBlockData, 0, message.dispatchBlockData.length) : options.bytes === Array ? Array.prototype.slice.call(message.dispatchBlockData) : message.dispatchBlockData;
                return object;
            };

            ParaBlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ParaBlock;
        })();

        db.Genesis = (function() {

            function Genesis(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Genesis.prototype.paraId = 0;
            Genesis.prototype.paraNumber = 0;
            Genesis.prototype.parentNumber = 0;
            Genesis.prototype.bridgeGenesisInfo = $util.newBuffer([]);
            Genesis.prototype.genesisState = $util.newBuffer([]);

            Genesis.create = function create(properties) {
                return new Genesis(properties);
            };

            Genesis.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.paraId != null && Object.hasOwnProperty.call(message, "paraId"))
                    writer.uint32(8).uint32(message.paraId);
                if (message.paraNumber != null && Object.hasOwnProperty.call(message, "paraNumber"))
                    writer.uint32(16).uint32(message.paraNumber);
                if (message.parentNumber != null && Object.hasOwnProperty.call(message, "parentNumber"))
                    writer.uint32(24).uint32(message.parentNumber);
                if (message.bridgeGenesisInfo != null && Object.hasOwnProperty.call(message, "bridgeGenesisInfo"))
                    writer.uint32(34).bytes(message.bridgeGenesisInfo);
                if (message.genesisState != null && Object.hasOwnProperty.call(message, "genesisState"))
                    writer.uint32(42).bytes(message.genesisState);
                return writer;
            };

            Genesis.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Genesis.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.db.Genesis();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.paraId = reader.uint32();
                        break;
                    case 2:
                        message.paraNumber = reader.uint32();
                        break;
                    case 3:
                        message.parentNumber = reader.uint32();
                        break;
                    case 4:
                        message.bridgeGenesisInfo = reader.bytes();
                        break;
                    case 5:
                        message.genesisState = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Genesis.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            Genesis.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.paraId != null && message.hasOwnProperty("paraId"))
                    if (!$util.isInteger(message.paraId))
                        return "paraId: integer expected";
                if (message.paraNumber != null && message.hasOwnProperty("paraNumber"))
                    if (!$util.isInteger(message.paraNumber))
                        return "paraNumber: integer expected";
                if (message.parentNumber != null && message.hasOwnProperty("parentNumber"))
                    if (!$util.isInteger(message.parentNumber))
                        return "parentNumber: integer expected";
                if (message.bridgeGenesisInfo != null && message.hasOwnProperty("bridgeGenesisInfo"))
                    if (!(message.bridgeGenesisInfo && typeof message.bridgeGenesisInfo.length === "number" || $util.isString(message.bridgeGenesisInfo)))
                        return "bridgeGenesisInfo: buffer expected";
                if (message.genesisState != null && message.hasOwnProperty("genesisState"))
                    if (!(message.genesisState && typeof message.genesisState.length === "number" || $util.isString(message.genesisState)))
                        return "genesisState: buffer expected";
                return null;
            };

            Genesis.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.db.Genesis)
                    return object;
                let message = new $root.prb.db.Genesis();
                if (object.paraId != null)
                    message.paraId = object.paraId >>> 0;
                if (object.paraNumber != null)
                    message.paraNumber = object.paraNumber >>> 0;
                if (object.parentNumber != null)
                    message.parentNumber = object.parentNumber >>> 0;
                if (object.bridgeGenesisInfo != null)
                    if (typeof object.bridgeGenesisInfo === "string")
                        $util.base64.decode(object.bridgeGenesisInfo, message.bridgeGenesisInfo = $util.newBuffer($util.base64.length(object.bridgeGenesisInfo)), 0);
                    else if (object.bridgeGenesisInfo.length)
                        message.bridgeGenesisInfo = object.bridgeGenesisInfo;
                if (object.genesisState != null)
                    if (typeof object.genesisState === "string")
                        $util.base64.decode(object.genesisState, message.genesisState = $util.newBuffer($util.base64.length(object.genesisState)), 0);
                    else if (object.genesisState.length)
                        message.genesisState = object.genesisState;
                return message;
            };

            Genesis.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.paraId = 0;
                    object.paraNumber = 0;
                    object.parentNumber = 0;
                    if (options.bytes === String)
                        object.bridgeGenesisInfo = "";
                    else {
                        object.bridgeGenesisInfo = [];
                        if (options.bytes !== Array)
                            object.bridgeGenesisInfo = $util.newBuffer(object.bridgeGenesisInfo);
                    }
                    if (options.bytes === String)
                        object.genesisState = "";
                    else {
                        object.genesisState = [];
                        if (options.bytes !== Array)
                            object.genesisState = $util.newBuffer(object.genesisState);
                    }
                }
                if (message.paraId != null && message.hasOwnProperty("paraId"))
                    object.paraId = message.paraId;
                if (message.paraNumber != null && message.hasOwnProperty("paraNumber"))
                    object.paraNumber = message.paraNumber;
                if (message.parentNumber != null && message.hasOwnProperty("parentNumber"))
                    object.parentNumber = message.parentNumber;
                if (message.bridgeGenesisInfo != null && message.hasOwnProperty("bridgeGenesisInfo"))
                    object.bridgeGenesisInfo = options.bytes === String ? $util.base64.encode(message.bridgeGenesisInfo, 0, message.bridgeGenesisInfo.length) : options.bytes === Array ? Array.prototype.slice.call(message.bridgeGenesisInfo) : message.bridgeGenesisInfo;
                if (message.genesisState != null && message.hasOwnProperty("genesisState"))
                    object.genesisState = options.bytes === String ? $util.base64.encode(message.genesisState, 0, message.genesisState.length) : options.bytes === Array ? Array.prototype.slice.call(message.genesisState) : message.genesisState;
                return object;
            };

            Genesis.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Genesis;
        })();

        db.Window = (function() {

            function Window(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Window.prototype.parentStartBlock = 0;
            Window.prototype.parentStopBlock = 0;
            Window.prototype.paraStartBlock = 0;
            Window.prototype.paraStopBlock = 0;
            Window.prototype.windowId = 0;
            Window.prototype.setId = 0;
            Window.prototype.isFinished = false;

            Window.create = function create(properties) {
                return new Window(properties);
            };

            Window.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.parentStartBlock != null && Object.hasOwnProperty.call(message, "parentStartBlock"))
                    writer.uint32(8).int32(message.parentStartBlock);
                if (message.parentStopBlock != null && Object.hasOwnProperty.call(message, "parentStopBlock"))
                    writer.uint32(16).int32(message.parentStopBlock);
                if (message.paraStartBlock != null && Object.hasOwnProperty.call(message, "paraStartBlock"))
                    writer.uint32(24).int32(message.paraStartBlock);
                if (message.paraStopBlock != null && Object.hasOwnProperty.call(message, "paraStopBlock"))
                    writer.uint32(32).int32(message.paraStopBlock);
                if (message.windowId != null && Object.hasOwnProperty.call(message, "windowId"))
                    writer.uint32(40).int32(message.windowId);
                if (message.setId != null && Object.hasOwnProperty.call(message, "setId"))
                    writer.uint32(48).int32(message.setId);
                if (message.isFinished != null && Object.hasOwnProperty.call(message, "isFinished"))
                    writer.uint32(56).bool(message.isFinished);
                return writer;
            };

            Window.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Window.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.db.Window();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.parentStartBlock = reader.int32();
                        break;
                    case 2:
                        message.parentStopBlock = reader.int32();
                        break;
                    case 3:
                        message.paraStartBlock = reader.int32();
                        break;
                    case 4:
                        message.paraStopBlock = reader.int32();
                        break;
                    case 5:
                        message.windowId = reader.int32();
                        break;
                    case 6:
                        message.setId = reader.int32();
                        break;
                    case 7:
                        message.isFinished = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Window.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            Window.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.parentStartBlock != null && message.hasOwnProperty("parentStartBlock"))
                    if (!$util.isInteger(message.parentStartBlock))
                        return "parentStartBlock: integer expected";
                if (message.parentStopBlock != null && message.hasOwnProperty("parentStopBlock"))
                    if (!$util.isInteger(message.parentStopBlock))
                        return "parentStopBlock: integer expected";
                if (message.paraStartBlock != null && message.hasOwnProperty("paraStartBlock"))
                    if (!$util.isInteger(message.paraStartBlock))
                        return "paraStartBlock: integer expected";
                if (message.paraStopBlock != null && message.hasOwnProperty("paraStopBlock"))
                    if (!$util.isInteger(message.paraStopBlock))
                        return "paraStopBlock: integer expected";
                if (message.windowId != null && message.hasOwnProperty("windowId"))
                    if (!$util.isInteger(message.windowId))
                        return "windowId: integer expected";
                if (message.setId != null && message.hasOwnProperty("setId"))
                    if (!$util.isInteger(message.setId))
                        return "setId: integer expected";
                if (message.isFinished != null && message.hasOwnProperty("isFinished"))
                    if (typeof message.isFinished !== "boolean")
                        return "isFinished: boolean expected";
                return null;
            };

            Window.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.db.Window)
                    return object;
                let message = new $root.prb.db.Window();
                if (object.parentStartBlock != null)
                    message.parentStartBlock = object.parentStartBlock | 0;
                if (object.parentStopBlock != null)
                    message.parentStopBlock = object.parentStopBlock | 0;
                if (object.paraStartBlock != null)
                    message.paraStartBlock = object.paraStartBlock | 0;
                if (object.paraStopBlock != null)
                    message.paraStopBlock = object.paraStopBlock | 0;
                if (object.windowId != null)
                    message.windowId = object.windowId | 0;
                if (object.setId != null)
                    message.setId = object.setId | 0;
                if (object.isFinished != null)
                    message.isFinished = Boolean(object.isFinished);
                return message;
            };

            Window.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.parentStartBlock = 0;
                    object.parentStopBlock = 0;
                    object.paraStartBlock = 0;
                    object.paraStopBlock = 0;
                    object.windowId = 0;
                    object.setId = 0;
                    object.isFinished = false;
                }
                if (message.parentStartBlock != null && message.hasOwnProperty("parentStartBlock"))
                    object.parentStartBlock = message.parentStartBlock;
                if (message.parentStopBlock != null && message.hasOwnProperty("parentStopBlock"))
                    object.parentStopBlock = message.parentStopBlock;
                if (message.paraStartBlock != null && message.hasOwnProperty("paraStartBlock"))
                    object.paraStartBlock = message.paraStartBlock;
                if (message.paraStopBlock != null && message.hasOwnProperty("paraStopBlock"))
                    object.paraStopBlock = message.paraStopBlock;
                if (message.windowId != null && message.hasOwnProperty("windowId"))
                    object.windowId = message.windowId;
                if (message.setId != null && message.hasOwnProperty("setId"))
                    object.setId = message.setId;
                if (message.isFinished != null && message.hasOwnProperty("isFinished"))
                    object.isFinished = message.isFinished;
                return object;
            };

            Window.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Window;
        })();

        db.RangeMeta = (function() {

            function RangeMeta(properties) {
                this.parentRange = [];
                this.paraRange = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            RangeMeta.prototype.parentStartBlock = 0;
            RangeMeta.prototype.parentStopBlock = 0;
            RangeMeta.prototype.paraStartBlock = 0;
            RangeMeta.prototype.paraStopBlock = 0;
            RangeMeta.prototype.parentRange = $util.emptyArray;
            RangeMeta.prototype.paraRange = $util.emptyArray;
            RangeMeta.prototype.drySyncHeaderReqKey = "";
            RangeMeta.prototype.latestSetId = 0;
            RangeMeta.prototype.blobParentStopBlock = 0;
            RangeMeta.prototype.blobParaStopBlock = 0;
            RangeMeta.prototype.blobSyncHeaderReqKey = "";

            RangeMeta.create = function create(properties) {
                return new RangeMeta(properties);
            };

            RangeMeta.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.parentStartBlock != null && Object.hasOwnProperty.call(message, "parentStartBlock"))
                    writer.uint32(8).uint32(message.parentStartBlock);
                if (message.parentStopBlock != null && Object.hasOwnProperty.call(message, "parentStopBlock"))
                    writer.uint32(16).uint32(message.parentStopBlock);
                if (message.paraStartBlock != null && Object.hasOwnProperty.call(message, "paraStartBlock"))
                    writer.uint32(24).int32(message.paraStartBlock);
                if (message.paraStopBlock != null && Object.hasOwnProperty.call(message, "paraStopBlock"))
                    writer.uint32(32).int32(message.paraStopBlock);
                if (message.parentRange != null && message.parentRange.length) {
                    writer.uint32(42).fork();
                    for (let i = 0; i < message.parentRange.length; ++i)
                        writer.uint32(message.parentRange[i]);
                    writer.ldelim();
                }
                if (message.paraRange != null && message.paraRange.length) {
                    writer.uint32(50).fork();
                    for (let i = 0; i < message.paraRange.length; ++i)
                        writer.uint32(message.paraRange[i]);
                    writer.ldelim();
                }
                if (message.drySyncHeaderReqKey != null && Object.hasOwnProperty.call(message, "drySyncHeaderReqKey"))
                    writer.uint32(58).string(message.drySyncHeaderReqKey);
                if (message.latestSetId != null && Object.hasOwnProperty.call(message, "latestSetId"))
                    writer.uint32(64).int32(message.latestSetId);
                if (message.blobParentStopBlock != null && Object.hasOwnProperty.call(message, "blobParentStopBlock"))
                    writer.uint32(72).uint32(message.blobParentStopBlock);
                if (message.blobParaStopBlock != null && Object.hasOwnProperty.call(message, "blobParaStopBlock"))
                    writer.uint32(80).int32(message.blobParaStopBlock);
                if (message.blobSyncHeaderReqKey != null && Object.hasOwnProperty.call(message, "blobSyncHeaderReqKey"))
                    writer.uint32(90).string(message.blobSyncHeaderReqKey);
                return writer;
            };

            RangeMeta.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            RangeMeta.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.db.RangeMeta();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.parentStartBlock = reader.uint32();
                        break;
                    case 2:
                        message.parentStopBlock = reader.uint32();
                        break;
                    case 3:
                        message.paraStartBlock = reader.int32();
                        break;
                    case 4:
                        message.paraStopBlock = reader.int32();
                        break;
                    case 5:
                        if (!(message.parentRange && message.parentRange.length))
                            message.parentRange = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.parentRange.push(reader.uint32());
                        } else
                            message.parentRange.push(reader.uint32());
                        break;
                    case 6:
                        if (!(message.paraRange && message.paraRange.length))
                            message.paraRange = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.paraRange.push(reader.uint32());
                        } else
                            message.paraRange.push(reader.uint32());
                        break;
                    case 7:
                        message.drySyncHeaderReqKey = reader.string();
                        break;
                    case 8:
                        message.latestSetId = reader.int32();
                        break;
                    case 9:
                        message.blobParentStopBlock = reader.uint32();
                        break;
                    case 10:
                        message.blobParaStopBlock = reader.int32();
                        break;
                    case 11:
                        message.blobSyncHeaderReqKey = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            RangeMeta.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            RangeMeta.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.parentStartBlock != null && message.hasOwnProperty("parentStartBlock"))
                    if (!$util.isInteger(message.parentStartBlock))
                        return "parentStartBlock: integer expected";
                if (message.parentStopBlock != null && message.hasOwnProperty("parentStopBlock"))
                    if (!$util.isInteger(message.parentStopBlock))
                        return "parentStopBlock: integer expected";
                if (message.paraStartBlock != null && message.hasOwnProperty("paraStartBlock"))
                    if (!$util.isInteger(message.paraStartBlock))
                        return "paraStartBlock: integer expected";
                if (message.paraStopBlock != null && message.hasOwnProperty("paraStopBlock"))
                    if (!$util.isInteger(message.paraStopBlock))
                        return "paraStopBlock: integer expected";
                if (message.parentRange != null && message.hasOwnProperty("parentRange")) {
                    if (!Array.isArray(message.parentRange))
                        return "parentRange: array expected";
                    for (let i = 0; i < message.parentRange.length; ++i)
                        if (!$util.isInteger(message.parentRange[i]))
                            return "parentRange: integer[] expected";
                }
                if (message.paraRange != null && message.hasOwnProperty("paraRange")) {
                    if (!Array.isArray(message.paraRange))
                        return "paraRange: array expected";
                    for (let i = 0; i < message.paraRange.length; ++i)
                        if (!$util.isInteger(message.paraRange[i]))
                            return "paraRange: integer[] expected";
                }
                if (message.drySyncHeaderReqKey != null && message.hasOwnProperty("drySyncHeaderReqKey"))
                    if (!$util.isString(message.drySyncHeaderReqKey))
                        return "drySyncHeaderReqKey: string expected";
                if (message.latestSetId != null && message.hasOwnProperty("latestSetId"))
                    if (!$util.isInteger(message.latestSetId))
                        return "latestSetId: integer expected";
                if (message.blobParentStopBlock != null && message.hasOwnProperty("blobParentStopBlock"))
                    if (!$util.isInteger(message.blobParentStopBlock))
                        return "blobParentStopBlock: integer expected";
                if (message.blobParaStopBlock != null && message.hasOwnProperty("blobParaStopBlock"))
                    if (!$util.isInteger(message.blobParaStopBlock))
                        return "blobParaStopBlock: integer expected";
                if (message.blobSyncHeaderReqKey != null && message.hasOwnProperty("blobSyncHeaderReqKey"))
                    if (!$util.isString(message.blobSyncHeaderReqKey))
                        return "blobSyncHeaderReqKey: string expected";
                return null;
            };

            RangeMeta.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.db.RangeMeta)
                    return object;
                let message = new $root.prb.db.RangeMeta();
                if (object.parentStartBlock != null)
                    message.parentStartBlock = object.parentStartBlock >>> 0;
                if (object.parentStopBlock != null)
                    message.parentStopBlock = object.parentStopBlock >>> 0;
                if (object.paraStartBlock != null)
                    message.paraStartBlock = object.paraStartBlock | 0;
                if (object.paraStopBlock != null)
                    message.paraStopBlock = object.paraStopBlock | 0;
                if (object.parentRange) {
                    if (!Array.isArray(object.parentRange))
                        throw TypeError(".prb.db.RangeMeta.parentRange: array expected");
                    message.parentRange = [];
                    for (let i = 0; i < object.parentRange.length; ++i)
                        message.parentRange[i] = object.parentRange[i] >>> 0;
                }
                if (object.paraRange) {
                    if (!Array.isArray(object.paraRange))
                        throw TypeError(".prb.db.RangeMeta.paraRange: array expected");
                    message.paraRange = [];
                    for (let i = 0; i < object.paraRange.length; ++i)
                        message.paraRange[i] = object.paraRange[i] >>> 0;
                }
                if (object.drySyncHeaderReqKey != null)
                    message.drySyncHeaderReqKey = String(object.drySyncHeaderReqKey);
                if (object.latestSetId != null)
                    message.latestSetId = object.latestSetId | 0;
                if (object.blobParentStopBlock != null)
                    message.blobParentStopBlock = object.blobParentStopBlock >>> 0;
                if (object.blobParaStopBlock != null)
                    message.blobParaStopBlock = object.blobParaStopBlock | 0;
                if (object.blobSyncHeaderReqKey != null)
                    message.blobSyncHeaderReqKey = String(object.blobSyncHeaderReqKey);
                return message;
            };

            RangeMeta.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.parentRange = [];
                    object.paraRange = [];
                }
                if (options.defaults) {
                    object.parentStartBlock = 0;
                    object.parentStopBlock = 0;
                    object.paraStartBlock = 0;
                    object.paraStopBlock = 0;
                    object.drySyncHeaderReqKey = "";
                    object.latestSetId = 0;
                    object.blobParentStopBlock = 0;
                    object.blobParaStopBlock = 0;
                    object.blobSyncHeaderReqKey = "";
                }
                if (message.parentStartBlock != null && message.hasOwnProperty("parentStartBlock"))
                    object.parentStartBlock = message.parentStartBlock;
                if (message.parentStopBlock != null && message.hasOwnProperty("parentStopBlock"))
                    object.parentStopBlock = message.parentStopBlock;
                if (message.paraStartBlock != null && message.hasOwnProperty("paraStartBlock"))
                    object.paraStartBlock = message.paraStartBlock;
                if (message.paraStopBlock != null && message.hasOwnProperty("paraStopBlock"))
                    object.paraStopBlock = message.paraStopBlock;
                if (message.parentRange && message.parentRange.length) {
                    object.parentRange = [];
                    for (let j = 0; j < message.parentRange.length; ++j)
                        object.parentRange[j] = message.parentRange[j];
                }
                if (message.paraRange && message.paraRange.length) {
                    object.paraRange = [];
                    for (let j = 0; j < message.paraRange.length; ++j)
                        object.paraRange[j] = message.paraRange[j];
                }
                if (message.drySyncHeaderReqKey != null && message.hasOwnProperty("drySyncHeaderReqKey"))
                    object.drySyncHeaderReqKey = message.drySyncHeaderReqKey;
                if (message.latestSetId != null && message.hasOwnProperty("latestSetId"))
                    object.latestSetId = message.latestSetId;
                if (message.blobParentStopBlock != null && message.hasOwnProperty("blobParentStopBlock"))
                    object.blobParentStopBlock = message.blobParentStopBlock;
                if (message.blobParaStopBlock != null && message.hasOwnProperty("blobParaStopBlock"))
                    object.blobParaStopBlock = message.blobParaStopBlock;
                if (message.blobSyncHeaderReqKey != null && message.hasOwnProperty("blobSyncHeaderReqKey"))
                    object.blobSyncHeaderReqKey = message.blobSyncHeaderReqKey;
                return object;
            };

            RangeMeta.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RangeMeta;
        })();

        db.Pool = (function() {

            function Pool(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Pool.prototype.uuid = "";
            Pool.prototype.owner = null;
            Pool.prototype.pid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            Pool.prototype.name = "";
            Pool.prototype.enabled = false;
            Pool.prototype.deleted = false;
            Pool.prototype.realPhalaSs58 = "";
            Pool.prototype.syncOnly = false;

            Pool.create = function create(properties) {
                return new Pool(properties);
            };

            Pool.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(10).string(message.uuid);
                if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                    $root.prb.FullAccount.encode(message.owner, writer.uint32(18).fork()).ldelim();
                if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                    writer.uint32(24).uint64(message.pid);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(34).string(message.name);
                if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                    writer.uint32(40).bool(message.enabled);
                if (message.deleted != null && Object.hasOwnProperty.call(message, "deleted"))
                    writer.uint32(48).bool(message.deleted);
                if (message.realPhalaSs58 != null && Object.hasOwnProperty.call(message, "realPhalaSs58"))
                    writer.uint32(58).string(message.realPhalaSs58);
                if (message.syncOnly != null && Object.hasOwnProperty.call(message, "syncOnly"))
                    writer.uint32(64).bool(message.syncOnly);
                return writer;
            };

            Pool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Pool.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.db.Pool();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uuid = reader.string();
                        break;
                    case 2:
                        message.owner = $root.prb.FullAccount.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.pid = reader.uint64();
                        break;
                    case 4:
                        message.name = reader.string();
                        break;
                    case 5:
                        message.enabled = reader.bool();
                        break;
                    case 6:
                        message.deleted = reader.bool();
                        break;
                    case 7:
                        message.realPhalaSs58 = reader.string();
                        break;
                    case 8:
                        message.syncOnly = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Pool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            Pool.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.owner != null && message.hasOwnProperty("owner")) {
                    let error = $root.prb.FullAccount.verify(message.owner);
                    if (error)
                        return "owner." + error;
                }
                if (message.pid != null && message.hasOwnProperty("pid"))
                    if (!$util.isInteger(message.pid) && !(message.pid && $util.isInteger(message.pid.low) && $util.isInteger(message.pid.high)))
                        return "pid: integer|Long expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.enabled != null && message.hasOwnProperty("enabled"))
                    if (typeof message.enabled !== "boolean")
                        return "enabled: boolean expected";
                if (message.deleted != null && message.hasOwnProperty("deleted"))
                    if (typeof message.deleted !== "boolean")
                        return "deleted: boolean expected";
                if (message.realPhalaSs58 != null && message.hasOwnProperty("realPhalaSs58"))
                    if (!$util.isString(message.realPhalaSs58))
                        return "realPhalaSs58: string expected";
                if (message.syncOnly != null && message.hasOwnProperty("syncOnly"))
                    if (typeof message.syncOnly !== "boolean")
                        return "syncOnly: boolean expected";
                return null;
            };

            Pool.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.db.Pool)
                    return object;
                let message = new $root.prb.db.Pool();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.owner != null) {
                    if (typeof object.owner !== "object")
                        throw TypeError(".prb.db.Pool.owner: object expected");
                    message.owner = $root.prb.FullAccount.fromObject(object.owner);
                }
                if (object.pid != null)
                    if ($util.Long)
                        (message.pid = $util.Long.fromValue(object.pid)).unsigned = true;
                    else if (typeof object.pid === "string")
                        message.pid = parseInt(object.pid, 10);
                    else if (typeof object.pid === "number")
                        message.pid = object.pid;
                    else if (typeof object.pid === "object")
                        message.pid = new $util.LongBits(object.pid.low >>> 0, object.pid.high >>> 0).toNumber(true);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.enabled != null)
                    message.enabled = Boolean(object.enabled);
                if (object.deleted != null)
                    message.deleted = Boolean(object.deleted);
                if (object.realPhalaSs58 != null)
                    message.realPhalaSs58 = String(object.realPhalaSs58);
                if (object.syncOnly != null)
                    message.syncOnly = Boolean(object.syncOnly);
                return message;
            };

            Pool.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.uuid = "";
                    object.owner = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.pid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.pid = options.longs === String ? "0" : 0;
                    object.name = "";
                    object.enabled = false;
                    object.deleted = false;
                    object.realPhalaSs58 = "";
                    object.syncOnly = false;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.owner != null && message.hasOwnProperty("owner"))
                    object.owner = $root.prb.FullAccount.toObject(message.owner, options);
                if (message.pid != null && message.hasOwnProperty("pid"))
                    if (typeof message.pid === "number")
                        object.pid = options.longs === String ? String(message.pid) : message.pid;
                    else
                        object.pid = options.longs === String ? $util.Long.prototype.toString.call(message.pid) : options.longs === Number ? new $util.LongBits(message.pid.low >>> 0, message.pid.high >>> 0).toNumber(true) : message.pid;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.enabled != null && message.hasOwnProperty("enabled"))
                    object.enabled = message.enabled;
                if (message.deleted != null && message.hasOwnProperty("deleted"))
                    object.deleted = message.deleted;
                if (message.realPhalaSs58 != null && message.hasOwnProperty("realPhalaSs58"))
                    object.realPhalaSs58 = message.realPhalaSs58;
                if (message.syncOnly != null && message.hasOwnProperty("syncOnly"))
                    object.syncOnly = message.syncOnly;
                return object;
            };

            Pool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Pool;
        })();

        db.Worker = (function() {

            function Worker(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Worker.prototype.uuid = "";
            Worker.prototype.pid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            Worker.prototype.name = "";
            Worker.prototype.endpoint = "";
            Worker.prototype.enabled = false;
            Worker.prototype.deleted = false;
            Worker.prototype.stake = "";
            Worker.prototype.syncOnly = false;

            Worker.create = function create(properties) {
                return new Worker(properties);
            };

            Worker.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(10).string(message.uuid);
                if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                    writer.uint32(16).uint64(message.pid);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(26).string(message.name);
                if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                    writer.uint32(34).string(message.endpoint);
                if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                    writer.uint32(40).bool(message.enabled);
                if (message.deleted != null && Object.hasOwnProperty.call(message, "deleted"))
                    writer.uint32(48).bool(message.deleted);
                if (message.stake != null && Object.hasOwnProperty.call(message, "stake"))
                    writer.uint32(58).string(message.stake);
                if (message.syncOnly != null && Object.hasOwnProperty.call(message, "syncOnly"))
                    writer.uint32(64).bool(message.syncOnly);
                return writer;
            };

            Worker.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Worker.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.db.Worker();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uuid = reader.string();
                        break;
                    case 2:
                        message.pid = reader.uint64();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.endpoint = reader.string();
                        break;
                    case 5:
                        message.enabled = reader.bool();
                        break;
                    case 6:
                        message.deleted = reader.bool();
                        break;
                    case 7:
                        message.stake = reader.string();
                        break;
                    case 8:
                        message.syncOnly = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Worker.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            Worker.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.pid != null && message.hasOwnProperty("pid"))
                    if (!$util.isInteger(message.pid) && !(message.pid && $util.isInteger(message.pid.low) && $util.isInteger(message.pid.high)))
                        return "pid: integer|Long expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                    if (!$util.isString(message.endpoint))
                        return "endpoint: string expected";
                if (message.enabled != null && message.hasOwnProperty("enabled"))
                    if (typeof message.enabled !== "boolean")
                        return "enabled: boolean expected";
                if (message.deleted != null && message.hasOwnProperty("deleted"))
                    if (typeof message.deleted !== "boolean")
                        return "deleted: boolean expected";
                if (message.stake != null && message.hasOwnProperty("stake"))
                    if (!$util.isString(message.stake))
                        return "stake: string expected";
                if (message.syncOnly != null && message.hasOwnProperty("syncOnly"))
                    if (typeof message.syncOnly !== "boolean")
                        return "syncOnly: boolean expected";
                return null;
            };

            Worker.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.db.Worker)
                    return object;
                let message = new $root.prb.db.Worker();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.pid != null)
                    if ($util.Long)
                        (message.pid = $util.Long.fromValue(object.pid)).unsigned = true;
                    else if (typeof object.pid === "string")
                        message.pid = parseInt(object.pid, 10);
                    else if (typeof object.pid === "number")
                        message.pid = object.pid;
                    else if (typeof object.pid === "object")
                        message.pid = new $util.LongBits(object.pid.low >>> 0, object.pid.high >>> 0).toNumber(true);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.endpoint != null)
                    message.endpoint = String(object.endpoint);
                if (object.enabled != null)
                    message.enabled = Boolean(object.enabled);
                if (object.deleted != null)
                    message.deleted = Boolean(object.deleted);
                if (object.stake != null)
                    message.stake = String(object.stake);
                if (object.syncOnly != null)
                    message.syncOnly = Boolean(object.syncOnly);
                return message;
            };

            Worker.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.uuid = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.pid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.pid = options.longs === String ? "0" : 0;
                    object.name = "";
                    object.endpoint = "";
                    object.enabled = false;
                    object.deleted = false;
                    object.stake = "";
                    object.syncOnly = false;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.pid != null && message.hasOwnProperty("pid"))
                    if (typeof message.pid === "number")
                        object.pid = options.longs === String ? String(message.pid) : message.pid;
                    else
                        object.pid = options.longs === String ? $util.Long.prototype.toString.call(message.pid) : options.longs === Number ? new $util.LongBits(message.pid.low >>> 0, message.pid.high >>> 0).toNumber(true) : message.pid;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                    object.endpoint = message.endpoint;
                if (message.enabled != null && message.hasOwnProperty("enabled"))
                    object.enabled = message.enabled;
                if (message.deleted != null && message.hasOwnProperty("deleted"))
                    object.deleted = message.deleted;
                if (message.stake != null && message.hasOwnProperty("stake"))
                    object.stake = message.stake;
                if (message.syncOnly != null && message.hasOwnProperty("syncOnly"))
                    object.syncOnly = message.syncOnly;
                return object;
            };

            Worker.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Worker;
        })();

        return db;
    })();

    prb.data_provider = (function() {

        const data_provider = {};

        data_provider.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "S_UNKNOWN"] = 0;
            values[valuesById[1] = "S_SYHCHING"] = 1;
            values[valuesById[2] = "S_IDLE"] = 2;
            return values;
        })();

        data_provider.BlobType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BT_UNKNOWN"] = 0;
            values[valuesById[1] = "BT_PARENT_BLOCK"] = 1;
            values[valuesById[2] = "BT_PARA_BLOCK"] = 2;
            return values;
        })();

        data_provider.Info = (function() {

            function Info(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Info.prototype.status = 0;
            Info.prototype.paraId = 0;
            Info.prototype.parentStartHeader = 0;
            Info.prototype.parentTarget = 0;
            Info.prototype.parentFetchedHeight = 0;
            Info.prototype.parentProcessedHeight = 0;
            Info.prototype.parentCommittedHeight = 0;
            Info.prototype.paraTarget = 0;
            Info.prototype.paraFetchedHeight = 0;
            Info.prototype.paraProcessedHeight = 0;
            Info.prototype.paraCommittedHeight = 0;
            Info.prototype.blobServerPort = 0;

            Info.create = function create(properties) {
                return new Info(properties);
            };

            Info.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(8).int32(message.status);
                if (message.paraId != null && Object.hasOwnProperty.call(message, "paraId"))
                    writer.uint32(16).int32(message.paraId);
                if (message.parentStartHeader != null && Object.hasOwnProperty.call(message, "parentStartHeader"))
                    writer.uint32(24).int32(message.parentStartHeader);
                if (message.parentTarget != null && Object.hasOwnProperty.call(message, "parentTarget"))
                    writer.uint32(32).int32(message.parentTarget);
                if (message.parentFetchedHeight != null && Object.hasOwnProperty.call(message, "parentFetchedHeight"))
                    writer.uint32(40).int32(message.parentFetchedHeight);
                if (message.parentProcessedHeight != null && Object.hasOwnProperty.call(message, "parentProcessedHeight"))
                    writer.uint32(48).int32(message.parentProcessedHeight);
                if (message.parentCommittedHeight != null && Object.hasOwnProperty.call(message, "parentCommittedHeight"))
                    writer.uint32(56).int32(message.parentCommittedHeight);
                if (message.paraTarget != null && Object.hasOwnProperty.call(message, "paraTarget"))
                    writer.uint32(64).int32(message.paraTarget);
                if (message.paraFetchedHeight != null && Object.hasOwnProperty.call(message, "paraFetchedHeight"))
                    writer.uint32(72).int32(message.paraFetchedHeight);
                if (message.paraProcessedHeight != null && Object.hasOwnProperty.call(message, "paraProcessedHeight"))
                    writer.uint32(80).int32(message.paraProcessedHeight);
                if (message.paraCommittedHeight != null && Object.hasOwnProperty.call(message, "paraCommittedHeight"))
                    writer.uint32(88).int32(message.paraCommittedHeight);
                if (message.blobServerPort != null && Object.hasOwnProperty.call(message, "blobServerPort"))
                    writer.uint32(96).uint32(message.blobServerPort);
                return writer;
            };

            Info.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Info.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.Info();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.paraId = reader.int32();
                        break;
                    case 3:
                        message.parentStartHeader = reader.int32();
                        break;
                    case 4:
                        message.parentTarget = reader.int32();
                        break;
                    case 5:
                        message.parentFetchedHeight = reader.int32();
                        break;
                    case 6:
                        message.parentProcessedHeight = reader.int32();
                        break;
                    case 7:
                        message.parentCommittedHeight = reader.int32();
                        break;
                    case 8:
                        message.paraTarget = reader.int32();
                        break;
                    case 9:
                        message.paraFetchedHeight = reader.int32();
                        break;
                    case 10:
                        message.paraProcessedHeight = reader.int32();
                        break;
                    case 11:
                        message.paraCommittedHeight = reader.int32();
                        break;
                    case 12:
                        message.blobServerPort = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Info.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            Info.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.paraId != null && message.hasOwnProperty("paraId"))
                    if (!$util.isInteger(message.paraId))
                        return "paraId: integer expected";
                if (message.parentStartHeader != null && message.hasOwnProperty("parentStartHeader"))
                    if (!$util.isInteger(message.parentStartHeader))
                        return "parentStartHeader: integer expected";
                if (message.parentTarget != null && message.hasOwnProperty("parentTarget"))
                    if (!$util.isInteger(message.parentTarget))
                        return "parentTarget: integer expected";
                if (message.parentFetchedHeight != null && message.hasOwnProperty("parentFetchedHeight"))
                    if (!$util.isInteger(message.parentFetchedHeight))
                        return "parentFetchedHeight: integer expected";
                if (message.parentProcessedHeight != null && message.hasOwnProperty("parentProcessedHeight"))
                    if (!$util.isInteger(message.parentProcessedHeight))
                        return "parentProcessedHeight: integer expected";
                if (message.parentCommittedHeight != null && message.hasOwnProperty("parentCommittedHeight"))
                    if (!$util.isInteger(message.parentCommittedHeight))
                        return "parentCommittedHeight: integer expected";
                if (message.paraTarget != null && message.hasOwnProperty("paraTarget"))
                    if (!$util.isInteger(message.paraTarget))
                        return "paraTarget: integer expected";
                if (message.paraFetchedHeight != null && message.hasOwnProperty("paraFetchedHeight"))
                    if (!$util.isInteger(message.paraFetchedHeight))
                        return "paraFetchedHeight: integer expected";
                if (message.paraProcessedHeight != null && message.hasOwnProperty("paraProcessedHeight"))
                    if (!$util.isInteger(message.paraProcessedHeight))
                        return "paraProcessedHeight: integer expected";
                if (message.paraCommittedHeight != null && message.hasOwnProperty("paraCommittedHeight"))
                    if (!$util.isInteger(message.paraCommittedHeight))
                        return "paraCommittedHeight: integer expected";
                if (message.blobServerPort != null && message.hasOwnProperty("blobServerPort"))
                    if (!$util.isInteger(message.blobServerPort))
                        return "blobServerPort: integer expected";
                return null;
            };

            Info.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.data_provider.Info)
                    return object;
                let message = new $root.prb.data_provider.Info();
                switch (object.status) {
                case "S_UNKNOWN":
                case 0:
                    message.status = 0;
                    break;
                case "S_SYHCHING":
                case 1:
                    message.status = 1;
                    break;
                case "S_IDLE":
                case 2:
                    message.status = 2;
                    break;
                }
                if (object.paraId != null)
                    message.paraId = object.paraId | 0;
                if (object.parentStartHeader != null)
                    message.parentStartHeader = object.parentStartHeader | 0;
                if (object.parentTarget != null)
                    message.parentTarget = object.parentTarget | 0;
                if (object.parentFetchedHeight != null)
                    message.parentFetchedHeight = object.parentFetchedHeight | 0;
                if (object.parentProcessedHeight != null)
                    message.parentProcessedHeight = object.parentProcessedHeight | 0;
                if (object.parentCommittedHeight != null)
                    message.parentCommittedHeight = object.parentCommittedHeight | 0;
                if (object.paraTarget != null)
                    message.paraTarget = object.paraTarget | 0;
                if (object.paraFetchedHeight != null)
                    message.paraFetchedHeight = object.paraFetchedHeight | 0;
                if (object.paraProcessedHeight != null)
                    message.paraProcessedHeight = object.paraProcessedHeight | 0;
                if (object.paraCommittedHeight != null)
                    message.paraCommittedHeight = object.paraCommittedHeight | 0;
                if (object.blobServerPort != null)
                    message.blobServerPort = object.blobServerPort >>> 0;
                return message;
            };

            Info.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.status = options.enums === String ? "S_UNKNOWN" : 0;
                    object.paraId = 0;
                    object.parentStartHeader = 0;
                    object.parentTarget = 0;
                    object.parentFetchedHeight = 0;
                    object.parentProcessedHeight = 0;
                    object.parentCommittedHeight = 0;
                    object.paraTarget = 0;
                    object.paraFetchedHeight = 0;
                    object.paraProcessedHeight = 0;
                    object.paraCommittedHeight = 0;
                    object.blobServerPort = 0;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.prb.data_provider.Status[message.status] : message.status;
                if (message.paraId != null && message.hasOwnProperty("paraId"))
                    object.paraId = message.paraId;
                if (message.parentStartHeader != null && message.hasOwnProperty("parentStartHeader"))
                    object.parentStartHeader = message.parentStartHeader;
                if (message.parentTarget != null && message.hasOwnProperty("parentTarget"))
                    object.parentTarget = message.parentTarget;
                if (message.parentFetchedHeight != null && message.hasOwnProperty("parentFetchedHeight"))
                    object.parentFetchedHeight = message.parentFetchedHeight;
                if (message.parentProcessedHeight != null && message.hasOwnProperty("parentProcessedHeight"))
                    object.parentProcessedHeight = message.parentProcessedHeight;
                if (message.parentCommittedHeight != null && message.hasOwnProperty("parentCommittedHeight"))
                    object.parentCommittedHeight = message.parentCommittedHeight;
                if (message.paraTarget != null && message.hasOwnProperty("paraTarget"))
                    object.paraTarget = message.paraTarget;
                if (message.paraFetchedHeight != null && message.hasOwnProperty("paraFetchedHeight"))
                    object.paraFetchedHeight = message.paraFetchedHeight;
                if (message.paraProcessedHeight != null && message.hasOwnProperty("paraProcessedHeight"))
                    object.paraProcessedHeight = message.paraProcessedHeight;
                if (message.paraCommittedHeight != null && message.hasOwnProperty("paraCommittedHeight"))
                    object.paraCommittedHeight = message.paraCommittedHeight;
                if (message.blobServerPort != null && message.hasOwnProperty("blobServerPort"))
                    object.blobServerPort = message.blobServerPort;
                return object;
            };

            Info.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Info;
        })();

        data_provider.WantBlob = (function() {

            function WantBlob(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            WantBlob.prototype.number = 0;
            WantBlob.prototype.type = 0;

            WantBlob.create = function create(properties) {
                return new WantBlob(properties);
            };

            WantBlob.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(8).uint32(message.number);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(16).int32(message.type);
                return writer;
            };

            WantBlob.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            WantBlob.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.WantBlob();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.number = reader.uint32();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            WantBlob.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            WantBlob.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            WantBlob.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.data_provider.WantBlob)
                    return object;
                let message = new $root.prb.data_provider.WantBlob();
                if (object.number != null)
                    message.number = object.number >>> 0;
                switch (object.type) {
                case "BT_UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "BT_PARENT_BLOCK":
                case 1:
                    message.type = 1;
                    break;
                case "BT_PARA_BLOCK":
                case 2:
                    message.type = 2;
                    break;
                }
                return message;
            };

            WantBlob.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.number = 0;
                    object.type = options.enums === String ? "BT_UNKNOWN" : 0;
                }
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.prb.data_provider.BlobType[message.type] : message.type;
                return object;
            };

            WantBlob.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WantBlob;
        })();

        data_provider.BlobMeta = (function() {

            function BlobMeta(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            BlobMeta.prototype.number = 0;
            BlobMeta.prototype.hash = $util.newBuffer([]);
            BlobMeta.prototype.originPeer = "";
            BlobMeta.prototype.type = 0;
            BlobMeta.prototype.getToken = "";
            BlobMeta.prototype.tokenExpiresAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            BlobMeta.create = function create(properties) {
                return new BlobMeta(properties);
            };

            BlobMeta.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(8).uint32(message.number);
                if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                    writer.uint32(18).bytes(message.hash);
                if (message.originPeer != null && Object.hasOwnProperty.call(message, "originPeer"))
                    writer.uint32(26).string(message.originPeer);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(32).int32(message.type);
                if (message.getToken != null && Object.hasOwnProperty.call(message, "getToken"))
                    writer.uint32(42).string(message.getToken);
                if (message.tokenExpiresAt != null && Object.hasOwnProperty.call(message, "tokenExpiresAt"))
                    writer.uint32(48).uint64(message.tokenExpiresAt);
                return writer;
            };

            BlobMeta.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            BlobMeta.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.BlobMeta();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.number = reader.uint32();
                        break;
                    case 2:
                        message.hash = reader.bytes();
                        break;
                    case 3:
                        message.originPeer = reader.string();
                        break;
                    case 4:
                        message.type = reader.int32();
                        break;
                    case 5:
                        message.getToken = reader.string();
                        break;
                    case 6:
                        message.tokenExpiresAt = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            BlobMeta.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            BlobMeta.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                        return "hash: buffer expected";
                if (message.originPeer != null && message.hasOwnProperty("originPeer"))
                    if (!$util.isString(message.originPeer))
                        return "originPeer: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.getToken != null && message.hasOwnProperty("getToken"))
                    if (!$util.isString(message.getToken))
                        return "getToken: string expected";
                if (message.tokenExpiresAt != null && message.hasOwnProperty("tokenExpiresAt"))
                    if (!$util.isInteger(message.tokenExpiresAt) && !(message.tokenExpiresAt && $util.isInteger(message.tokenExpiresAt.low) && $util.isInteger(message.tokenExpiresAt.high)))
                        return "tokenExpiresAt: integer|Long expected";
                return null;
            };

            BlobMeta.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.data_provider.BlobMeta)
                    return object;
                let message = new $root.prb.data_provider.BlobMeta();
                if (object.number != null)
                    message.number = object.number >>> 0;
                if (object.hash != null)
                    if (typeof object.hash === "string")
                        $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                    else if (object.hash.length)
                        message.hash = object.hash;
                if (object.originPeer != null)
                    message.originPeer = String(object.originPeer);
                switch (object.type) {
                case "BT_UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "BT_PARENT_BLOCK":
                case 1:
                    message.type = 1;
                    break;
                case "BT_PARA_BLOCK":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.getToken != null)
                    message.getToken = String(object.getToken);
                if (object.tokenExpiresAt != null)
                    if ($util.Long)
                        (message.tokenExpiresAt = $util.Long.fromValue(object.tokenExpiresAt)).unsigned = true;
                    else if (typeof object.tokenExpiresAt === "string")
                        message.tokenExpiresAt = parseInt(object.tokenExpiresAt, 10);
                    else if (typeof object.tokenExpiresAt === "number")
                        message.tokenExpiresAt = object.tokenExpiresAt;
                    else if (typeof object.tokenExpiresAt === "object")
                        message.tokenExpiresAt = new $util.LongBits(object.tokenExpiresAt.low >>> 0, object.tokenExpiresAt.high >>> 0).toNumber(true);
                return message;
            };

            BlobMeta.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.number = 0;
                    if (options.bytes === String)
                        object.hash = "";
                    else {
                        object.hash = [];
                        if (options.bytes !== Array)
                            object.hash = $util.newBuffer(object.hash);
                    }
                    object.originPeer = "";
                    object.type = options.enums === String ? "BT_UNKNOWN" : 0;
                    object.getToken = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.tokenExpiresAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.tokenExpiresAt = options.longs === String ? "0" : 0;
                }
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.hash != null && message.hasOwnProperty("hash"))
                    object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                if (message.originPeer != null && message.hasOwnProperty("originPeer"))
                    object.originPeer = message.originPeer;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.prb.data_provider.BlobType[message.type] : message.type;
                if (message.getToken != null && message.hasOwnProperty("getToken"))
                    object.getToken = message.getToken;
                if (message.tokenExpiresAt != null && message.hasOwnProperty("tokenExpiresAt"))
                    if (typeof message.tokenExpiresAt === "number")
                        object.tokenExpiresAt = options.longs === String ? String(message.tokenExpiresAt) : message.tokenExpiresAt;
                    else
                        object.tokenExpiresAt = options.longs === String ? $util.Long.prototype.toString.call(message.tokenExpiresAt) : options.longs === Number ? new $util.LongBits(message.tokenExpiresAt.low >>> 0, message.tokenExpiresAt.high >>> 0).toNumber(true) : message.tokenExpiresAt;
                return object;
            };

            BlobMeta.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BlobMeta;
        })();

        data_provider.GetBlob = (function() {

            function GetBlob(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            GetBlob.prototype.token = "";

            GetBlob.create = function create(properties) {
                return new GetBlob(properties);
            };

            GetBlob.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(10).string(message.token);
                return writer;
            };

            GetBlob.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            GetBlob.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.GetBlob();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.token = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            GetBlob.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            GetBlob.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };

            GetBlob.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.data_provider.GetBlob)
                    return object;
                let message = new $root.prb.data_provider.GetBlob();
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };

            GetBlob.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.token = "";
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };

            GetBlob.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetBlob;
        })();

        data_provider.Blob = (function() {

            function Blob(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Blob.prototype.type = 0;
            Blob.prototype.number = 0;
            Blob.prototype.data = $util.newBuffer([]);

            Blob.create = function create(properties) {
                return new Blob(properties);
            };

            Blob.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(8).int32(message.type);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(16).uint32(message.number);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(26).bytes(message.data);
                return writer;
            };

            Blob.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Blob.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.Blob();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.number = reader.uint32();
                        break;
                    case 3:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Blob.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            Blob.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            Blob.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.data_provider.Blob)
                    return object;
                let message = new $root.prb.data_provider.Blob();
                switch (object.type) {
                case "BT_UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "BT_PARENT_BLOCK":
                case 1:
                    message.type = 1;
                    break;
                case "BT_PARA_BLOCK":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.number != null)
                    message.number = object.number >>> 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };

            Blob.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "BT_UNKNOWN" : 0;
                    object.number = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.prb.data_provider.BlobType[message.type] : message.type;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            Blob.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Blob;
        })();

        data_provider.GetBlobByKey = (function() {

            function GetBlobByKey(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            GetBlobByKey.prototype.key = "";

            GetBlobByKey.create = function create(properties) {
                return new GetBlobByKey(properties);
            };

            GetBlobByKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(10).string(message.key);
                return writer;
            };

            GetBlobByKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            GetBlobByKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.GetBlobByKey();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            GetBlobByKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            GetBlobByKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                return null;
            };

            GetBlobByKey.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.data_provider.GetBlobByKey)
                    return object;
                let message = new $root.prb.data_provider.GetBlobByKey();
                if (object.key != null)
                    message.key = String(object.key);
                return message;
            };

            GetBlobByKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.key = "";
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                return object;
            };

            GetBlobByKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetBlobByKey;
        })();

        data_provider.RawBlob = (function() {

            function RawBlob(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            RawBlob.prototype.key = "";
            RawBlob.prototype.empty = false;
            RawBlob.prototype.data = $util.newBuffer([]);

            RawBlob.create = function create(properties) {
                return new RawBlob(properties);
            };

            RawBlob.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(10).string(message.key);
                if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                    writer.uint32(16).bool(message.empty);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(26).bytes(message.data);
                return writer;
            };

            RawBlob.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            RawBlob.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.RawBlob();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        message.empty = reader.bool();
                        break;
                    case 3:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            RawBlob.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            RawBlob.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.empty != null && message.hasOwnProperty("empty"))
                    if (typeof message.empty !== "boolean")
                        return "empty: boolean expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            RawBlob.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.data_provider.RawBlob)
                    return object;
                let message = new $root.prb.data_provider.RawBlob();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.empty != null)
                    message.empty = Boolean(object.empty);
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };

            RawBlob.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.key = "";
                    object.empty = false;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.empty != null && message.hasOwnProperty("empty"))
                    object.empty = message.empty;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            RawBlob.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RawBlob;
        })();

        return data_provider;
    })();

    prb.WorkerState = (function() {

        function WorkerState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        WorkerState.prototype.status = 0;
        WorkerState.prototype.parentHeaderSynchedTo = 0;
        WorkerState.prototype.paraHeaderSynchedTo = 0;
        WorkerState.prototype.paraBlockDispatchedTo = 0;
        WorkerState.prototype.initialized = false;
        WorkerState.prototype.worker = null;
        WorkerState.prototype.publicKey = "";
        WorkerState.prototype.lastMessage = "";
        WorkerState.prototype.sessionInfoJson = "";
        WorkerState.prototype.workerAccountId = "";

        WorkerState.create = function create(properties) {
            return new WorkerState(properties);
        };

        WorkerState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(8).int32(message.status);
            if (message.parentHeaderSynchedTo != null && Object.hasOwnProperty.call(message, "parentHeaderSynchedTo"))
                writer.uint32(16).int32(message.parentHeaderSynchedTo);
            if (message.paraHeaderSynchedTo != null && Object.hasOwnProperty.call(message, "paraHeaderSynchedTo"))
                writer.uint32(24).int32(message.paraHeaderSynchedTo);
            if (message.paraBlockDispatchedTo != null && Object.hasOwnProperty.call(message, "paraBlockDispatchedTo"))
                writer.uint32(32).int32(message.paraBlockDispatchedTo);
            if (message.initialized != null && Object.hasOwnProperty.call(message, "initialized"))
                writer.uint32(40).bool(message.initialized);
            if (message.worker != null && Object.hasOwnProperty.call(message, "worker"))
                $root.prb.db.Worker.encode(message.worker, writer.uint32(50).fork()).ldelim();
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(66).string(message.publicKey);
            if (message.lastMessage != null && Object.hasOwnProperty.call(message, "lastMessage"))
                writer.uint32(74).string(message.lastMessage);
            if (message.sessionInfoJson != null && Object.hasOwnProperty.call(message, "sessionInfoJson"))
                writer.uint32(82).string(message.sessionInfoJson);
            if (message.workerAccountId != null && Object.hasOwnProperty.call(message, "workerAccountId"))
                writer.uint32(90).string(message.workerAccountId);
            return writer;
        };

        WorkerState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        WorkerState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.WorkerState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.parentHeaderSynchedTo = reader.int32();
                    break;
                case 3:
                    message.paraHeaderSynchedTo = reader.int32();
                    break;
                case 4:
                    message.paraBlockDispatchedTo = reader.int32();
                    break;
                case 5:
                    message.initialized = reader.bool();
                    break;
                case 6:
                    message.worker = $root.prb.db.Worker.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.publicKey = reader.string();
                    break;
                case 9:
                    message.lastMessage = reader.string();
                    break;
                case 10:
                    message.sessionInfoJson = reader.string();
                    break;
                case 11:
                    message.workerAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        WorkerState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WorkerState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.parentHeaderSynchedTo != null && message.hasOwnProperty("parentHeaderSynchedTo"))
                if (!$util.isInteger(message.parentHeaderSynchedTo))
                    return "parentHeaderSynchedTo: integer expected";
            if (message.paraHeaderSynchedTo != null && message.hasOwnProperty("paraHeaderSynchedTo"))
                if (!$util.isInteger(message.paraHeaderSynchedTo))
                    return "paraHeaderSynchedTo: integer expected";
            if (message.paraBlockDispatchedTo != null && message.hasOwnProperty("paraBlockDispatchedTo"))
                if (!$util.isInteger(message.paraBlockDispatchedTo))
                    return "paraBlockDispatchedTo: integer expected";
            if (message.initialized != null && message.hasOwnProperty("initialized"))
                if (typeof message.initialized !== "boolean")
                    return "initialized: boolean expected";
            if (message.worker != null && message.hasOwnProperty("worker")) {
                let error = $root.prb.db.Worker.verify(message.worker);
                if (error)
                    return "worker." + error;
            }
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                if (!$util.isString(message.publicKey))
                    return "publicKey: string expected";
            if (message.lastMessage != null && message.hasOwnProperty("lastMessage"))
                if (!$util.isString(message.lastMessage))
                    return "lastMessage: string expected";
            if (message.sessionInfoJson != null && message.hasOwnProperty("sessionInfoJson"))
                if (!$util.isString(message.sessionInfoJson))
                    return "sessionInfoJson: string expected";
            if (message.workerAccountId != null && message.hasOwnProperty("workerAccountId"))
                if (!$util.isString(message.workerAccountId))
                    return "workerAccountId: string expected";
            return null;
        };

        WorkerState.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.WorkerState)
                return object;
            let message = new $root.prb.WorkerState();
            switch (object.status) {
            case "S_IDLE":
            case 0:
                message.status = 0;
                break;
            case "S_STARTING":
            case 1:
                message.status = 1;
                break;
            case "S_SYNCHING":
            case 2:
                message.status = 2;
                break;
            case "S_SYNCHED":
            case 3:
                message.status = 3;
                break;
            case "S_PRE_ACTIVE":
            case 4:
                message.status = 4;
                break;
            case "S_ACTIVE":
            case 5:
                message.status = 5;
                break;
            case "S_KICKED":
            case 6:
                message.status = 6;
                break;
            case "S_ERROR":
            case 7:
                message.status = 7;
                break;
            }
            if (object.parentHeaderSynchedTo != null)
                message.parentHeaderSynchedTo = object.parentHeaderSynchedTo | 0;
            if (object.paraHeaderSynchedTo != null)
                message.paraHeaderSynchedTo = object.paraHeaderSynchedTo | 0;
            if (object.paraBlockDispatchedTo != null)
                message.paraBlockDispatchedTo = object.paraBlockDispatchedTo | 0;
            if (object.initialized != null)
                message.initialized = Boolean(object.initialized);
            if (object.worker != null) {
                if (typeof object.worker !== "object")
                    throw TypeError(".prb.WorkerState.worker: object expected");
                message.worker = $root.prb.db.Worker.fromObject(object.worker);
            }
            if (object.publicKey != null)
                message.publicKey = String(object.publicKey);
            if (object.lastMessage != null)
                message.lastMessage = String(object.lastMessage);
            if (object.sessionInfoJson != null)
                message.sessionInfoJson = String(object.sessionInfoJson);
            if (object.workerAccountId != null)
                message.workerAccountId = String(object.workerAccountId);
            return message;
        };

        WorkerState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "S_IDLE" : 0;
                object.parentHeaderSynchedTo = 0;
                object.paraHeaderSynchedTo = 0;
                object.paraBlockDispatchedTo = 0;
                object.initialized = false;
                object.worker = null;
                object.publicKey = "";
                object.lastMessage = "";
                object.sessionInfoJson = "";
                object.workerAccountId = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.prb.WorkerState.Status[message.status] : message.status;
            if (message.parentHeaderSynchedTo != null && message.hasOwnProperty("parentHeaderSynchedTo"))
                object.parentHeaderSynchedTo = message.parentHeaderSynchedTo;
            if (message.paraHeaderSynchedTo != null && message.hasOwnProperty("paraHeaderSynchedTo"))
                object.paraHeaderSynchedTo = message.paraHeaderSynchedTo;
            if (message.paraBlockDispatchedTo != null && message.hasOwnProperty("paraBlockDispatchedTo"))
                object.paraBlockDispatchedTo = message.paraBlockDispatchedTo;
            if (message.initialized != null && message.hasOwnProperty("initialized"))
                object.initialized = message.initialized;
            if (message.worker != null && message.hasOwnProperty("worker"))
                object.worker = $root.prb.db.Worker.toObject(message.worker, options);
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = message.publicKey;
            if (message.lastMessage != null && message.hasOwnProperty("lastMessage"))
                object.lastMessage = message.lastMessage;
            if (message.sessionInfoJson != null && message.hasOwnProperty("sessionInfoJson"))
                object.sessionInfoJson = message.sessionInfoJson;
            if (message.workerAccountId != null && message.hasOwnProperty("workerAccountId"))
                object.workerAccountId = message.workerAccountId;
            return object;
        };

        WorkerState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        WorkerState.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "S_IDLE"] = 0;
            values[valuesById[1] = "S_STARTING"] = 1;
            values[valuesById[2] = "S_SYNCHING"] = 2;
            values[valuesById[3] = "S_SYNCHED"] = 3;
            values[valuesById[4] = "S_PRE_ACTIVE"] = 4;
            values[valuesById[5] = "S_ACTIVE"] = 5;
            values[valuesById[6] = "S_KICKED"] = 6;
            values[valuesById[7] = "S_ERROR"] = 7;
            return values;
        })();

        return WorkerState;
    })();

    prb.PoolOrWorkerQueryIdentity = (function() {

        function PoolOrWorkerQueryIdentity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PoolOrWorkerQueryIdentity.prototype.uuid = null;
        PoolOrWorkerQueryIdentity.prototype.name = null;
        PoolOrWorkerQueryIdentity.prototype.pid = null;

        let $oneOfFields;

        Object.defineProperty(PoolOrWorkerQueryIdentity.prototype, "identity", {
            get: $util.oneOfGetter($oneOfFields = ["uuid", "name", "pid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PoolOrWorkerQueryIdentity.create = function create(properties) {
            return new PoolOrWorkerQueryIdentity(properties);
        };

        PoolOrWorkerQueryIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(10).string(message.uuid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(18).string(message.name);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(24).uint64(message.pid);
            return writer;
        };

        PoolOrWorkerQueryIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PoolOrWorkerQueryIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.PoolOrWorkerQueryIdentity();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.pid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PoolOrWorkerQueryIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PoolOrWorkerQueryIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.uuid != null && message.hasOwnProperty("uuid")) {
                properties.identity = 1;
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            }
            if (message.name != null && message.hasOwnProperty("name")) {
                if (properties.identity === 1)
                    return "identity: multiple values";
                properties.identity = 1;
                if (!$util.isString(message.name))
                    return "name: string expected";
            }
            if (message.pid != null && message.hasOwnProperty("pid")) {
                if (properties.identity === 1)
                    return "identity: multiple values";
                properties.identity = 1;
                if (!$util.isInteger(message.pid) && !(message.pid && $util.isInteger(message.pid.low) && $util.isInteger(message.pid.high)))
                    return "pid: integer|Long expected";
            }
            return null;
        };

        PoolOrWorkerQueryIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.PoolOrWorkerQueryIdentity)
                return object;
            let message = new $root.prb.PoolOrWorkerQueryIdentity();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.pid != null)
                if ($util.Long)
                    (message.pid = $util.Long.fromValue(object.pid)).unsigned = true;
                else if (typeof object.pid === "string")
                    message.pid = parseInt(object.pid, 10);
                else if (typeof object.pid === "number")
                    message.pid = object.pid;
                else if (typeof object.pid === "object")
                    message.pid = new $util.LongBits(object.pid.low >>> 0, object.pid.high >>> 0).toNumber(true);
            return message;
        };

        PoolOrWorkerQueryIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.uuid != null && message.hasOwnProperty("uuid")) {
                object.uuid = message.uuid;
                if (options.oneofs)
                    object.identity = "uuid";
            }
            if (message.name != null && message.hasOwnProperty("name")) {
                object.name = message.name;
                if (options.oneofs)
                    object.identity = "name";
            }
            if (message.pid != null && message.hasOwnProperty("pid")) {
                if (typeof message.pid === "number")
                    object.pid = options.longs === String ? String(message.pid) : message.pid;
                else
                    object.pid = options.longs === String ? $util.Long.prototype.toString.call(message.pid) : options.longs === Number ? new $util.LongBits(message.pid.low >>> 0, message.pid.high >>> 0).toNumber(true) : message.pid;
                if (options.oneofs)
                    object.identity = "pid";
            }
            return object;
        };

        PoolOrWorkerQueryIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PoolOrWorkerQueryIdentity;
    })();

    prb.QueryWorkerState = (function() {

        function QueryWorkerState(properties) {
            this.ids = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QueryWorkerState.prototype.ids = $util.emptyArray;

        QueryWorkerState.create = function create(properties) {
            return new QueryWorkerState(properties);
        };

        QueryWorkerState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ids != null && message.ids.length)
                for (let i = 0; i < message.ids.length; ++i)
                    $root.prb.PoolOrWorkerQueryIdentity.encode(message.ids[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        QueryWorkerState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QueryWorkerState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.QueryWorkerState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ids && message.ids.length))
                        message.ids = [];
                    message.ids.push($root.prb.PoolOrWorkerQueryIdentity.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        QueryWorkerState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QueryWorkerState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ids != null && message.hasOwnProperty("ids")) {
                if (!Array.isArray(message.ids))
                    return "ids: array expected";
                for (let i = 0; i < message.ids.length; ++i) {
                    let error = $root.prb.PoolOrWorkerQueryIdentity.verify(message.ids[i]);
                    if (error)
                        return "ids." + error;
                }
            }
            return null;
        };

        QueryWorkerState.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.QueryWorkerState)
                return object;
            let message = new $root.prb.QueryWorkerState();
            if (object.ids) {
                if (!Array.isArray(object.ids))
                    throw TypeError(".prb.QueryWorkerState.ids: array expected");
                message.ids = [];
                for (let i = 0; i < object.ids.length; ++i) {
                    if (typeof object.ids[i] !== "object")
                        throw TypeError(".prb.QueryWorkerState.ids: object expected");
                    message.ids[i] = $root.prb.PoolOrWorkerQueryIdentity.fromObject(object.ids[i]);
                }
            }
            return message;
        };

        QueryWorkerState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ids = [];
            if (message.ids && message.ids.length) {
                object.ids = [];
                for (let j = 0; j < message.ids.length; ++j)
                    object.ids[j] = $root.prb.PoolOrWorkerQueryIdentity.toObject(message.ids[j], options);
            }
            return object;
        };

        QueryWorkerState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryWorkerState;
    })();

    prb.WorkerStateUpdate = (function() {

        function WorkerStateUpdate(properties) {
            this.workerStates = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        WorkerStateUpdate.prototype.workerStates = $util.emptyArray;

        WorkerStateUpdate.create = function create(properties) {
            return new WorkerStateUpdate(properties);
        };

        WorkerStateUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.workerStates != null && message.workerStates.length)
                for (let i = 0; i < message.workerStates.length; ++i)
                    $root.prb.WorkerState.encode(message.workerStates[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        WorkerStateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        WorkerStateUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.WorkerStateUpdate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.workerStates && message.workerStates.length))
                        message.workerStates = [];
                    message.workerStates.push($root.prb.WorkerState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        WorkerStateUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WorkerStateUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.workerStates != null && message.hasOwnProperty("workerStates")) {
                if (!Array.isArray(message.workerStates))
                    return "workerStates: array expected";
                for (let i = 0; i < message.workerStates.length; ++i) {
                    let error = $root.prb.WorkerState.verify(message.workerStates[i]);
                    if (error)
                        return "workerStates." + error;
                }
            }
            return null;
        };

        WorkerStateUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.WorkerStateUpdate)
                return object;
            let message = new $root.prb.WorkerStateUpdate();
            if (object.workerStates) {
                if (!Array.isArray(object.workerStates))
                    throw TypeError(".prb.WorkerStateUpdate.workerStates: array expected");
                message.workerStates = [];
                for (let i = 0; i < object.workerStates.length; ++i) {
                    if (typeof object.workerStates[i] !== "object")
                        throw TypeError(".prb.WorkerStateUpdate.workerStates: object expected");
                    message.workerStates[i] = $root.prb.WorkerState.fromObject(object.workerStates[i]);
                }
            }
            return message;
        };

        WorkerStateUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.workerStates = [];
            if (message.workerStates && message.workerStates.length) {
                object.workerStates = [];
                for (let j = 0; j < message.workerStates.length; ++j)
                    object.workerStates[j] = $root.prb.WorkerState.toObject(message.workerStates[j], options);
            }
            return object;
        };

        WorkerStateUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorkerStateUpdate;
    })();

    prb.lifecycle = (function() {

        const lifecycle = {};

        lifecycle.UuidQueryRequest = (function() {

            function UuidQueryRequest(properties) {
                this.ids = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            UuidQueryRequest.prototype.ids = $util.emptyArray;

            UuidQueryRequest.create = function create(properties) {
                return new UuidQueryRequest(properties);
            };

            UuidQueryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ids != null && message.ids.length)
                    for (let i = 0; i < message.ids.length; ++i)
                        writer.uint32(10).string(message.ids[i]);
                return writer;
            };

            UuidQueryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            UuidQueryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.lifecycle.UuidQueryRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.ids && message.ids.length))
                            message.ids = [];
                        message.ids.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            UuidQueryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            UuidQueryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ids != null && message.hasOwnProperty("ids")) {
                    if (!Array.isArray(message.ids))
                        return "ids: array expected";
                    for (let i = 0; i < message.ids.length; ++i)
                        if (!$util.isString(message.ids[i]))
                            return "ids: string[] expected";
                }
                return null;
            };

            UuidQueryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.lifecycle.UuidQueryRequest)
                    return object;
                let message = new $root.prb.lifecycle.UuidQueryRequest();
                if (object.ids) {
                    if (!Array.isArray(object.ids))
                        throw TypeError(".prb.lifecycle.UuidQueryRequest.ids: array expected");
                    message.ids = [];
                    for (let i = 0; i < object.ids.length; ++i)
                        message.ids[i] = String(object.ids[i]);
                }
                return message;
            };

            UuidQueryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.ids = [];
                if (message.ids && message.ids.length) {
                    object.ids = [];
                    for (let j = 0; j < message.ids.length; ++j)
                        object.ids[j] = message.ids[j];
                }
                return object;
            };

            UuidQueryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UuidQueryRequest;
        })();

        lifecycle.CreatePool = (function() {

            function CreatePool(properties) {
                this.pools = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            CreatePool.prototype.pools = $util.emptyArray;

            CreatePool.create = function create(properties) {
                return new CreatePool(properties);
            };

            CreatePool.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pools != null && message.pools.length)
                    for (let i = 0; i < message.pools.length; ++i)
                        $root.prb.db.Pool.encode(message.pools[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            CreatePool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            CreatePool.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.lifecycle.CreatePool();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.pools && message.pools.length))
                            message.pools = [];
                        message.pools.push($root.prb.db.Pool.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            CreatePool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            CreatePool.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pools != null && message.hasOwnProperty("pools")) {
                    if (!Array.isArray(message.pools))
                        return "pools: array expected";
                    for (let i = 0; i < message.pools.length; ++i) {
                        let error = $root.prb.db.Pool.verify(message.pools[i]);
                        if (error)
                            return "pools." + error;
                    }
                }
                return null;
            };

            CreatePool.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.lifecycle.CreatePool)
                    return object;
                let message = new $root.prb.lifecycle.CreatePool();
                if (object.pools) {
                    if (!Array.isArray(object.pools))
                        throw TypeError(".prb.lifecycle.CreatePool.pools: array expected");
                    message.pools = [];
                    for (let i = 0; i < object.pools.length; ++i) {
                        if (typeof object.pools[i] !== "object")
                            throw TypeError(".prb.lifecycle.CreatePool.pools: object expected");
                        message.pools[i] = $root.prb.db.Pool.fromObject(object.pools[i]);
                    }
                }
                return message;
            };

            CreatePool.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.pools = [];
                if (message.pools && message.pools.length) {
                    object.pools = [];
                    for (let j = 0; j < message.pools.length; ++j)
                        object.pools[j] = $root.prb.db.Pool.toObject(message.pools[j], options);
                }
                return object;
            };

            CreatePool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreatePool;
        })();

        lifecycle.UpdatePool = (function() {

            function UpdatePool(properties) {
                this.items = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            UpdatePool.prototype.items = $util.emptyArray;

            UpdatePool.create = function create(properties) {
                return new UpdatePool(properties);
            };

            UpdatePool.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.items != null && message.items.length)
                    for (let i = 0; i < message.items.length; ++i)
                        $root.prb.lifecycle.UpdatePool.Item.encode(message.items[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            UpdatePool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            UpdatePool.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.lifecycle.UpdatePool();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.prb.lifecycle.UpdatePool.Item.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            UpdatePool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            UpdatePool.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.items != null && message.hasOwnProperty("items")) {
                    if (!Array.isArray(message.items))
                        return "items: array expected";
                    for (let i = 0; i < message.items.length; ++i) {
                        let error = $root.prb.lifecycle.UpdatePool.Item.verify(message.items[i]);
                        if (error)
                            return "items." + error;
                    }
                }
                return null;
            };

            UpdatePool.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.lifecycle.UpdatePool)
                    return object;
                let message = new $root.prb.lifecycle.UpdatePool();
                if (object.items) {
                    if (!Array.isArray(object.items))
                        throw TypeError(".prb.lifecycle.UpdatePool.items: array expected");
                    message.items = [];
                    for (let i = 0; i < object.items.length; ++i) {
                        if (typeof object.items[i] !== "object")
                            throw TypeError(".prb.lifecycle.UpdatePool.items: object expected");
                        message.items[i] = $root.prb.lifecycle.UpdatePool.Item.fromObject(object.items[i]);
                    }
                }
                return message;
            };

            UpdatePool.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.items = [];
                if (message.items && message.items.length) {
                    object.items = [];
                    for (let j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.prb.lifecycle.UpdatePool.Item.toObject(message.items[j], options);
                }
                return object;
            };

            UpdatePool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UpdatePool.Item = (function() {

                function Item(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Item.prototype.id = null;
                Item.prototype.pool = null;

                Item.create = function create(properties) {
                    return new Item(properties);
                };

                Item.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        $root.prb.PoolOrWorkerQueryIdentity.encode(message.id, writer.uint32(10).fork()).ldelim();
                    if (message.pool != null && Object.hasOwnProperty.call(message, "pool"))
                        $root.prb.db.Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
                    return writer;
                };

                Item.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                Item.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.lifecycle.UpdatePool.Item();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.prb.PoolOrWorkerQueryIdentity.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.pool = $root.prb.db.Pool.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Item.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                Item.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        let error = $root.prb.PoolOrWorkerQueryIdentity.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    if (message.pool != null && message.hasOwnProperty("pool")) {
                        let error = $root.prb.db.Pool.verify(message.pool);
                        if (error)
                            return "pool." + error;
                    }
                    return null;
                };

                Item.fromObject = function fromObject(object) {
                    if (object instanceof $root.prb.lifecycle.UpdatePool.Item)
                        return object;
                    let message = new $root.prb.lifecycle.UpdatePool.Item();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".prb.lifecycle.UpdatePool.Item.id: object expected");
                        message.id = $root.prb.PoolOrWorkerQueryIdentity.fromObject(object.id);
                    }
                    if (object.pool != null) {
                        if (typeof object.pool !== "object")
                            throw TypeError(".prb.lifecycle.UpdatePool.Item.pool: object expected");
                        message.pool = $root.prb.db.Pool.fromObject(object.pool);
                    }
                    return message;
                };

                Item.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = null;
                        object.pool = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.prb.PoolOrWorkerQueryIdentity.toObject(message.id, options);
                    if (message.pool != null && message.hasOwnProperty("pool"))
                        object.pool = $root.prb.db.Pool.toObject(message.pool, options);
                    return object;
                };

                Item.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Item;
            })();

            return UpdatePool;
        })();

        lifecycle.CreateWorker = (function() {

            function CreateWorker(properties) {
                this.workers = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            CreateWorker.prototype.workers = $util.emptyArray;

            CreateWorker.create = function create(properties) {
                return new CreateWorker(properties);
            };

            CreateWorker.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.workers != null && message.workers.length)
                    for (let i = 0; i < message.workers.length; ++i)
                        $root.prb.db.Worker.encode(message.workers[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            CreateWorker.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            CreateWorker.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.lifecycle.CreateWorker();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.workers && message.workers.length))
                            message.workers = [];
                        message.workers.push($root.prb.db.Worker.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            CreateWorker.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            CreateWorker.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.workers != null && message.hasOwnProperty("workers")) {
                    if (!Array.isArray(message.workers))
                        return "workers: array expected";
                    for (let i = 0; i < message.workers.length; ++i) {
                        let error = $root.prb.db.Worker.verify(message.workers[i]);
                        if (error)
                            return "workers." + error;
                    }
                }
                return null;
            };

            CreateWorker.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.lifecycle.CreateWorker)
                    return object;
                let message = new $root.prb.lifecycle.CreateWorker();
                if (object.workers) {
                    if (!Array.isArray(object.workers))
                        throw TypeError(".prb.lifecycle.CreateWorker.workers: array expected");
                    message.workers = [];
                    for (let i = 0; i < object.workers.length; ++i) {
                        if (typeof object.workers[i] !== "object")
                            throw TypeError(".prb.lifecycle.CreateWorker.workers: object expected");
                        message.workers[i] = $root.prb.db.Worker.fromObject(object.workers[i]);
                    }
                }
                return message;
            };

            CreateWorker.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.workers = [];
                if (message.workers && message.workers.length) {
                    object.workers = [];
                    for (let j = 0; j < message.workers.length; ++j)
                        object.workers[j] = $root.prb.db.Worker.toObject(message.workers[j], options);
                }
                return object;
            };

            CreateWorker.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateWorker;
        })();

        lifecycle.UpdateWorker = (function() {

            function UpdateWorker(properties) {
                this.items = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            UpdateWorker.prototype.items = $util.emptyArray;

            UpdateWorker.create = function create(properties) {
                return new UpdateWorker(properties);
            };

            UpdateWorker.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.items != null && message.items.length)
                    for (let i = 0; i < message.items.length; ++i)
                        $root.prb.lifecycle.UpdateWorker.Item.encode(message.items[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            UpdateWorker.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            UpdateWorker.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.lifecycle.UpdateWorker();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.prb.lifecycle.UpdateWorker.Item.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            UpdateWorker.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            UpdateWorker.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.items != null && message.hasOwnProperty("items")) {
                    if (!Array.isArray(message.items))
                        return "items: array expected";
                    for (let i = 0; i < message.items.length; ++i) {
                        let error = $root.prb.lifecycle.UpdateWorker.Item.verify(message.items[i]);
                        if (error)
                            return "items." + error;
                    }
                }
                return null;
            };

            UpdateWorker.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.lifecycle.UpdateWorker)
                    return object;
                let message = new $root.prb.lifecycle.UpdateWorker();
                if (object.items) {
                    if (!Array.isArray(object.items))
                        throw TypeError(".prb.lifecycle.UpdateWorker.items: array expected");
                    message.items = [];
                    for (let i = 0; i < object.items.length; ++i) {
                        if (typeof object.items[i] !== "object")
                            throw TypeError(".prb.lifecycle.UpdateWorker.items: object expected");
                        message.items[i] = $root.prb.lifecycle.UpdateWorker.Item.fromObject(object.items[i]);
                    }
                }
                return message;
            };

            UpdateWorker.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.items = [];
                if (message.items && message.items.length) {
                    object.items = [];
                    for (let j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.prb.lifecycle.UpdateWorker.Item.toObject(message.items[j], options);
                }
                return object;
            };

            UpdateWorker.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UpdateWorker.Item = (function() {

                function Item(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Item.prototype.id = null;
                Item.prototype.worker = null;

                Item.create = function create(properties) {
                    return new Item(properties);
                };

                Item.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        $root.prb.PoolOrWorkerQueryIdentity.encode(message.id, writer.uint32(10).fork()).ldelim();
                    if (message.worker != null && Object.hasOwnProperty.call(message, "worker"))
                        $root.prb.db.Worker.encode(message.worker, writer.uint32(18).fork()).ldelim();
                    return writer;
                };

                Item.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                Item.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.lifecycle.UpdateWorker.Item();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.prb.PoolOrWorkerQueryIdentity.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.worker = $root.prb.db.Worker.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Item.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                Item.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        let error = $root.prb.PoolOrWorkerQueryIdentity.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    if (message.worker != null && message.hasOwnProperty("worker")) {
                        let error = $root.prb.db.Worker.verify(message.worker);
                        if (error)
                            return "worker." + error;
                    }
                    return null;
                };

                Item.fromObject = function fromObject(object) {
                    if (object instanceof $root.prb.lifecycle.UpdateWorker.Item)
                        return object;
                    let message = new $root.prb.lifecycle.UpdateWorker.Item();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".prb.lifecycle.UpdateWorker.Item.id: object expected");
                        message.id = $root.prb.PoolOrWorkerQueryIdentity.fromObject(object.id);
                    }
                    if (object.worker != null) {
                        if (typeof object.worker !== "object")
                            throw TypeError(".prb.lifecycle.UpdateWorker.Item.worker: object expected");
                        message.worker = $root.prb.db.Worker.fromObject(object.worker);
                    }
                    return message;
                };

                Item.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = null;
                        object.worker = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.prb.PoolOrWorkerQueryIdentity.toObject(message.id, options);
                    if (message.worker != null && message.hasOwnProperty("worker"))
                        object.worker = $root.prb.db.Worker.toObject(message.worker, options);
                    return object;
                };

                Item.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Item;
            })();

            return UpdateWorker;
        })();

        lifecycle.PoolList = (function() {

            function PoolList(properties) {
                this.pools = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            PoolList.prototype.pools = $util.emptyArray;

            PoolList.create = function create(properties) {
                return new PoolList(properties);
            };

            PoolList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pools != null && message.pools.length)
                    for (let i = 0; i < message.pools.length; ++i)
                        $root.prb.db.Pool.encode(message.pools[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            PoolList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            PoolList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.lifecycle.PoolList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.pools && message.pools.length))
                            message.pools = [];
                        message.pools.push($root.prb.db.Pool.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            PoolList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            PoolList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pools != null && message.hasOwnProperty("pools")) {
                    if (!Array.isArray(message.pools))
                        return "pools: array expected";
                    for (let i = 0; i < message.pools.length; ++i) {
                        let error = $root.prb.db.Pool.verify(message.pools[i]);
                        if (error)
                            return "pools." + error;
                    }
                }
                return null;
            };

            PoolList.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.lifecycle.PoolList)
                    return object;
                let message = new $root.prb.lifecycle.PoolList();
                if (object.pools) {
                    if (!Array.isArray(object.pools))
                        throw TypeError(".prb.lifecycle.PoolList.pools: array expected");
                    message.pools = [];
                    for (let i = 0; i < object.pools.length; ++i) {
                        if (typeof object.pools[i] !== "object")
                            throw TypeError(".prb.lifecycle.PoolList.pools: object expected");
                        message.pools[i] = $root.prb.db.Pool.fromObject(object.pools[i]);
                    }
                }
                return message;
            };

            PoolList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.pools = [];
                if (message.pools && message.pools.length) {
                    object.pools = [];
                    for (let j = 0; j < message.pools.length; ++j)
                        object.pools[j] = $root.prb.db.Pool.toObject(message.pools[j], options);
                }
                return object;
            };

            PoolList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PoolList;
        })();

        lifecycle.WorkerList = (function() {

            function WorkerList(properties) {
                this.workers = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            WorkerList.prototype.workers = $util.emptyArray;

            WorkerList.create = function create(properties) {
                return new WorkerList(properties);
            };

            WorkerList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.workers != null && message.workers.length)
                    for (let i = 0; i < message.workers.length; ++i)
                        $root.prb.db.Worker.encode(message.workers[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            WorkerList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            WorkerList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.lifecycle.WorkerList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.workers && message.workers.length))
                            message.workers = [];
                        message.workers.push($root.prb.db.Worker.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            WorkerList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            WorkerList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.workers != null && message.hasOwnProperty("workers")) {
                    if (!Array.isArray(message.workers))
                        return "workers: array expected";
                    for (let i = 0; i < message.workers.length; ++i) {
                        let error = $root.prb.db.Worker.verify(message.workers[i]);
                        if (error)
                            return "workers." + error;
                    }
                }
                return null;
            };

            WorkerList.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.lifecycle.WorkerList)
                    return object;
                let message = new $root.prb.lifecycle.WorkerList();
                if (object.workers) {
                    if (!Array.isArray(object.workers))
                        throw TypeError(".prb.lifecycle.WorkerList.workers: array expected");
                    message.workers = [];
                    for (let i = 0; i < object.workers.length; ++i) {
                        if (typeof object.workers[i] !== "object")
                            throw TypeError(".prb.lifecycle.WorkerList.workers: object expected");
                        message.workers[i] = $root.prb.db.Worker.fromObject(object.workers[i]);
                    }
                }
                return message;
            };

            WorkerList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.workers = [];
                if (message.workers && message.workers.length) {
                    object.workers = [];
                    for (let j = 0; j < message.workers.length; ++j)
                        object.workers[j] = $root.prb.db.Worker.toObject(message.workers[j], options);
                }
                return object;
            };

            WorkerList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WorkerList;
        })();

        return lifecycle;
    })();

    return prb;
})();

export { $root as default };

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const prb = $root.prb = (() => {

    const prb = {};

    prb.WalkieRoles = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CLIENT"] = 0;
        values[valuesById[1] = "DATA_PROVIDER"] = 1;
        values[valuesById[2] = "LIFECYCLE_MANAGER"] = 2;
        values[valuesById[3] = "TRADER"] = 3;
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
            case "CLIENT":
            case 0:
                message.role = 0;
                break;
            case "DATA_PROVIDER":
            case 1:
                message.role = 1;
                break;
            case "LIFECYCLE_MANAGER":
            case 2:
                message.role = 2;
                break;
            case "TRADER":
            case 3:
                message.role = 3;
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
                object.role = options.enums === String ? "CLIENT" : 0;
            }
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                object.hostname = message.hostname;
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                object.peerId = message.peerId;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.prb.WalkieRoles[message.role] : message.role;
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
        WalkieRpcRequestWrapper.prototype.ns = "";

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
            if (message.ns != null && Object.hasOwnProperty.call(message, "ns"))
                writer.uint32(42).string(message.ns);
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
                case 5:
                    message.ns = reader.string();
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
            if (message.ns != null && message.hasOwnProperty("ns"))
                if (!$util.isString(message.ns))
                    return "ns: string expected";
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
            if (object.ns != null)
                message.ns = String(object.ns);
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
                object.ns = "";
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
            if (message.ns != null && message.hasOwnProperty("ns"))
                object.ns = message.ns;
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
        WalkieBroadcastWrapper.prototype.ns = "";

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
            if (message.ns != null && Object.hasOwnProperty.call(message, "ns"))
                writer.uint32(42).string(message.ns);
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
                case 5:
                    message.ns = reader.string();
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
            if (message.ns != null && message.hasOwnProperty("ns"))
                if (!$util.isString(message.ns))
                    return "ns: string expected";
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
            if (object.ns != null)
                message.ns = String(object.ns);
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
                object.ns = "";
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
            if (message.ns != null && message.hasOwnProperty("ns"))
                object.ns = message.ns;
            return object;
        };

        WalkieBroadcastWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WalkieBroadcastWrapper;
    })();

    prb.WalkieRpc = (function() {

        function WalkieRpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (WalkieRpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = WalkieRpc;

        WalkieRpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };


        Object.defineProperty(WalkieRpc.prototype.getSystemInfo = function getSystemInfo(request, callback) {
            return this.rpcCall(getSystemInfo, $root.prb.Empty, $root.prb.WalkieSystemInfo, request, callback);
        }, "name", { value: "GetSystemInfo" });


        Object.defineProperty(WalkieRpc.prototype.getDataProviderInfo = function getDataProviderInfo(request, callback) {
            return this.rpcCall(getDataProviderInfo, $root.prb.Empty, $root.prb.data_provider.Info, request, callback);
        }, "name", { value: "GetDataProviderInfo" });


        Object.defineProperty(WalkieRpc.prototype.getBlobByKey = function getBlobByKey(request, callback) {
            return this.rpcCall(getBlobByKey, $root.prb.data_provider.GetBlobByKey, $root.prb.data_provider.RawBlob, request, callback);
        }, "name", { value: "GetBlobByKey" });


        Object.defineProperty(WalkieRpc.prototype.listPool = function listPool(request, callback) {
            return this.rpcCall(listPool, $root.prb.Empty, $root.prb.data_provider.PoolList, request, callback);
        }, "name", { value: "ListPool" });


        Object.defineProperty(WalkieRpc.prototype.createPool = function createPool(request, callback) {
            return this.rpcCall(createPool, $root.prb.data_provider.CreatePool, $root.prb.data_provider.PoolList, request, callback);
        }, "name", { value: "CreatePool" });


        Object.defineProperty(WalkieRpc.prototype.updatePool = function updatePool(request, callback) {
            return this.rpcCall(updatePool, $root.prb.data_provider.UpdatePool, $root.prb.data_provider.PoolList, request, callback);
        }, "name", { value: "UpdatePool" });


        Object.defineProperty(WalkieRpc.prototype.listWorker = function listWorker(request, callback) {
            return this.rpcCall(listWorker, $root.prb.Empty, $root.prb.data_provider.WorkerList, request, callback);
        }, "name", { value: "ListWorker" });


        Object.defineProperty(WalkieRpc.prototype.createWorker = function createWorker(request, callback) {
            return this.rpcCall(createWorker, $root.prb.data_provider.CreateWorker, $root.prb.data_provider.WorkerList, request, callback);
        }, "name", { value: "CreateWorker" });


        Object.defineProperty(WalkieRpc.prototype.updateWorker = function updateWorker(request, callback) {
            return this.rpcCall(updateWorker, $root.prb.data_provider.UpdateWorker, $root.prb.data_provider.WorkerList, request, callback);
        }, "name", { value: "UpdateWorker" });


        Object.defineProperty(WalkieRpc.prototype.wantBlob = function wantBlob(request, callback) {
            return this.rpcCall(wantBlob, $root.prb.data_provider.WantBlob, $root.prb.data_provider.BlobMeta, request, callback);
        }, "name", { value: "WantBlob" });


        Object.defineProperty(WalkieRpc.prototype.getBlobWithToken = function getBlobWithToken(request, callback) {
            return this.rpcCall(getBlobWithToken, $root.prb.data_provider.GetBlob, $root.prb.data_provider.Blob, request, callback);
        }, "name", { value: "GetBlobWithToken" });

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

    prb.GenericError = (function() {

        function GenericError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GenericError.prototype.code = "";
        GenericError.prototype.desc = "";

        GenericError.create = function create(properties) {
            return new GenericError(properties);
        };

        GenericError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(10).string(message.code);
            if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                writer.uint32(18).string(message.desc);
            return writer;
        };

        GenericError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GenericError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.GenericError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
                    message.desc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GenericError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GenericError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            return null;
        };

        GenericError.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.GenericError)
                return object;
            let message = new $root.prb.GenericError();
            if (object.code != null)
                message.code = String(object.code);
            if (object.desc != null)
                message.desc = String(object.desc);
            return message;
        };

        GenericError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = "";
                object.desc = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            return object;
        };

        GenericError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GenericError;
    })();

    prb.NotFoundError = (function() {

        function NotFoundError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        NotFoundError.prototype.desc = "";

        NotFoundError.create = function create(properties) {
            return new NotFoundError(properties);
        };

        NotFoundError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                writer.uint32(10).string(message.desc);
            return writer;
        };

        NotFoundError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        NotFoundError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.NotFoundError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.desc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        NotFoundError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        NotFoundError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            return null;
        };

        NotFoundError.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.NotFoundError)
                return object;
            let message = new $root.prb.NotFoundError();
            if (object.desc != null)
                message.desc = String(object.desc);
            return message;
        };

        NotFoundError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.desc = "";
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            return object;
        };

        NotFoundError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotFoundError;
    })();

    prb.DuplicatedError = (function() {

        function DuplicatedError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        DuplicatedError.prototype.desc = "";

        DuplicatedError.create = function create(properties) {
            return new DuplicatedError(properties);
        };

        DuplicatedError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                writer.uint32(10).string(message.desc);
            return writer;
        };

        DuplicatedError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        DuplicatedError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.DuplicatedError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.desc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        DuplicatedError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        DuplicatedError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            return null;
        };

        DuplicatedError.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.DuplicatedError)
                return object;
            let message = new $root.prb.DuplicatedError();
            if (object.desc != null)
                message.desc = String(object.desc);
            return message;
        };

        DuplicatedError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.desc = "";
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            return object;
        };

        DuplicatedError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DuplicatedError;
    })();

    prb.Error = (function() {

        function Error(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Error.prototype.extra = "";
        Error.prototype.generic = null;
        Error.prototype.notFound = null;
        Error.prototype.duplicated = null;

        let $oneOfFields;

        Object.defineProperty(Error.prototype, "error", {
            get: $util.oneOfGetter($oneOfFields = ["generic", "notFound", "duplicated"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Error.create = function create(properties) {
            return new Error(properties);
        };

        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(10).string(message.extra);
            if (message.generic != null && Object.hasOwnProperty.call(message, "generic"))
                $root.prb.GenericError.encode(message.generic, writer.uint32(18).fork()).ldelim();
            if (message.notFound != null && Object.hasOwnProperty.call(message, "notFound"))
                $root.prb.NotFoundError.encode(message.notFound, writer.uint32(26).fork()).ldelim();
            if (message.duplicated != null && Object.hasOwnProperty.call(message, "duplicated"))
                $root.prb.DuplicatedError.encode(message.duplicated, writer.uint32(34).fork()).ldelim();
            return writer;
        };

        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Error();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.extra = reader.string();
                    break;
                case 2:
                    message.generic = $root.prb.GenericError.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.notFound = $root.prb.NotFoundError.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.duplicated = $root.prb.DuplicatedError.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            if (message.generic != null && message.hasOwnProperty("generic")) {
                properties.error = 1;
                {
                    let error = $root.prb.GenericError.verify(message.generic);
                    if (error)
                        return "generic." + error;
                }
            }
            if (message.notFound != null && message.hasOwnProperty("notFound")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    let error = $root.prb.NotFoundError.verify(message.notFound);
                    if (error)
                        return "notFound." + error;
                }
            }
            if (message.duplicated != null && message.hasOwnProperty("duplicated")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    let error = $root.prb.DuplicatedError.verify(message.duplicated);
                    if (error)
                        return "duplicated." + error;
                }
            }
            return null;
        };

        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Error)
                return object;
            let message = new $root.prb.Error();
            if (object.extra != null)
                message.extra = String(object.extra);
            if (object.generic != null) {
                if (typeof object.generic !== "object")
                    throw TypeError(".prb.Error.generic: object expected");
                message.generic = $root.prb.GenericError.fromObject(object.generic);
            }
            if (object.notFound != null) {
                if (typeof object.notFound !== "object")
                    throw TypeError(".prb.Error.notFound: object expected");
                message.notFound = $root.prb.NotFoundError.fromObject(object.notFound);
            }
            if (object.duplicated != null) {
                if (typeof object.duplicated !== "object")
                    throw TypeError(".prb.Error.duplicated: object expected");
                message.duplicated = $root.prb.DuplicatedError.fromObject(object.duplicated);
            }
            return message;
        };

        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.extra = "";
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            if (message.generic != null && message.hasOwnProperty("generic")) {
                object.generic = $root.prb.GenericError.toObject(message.generic, options);
                if (options.oneofs)
                    object.error = "generic";
            }
            if (message.notFound != null && message.hasOwnProperty("notFound")) {
                object.notFound = $root.prb.NotFoundError.toObject(message.notFound, options);
                if (options.oneofs)
                    object.error = "notFound";
            }
            if (message.duplicated != null && message.hasOwnProperty("duplicated")) {
                object.duplicated = $root.prb.DuplicatedError.toObject(message.duplicated, options);
                if (options.oneofs)
                    object.error = "duplicated";
            }
            return object;
        };

        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
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
            values[valuesById[1] = "S_IDLE"] = 1;
            values[valuesById[2] = "S_BUSY"] = 2;
            values[valuesById[3] = "S_ORPHAN"] = 3;
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
            Info.prototype.parentKnownEight = 0;
            Info.prototype.parentBlobEight = 0;
            Info.prototype.parentArchivedEight = 0;
            Info.prototype.paraKnownEight = 0;
            Info.prototype.paraBlobEight = 0;
            Info.prototype.paraArchivedEight = 0;
            Info.prototype.synched = false;

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
                if (message.parentKnownEight != null && Object.hasOwnProperty.call(message, "parentKnownEight"))
                    writer.uint32(32).int32(message.parentKnownEight);
                if (message.parentBlobEight != null && Object.hasOwnProperty.call(message, "parentBlobEight"))
                    writer.uint32(40).int32(message.parentBlobEight);
                if (message.parentArchivedEight != null && Object.hasOwnProperty.call(message, "parentArchivedEight"))
                    writer.uint32(48).int32(message.parentArchivedEight);
                if (message.paraKnownEight != null && Object.hasOwnProperty.call(message, "paraKnownEight"))
                    writer.uint32(56).int32(message.paraKnownEight);
                if (message.paraBlobEight != null && Object.hasOwnProperty.call(message, "paraBlobEight"))
                    writer.uint32(64).int32(message.paraBlobEight);
                if (message.paraArchivedEight != null && Object.hasOwnProperty.call(message, "paraArchivedEight"))
                    writer.uint32(72).int32(message.paraArchivedEight);
                if (message.synched != null && Object.hasOwnProperty.call(message, "synched"))
                    writer.uint32(80).bool(message.synched);
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
                        message.parentKnownEight = reader.int32();
                        break;
                    case 5:
                        message.parentBlobEight = reader.int32();
                        break;
                    case 6:
                        message.parentArchivedEight = reader.int32();
                        break;
                    case 7:
                        message.paraKnownEight = reader.int32();
                        break;
                    case 8:
                        message.paraBlobEight = reader.int32();
                        break;
                    case 9:
                        message.paraArchivedEight = reader.int32();
                        break;
                    case 10:
                        message.synched = reader.bool();
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
                    case 3:
                        break;
                    }
                if (message.paraId != null && message.hasOwnProperty("paraId"))
                    if (!$util.isInteger(message.paraId))
                        return "paraId: integer expected";
                if (message.parentStartHeader != null && message.hasOwnProperty("parentStartHeader"))
                    if (!$util.isInteger(message.parentStartHeader))
                        return "parentStartHeader: integer expected";
                if (message.parentKnownEight != null && message.hasOwnProperty("parentKnownEight"))
                    if (!$util.isInteger(message.parentKnownEight))
                        return "parentKnownEight: integer expected";
                if (message.parentBlobEight != null && message.hasOwnProperty("parentBlobEight"))
                    if (!$util.isInteger(message.parentBlobEight))
                        return "parentBlobEight: integer expected";
                if (message.parentArchivedEight != null && message.hasOwnProperty("parentArchivedEight"))
                    if (!$util.isInteger(message.parentArchivedEight))
                        return "parentArchivedEight: integer expected";
                if (message.paraKnownEight != null && message.hasOwnProperty("paraKnownEight"))
                    if (!$util.isInteger(message.paraKnownEight))
                        return "paraKnownEight: integer expected";
                if (message.paraBlobEight != null && message.hasOwnProperty("paraBlobEight"))
                    if (!$util.isInteger(message.paraBlobEight))
                        return "paraBlobEight: integer expected";
                if (message.paraArchivedEight != null && message.hasOwnProperty("paraArchivedEight"))
                    if (!$util.isInteger(message.paraArchivedEight))
                        return "paraArchivedEight: integer expected";
                if (message.synched != null && message.hasOwnProperty("synched"))
                    if (typeof message.synched !== "boolean")
                        return "synched: boolean expected";
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
                case "S_IDLE":
                case 1:
                    message.status = 1;
                    break;
                case "S_BUSY":
                case 2:
                    message.status = 2;
                    break;
                case "S_ORPHAN":
                case 3:
                    message.status = 3;
                    break;
                }
                if (object.paraId != null)
                    message.paraId = object.paraId | 0;
                if (object.parentStartHeader != null)
                    message.parentStartHeader = object.parentStartHeader | 0;
                if (object.parentKnownEight != null)
                    message.parentKnownEight = object.parentKnownEight | 0;
                if (object.parentBlobEight != null)
                    message.parentBlobEight = object.parentBlobEight | 0;
                if (object.parentArchivedEight != null)
                    message.parentArchivedEight = object.parentArchivedEight | 0;
                if (object.paraKnownEight != null)
                    message.paraKnownEight = object.paraKnownEight | 0;
                if (object.paraBlobEight != null)
                    message.paraBlobEight = object.paraBlobEight | 0;
                if (object.paraArchivedEight != null)
                    message.paraArchivedEight = object.paraArchivedEight | 0;
                if (object.synched != null)
                    message.synched = Boolean(object.synched);
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
                    object.parentKnownEight = 0;
                    object.parentBlobEight = 0;
                    object.parentArchivedEight = 0;
                    object.paraKnownEight = 0;
                    object.paraBlobEight = 0;
                    object.paraArchivedEight = 0;
                    object.synched = false;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.prb.data_provider.Status[message.status] : message.status;
                if (message.paraId != null && message.hasOwnProperty("paraId"))
                    object.paraId = message.paraId;
                if (message.parentStartHeader != null && message.hasOwnProperty("parentStartHeader"))
                    object.parentStartHeader = message.parentStartHeader;
                if (message.parentKnownEight != null && message.hasOwnProperty("parentKnownEight"))
                    object.parentKnownEight = message.parentKnownEight;
                if (message.parentBlobEight != null && message.hasOwnProperty("parentBlobEight"))
                    object.parentBlobEight = message.parentBlobEight;
                if (message.parentArchivedEight != null && message.hasOwnProperty("parentArchivedEight"))
                    object.parentArchivedEight = message.parentArchivedEight;
                if (message.paraKnownEight != null && message.hasOwnProperty("paraKnownEight"))
                    object.paraKnownEight = message.paraKnownEight;
                if (message.paraBlobEight != null && message.hasOwnProperty("paraBlobEight"))
                    object.paraBlobEight = message.paraBlobEight;
                if (message.paraArchivedEight != null && message.hasOwnProperty("paraArchivedEight"))
                    object.paraArchivedEight = message.paraArchivedEight;
                if (message.synched != null && message.hasOwnProperty("synched"))
                    object.synched = message.synched;
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

        data_provider.CreatePool = (function() {

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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.CreatePool();
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
                if (object instanceof $root.prb.data_provider.CreatePool)
                    return object;
                let message = new $root.prb.data_provider.CreatePool();
                if (object.pools) {
                    if (!Array.isArray(object.pools))
                        throw TypeError(".prb.data_provider.CreatePool.pools: array expected");
                    message.pools = [];
                    for (let i = 0; i < object.pools.length; ++i) {
                        if (typeof object.pools[i] !== "object")
                            throw TypeError(".prb.data_provider.CreatePool.pools: object expected");
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

        data_provider.UpdatePool = (function() {

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
                        $root.prb.data_provider.UpdatePool.Item.encode(message.items[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            UpdatePool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            UpdatePool.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.UpdatePool();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.prb.data_provider.UpdatePool.Item.decode(reader, reader.uint32()));
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
                        let error = $root.prb.data_provider.UpdatePool.Item.verify(message.items[i]);
                        if (error)
                            return "items." + error;
                    }
                }
                return null;
            };

            UpdatePool.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.data_provider.UpdatePool)
                    return object;
                let message = new $root.prb.data_provider.UpdatePool();
                if (object.items) {
                    if (!Array.isArray(object.items))
                        throw TypeError(".prb.data_provider.UpdatePool.items: array expected");
                    message.items = [];
                    for (let i = 0; i < object.items.length; ++i) {
                        if (typeof object.items[i] !== "object")
                            throw TypeError(".prb.data_provider.UpdatePool.items: object expected");
                        message.items[i] = $root.prb.data_provider.UpdatePool.Item.fromObject(object.items[i]);
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
                        object.items[j] = $root.prb.data_provider.UpdatePool.Item.toObject(message.items[j], options);
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
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.UpdatePool.Item();
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
                    if (object instanceof $root.prb.data_provider.UpdatePool.Item)
                        return object;
                    let message = new $root.prb.data_provider.UpdatePool.Item();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".prb.data_provider.UpdatePool.Item.id: object expected");
                        message.id = $root.prb.PoolOrWorkerQueryIdentity.fromObject(object.id);
                    }
                    if (object.pool != null) {
                        if (typeof object.pool !== "object")
                            throw TypeError(".prb.data_provider.UpdatePool.Item.pool: object expected");
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

        data_provider.CreateWorker = (function() {

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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.CreateWorker();
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
                if (object instanceof $root.prb.data_provider.CreateWorker)
                    return object;
                let message = new $root.prb.data_provider.CreateWorker();
                if (object.workers) {
                    if (!Array.isArray(object.workers))
                        throw TypeError(".prb.data_provider.CreateWorker.workers: array expected");
                    message.workers = [];
                    for (let i = 0; i < object.workers.length; ++i) {
                        if (typeof object.workers[i] !== "object")
                            throw TypeError(".prb.data_provider.CreateWorker.workers: object expected");
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

        data_provider.UpdateWorker = (function() {

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
                        $root.prb.data_provider.UpdateWorker.Item.encode(message.items[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            UpdateWorker.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            UpdateWorker.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.UpdateWorker();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.prb.data_provider.UpdateWorker.Item.decode(reader, reader.uint32()));
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
                        let error = $root.prb.data_provider.UpdateWorker.Item.verify(message.items[i]);
                        if (error)
                            return "items." + error;
                    }
                }
                return null;
            };

            UpdateWorker.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.data_provider.UpdateWorker)
                    return object;
                let message = new $root.prb.data_provider.UpdateWorker();
                if (object.items) {
                    if (!Array.isArray(object.items))
                        throw TypeError(".prb.data_provider.UpdateWorker.items: array expected");
                    message.items = [];
                    for (let i = 0; i < object.items.length; ++i) {
                        if (typeof object.items[i] !== "object")
                            throw TypeError(".prb.data_provider.UpdateWorker.items: object expected");
                        message.items[i] = $root.prb.data_provider.UpdateWorker.Item.fromObject(object.items[i]);
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
                        object.items[j] = $root.prb.data_provider.UpdateWorker.Item.toObject(message.items[j], options);
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
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.UpdateWorker.Item();
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
                    if (object instanceof $root.prb.data_provider.UpdateWorker.Item)
                        return object;
                    let message = new $root.prb.data_provider.UpdateWorker.Item();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".prb.data_provider.UpdateWorker.Item.id: object expected");
                        message.id = $root.prb.PoolOrWorkerQueryIdentity.fromObject(object.id);
                    }
                    if (object.worker != null) {
                        if (typeof object.worker !== "object")
                            throw TypeError(".prb.data_provider.UpdateWorker.Item.worker: object expected");
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

        data_provider.PoolList = (function() {

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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.PoolList();
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
                if (object instanceof $root.prb.data_provider.PoolList)
                    return object;
                let message = new $root.prb.data_provider.PoolList();
                if (object.pools) {
                    if (!Array.isArray(object.pools))
                        throw TypeError(".prb.data_provider.PoolList.pools: array expected");
                    message.pools = [];
                    for (let i = 0; i < object.pools.length; ++i) {
                        if (typeof object.pools[i] !== "object")
                            throw TypeError(".prb.data_provider.PoolList.pools: object expected");
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

        data_provider.WorkerList = (function() {

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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.data_provider.WorkerList();
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
                if (object instanceof $root.prb.data_provider.WorkerList)
                    return object;
                let message = new $root.prb.data_provider.WorkerList();
                if (object.workers) {
                    if (!Array.isArray(object.workers))
                        throw TypeError(".prb.data_provider.WorkerList.workers: array expected");
                    message.workers = [];
                    for (let i = 0; i < object.workers.length; ++i) {
                        if (typeof object.workers[i] !== "object")
                            throw TypeError(".prb.data_provider.WorkerList.workers: object expected");
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
        WorkerState.prototype.minerInfoJson = "";
        WorkerState.prototype.minerAccountId = "";

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
            if (message.minerInfoJson != null && Object.hasOwnProperty.call(message, "minerInfoJson"))
                writer.uint32(82).string(message.minerInfoJson);
            if (message.minerAccountId != null && Object.hasOwnProperty.call(message, "minerAccountId"))
                writer.uint32(90).string(message.minerAccountId);
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
                    message.minerInfoJson = reader.string();
                    break;
                case 11:
                    message.minerAccountId = reader.string();
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
            if (message.minerInfoJson != null && message.hasOwnProperty("minerInfoJson"))
                if (!$util.isString(message.minerInfoJson))
                    return "minerInfoJson: string expected";
            if (message.minerAccountId != null && message.hasOwnProperty("minerAccountId"))
                if (!$util.isString(message.minerAccountId))
                    return "minerAccountId: string expected";
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
            case "S_PRE_MINING":
            case 4:
                message.status = 4;
                break;
            case "S_MINING":
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
            if (object.minerInfoJson != null)
                message.minerInfoJson = String(object.minerInfoJson);
            if (object.minerAccountId != null)
                message.minerAccountId = String(object.minerAccountId);
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
                object.minerInfoJson = "";
                object.minerAccountId = "";
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
            if (message.minerInfoJson != null && message.hasOwnProperty("minerInfoJson"))
                object.minerInfoJson = message.minerInfoJson;
            if (message.minerAccountId != null && message.hasOwnProperty("minerAccountId"))
                object.minerAccountId = message.minerAccountId;
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
            values[valuesById[4] = "S_PRE_MINING"] = 4;
            values[valuesById[5] = "S_MINING"] = 5;
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

    prb.LifecycleManagerStateUpdate = (function() {

        function LifecycleManagerStateUpdate(properties) {
            this.pools = [];
            this.workers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LifecycleManagerStateUpdate.prototype.hostname = "";
        LifecycleManagerStateUpdate.prototype.pools = $util.emptyArray;
        LifecycleManagerStateUpdate.prototype.workers = $util.emptyArray;

        LifecycleManagerStateUpdate.create = function create(properties) {
            return new LifecycleManagerStateUpdate(properties);
        };

        LifecycleManagerStateUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                writer.uint32(10).string(message.hostname);
            if (message.pools != null && message.pools.length)
                for (let i = 0; i < message.pools.length; ++i)
                    $root.prb.db.Pool.encode(message.pools[i], writer.uint32(18).fork()).ldelim();
            if (message.workers != null && message.workers.length)
                for (let i = 0; i < message.workers.length; ++i)
                    $root.prb.db.Worker.encode(message.workers[i], writer.uint32(26).fork()).ldelim();
            return writer;
        };

        LifecycleManagerStateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LifecycleManagerStateUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.LifecycleManagerStateUpdate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hostname = reader.string();
                    break;
                case 2:
                    if (!(message.pools && message.pools.length))
                        message.pools = [];
                    message.pools.push($root.prb.db.Pool.decode(reader, reader.uint32()));
                    break;
                case 3:
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

        LifecycleManagerStateUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LifecycleManagerStateUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            if (message.pools != null && message.hasOwnProperty("pools")) {
                if (!Array.isArray(message.pools))
                    return "pools: array expected";
                for (let i = 0; i < message.pools.length; ++i) {
                    let error = $root.prb.db.Pool.verify(message.pools[i]);
                    if (error)
                        return "pools." + error;
                }
            }
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

        LifecycleManagerStateUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.LifecycleManagerStateUpdate)
                return object;
            let message = new $root.prb.LifecycleManagerStateUpdate();
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            if (object.pools) {
                if (!Array.isArray(object.pools))
                    throw TypeError(".prb.LifecycleManagerStateUpdate.pools: array expected");
                message.pools = [];
                for (let i = 0; i < object.pools.length; ++i) {
                    if (typeof object.pools[i] !== "object")
                        throw TypeError(".prb.LifecycleManagerStateUpdate.pools: object expected");
                    message.pools[i] = $root.prb.db.Pool.fromObject(object.pools[i]);
                }
            }
            if (object.workers) {
                if (!Array.isArray(object.workers))
                    throw TypeError(".prb.LifecycleManagerStateUpdate.workers: array expected");
                message.workers = [];
                for (let i = 0; i < object.workers.length; ++i) {
                    if (typeof object.workers[i] !== "object")
                        throw TypeError(".prb.LifecycleManagerStateUpdate.workers: object expected");
                    message.workers[i] = $root.prb.db.Worker.fromObject(object.workers[i]);
                }
            }
            return message;
        };

        LifecycleManagerStateUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.pools = [];
                object.workers = [];
            }
            if (options.defaults)
                object.hostname = "";
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                object.hostname = message.hostname;
            if (message.pools && message.pools.length) {
                object.pools = [];
                for (let j = 0; j < message.pools.length; ++j)
                    object.pools[j] = $root.prb.db.Pool.toObject(message.pools[j], options);
            }
            if (message.workers && message.workers.length) {
                object.workers = [];
                for (let j = 0; j < message.workers.length; ++j)
                    object.workers[j] = $root.prb.db.Worker.toObject(message.workers[j], options);
            }
            return object;
        };

        LifecycleManagerStateUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LifecycleManagerStateUpdate;
    })();

    prb.CallOnlineLifecycleManager = (function() {

        function CallOnlineLifecycleManager(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CallOnlineLifecycleManager.prototype.isResponse = false;
        CallOnlineLifecycleManager.prototype.hostname = "";

        CallOnlineLifecycleManager.create = function create(properties) {
            return new CallOnlineLifecycleManager(properties);
        };

        CallOnlineLifecycleManager.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isResponse != null && Object.hasOwnProperty.call(message, "isResponse"))
                writer.uint32(8).bool(message.isResponse);
            if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                writer.uint32(18).string(message.hostname);
            return writer;
        };

        CallOnlineLifecycleManager.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CallOnlineLifecycleManager.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.CallOnlineLifecycleManager();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isResponse = reader.bool();
                    break;
                case 2:
                    message.hostname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        CallOnlineLifecycleManager.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CallOnlineLifecycleManager.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isResponse != null && message.hasOwnProperty("isResponse"))
                if (typeof message.isResponse !== "boolean")
                    return "isResponse: boolean expected";
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            return null;
        };

        CallOnlineLifecycleManager.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.CallOnlineLifecycleManager)
                return object;
            let message = new $root.prb.CallOnlineLifecycleManager();
            if (object.isResponse != null)
                message.isResponse = Boolean(object.isResponse);
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            return message;
        };

        CallOnlineLifecycleManager.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.isResponse = false;
                object.hostname = "";
            }
            if (message.isResponse != null && message.hasOwnProperty("isResponse"))
                object.isResponse = message.isResponse;
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                object.hostname = message.hostname;
            return object;
        };

        CallOnlineLifecycleManager.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CallOnlineLifecycleManager;
    })();

    prb.LifecycleActionRequest = (function() {

        function LifecycleActionRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LifecycleActionRequest.prototype.id = null;
        LifecycleActionRequest.prototype.reason = "";

        LifecycleActionRequest.create = function create(properties) {
            return new LifecycleActionRequest(properties);
        };

        LifecycleActionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                $root.prb.PoolOrWorkerQueryIdentity.encode(message.id, writer.uint32(10).fork()).ldelim();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(18).string(message.reason);
            return writer;
        };

        LifecycleActionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LifecycleActionRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.LifecycleActionRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = $root.prb.PoolOrWorkerQueryIdentity.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LifecycleActionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LifecycleActionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id")) {
                let error = $root.prb.PoolOrWorkerQueryIdentity.verify(message.id);
                if (error)
                    return "id." + error;
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        LifecycleActionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.LifecycleActionRequest)
                return object;
            let message = new $root.prb.LifecycleActionRequest();
            if (object.id != null) {
                if (typeof object.id !== "object")
                    throw TypeError(".prb.LifecycleActionRequest.id: object expected");
                message.id = $root.prb.PoolOrWorkerQueryIdentity.fromObject(object.id);
            }
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        LifecycleActionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = null;
                object.reason = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = $root.prb.PoolOrWorkerQueryIdentity.toObject(message.id, options);
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        LifecycleActionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LifecycleActionRequest;
    })();

    prb.RequestStartWorkerLifecycle = (function() {

        function RequestStartWorkerLifecycle(properties) {
            this.requests = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RequestStartWorkerLifecycle.prototype.requests = $util.emptyArray;

        RequestStartWorkerLifecycle.create = function create(properties) {
            return new RequestStartWorkerLifecycle(properties);
        };

        RequestStartWorkerLifecycle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requests != null && message.requests.length)
                for (let i = 0; i < message.requests.length; ++i)
                    $root.prb.LifecycleActionRequest.encode(message.requests[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        RequestStartWorkerLifecycle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RequestStartWorkerLifecycle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.RequestStartWorkerLifecycle();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.requests && message.requests.length))
                        message.requests = [];
                    message.requests.push($root.prb.LifecycleActionRequest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RequestStartWorkerLifecycle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RequestStartWorkerLifecycle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requests != null && message.hasOwnProperty("requests")) {
                if (!Array.isArray(message.requests))
                    return "requests: array expected";
                for (let i = 0; i < message.requests.length; ++i) {
                    let error = $root.prb.LifecycleActionRequest.verify(message.requests[i]);
                    if (error)
                        return "requests." + error;
                }
            }
            return null;
        };

        RequestStartWorkerLifecycle.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.RequestStartWorkerLifecycle)
                return object;
            let message = new $root.prb.RequestStartWorkerLifecycle();
            if (object.requests) {
                if (!Array.isArray(object.requests))
                    throw TypeError(".prb.RequestStartWorkerLifecycle.requests: array expected");
                message.requests = [];
                for (let i = 0; i < object.requests.length; ++i) {
                    if (typeof object.requests[i] !== "object")
                        throw TypeError(".prb.RequestStartWorkerLifecycle.requests: object expected");
                    message.requests[i] = $root.prb.LifecycleActionRequest.fromObject(object.requests[i]);
                }
            }
            return message;
        };

        RequestStartWorkerLifecycle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.requests = [];
            if (message.requests && message.requests.length) {
                object.requests = [];
                for (let j = 0; j < message.requests.length; ++j)
                    object.requests[j] = $root.prb.LifecycleActionRequest.toObject(message.requests[j], options);
            }
            return object;
        };

        RequestStartWorkerLifecycle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestStartWorkerLifecycle;
    })();

    prb.RequestKickWorker = (function() {

        function RequestKickWorker(properties) {
            this.requests = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RequestKickWorker.prototype.requests = $util.emptyArray;

        RequestKickWorker.create = function create(properties) {
            return new RequestKickWorker(properties);
        };

        RequestKickWorker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requests != null && message.requests.length)
                for (let i = 0; i < message.requests.length; ++i)
                    $root.prb.LifecycleActionRequest.encode(message.requests[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        RequestKickWorker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RequestKickWorker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.RequestKickWorker();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.requests && message.requests.length))
                        message.requests = [];
                    message.requests.push($root.prb.LifecycleActionRequest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RequestKickWorker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RequestKickWorker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requests != null && message.hasOwnProperty("requests")) {
                if (!Array.isArray(message.requests))
                    return "requests: array expected";
                for (let i = 0; i < message.requests.length; ++i) {
                    let error = $root.prb.LifecycleActionRequest.verify(message.requests[i]);
                    if (error)
                        return "requests." + error;
                }
            }
            return null;
        };

        RequestKickWorker.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.RequestKickWorker)
                return object;
            let message = new $root.prb.RequestKickWorker();
            if (object.requests) {
                if (!Array.isArray(object.requests))
                    throw TypeError(".prb.RequestKickWorker.requests: array expected");
                message.requests = [];
                for (let i = 0; i < object.requests.length; ++i) {
                    if (typeof object.requests[i] !== "object")
                        throw TypeError(".prb.RequestKickWorker.requests: object expected");
                    message.requests[i] = $root.prb.LifecycleActionRequest.fromObject(object.requests[i]);
                }
            }
            return message;
        };

        RequestKickWorker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.requests = [];
            if (message.requests && message.requests.length) {
                object.requests = [];
                for (let j = 0; j < message.requests.length; ++j)
                    object.requests[j] = $root.prb.LifecycleActionRequest.toObject(message.requests[j], options);
            }
            return object;
        };

        RequestKickWorker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestKickWorker;
    })();

    return prb;
})();

export { $root as default };

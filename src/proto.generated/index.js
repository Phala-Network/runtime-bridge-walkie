/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const prb = $root.prb = (() => {

    /**
     * Namespace prb.
     * @exports prb
     * @namespace
     */
    const prb = {};

    /**
     * WalkieRoles enum.
     * @name prb.WalkieRoles
     * @enum {number}
     * @property {number} CLIENT=0 CLIENT value
     * @property {number} DATA_PROVIDER=1 DATA_PROVIDER value
     * @property {number} LIFECYCLE_MANAGER=2 LIFECYCLE_MANAGER value
     * @property {number} TRADER=3 TRADER value
     */
    prb.WalkieRoles = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CLIENT"] = 0;
        values[valuesById[1] = "DATA_PROVIDER"] = 1;
        values[valuesById[2] = "LIFECYCLE_MANAGER"] = 2;
        values[valuesById[3] = "TRADER"] = 3;
        return values;
    })();

    prb.WalkieSystemInfo = (function() {

        /**
         * Properties of a WalkieSystemInfo.
         * @memberof prb
         * @interface IWalkieSystemInfo
         * @property {string|null} [hostname] WalkieSystemInfo hostname
         * @property {string|null} [peerId] WalkieSystemInfo peerId
         * @property {prb.WalkieRoles|null} [role] WalkieSystemInfo role
         */

        /**
         * Constructs a new WalkieSystemInfo.
         * @memberof prb
         * @classdesc Represents a WalkieSystemInfo.
         * @implements IWalkieSystemInfo
         * @constructor
         * @param {prb.IWalkieSystemInfo=} [p] Properties to set
         */
        function WalkieSystemInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * WalkieSystemInfo hostname.
         * @member {string} hostname
         * @memberof prb.WalkieSystemInfo
         * @instance
         */
        WalkieSystemInfo.prototype.hostname = "";

        /**
         * WalkieSystemInfo peerId.
         * @member {string} peerId
         * @memberof prb.WalkieSystemInfo
         * @instance
         */
        WalkieSystemInfo.prototype.peerId = "";

        /**
         * WalkieSystemInfo role.
         * @member {prb.WalkieRoles} role
         * @memberof prb.WalkieSystemInfo
         * @instance
         */
        WalkieSystemInfo.prototype.role = 0;

        /**
         * Creates a new WalkieSystemInfo instance using the specified properties.
         * @function create
         * @memberof prb.WalkieSystemInfo
         * @static
         * @param {prb.IWalkieSystemInfo=} [properties] Properties to set
         * @returns {prb.WalkieSystemInfo} WalkieSystemInfo instance
         */
        WalkieSystemInfo.create = function create(properties) {
            return new WalkieSystemInfo(properties);
        };

        /**
         * Encodes the specified WalkieSystemInfo message. Does not implicitly {@link prb.WalkieSystemInfo.verify|verify} messages.
         * @function encode
         * @memberof prb.WalkieSystemInfo
         * @static
         * @param {prb.IWalkieSystemInfo} m WalkieSystemInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalkieSystemInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.hostname != null && Object.hasOwnProperty.call(m, "hostname"))
                w.uint32(10).string(m.hostname);
            if (m.peerId != null && Object.hasOwnProperty.call(m, "peerId"))
                w.uint32(18).string(m.peerId);
            if (m.role != null && Object.hasOwnProperty.call(m, "role"))
                w.uint32(24).int32(m.role);
            return w;
        };

        /**
         * Encodes the specified WalkieSystemInfo message, length delimited. Does not implicitly {@link prb.WalkieSystemInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.WalkieSystemInfo
         * @static
         * @param {prb.IWalkieSystemInfo} message WalkieSystemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalkieSystemInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WalkieSystemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof prb.WalkieSystemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.WalkieSystemInfo} WalkieSystemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalkieSystemInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.WalkieSystemInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.hostname = r.string();
                    break;
                case 2:
                    m.peerId = r.string();
                    break;
                case 3:
                    m.role = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a WalkieSystemInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.WalkieSystemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.WalkieSystemInfo} WalkieSystemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalkieSystemInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WalkieSystemInfo message.
         * @function verify
         * @memberof prb.WalkieSystemInfo
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WalkieSystemInfo.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.hostname != null && m.hasOwnProperty("hostname")) {
                if (!$util.isString(m.hostname))
                    return "hostname: string expected";
            }
            if (m.peerId != null && m.hasOwnProperty("peerId")) {
                if (!$util.isString(m.peerId))
                    return "peerId: string expected";
            }
            if (m.role != null && m.hasOwnProperty("role")) {
                switch (m.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a WalkieSystemInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.WalkieSystemInfo
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.WalkieSystemInfo} WalkieSystemInfo
         */
        WalkieSystemInfo.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.WalkieSystemInfo)
                return d;
            var m = new $root.prb.WalkieSystemInfo();
            if (d.hostname != null) {
                m.hostname = String(d.hostname);
            }
            if (d.peerId != null) {
                m.peerId = String(d.peerId);
            }
            switch (d.role) {
            case "CLIENT":
            case 0:
                m.role = 0;
                break;
            case "DATA_PROVIDER":
            case 1:
                m.role = 1;
                break;
            case "LIFECYCLE_MANAGER":
            case 2:
                m.role = 2;
                break;
            case "TRADER":
            case 3:
                m.role = 3;
                break;
            }
            return m;
        };

        /**
         * Creates a plain object from a WalkieSystemInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.WalkieSystemInfo
         * @static
         * @param {prb.WalkieSystemInfo} m WalkieSystemInfo
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WalkieSystemInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.hostname = "";
                d.peerId = "";
                d.role = o.enums === String ? "CLIENT" : 0;
            }
            if (m.hostname != null && m.hasOwnProperty("hostname")) {
                d.hostname = m.hostname;
            }
            if (m.peerId != null && m.hasOwnProperty("peerId")) {
                d.peerId = m.peerId;
            }
            if (m.role != null && m.hasOwnProperty("role")) {
                d.role = o.enums === String ? $root.prb.WalkieRoles[m.role] : m.role;
            }
            return d;
        };

        /**
         * Converts this WalkieSystemInfo to JSON.
         * @function toJSON
         * @memberof prb.WalkieSystemInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WalkieSystemInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WalkieSystemInfo;
    })();

    prb.WalkieRpcRequestWrapper = (function() {

        /**
         * Properties of a WalkieRpcRequestWrapper.
         * @memberof prb
         * @interface IWalkieRpcRequestWrapper
         * @property {number|Long|null} [createdAt] WalkieRpcRequestWrapper createdAt
         * @property {string|null} [nonce] WalkieRpcRequestWrapper nonce
         * @property {Uint8Array|null} [data] WalkieRpcRequestWrapper data
         * @property {string|null} [method] WalkieRpcRequestWrapper method
         * @property {string|null} [ns] WalkieRpcRequestWrapper ns
         */

        /**
         * Constructs a new WalkieRpcRequestWrapper.
         * @memberof prb
         * @classdesc Represents a WalkieRpcRequestWrapper.
         * @implements IWalkieRpcRequestWrapper
         * @constructor
         * @param {prb.IWalkieRpcRequestWrapper=} [p] Properties to set
         */
        function WalkieRpcRequestWrapper(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * WalkieRpcRequestWrapper createdAt.
         * @member {number|Long} createdAt
         * @memberof prb.WalkieRpcRequestWrapper
         * @instance
         */
        WalkieRpcRequestWrapper.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WalkieRpcRequestWrapper nonce.
         * @member {string} nonce
         * @memberof prb.WalkieRpcRequestWrapper
         * @instance
         */
        WalkieRpcRequestWrapper.prototype.nonce = "";

        /**
         * WalkieRpcRequestWrapper data.
         * @member {Uint8Array} data
         * @memberof prb.WalkieRpcRequestWrapper
         * @instance
         */
        WalkieRpcRequestWrapper.prototype.data = $util.newBuffer([]);

        /**
         * WalkieRpcRequestWrapper method.
         * @member {string} method
         * @memberof prb.WalkieRpcRequestWrapper
         * @instance
         */
        WalkieRpcRequestWrapper.prototype.method = "";

        /**
         * WalkieRpcRequestWrapper ns.
         * @member {string} ns
         * @memberof prb.WalkieRpcRequestWrapper
         * @instance
         */
        WalkieRpcRequestWrapper.prototype.ns = "";

        /**
         * Creates a new WalkieRpcRequestWrapper instance using the specified properties.
         * @function create
         * @memberof prb.WalkieRpcRequestWrapper
         * @static
         * @param {prb.IWalkieRpcRequestWrapper=} [properties] Properties to set
         * @returns {prb.WalkieRpcRequestWrapper} WalkieRpcRequestWrapper instance
         */
        WalkieRpcRequestWrapper.create = function create(properties) {
            return new WalkieRpcRequestWrapper(properties);
        };

        /**
         * Encodes the specified WalkieRpcRequestWrapper message. Does not implicitly {@link prb.WalkieRpcRequestWrapper.verify|verify} messages.
         * @function encode
         * @memberof prb.WalkieRpcRequestWrapper
         * @static
         * @param {prb.IWalkieRpcRequestWrapper} m WalkieRpcRequestWrapper message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalkieRpcRequestWrapper.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.createdAt != null && Object.hasOwnProperty.call(m, "createdAt"))
                w.uint32(8).uint64(m.createdAt);
            if (m.nonce != null && Object.hasOwnProperty.call(m, "nonce"))
                w.uint32(18).string(m.nonce);
            if (m.data != null && Object.hasOwnProperty.call(m, "data"))
                w.uint32(26).bytes(m.data);
            if (m.method != null && Object.hasOwnProperty.call(m, "method"))
                w.uint32(34).string(m.method);
            if (m.ns != null && Object.hasOwnProperty.call(m, "ns"))
                w.uint32(42).string(m.ns);
            return w;
        };

        /**
         * Encodes the specified WalkieRpcRequestWrapper message, length delimited. Does not implicitly {@link prb.WalkieRpcRequestWrapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.WalkieRpcRequestWrapper
         * @static
         * @param {prb.IWalkieRpcRequestWrapper} message WalkieRpcRequestWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalkieRpcRequestWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WalkieRpcRequestWrapper message from the specified reader or buffer.
         * @function decode
         * @memberof prb.WalkieRpcRequestWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.WalkieRpcRequestWrapper} WalkieRpcRequestWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalkieRpcRequestWrapper.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.WalkieRpcRequestWrapper();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.createdAt = r.uint64();
                    break;
                case 2:
                    m.nonce = r.string();
                    break;
                case 3:
                    m.data = r.bytes();
                    break;
                case 4:
                    m.method = r.string();
                    break;
                case 5:
                    m.ns = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a WalkieRpcRequestWrapper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.WalkieRpcRequestWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.WalkieRpcRequestWrapper} WalkieRpcRequestWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalkieRpcRequestWrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WalkieRpcRequestWrapper message.
         * @function verify
         * @memberof prb.WalkieRpcRequestWrapper
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WalkieRpcRequestWrapper.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
                if (!$util.isInteger(m.createdAt) && !(m.createdAt && $util.isInteger(m.createdAt.low) && $util.isInteger(m.createdAt.high)))
                    return "createdAt: integer|Long expected";
            }
            if (m.nonce != null && m.hasOwnProperty("nonce")) {
                if (!$util.isString(m.nonce))
                    return "nonce: string expected";
            }
            if (m.data != null && m.hasOwnProperty("data")) {
                if (!(m.data && typeof m.data.length === "number" || $util.isString(m.data)))
                    return "data: buffer expected";
            }
            if (m.method != null && m.hasOwnProperty("method")) {
                if (!$util.isString(m.method))
                    return "method: string expected";
            }
            if (m.ns != null && m.hasOwnProperty("ns")) {
                if (!$util.isString(m.ns))
                    return "ns: string expected";
            }
            return null;
        };

        /**
         * Creates a WalkieRpcRequestWrapper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.WalkieRpcRequestWrapper
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.WalkieRpcRequestWrapper} WalkieRpcRequestWrapper
         */
        WalkieRpcRequestWrapper.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.WalkieRpcRequestWrapper)
                return d;
            var m = new $root.prb.WalkieRpcRequestWrapper();
            if (d.createdAt != null) {
                if ($util.Long)
                    (m.createdAt = $util.Long.fromValue(d.createdAt)).unsigned = true;
                else if (typeof d.createdAt === "string")
                    m.createdAt = parseInt(d.createdAt, 10);
                else if (typeof d.createdAt === "number")
                    m.createdAt = d.createdAt;
                else if (typeof d.createdAt === "object")
                    m.createdAt = new $util.LongBits(d.createdAt.low >>> 0, d.createdAt.high >>> 0).toNumber(true);
            }
            if (d.nonce != null) {
                m.nonce = String(d.nonce);
            }
            if (d.data != null) {
                if (typeof d.data === "string")
                    $util.base64.decode(d.data, m.data = $util.newBuffer($util.base64.length(d.data)), 0);
                else if (d.data.length)
                    m.data = d.data;
            }
            if (d.method != null) {
                m.method = String(d.method);
            }
            if (d.ns != null) {
                m.ns = String(d.ns);
            }
            return m;
        };

        /**
         * Creates a plain object from a WalkieRpcRequestWrapper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.WalkieRpcRequestWrapper
         * @static
         * @param {prb.WalkieRpcRequestWrapper} m WalkieRpcRequestWrapper
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WalkieRpcRequestWrapper.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.createdAt = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.createdAt = o.longs === String ? "0" : 0;
                d.nonce = "";
                if (o.bytes === String)
                    d.data = "";
                else {
                    d.data = [];
                    if (o.bytes !== Array)
                        d.data = $util.newBuffer(d.data);
                }
                d.method = "";
                d.ns = "";
            }
            if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
                if (typeof m.createdAt === "number")
                    d.createdAt = o.longs === String ? String(m.createdAt) : m.createdAt;
                else
                    d.createdAt = o.longs === String ? $util.Long.prototype.toString.call(m.createdAt) : o.longs === Number ? new $util.LongBits(m.createdAt.low >>> 0, m.createdAt.high >>> 0).toNumber(true) : m.createdAt;
            }
            if (m.nonce != null && m.hasOwnProperty("nonce")) {
                d.nonce = m.nonce;
            }
            if (m.data != null && m.hasOwnProperty("data")) {
                d.data = o.bytes === String ? $util.base64.encode(m.data, 0, m.data.length) : o.bytes === Array ? Array.prototype.slice.call(m.data) : m.data;
            }
            if (m.method != null && m.hasOwnProperty("method")) {
                d.method = m.method;
            }
            if (m.ns != null && m.hasOwnProperty("ns")) {
                d.ns = m.ns;
            }
            return d;
        };

        /**
         * Converts this WalkieRpcRequestWrapper to JSON.
         * @function toJSON
         * @memberof prb.WalkieRpcRequestWrapper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WalkieRpcRequestWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WalkieRpcRequestWrapper;
    })();

    prb.WalkieRpcResponseWrapper = (function() {

        /**
         * Properties of a WalkieRpcResponseWrapper.
         * @memberof prb
         * @interface IWalkieRpcResponseWrapper
         * @property {number|Long|null} [createdAt] WalkieRpcResponseWrapper createdAt
         * @property {string|null} [requestNonce] WalkieRpcResponseWrapper requestNonce
         * @property {string|null} [nonce] WalkieRpcResponseWrapper nonce
         * @property {Uint8Array|null} [data] WalkieRpcResponseWrapper data
         * @property {boolean|null} [hasError] WalkieRpcResponseWrapper hasError
         */

        /**
         * Constructs a new WalkieRpcResponseWrapper.
         * @memberof prb
         * @classdesc Represents a WalkieRpcResponseWrapper.
         * @implements IWalkieRpcResponseWrapper
         * @constructor
         * @param {prb.IWalkieRpcResponseWrapper=} [p] Properties to set
         */
        function WalkieRpcResponseWrapper(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * WalkieRpcResponseWrapper createdAt.
         * @member {number|Long} createdAt
         * @memberof prb.WalkieRpcResponseWrapper
         * @instance
         */
        WalkieRpcResponseWrapper.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WalkieRpcResponseWrapper requestNonce.
         * @member {string} requestNonce
         * @memberof prb.WalkieRpcResponseWrapper
         * @instance
         */
        WalkieRpcResponseWrapper.prototype.requestNonce = "";

        /**
         * WalkieRpcResponseWrapper nonce.
         * @member {string} nonce
         * @memberof prb.WalkieRpcResponseWrapper
         * @instance
         */
        WalkieRpcResponseWrapper.prototype.nonce = "";

        /**
         * WalkieRpcResponseWrapper data.
         * @member {Uint8Array} data
         * @memberof prb.WalkieRpcResponseWrapper
         * @instance
         */
        WalkieRpcResponseWrapper.prototype.data = $util.newBuffer([]);

        /**
         * WalkieRpcResponseWrapper hasError.
         * @member {boolean} hasError
         * @memberof prb.WalkieRpcResponseWrapper
         * @instance
         */
        WalkieRpcResponseWrapper.prototype.hasError = false;

        /**
         * Creates a new WalkieRpcResponseWrapper instance using the specified properties.
         * @function create
         * @memberof prb.WalkieRpcResponseWrapper
         * @static
         * @param {prb.IWalkieRpcResponseWrapper=} [properties] Properties to set
         * @returns {prb.WalkieRpcResponseWrapper} WalkieRpcResponseWrapper instance
         */
        WalkieRpcResponseWrapper.create = function create(properties) {
            return new WalkieRpcResponseWrapper(properties);
        };

        /**
         * Encodes the specified WalkieRpcResponseWrapper message. Does not implicitly {@link prb.WalkieRpcResponseWrapper.verify|verify} messages.
         * @function encode
         * @memberof prb.WalkieRpcResponseWrapper
         * @static
         * @param {prb.IWalkieRpcResponseWrapper} m WalkieRpcResponseWrapper message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalkieRpcResponseWrapper.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.createdAt != null && Object.hasOwnProperty.call(m, "createdAt"))
                w.uint32(8).uint64(m.createdAt);
            if (m.requestNonce != null && Object.hasOwnProperty.call(m, "requestNonce"))
                w.uint32(18).string(m.requestNonce);
            if (m.nonce != null && Object.hasOwnProperty.call(m, "nonce"))
                w.uint32(26).string(m.nonce);
            if (m.data != null && Object.hasOwnProperty.call(m, "data"))
                w.uint32(34).bytes(m.data);
            if (m.hasError != null && Object.hasOwnProperty.call(m, "hasError"))
                w.uint32(40).bool(m.hasError);
            return w;
        };

        /**
         * Encodes the specified WalkieRpcResponseWrapper message, length delimited. Does not implicitly {@link prb.WalkieRpcResponseWrapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.WalkieRpcResponseWrapper
         * @static
         * @param {prb.IWalkieRpcResponseWrapper} message WalkieRpcResponseWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalkieRpcResponseWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WalkieRpcResponseWrapper message from the specified reader or buffer.
         * @function decode
         * @memberof prb.WalkieRpcResponseWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.WalkieRpcResponseWrapper} WalkieRpcResponseWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalkieRpcResponseWrapper.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.WalkieRpcResponseWrapper();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.createdAt = r.uint64();
                    break;
                case 2:
                    m.requestNonce = r.string();
                    break;
                case 3:
                    m.nonce = r.string();
                    break;
                case 4:
                    m.data = r.bytes();
                    break;
                case 5:
                    m.hasError = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a WalkieRpcResponseWrapper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.WalkieRpcResponseWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.WalkieRpcResponseWrapper} WalkieRpcResponseWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalkieRpcResponseWrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WalkieRpcResponseWrapper message.
         * @function verify
         * @memberof prb.WalkieRpcResponseWrapper
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WalkieRpcResponseWrapper.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
                if (!$util.isInteger(m.createdAt) && !(m.createdAt && $util.isInteger(m.createdAt.low) && $util.isInteger(m.createdAt.high)))
                    return "createdAt: integer|Long expected";
            }
            if (m.requestNonce != null && m.hasOwnProperty("requestNonce")) {
                if (!$util.isString(m.requestNonce))
                    return "requestNonce: string expected";
            }
            if (m.nonce != null && m.hasOwnProperty("nonce")) {
                if (!$util.isString(m.nonce))
                    return "nonce: string expected";
            }
            if (m.data != null && m.hasOwnProperty("data")) {
                if (!(m.data && typeof m.data.length === "number" || $util.isString(m.data)))
                    return "data: buffer expected";
            }
            if (m.hasError != null && m.hasOwnProperty("hasError")) {
                if (typeof m.hasError !== "boolean")
                    return "hasError: boolean expected";
            }
            return null;
        };

        /**
         * Creates a WalkieRpcResponseWrapper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.WalkieRpcResponseWrapper
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.WalkieRpcResponseWrapper} WalkieRpcResponseWrapper
         */
        WalkieRpcResponseWrapper.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.WalkieRpcResponseWrapper)
                return d;
            var m = new $root.prb.WalkieRpcResponseWrapper();
            if (d.createdAt != null) {
                if ($util.Long)
                    (m.createdAt = $util.Long.fromValue(d.createdAt)).unsigned = true;
                else if (typeof d.createdAt === "string")
                    m.createdAt = parseInt(d.createdAt, 10);
                else if (typeof d.createdAt === "number")
                    m.createdAt = d.createdAt;
                else if (typeof d.createdAt === "object")
                    m.createdAt = new $util.LongBits(d.createdAt.low >>> 0, d.createdAt.high >>> 0).toNumber(true);
            }
            if (d.requestNonce != null) {
                m.requestNonce = String(d.requestNonce);
            }
            if (d.nonce != null) {
                m.nonce = String(d.nonce);
            }
            if (d.data != null) {
                if (typeof d.data === "string")
                    $util.base64.decode(d.data, m.data = $util.newBuffer($util.base64.length(d.data)), 0);
                else if (d.data.length)
                    m.data = d.data;
            }
            if (d.hasError != null) {
                m.hasError = Boolean(d.hasError);
            }
            return m;
        };

        /**
         * Creates a plain object from a WalkieRpcResponseWrapper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.WalkieRpcResponseWrapper
         * @static
         * @param {prb.WalkieRpcResponseWrapper} m WalkieRpcResponseWrapper
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WalkieRpcResponseWrapper.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.createdAt = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.createdAt = o.longs === String ? "0" : 0;
                d.requestNonce = "";
                d.nonce = "";
                if (o.bytes === String)
                    d.data = "";
                else {
                    d.data = [];
                    if (o.bytes !== Array)
                        d.data = $util.newBuffer(d.data);
                }
                d.hasError = false;
            }
            if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
                if (typeof m.createdAt === "number")
                    d.createdAt = o.longs === String ? String(m.createdAt) : m.createdAt;
                else
                    d.createdAt = o.longs === String ? $util.Long.prototype.toString.call(m.createdAt) : o.longs === Number ? new $util.LongBits(m.createdAt.low >>> 0, m.createdAt.high >>> 0).toNumber(true) : m.createdAt;
            }
            if (m.requestNonce != null && m.hasOwnProperty("requestNonce")) {
                d.requestNonce = m.requestNonce;
            }
            if (m.nonce != null && m.hasOwnProperty("nonce")) {
                d.nonce = m.nonce;
            }
            if (m.data != null && m.hasOwnProperty("data")) {
                d.data = o.bytes === String ? $util.base64.encode(m.data, 0, m.data.length) : o.bytes === Array ? Array.prototype.slice.call(m.data) : m.data;
            }
            if (m.hasError != null && m.hasOwnProperty("hasError")) {
                d.hasError = m.hasError;
            }
            return d;
        };

        /**
         * Converts this WalkieRpcResponseWrapper to JSON.
         * @function toJSON
         * @memberof prb.WalkieRpcResponseWrapper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WalkieRpcResponseWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WalkieRpcResponseWrapper;
    })();

    prb.WalkieBroadcastWrapper = (function() {

        /**
         * Properties of a WalkieBroadcastWrapper.
         * @memberof prb
         * @interface IWalkieBroadcastWrapper
         * @property {number|Long|null} [createdAt] WalkieBroadcastWrapper createdAt
         * @property {string|null} [nonce] WalkieBroadcastWrapper nonce
         * @property {Uint8Array|null} [data] WalkieBroadcastWrapper data
         * @property {string|null} [method] WalkieBroadcastWrapper method
         * @property {string|null} [ns] WalkieBroadcastWrapper ns
         */

        /**
         * Constructs a new WalkieBroadcastWrapper.
         * @memberof prb
         * @classdesc Represents a WalkieBroadcastWrapper.
         * @implements IWalkieBroadcastWrapper
         * @constructor
         * @param {prb.IWalkieBroadcastWrapper=} [p] Properties to set
         */
        function WalkieBroadcastWrapper(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * WalkieBroadcastWrapper createdAt.
         * @member {number|Long} createdAt
         * @memberof prb.WalkieBroadcastWrapper
         * @instance
         */
        WalkieBroadcastWrapper.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WalkieBroadcastWrapper nonce.
         * @member {string} nonce
         * @memberof prb.WalkieBroadcastWrapper
         * @instance
         */
        WalkieBroadcastWrapper.prototype.nonce = "";

        /**
         * WalkieBroadcastWrapper data.
         * @member {Uint8Array} data
         * @memberof prb.WalkieBroadcastWrapper
         * @instance
         */
        WalkieBroadcastWrapper.prototype.data = $util.newBuffer([]);

        /**
         * WalkieBroadcastWrapper method.
         * @member {string} method
         * @memberof prb.WalkieBroadcastWrapper
         * @instance
         */
        WalkieBroadcastWrapper.prototype.method = "";

        /**
         * WalkieBroadcastWrapper ns.
         * @member {string} ns
         * @memberof prb.WalkieBroadcastWrapper
         * @instance
         */
        WalkieBroadcastWrapper.prototype.ns = "";

        /**
         * Creates a new WalkieBroadcastWrapper instance using the specified properties.
         * @function create
         * @memberof prb.WalkieBroadcastWrapper
         * @static
         * @param {prb.IWalkieBroadcastWrapper=} [properties] Properties to set
         * @returns {prb.WalkieBroadcastWrapper} WalkieBroadcastWrapper instance
         */
        WalkieBroadcastWrapper.create = function create(properties) {
            return new WalkieBroadcastWrapper(properties);
        };

        /**
         * Encodes the specified WalkieBroadcastWrapper message. Does not implicitly {@link prb.WalkieBroadcastWrapper.verify|verify} messages.
         * @function encode
         * @memberof prb.WalkieBroadcastWrapper
         * @static
         * @param {prb.IWalkieBroadcastWrapper} m WalkieBroadcastWrapper message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalkieBroadcastWrapper.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.createdAt != null && Object.hasOwnProperty.call(m, "createdAt"))
                w.uint32(8).uint64(m.createdAt);
            if (m.nonce != null && Object.hasOwnProperty.call(m, "nonce"))
                w.uint32(18).string(m.nonce);
            if (m.data != null && Object.hasOwnProperty.call(m, "data"))
                w.uint32(26).bytes(m.data);
            if (m.method != null && Object.hasOwnProperty.call(m, "method"))
                w.uint32(34).string(m.method);
            if (m.ns != null && Object.hasOwnProperty.call(m, "ns"))
                w.uint32(42).string(m.ns);
            return w;
        };

        /**
         * Encodes the specified WalkieBroadcastWrapper message, length delimited. Does not implicitly {@link prb.WalkieBroadcastWrapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.WalkieBroadcastWrapper
         * @static
         * @param {prb.IWalkieBroadcastWrapper} message WalkieBroadcastWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalkieBroadcastWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WalkieBroadcastWrapper message from the specified reader or buffer.
         * @function decode
         * @memberof prb.WalkieBroadcastWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.WalkieBroadcastWrapper} WalkieBroadcastWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalkieBroadcastWrapper.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.WalkieBroadcastWrapper();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.createdAt = r.uint64();
                    break;
                case 2:
                    m.nonce = r.string();
                    break;
                case 3:
                    m.data = r.bytes();
                    break;
                case 4:
                    m.method = r.string();
                    break;
                case 5:
                    m.ns = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a WalkieBroadcastWrapper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.WalkieBroadcastWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.WalkieBroadcastWrapper} WalkieBroadcastWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalkieBroadcastWrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WalkieBroadcastWrapper message.
         * @function verify
         * @memberof prb.WalkieBroadcastWrapper
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WalkieBroadcastWrapper.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
                if (!$util.isInteger(m.createdAt) && !(m.createdAt && $util.isInteger(m.createdAt.low) && $util.isInteger(m.createdAt.high)))
                    return "createdAt: integer|Long expected";
            }
            if (m.nonce != null && m.hasOwnProperty("nonce")) {
                if (!$util.isString(m.nonce))
                    return "nonce: string expected";
            }
            if (m.data != null && m.hasOwnProperty("data")) {
                if (!(m.data && typeof m.data.length === "number" || $util.isString(m.data)))
                    return "data: buffer expected";
            }
            if (m.method != null && m.hasOwnProperty("method")) {
                if (!$util.isString(m.method))
                    return "method: string expected";
            }
            if (m.ns != null && m.hasOwnProperty("ns")) {
                if (!$util.isString(m.ns))
                    return "ns: string expected";
            }
            return null;
        };

        /**
         * Creates a WalkieBroadcastWrapper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.WalkieBroadcastWrapper
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.WalkieBroadcastWrapper} WalkieBroadcastWrapper
         */
        WalkieBroadcastWrapper.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.WalkieBroadcastWrapper)
                return d;
            var m = new $root.prb.WalkieBroadcastWrapper();
            if (d.createdAt != null) {
                if ($util.Long)
                    (m.createdAt = $util.Long.fromValue(d.createdAt)).unsigned = true;
                else if (typeof d.createdAt === "string")
                    m.createdAt = parseInt(d.createdAt, 10);
                else if (typeof d.createdAt === "number")
                    m.createdAt = d.createdAt;
                else if (typeof d.createdAt === "object")
                    m.createdAt = new $util.LongBits(d.createdAt.low >>> 0, d.createdAt.high >>> 0).toNumber(true);
            }
            if (d.nonce != null) {
                m.nonce = String(d.nonce);
            }
            if (d.data != null) {
                if (typeof d.data === "string")
                    $util.base64.decode(d.data, m.data = $util.newBuffer($util.base64.length(d.data)), 0);
                else if (d.data.length)
                    m.data = d.data;
            }
            if (d.method != null) {
                m.method = String(d.method);
            }
            if (d.ns != null) {
                m.ns = String(d.ns);
            }
            return m;
        };

        /**
         * Creates a plain object from a WalkieBroadcastWrapper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.WalkieBroadcastWrapper
         * @static
         * @param {prb.WalkieBroadcastWrapper} m WalkieBroadcastWrapper
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WalkieBroadcastWrapper.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.createdAt = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                } else
                    d.createdAt = o.longs === String ? "0" : 0;
                d.nonce = "";
                if (o.bytes === String)
                    d.data = "";
                else {
                    d.data = [];
                    if (o.bytes !== Array)
                        d.data = $util.newBuffer(d.data);
                }
                d.method = "";
                d.ns = "";
            }
            if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
                if (typeof m.createdAt === "number")
                    d.createdAt = o.longs === String ? String(m.createdAt) : m.createdAt;
                else
                    d.createdAt = o.longs === String ? $util.Long.prototype.toString.call(m.createdAt) : o.longs === Number ? new $util.LongBits(m.createdAt.low >>> 0, m.createdAt.high >>> 0).toNumber(true) : m.createdAt;
            }
            if (m.nonce != null && m.hasOwnProperty("nonce")) {
                d.nonce = m.nonce;
            }
            if (m.data != null && m.hasOwnProperty("data")) {
                d.data = o.bytes === String ? $util.base64.encode(m.data, 0, m.data.length) : o.bytes === Array ? Array.prototype.slice.call(m.data) : m.data;
            }
            if (m.method != null && m.hasOwnProperty("method")) {
                d.method = m.method;
            }
            if (m.ns != null && m.hasOwnProperty("ns")) {
                d.ns = m.ns;
            }
            return d;
        };

        /**
         * Converts this WalkieBroadcastWrapper to JSON.
         * @function toJSON
         * @memberof prb.WalkieBroadcastWrapper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WalkieBroadcastWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WalkieBroadcastWrapper;
    })();

    prb.WalkieRpc = (function() {

        /**
         * Constructs a new WalkieRpc service.
         * @memberof prb
         * @classdesc Represents a WalkieRpc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function WalkieRpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (WalkieRpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = WalkieRpc;

        /**
         * Creates new WalkieRpc service using the specified rpc implementation.
         * @function create
         * @memberof prb.WalkieRpc
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {WalkieRpc} RPC service. Useful where requests and/or responses are streamed.
         */
        WalkieRpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link prb.WalkieRpc#getSystemInfo}.
         * @memberof prb.WalkieRpc
         * @typedef GetSystemInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.WalkieSystemInfo} [response] WalkieSystemInfo
         */

        /**
         * Calls GetSystemInfo.
         * @function getSystemInfo
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.IEmpty} request Empty message or plain object
         * @param {prb.WalkieRpc.GetSystemInfoCallback} callback Node-style callback called with the error, if any, and WalkieSystemInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.getSystemInfo = function getSystemInfo(request, callback) {
            return this.rpcCall(getSystemInfo, $root.prb.Empty, $root.prb.WalkieSystemInfo, request, callback);
        }, "name", { value: "GetSystemInfo" });

        /**
         * Calls GetSystemInfo.
         * @function getSystemInfo
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.IEmpty} request Empty message or plain object
         * @returns {Promise<prb.WalkieSystemInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link prb.WalkieRpc#getDataProviderInfo}.
         * @memberof prb.WalkieRpc
         * @typedef GetDataProviderInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.data_provider.Info} [response] Info
         */

        /**
         * Calls GetDataProviderInfo.
         * @function getDataProviderInfo
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.IEmpty} request Empty message or plain object
         * @param {prb.WalkieRpc.GetDataProviderInfoCallback} callback Node-style callback called with the error, if any, and Info
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.getDataProviderInfo = function getDataProviderInfo(request, callback) {
            return this.rpcCall(getDataProviderInfo, $root.prb.Empty, $root.prb.data_provider.Info, request, callback);
        }, "name", { value: "GetDataProviderInfo" });

        /**
         * Calls GetDataProviderInfo.
         * @function getDataProviderInfo
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.IEmpty} request Empty message or plain object
         * @returns {Promise<prb.data_provider.Info>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link prb.WalkieRpc#getBlobByKey}.
         * @memberof prb.WalkieRpc
         * @typedef GetBlobByKeyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.data_provider.RawBlob} [response] RawBlob
         */

        /**
         * Calls GetBlobByKey.
         * @function getBlobByKey
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.IGetBlobByKey} request GetBlobByKey message or plain object
         * @param {prb.WalkieRpc.GetBlobByKeyCallback} callback Node-style callback called with the error, if any, and RawBlob
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.getBlobByKey = function getBlobByKey(request, callback) {
            return this.rpcCall(getBlobByKey, $root.prb.data_provider.GetBlobByKey, $root.prb.data_provider.RawBlob, request, callback);
        }, "name", { value: "GetBlobByKey" });

        /**
         * Calls GetBlobByKey.
         * @function getBlobByKey
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.IGetBlobByKey} request GetBlobByKey message or plain object
         * @returns {Promise<prb.data_provider.RawBlob>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link prb.WalkieRpc#listPool}.
         * @memberof prb.WalkieRpc
         * @typedef ListPoolCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.data_provider.PoolList} [response] PoolList
         */

        /**
         * Calls ListPool.
         * @function listPool
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.IEmpty} request Empty message or plain object
         * @param {prb.WalkieRpc.ListPoolCallback} callback Node-style callback called with the error, if any, and PoolList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.listPool = function listPool(request, callback) {
            return this.rpcCall(listPool, $root.prb.Empty, $root.prb.data_provider.PoolList, request, callback);
        }, "name", { value: "ListPool" });

        /**
         * Calls ListPool.
         * @function listPool
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.IEmpty} request Empty message or plain object
         * @returns {Promise<prb.data_provider.PoolList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link prb.WalkieRpc#createPool}.
         * @memberof prb.WalkieRpc
         * @typedef CreatePoolCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.data_provider.PoolList} [response] PoolList
         */

        /**
         * Calls CreatePool.
         * @function createPool
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.ICreatePool} request CreatePool message or plain object
         * @param {prb.WalkieRpc.CreatePoolCallback} callback Node-style callback called with the error, if any, and PoolList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.createPool = function createPool(request, callback) {
            return this.rpcCall(createPool, $root.prb.data_provider.CreatePool, $root.prb.data_provider.PoolList, request, callback);
        }, "name", { value: "CreatePool" });

        /**
         * Calls CreatePool.
         * @function createPool
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.ICreatePool} request CreatePool message or plain object
         * @returns {Promise<prb.data_provider.PoolList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link prb.WalkieRpc#updatePool}.
         * @memberof prb.WalkieRpc
         * @typedef UpdatePoolCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.data_provider.PoolList} [response] PoolList
         */

        /**
         * Calls UpdatePool.
         * @function updatePool
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.IUpdatePool} request UpdatePool message or plain object
         * @param {prb.WalkieRpc.UpdatePoolCallback} callback Node-style callback called with the error, if any, and PoolList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.updatePool = function updatePool(request, callback) {
            return this.rpcCall(updatePool, $root.prb.data_provider.UpdatePool, $root.prb.data_provider.PoolList, request, callback);
        }, "name", { value: "UpdatePool" });

        /**
         * Calls UpdatePool.
         * @function updatePool
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.IUpdatePool} request UpdatePool message or plain object
         * @returns {Promise<prb.data_provider.PoolList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link prb.WalkieRpc#listWorker}.
         * @memberof prb.WalkieRpc
         * @typedef ListWorkerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.data_provider.WorkerList} [response] WorkerList
         */

        /**
         * Calls ListWorker.
         * @function listWorker
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.IEmpty} request Empty message or plain object
         * @param {prb.WalkieRpc.ListWorkerCallback} callback Node-style callback called with the error, if any, and WorkerList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.listWorker = function listWorker(request, callback) {
            return this.rpcCall(listWorker, $root.prb.Empty, $root.prb.data_provider.WorkerList, request, callback);
        }, "name", { value: "ListWorker" });

        /**
         * Calls ListWorker.
         * @function listWorker
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.IEmpty} request Empty message or plain object
         * @returns {Promise<prb.data_provider.WorkerList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link prb.WalkieRpc#createWorker}.
         * @memberof prb.WalkieRpc
         * @typedef CreateWorkerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.data_provider.WorkerList} [response] WorkerList
         */

        /**
         * Calls CreateWorker.
         * @function createWorker
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.ICreateWorker} request CreateWorker message or plain object
         * @param {prb.WalkieRpc.CreateWorkerCallback} callback Node-style callback called with the error, if any, and WorkerList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.createWorker = function createWorker(request, callback) {
            return this.rpcCall(createWorker, $root.prb.data_provider.CreateWorker, $root.prb.data_provider.WorkerList, request, callback);
        }, "name", { value: "CreateWorker" });

        /**
         * Calls CreateWorker.
         * @function createWorker
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.ICreateWorker} request CreateWorker message or plain object
         * @returns {Promise<prb.data_provider.WorkerList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link prb.WalkieRpc#updateWorker}.
         * @memberof prb.WalkieRpc
         * @typedef UpdateWorkerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.data_provider.WorkerList} [response] WorkerList
         */

        /**
         * Calls UpdateWorker.
         * @function updateWorker
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.IUpdateWorker} request UpdateWorker message or plain object
         * @param {prb.WalkieRpc.UpdateWorkerCallback} callback Node-style callback called with the error, if any, and WorkerList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.updateWorker = function updateWorker(request, callback) {
            return this.rpcCall(updateWorker, $root.prb.data_provider.UpdateWorker, $root.prb.data_provider.WorkerList, request, callback);
        }, "name", { value: "UpdateWorker" });

        /**
         * Calls UpdateWorker.
         * @function updateWorker
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.IUpdateWorker} request UpdateWorker message or plain object
         * @returns {Promise<prb.data_provider.WorkerList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link prb.WalkieRpc#wantBlob}.
         * @memberof prb.WalkieRpc
         * @typedef WantBlobCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.data_provider.BlobMeta} [response] BlobMeta
         */

        /**
         * Calls WantBlob.
         * @function wantBlob
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.IWantBlob} request WantBlob message or plain object
         * @param {prb.WalkieRpc.WantBlobCallback} callback Node-style callback called with the error, if any, and BlobMeta
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.wantBlob = function wantBlob(request, callback) {
            return this.rpcCall(wantBlob, $root.prb.data_provider.WantBlob, $root.prb.data_provider.BlobMeta, request, callback);
        }, "name", { value: "WantBlob" });

        /**
         * Calls WantBlob.
         * @function wantBlob
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.IWantBlob} request WantBlob message or plain object
         * @returns {Promise<prb.data_provider.BlobMeta>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link prb.WalkieRpc#getBlobWithToken}.
         * @memberof prb.WalkieRpc
         * @typedef GetBlobWithTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {prb.data_provider.Blob} [response] Blob
         */

        /**
         * Calls GetBlobWithToken.
         * @function getBlobWithToken
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.IGetBlob} request GetBlob message or plain object
         * @param {prb.WalkieRpc.GetBlobWithTokenCallback} callback Node-style callback called with the error, if any, and Blob
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalkieRpc.prototype.getBlobWithToken = function getBlobWithToken(request, callback) {
            return this.rpcCall(getBlobWithToken, $root.prb.data_provider.GetBlob, $root.prb.data_provider.Blob, request, callback);
        }, "name", { value: "GetBlobWithToken" });

        /**
         * Calls GetBlobWithToken.
         * @function getBlobWithToken
         * @memberof prb.WalkieRpc
         * @instance
         * @param {prb.data_provider.IGetBlob} request GetBlob message or plain object
         * @returns {Promise<prb.data_provider.Blob>} Promise
         * @variation 2
         */

        return WalkieRpc;
    })();

    prb.WalkieBroadcast = (function() {

        /**
         * Constructs a new WalkieBroadcast service.
         * @memberof prb
         * @classdesc Represents a WalkieBroadcast
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function WalkieBroadcast(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (WalkieBroadcast.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = WalkieBroadcast;

        /**
         * Creates new WalkieBroadcast service using the specified rpc implementation.
         * @function create
         * @memberof prb.WalkieBroadcast
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {WalkieBroadcast} RPC service. Useful where requests and/or responses are streamed.
         */
        WalkieBroadcast.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        return WalkieBroadcast;
    })();

    prb.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof prb
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof prb
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {prb.IEmpty=} [p] Properties to set
         */
        function Empty(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof prb.Empty
         * @static
         * @param {prb.IEmpty=} [properties] Properties to set
         * @returns {prb.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link prb.Empty.verify|verify} messages.
         * @function encode
         * @memberof prb.Empty
         * @static
         * @param {prb.IEmpty} m Empty message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link prb.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Empty
         * @static
         * @param {prb.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.Empty();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof prb.Empty
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Empty
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.Empty} Empty
         */
        Empty.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.Empty)
                return d;
            return new $root.prb.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Empty
         * @static
         * @param {prb.Empty} m Empty
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof prb.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    prb.Placeholder = (function() {

        /**
         * Properties of a Placeholder.
         * @memberof prb
         * @interface IPlaceholder
         */

        /**
         * Constructs a new Placeholder.
         * @memberof prb
         * @classdesc Represents a Placeholder.
         * @implements IPlaceholder
         * @constructor
         * @param {prb.IPlaceholder=} [p] Properties to set
         */
        function Placeholder(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Creates a new Placeholder instance using the specified properties.
         * @function create
         * @memberof prb.Placeholder
         * @static
         * @param {prb.IPlaceholder=} [properties] Properties to set
         * @returns {prb.Placeholder} Placeholder instance
         */
        Placeholder.create = function create(properties) {
            return new Placeholder(properties);
        };

        /**
         * Encodes the specified Placeholder message. Does not implicitly {@link prb.Placeholder.verify|verify} messages.
         * @function encode
         * @memberof prb.Placeholder
         * @static
         * @param {prb.IPlaceholder} m Placeholder message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Placeholder.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Encodes the specified Placeholder message, length delimited. Does not implicitly {@link prb.Placeholder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Placeholder
         * @static
         * @param {prb.IPlaceholder} message Placeholder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Placeholder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Placeholder message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Placeholder
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.Placeholder} Placeholder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Placeholder.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.Placeholder();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a Placeholder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Placeholder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Placeholder} Placeholder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Placeholder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Placeholder message.
         * @function verify
         * @memberof prb.Placeholder
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Placeholder.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Placeholder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Placeholder
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.Placeholder} Placeholder
         */
        Placeholder.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.Placeholder)
                return d;
            return new $root.prb.Placeholder();
        };

        /**
         * Creates a plain object from a Placeholder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Placeholder
         * @static
         * @param {prb.Placeholder} m Placeholder
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Placeholder.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Placeholder to JSON.
         * @function toJSON
         * @memberof prb.Placeholder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Placeholder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Placeholder;
    })();

    prb.Ack = (function() {

        /**
         * Properties of an Ack.
         * @memberof prb
         * @interface IAck
         * @property {boolean|null} [ack] Ack ack
         */

        /**
         * Constructs a new Ack.
         * @memberof prb
         * @classdesc Represents an Ack.
         * @implements IAck
         * @constructor
         * @param {prb.IAck=} [p] Properties to set
         */
        function Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Ack ack.
         * @member {boolean} ack
         * @memberof prb.Ack
         * @instance
         */
        Ack.prototype.ack = false;

        /**
         * Creates a new Ack instance using the specified properties.
         * @function create
         * @memberof prb.Ack
         * @static
         * @param {prb.IAck=} [properties] Properties to set
         * @returns {prb.Ack} Ack instance
         */
        Ack.create = function create(properties) {
            return new Ack(properties);
        };

        /**
         * Encodes the specified Ack message. Does not implicitly {@link prb.Ack.verify|verify} messages.
         * @function encode
         * @memberof prb.Ack
         * @static
         * @param {prb.IAck} m Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ack != null && Object.hasOwnProperty.call(m, "ack"))
                w.uint32(8).bool(m.ack);
            return w;
        };

        /**
         * Encodes the specified Ack message, length delimited. Does not implicitly {@link prb.Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Ack
         * @static
         * @param {prb.IAck} message Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ack message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.Ack} Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ack = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes an Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Ack} Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ack message.
         * @function verify
         * @memberof prb.Ack
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ack.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.ack != null && m.hasOwnProperty("ack")) {
                if (typeof m.ack !== "boolean")
                    return "ack: boolean expected";
            }
            return null;
        };

        /**
         * Creates an Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Ack
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.Ack} Ack
         */
        Ack.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.Ack)
                return d;
            var m = new $root.prb.Ack();
            if (d.ack != null) {
                m.ack = Boolean(d.ack);
            }
            return m;
        };

        /**
         * Creates a plain object from an Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Ack
         * @static
         * @param {prb.Ack} m Ack
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ack.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.ack = false;
            }
            if (m.ack != null && m.hasOwnProperty("ack")) {
                d.ack = m.ack;
            }
            return d;
        };

        /**
         * Converts this Ack to JSON.
         * @function toJSON
         * @memberof prb.Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ack;
    })();

    prb.BN = (function() {

        /**
         * Properties of a BN.
         * @memberof prb
         * @interface IBN
         * @property {string|null} [value] BN value
         */

        /**
         * Constructs a new BN.
         * @memberof prb
         * @classdesc Represents a BN.
         * @implements IBN
         * @constructor
         * @param {prb.IBN=} [p] Properties to set
         */
        function BN(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BN value.
         * @member {string} value
         * @memberof prb.BN
         * @instance
         */
        BN.prototype.value = "";

        /**
         * Creates a new BN instance using the specified properties.
         * @function create
         * @memberof prb.BN
         * @static
         * @param {prb.IBN=} [properties] Properties to set
         * @returns {prb.BN} BN instance
         */
        BN.create = function create(properties) {
            return new BN(properties);
        };

        /**
         * Encodes the specified BN message. Does not implicitly {@link prb.BN.verify|verify} messages.
         * @function encode
         * @memberof prb.BN
         * @static
         * @param {prb.IBN} m BN message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BN.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                w.uint32(10).string(m.value);
            return w;
        };

        /**
         * Encodes the specified BN message, length delimited. Does not implicitly {@link prb.BN.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.BN
         * @static
         * @param {prb.IBN} message BN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BN.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BN message from the specified reader or buffer.
         * @function decode
         * @memberof prb.BN
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.BN} BN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BN.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.BN();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.value = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a BN message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.BN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.BN} BN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BN.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BN message.
         * @function verify
         * @memberof prb.BN
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BN.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.value != null && m.hasOwnProperty("value")) {
                if (!$util.isString(m.value))
                    return "value: string expected";
            }
            return null;
        };

        /**
         * Creates a BN message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.BN
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.BN} BN
         */
        BN.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.BN)
                return d;
            var m = new $root.prb.BN();
            if (d.value != null) {
                m.value = String(d.value);
            }
            return m;
        };

        /**
         * Creates a plain object from a BN message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.BN
         * @static
         * @param {prb.BN} m BN
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BN.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.value = "";
            }
            if (m.value != null && m.hasOwnProperty("value")) {
                d.value = m.value;
            }
            return d;
        };

        /**
         * Converts this BN to JSON.
         * @function toJSON
         * @memberof prb.BN
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BN;
    })();

    prb.FullAccount = (function() {

        /**
         * Properties of a FullAccount.
         * @memberof prb
         * @interface IFullAccount
         * @property {string|null} [mnemonic] FullAccount mnemonic
         * @property {string|null} [polkadotJson] FullAccount polkadotJson
         * @property {string|null} [ss58Phala] FullAccount ss58Phala
         * @property {string|null} [ss58Polkadot] FullAccount ss58Polkadot
         */

        /**
         * Constructs a new FullAccount.
         * @memberof prb
         * @classdesc Represents a FullAccount.
         * @implements IFullAccount
         * @constructor
         * @param {prb.IFullAccount=} [p] Properties to set
         */
        function FullAccount(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FullAccount mnemonic.
         * @member {string} mnemonic
         * @memberof prb.FullAccount
         * @instance
         */
        FullAccount.prototype.mnemonic = "";

        /**
         * FullAccount polkadotJson.
         * @member {string} polkadotJson
         * @memberof prb.FullAccount
         * @instance
         */
        FullAccount.prototype.polkadotJson = "";

        /**
         * FullAccount ss58Phala.
         * @member {string} ss58Phala
         * @memberof prb.FullAccount
         * @instance
         */
        FullAccount.prototype.ss58Phala = "";

        /**
         * FullAccount ss58Polkadot.
         * @member {string} ss58Polkadot
         * @memberof prb.FullAccount
         * @instance
         */
        FullAccount.prototype.ss58Polkadot = "";

        /**
         * Creates a new FullAccount instance using the specified properties.
         * @function create
         * @memberof prb.FullAccount
         * @static
         * @param {prb.IFullAccount=} [properties] Properties to set
         * @returns {prb.FullAccount} FullAccount instance
         */
        FullAccount.create = function create(properties) {
            return new FullAccount(properties);
        };

        /**
         * Encodes the specified FullAccount message. Does not implicitly {@link prb.FullAccount.verify|verify} messages.
         * @function encode
         * @memberof prb.FullAccount
         * @static
         * @param {prb.IFullAccount} m FullAccount message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FullAccount.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mnemonic != null && Object.hasOwnProperty.call(m, "mnemonic"))
                w.uint32(10).string(m.mnemonic);
            if (m.polkadotJson != null && Object.hasOwnProperty.call(m, "polkadotJson"))
                w.uint32(18).string(m.polkadotJson);
            if (m.ss58Phala != null && Object.hasOwnProperty.call(m, "ss58Phala"))
                w.uint32(26).string(m.ss58Phala);
            if (m.ss58Polkadot != null && Object.hasOwnProperty.call(m, "ss58Polkadot"))
                w.uint32(34).string(m.ss58Polkadot);
            return w;
        };

        /**
         * Encodes the specified FullAccount message, length delimited. Does not implicitly {@link prb.FullAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.FullAccount
         * @static
         * @param {prb.IFullAccount} message FullAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FullAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FullAccount message from the specified reader or buffer.
         * @function decode
         * @memberof prb.FullAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.FullAccount} FullAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FullAccount.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.FullAccount();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.mnemonic = r.string();
                    break;
                case 2:
                    m.polkadotJson = r.string();
                    break;
                case 3:
                    m.ss58Phala = r.string();
                    break;
                case 4:
                    m.ss58Polkadot = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a FullAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.FullAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.FullAccount} FullAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FullAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FullAccount message.
         * @function verify
         * @memberof prb.FullAccount
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FullAccount.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.mnemonic != null && m.hasOwnProperty("mnemonic")) {
                if (!$util.isString(m.mnemonic))
                    return "mnemonic: string expected";
            }
            if (m.polkadotJson != null && m.hasOwnProperty("polkadotJson")) {
                if (!$util.isString(m.polkadotJson))
                    return "polkadotJson: string expected";
            }
            if (m.ss58Phala != null && m.hasOwnProperty("ss58Phala")) {
                if (!$util.isString(m.ss58Phala))
                    return "ss58Phala: string expected";
            }
            if (m.ss58Polkadot != null && m.hasOwnProperty("ss58Polkadot")) {
                if (!$util.isString(m.ss58Polkadot))
                    return "ss58Polkadot: string expected";
            }
            return null;
        };

        /**
         * Creates a FullAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.FullAccount
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.FullAccount} FullAccount
         */
        FullAccount.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.FullAccount)
                return d;
            var m = new $root.prb.FullAccount();
            if (d.mnemonic != null) {
                m.mnemonic = String(d.mnemonic);
            }
            if (d.polkadotJson != null) {
                m.polkadotJson = String(d.polkadotJson);
            }
            if (d.ss58Phala != null) {
                m.ss58Phala = String(d.ss58Phala);
            }
            if (d.ss58Polkadot != null) {
                m.ss58Polkadot = String(d.ss58Polkadot);
            }
            return m;
        };

        /**
         * Creates a plain object from a FullAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.FullAccount
         * @static
         * @param {prb.FullAccount} m FullAccount
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FullAccount.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.mnemonic = "";
                d.polkadotJson = "";
                d.ss58Phala = "";
                d.ss58Polkadot = "";
            }
            if (m.mnemonic != null && m.hasOwnProperty("mnemonic")) {
                d.mnemonic = m.mnemonic;
            }
            if (m.polkadotJson != null && m.hasOwnProperty("polkadotJson")) {
                d.polkadotJson = m.polkadotJson;
            }
            if (m.ss58Phala != null && m.hasOwnProperty("ss58Phala")) {
                d.ss58Phala = m.ss58Phala;
            }
            if (m.ss58Polkadot != null && m.hasOwnProperty("ss58Polkadot")) {
                d.ss58Polkadot = m.ss58Polkadot;
            }
            return d;
        };

        /**
         * Converts this FullAccount to JSON.
         * @function toJSON
         * @memberof prb.FullAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FullAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FullAccount;
    })();

    prb.Account = (function() {

        /**
         * Properties of an Account.
         * @memberof prb
         * @interface IAccount
         * @property {string|null} [ss58Phala] Account ss58Phala
         * @property {string|null} [ss58Polkadot] Account ss58Polkadot
         */

        /**
         * Constructs a new Account.
         * @memberof prb
         * @classdesc Represents an Account.
         * @implements IAccount
         * @constructor
         * @param {prb.IAccount=} [p] Properties to set
         */
        function Account(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Account ss58Phala.
         * @member {string} ss58Phala
         * @memberof prb.Account
         * @instance
         */
        Account.prototype.ss58Phala = "";

        /**
         * Account ss58Polkadot.
         * @member {string} ss58Polkadot
         * @memberof prb.Account
         * @instance
         */
        Account.prototype.ss58Polkadot = "";

        /**
         * Creates a new Account instance using the specified properties.
         * @function create
         * @memberof prb.Account
         * @static
         * @param {prb.IAccount=} [properties] Properties to set
         * @returns {prb.Account} Account instance
         */
        Account.create = function create(properties) {
            return new Account(properties);
        };

        /**
         * Encodes the specified Account message. Does not implicitly {@link prb.Account.verify|verify} messages.
         * @function encode
         * @memberof prb.Account
         * @static
         * @param {prb.IAccount} m Account message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ss58Phala != null && Object.hasOwnProperty.call(m, "ss58Phala"))
                w.uint32(10).string(m.ss58Phala);
            if (m.ss58Polkadot != null && Object.hasOwnProperty.call(m, "ss58Polkadot"))
                w.uint32(18).string(m.ss58Polkadot);
            return w;
        };

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link prb.Account.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Account
         * @static
         * @param {prb.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.Account();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ss58Phala = r.string();
                    break;
                case 2:
                    m.ss58Polkadot = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Account message.
         * @function verify
         * @memberof prb.Account
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Account.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.ss58Phala != null && m.hasOwnProperty("ss58Phala")) {
                if (!$util.isString(m.ss58Phala))
                    return "ss58Phala: string expected";
            }
            if (m.ss58Polkadot != null && m.hasOwnProperty("ss58Polkadot")) {
                if (!$util.isString(m.ss58Polkadot))
                    return "ss58Polkadot: string expected";
            }
            return null;
        };

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Account
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.Account} Account
         */
        Account.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.Account)
                return d;
            var m = new $root.prb.Account();
            if (d.ss58Phala != null) {
                m.ss58Phala = String(d.ss58Phala);
            }
            if (d.ss58Polkadot != null) {
                m.ss58Polkadot = String(d.ss58Polkadot);
            }
            return m;
        };

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Account
         * @static
         * @param {prb.Account} m Account
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Account.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.ss58Phala = "";
                d.ss58Polkadot = "";
            }
            if (m.ss58Phala != null && m.hasOwnProperty("ss58Phala")) {
                d.ss58Phala = m.ss58Phala;
            }
            if (m.ss58Polkadot != null && m.hasOwnProperty("ss58Polkadot")) {
                d.ss58Polkadot = m.ss58Polkadot;
            }
            return d;
        };

        /**
         * Converts this Account to JSON.
         * @function toJSON
         * @memberof prb.Account
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Account.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Account;
    })();

    prb.GenericError = (function() {

        /**
         * Properties of a GenericError.
         * @memberof prb
         * @interface IGenericError
         * @property {string|null} [code] GenericError code
         * @property {string|null} [desc] GenericError desc
         */

        /**
         * Constructs a new GenericError.
         * @memberof prb
         * @classdesc Represents a GenericError.
         * @implements IGenericError
         * @constructor
         * @param {prb.IGenericError=} [p] Properties to set
         */
        function GenericError(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GenericError code.
         * @member {string} code
         * @memberof prb.GenericError
         * @instance
         */
        GenericError.prototype.code = "";

        /**
         * GenericError desc.
         * @member {string} desc
         * @memberof prb.GenericError
         * @instance
         */
        GenericError.prototype.desc = "";

        /**
         * Creates a new GenericError instance using the specified properties.
         * @function create
         * @memberof prb.GenericError
         * @static
         * @param {prb.IGenericError=} [properties] Properties to set
         * @returns {prb.GenericError} GenericError instance
         */
        GenericError.create = function create(properties) {
            return new GenericError(properties);
        };

        /**
         * Encodes the specified GenericError message. Does not implicitly {@link prb.GenericError.verify|verify} messages.
         * @function encode
         * @memberof prb.GenericError
         * @static
         * @param {prb.IGenericError} m GenericError message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenericError.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(10).string(m.code);
            if (m.desc != null && Object.hasOwnProperty.call(m, "desc"))
                w.uint32(18).string(m.desc);
            return w;
        };

        /**
         * Encodes the specified GenericError message, length delimited. Does not implicitly {@link prb.GenericError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.GenericError
         * @static
         * @param {prb.IGenericError} message GenericError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenericError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GenericError message from the specified reader or buffer.
         * @function decode
         * @memberof prb.GenericError
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.GenericError} GenericError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenericError.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.GenericError();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.string();
                    break;
                case 2:
                    m.desc = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a GenericError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.GenericError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.GenericError} GenericError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenericError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GenericError message.
         * @function verify
         * @memberof prb.GenericError
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GenericError.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.code != null && m.hasOwnProperty("code")) {
                if (!$util.isString(m.code))
                    return "code: string expected";
            }
            if (m.desc != null && m.hasOwnProperty("desc")) {
                if (!$util.isString(m.desc))
                    return "desc: string expected";
            }
            return null;
        };

        /**
         * Creates a GenericError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.GenericError
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.GenericError} GenericError
         */
        GenericError.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.GenericError)
                return d;
            var m = new $root.prb.GenericError();
            if (d.code != null) {
                m.code = String(d.code);
            }
            if (d.desc != null) {
                m.desc = String(d.desc);
            }
            return m;
        };

        /**
         * Creates a plain object from a GenericError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.GenericError
         * @static
         * @param {prb.GenericError} m GenericError
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GenericError.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.code = "";
                d.desc = "";
            }
            if (m.code != null && m.hasOwnProperty("code")) {
                d.code = m.code;
            }
            if (m.desc != null && m.hasOwnProperty("desc")) {
                d.desc = m.desc;
            }
            return d;
        };

        /**
         * Converts this GenericError to JSON.
         * @function toJSON
         * @memberof prb.GenericError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GenericError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GenericError;
    })();

    prb.NotFoundError = (function() {

        /**
         * Properties of a NotFoundError.
         * @memberof prb
         * @interface INotFoundError
         * @property {string|null} [desc] NotFoundError desc
         */

        /**
         * Constructs a new NotFoundError.
         * @memberof prb
         * @classdesc Represents a NotFoundError.
         * @implements INotFoundError
         * @constructor
         * @param {prb.INotFoundError=} [p] Properties to set
         */
        function NotFoundError(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * NotFoundError desc.
         * @member {string} desc
         * @memberof prb.NotFoundError
         * @instance
         */
        NotFoundError.prototype.desc = "";

        /**
         * Creates a new NotFoundError instance using the specified properties.
         * @function create
         * @memberof prb.NotFoundError
         * @static
         * @param {prb.INotFoundError=} [properties] Properties to set
         * @returns {prb.NotFoundError} NotFoundError instance
         */
        NotFoundError.create = function create(properties) {
            return new NotFoundError(properties);
        };

        /**
         * Encodes the specified NotFoundError message. Does not implicitly {@link prb.NotFoundError.verify|verify} messages.
         * @function encode
         * @memberof prb.NotFoundError
         * @static
         * @param {prb.INotFoundError} m NotFoundError message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotFoundError.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.desc != null && Object.hasOwnProperty.call(m, "desc"))
                w.uint32(10).string(m.desc);
            return w;
        };

        /**
         * Encodes the specified NotFoundError message, length delimited. Does not implicitly {@link prb.NotFoundError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.NotFoundError
         * @static
         * @param {prb.INotFoundError} message NotFoundError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotFoundError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotFoundError message from the specified reader or buffer.
         * @function decode
         * @memberof prb.NotFoundError
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.NotFoundError} NotFoundError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotFoundError.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.NotFoundError();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.desc = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a NotFoundError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.NotFoundError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.NotFoundError} NotFoundError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotFoundError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotFoundError message.
         * @function verify
         * @memberof prb.NotFoundError
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotFoundError.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.desc != null && m.hasOwnProperty("desc")) {
                if (!$util.isString(m.desc))
                    return "desc: string expected";
            }
            return null;
        };

        /**
         * Creates a NotFoundError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.NotFoundError
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.NotFoundError} NotFoundError
         */
        NotFoundError.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.NotFoundError)
                return d;
            var m = new $root.prb.NotFoundError();
            if (d.desc != null) {
                m.desc = String(d.desc);
            }
            return m;
        };

        /**
         * Creates a plain object from a NotFoundError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.NotFoundError
         * @static
         * @param {prb.NotFoundError} m NotFoundError
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotFoundError.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.desc = "";
            }
            if (m.desc != null && m.hasOwnProperty("desc")) {
                d.desc = m.desc;
            }
            return d;
        };

        /**
         * Converts this NotFoundError to JSON.
         * @function toJSON
         * @memberof prb.NotFoundError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotFoundError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotFoundError;
    })();

    prb.DuplicatedError = (function() {

        /**
         * Properties of a DuplicatedError.
         * @memberof prb
         * @interface IDuplicatedError
         * @property {string|null} [desc] DuplicatedError desc
         */

        /**
         * Constructs a new DuplicatedError.
         * @memberof prb
         * @classdesc Represents a DuplicatedError.
         * @implements IDuplicatedError
         * @constructor
         * @param {prb.IDuplicatedError=} [p] Properties to set
         */
        function DuplicatedError(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * DuplicatedError desc.
         * @member {string} desc
         * @memberof prb.DuplicatedError
         * @instance
         */
        DuplicatedError.prototype.desc = "";

        /**
         * Creates a new DuplicatedError instance using the specified properties.
         * @function create
         * @memberof prb.DuplicatedError
         * @static
         * @param {prb.IDuplicatedError=} [properties] Properties to set
         * @returns {prb.DuplicatedError} DuplicatedError instance
         */
        DuplicatedError.create = function create(properties) {
            return new DuplicatedError(properties);
        };

        /**
         * Encodes the specified DuplicatedError message. Does not implicitly {@link prb.DuplicatedError.verify|verify} messages.
         * @function encode
         * @memberof prb.DuplicatedError
         * @static
         * @param {prb.IDuplicatedError} m DuplicatedError message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DuplicatedError.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.desc != null && Object.hasOwnProperty.call(m, "desc"))
                w.uint32(10).string(m.desc);
            return w;
        };

        /**
         * Encodes the specified DuplicatedError message, length delimited. Does not implicitly {@link prb.DuplicatedError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.DuplicatedError
         * @static
         * @param {prb.IDuplicatedError} message DuplicatedError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DuplicatedError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DuplicatedError message from the specified reader or buffer.
         * @function decode
         * @memberof prb.DuplicatedError
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.DuplicatedError} DuplicatedError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DuplicatedError.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.DuplicatedError();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.desc = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a DuplicatedError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.DuplicatedError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.DuplicatedError} DuplicatedError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DuplicatedError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DuplicatedError message.
         * @function verify
         * @memberof prb.DuplicatedError
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DuplicatedError.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.desc != null && m.hasOwnProperty("desc")) {
                if (!$util.isString(m.desc))
                    return "desc: string expected";
            }
            return null;
        };

        /**
         * Creates a DuplicatedError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.DuplicatedError
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.DuplicatedError} DuplicatedError
         */
        DuplicatedError.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.DuplicatedError)
                return d;
            var m = new $root.prb.DuplicatedError();
            if (d.desc != null) {
                m.desc = String(d.desc);
            }
            return m;
        };

        /**
         * Creates a plain object from a DuplicatedError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.DuplicatedError
         * @static
         * @param {prb.DuplicatedError} m DuplicatedError
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DuplicatedError.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.desc = "";
            }
            if (m.desc != null && m.hasOwnProperty("desc")) {
                d.desc = m.desc;
            }
            return d;
        };

        /**
         * Converts this DuplicatedError to JSON.
         * @function toJSON
         * @memberof prb.DuplicatedError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DuplicatedError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DuplicatedError;
    })();

    prb.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof prb
         * @interface IError
         * @property {string|null} [extra] Error extra
         * @property {prb.IGenericError|null} [generic] Error generic
         * @property {prb.INotFoundError|null} [notFound] Error notFound
         * @property {prb.IDuplicatedError|null} [duplicated] Error duplicated
         */

        /**
         * Constructs a new Error.
         * @memberof prb
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {prb.IError=} [p] Properties to set
         */
        function Error(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Error extra.
         * @member {string} extra
         * @memberof prb.Error
         * @instance
         */
        Error.prototype.extra = "";

        /**
         * Error generic.
         * @member {prb.IGenericError|null|undefined} generic
         * @memberof prb.Error
         * @instance
         */
        Error.prototype.generic = null;

        /**
         * Error notFound.
         * @member {prb.INotFoundError|null|undefined} notFound
         * @memberof prb.Error
         * @instance
         */
        Error.prototype.notFound = null;

        /**
         * Error duplicated.
         * @member {prb.IDuplicatedError|null|undefined} duplicated
         * @memberof prb.Error
         * @instance
         */
        Error.prototype.duplicated = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Error error.
         * @member {"generic"|"notFound"|"duplicated"|undefined} error
         * @memberof prb.Error
         * @instance
         */
        Object.defineProperty(Error.prototype, "error", {
            get: $util.oneOfGetter($oneOfFields = ["generic", "notFound", "duplicated"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof prb.Error
         * @static
         * @param {prb.IError=} [properties] Properties to set
         * @returns {prb.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link prb.Error.verify|verify} messages.
         * @function encode
         * @memberof prb.Error
         * @static
         * @param {prb.IError} m Error message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.extra != null && Object.hasOwnProperty.call(m, "extra"))
                w.uint32(10).string(m.extra);
            if (m.generic != null && Object.hasOwnProperty.call(m, "generic"))
                $root.prb.GenericError.encode(m.generic, w.uint32(18).fork()).ldelim();
            if (m.notFound != null && Object.hasOwnProperty.call(m, "notFound"))
                $root.prb.NotFoundError.encode(m.notFound, w.uint32(26).fork()).ldelim();
            if (m.duplicated != null && Object.hasOwnProperty.call(m, "duplicated"))
                $root.prb.DuplicatedError.encode(m.duplicated, w.uint32(34).fork()).ldelim();
            return w;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link prb.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Error
         * @static
         * @param {prb.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.Error();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.extra = r.string();
                    break;
                case 2:
                    m.generic = $root.prb.GenericError.decode(r, r.uint32());
                    break;
                case 3:
                    m.notFound = $root.prb.NotFoundError.decode(r, r.uint32());
                    break;
                case 4:
                    m.duplicated = $root.prb.DuplicatedError.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof prb.Error
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            var p = {};
            if (m.extra != null && m.hasOwnProperty("extra")) {
                if (!$util.isString(m.extra))
                    return "extra: string expected";
            }
            if (m.generic != null && m.hasOwnProperty("generic")) {
                p.error = 1;
                {
                    var e = $root.prb.GenericError.verify(m.generic);
                    if (e)
                        return "generic." + e;
                }
            }
            if (m.notFound != null && m.hasOwnProperty("notFound")) {
                if (p.error === 1)
                    return "error: multiple values";
                p.error = 1;
                {
                    var e = $root.prb.NotFoundError.verify(m.notFound);
                    if (e)
                        return "notFound." + e;
                }
            }
            if (m.duplicated != null && m.hasOwnProperty("duplicated")) {
                if (p.error === 1)
                    return "error: multiple values";
                p.error = 1;
                {
                    var e = $root.prb.DuplicatedError.verify(m.duplicated);
                    if (e)
                        return "duplicated." + e;
                }
            }
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Error
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.Error} Error
         */
        Error.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.Error)
                return d;
            var m = new $root.prb.Error();
            if (d.extra != null) {
                m.extra = String(d.extra);
            }
            if (d.generic != null) {
                if (typeof d.generic !== "object")
                    throw TypeError(".prb.Error.generic: object expected");
                m.generic = $root.prb.GenericError.fromObject(d.generic);
            }
            if (d.notFound != null) {
                if (typeof d.notFound !== "object")
                    throw TypeError(".prb.Error.notFound: object expected");
                m.notFound = $root.prb.NotFoundError.fromObject(d.notFound);
            }
            if (d.duplicated != null) {
                if (typeof d.duplicated !== "object")
                    throw TypeError(".prb.Error.duplicated: object expected");
                m.duplicated = $root.prb.DuplicatedError.fromObject(d.duplicated);
            }
            return m;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Error
         * @static
         * @param {prb.Error} m Error
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.extra = "";
            }
            if (m.extra != null && m.hasOwnProperty("extra")) {
                d.extra = m.extra;
            }
            if (m.generic != null && m.hasOwnProperty("generic")) {
                d.generic = $root.prb.GenericError.toObject(m.generic, o);
                if (o.oneofs)
                    d.error = "generic";
            }
            if (m.notFound != null && m.hasOwnProperty("notFound")) {
                d.notFound = $root.prb.NotFoundError.toObject(m.notFound, o);
                if (o.oneofs)
                    d.error = "notFound";
            }
            if (m.duplicated != null && m.hasOwnProperty("duplicated")) {
                d.duplicated = $root.prb.DuplicatedError.toObject(m.duplicated, o);
                if (o.oneofs)
                    d.error = "duplicated";
            }
            return d;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof prb.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })();

    prb.db = (function() {

        /**
         * Namespace db.
         * @memberof prb
         * @namespace
         */
        const db = {};

        db.ParentBlock = (function() {

            /**
             * Properties of a ParentBlock.
             * @memberof prb.db
             * @interface IParentBlock
             * @property {number|null} [number] ParentBlock number
             * @property {Uint8Array|null} [hash] ParentBlock hash
             * @property {Uint8Array|null} [header] ParentBlock header
             * @property {number|null} [setId] ParentBlock setId
             * @property {boolean|null} [hasJustification] ParentBlock hasJustification
             * @property {Uint8Array|null} [syncHeaderData] ParentBlock syncHeaderData
             * @property {Uint8Array|null} [authoritySetChange] ParentBlock authoritySetChange
             * @property {number|null} [paraNumber] ParentBlock paraNumber
             * @property {Uint8Array|null} [paraProof] ParentBlock paraProof
             */

            /**
             * Constructs a new ParentBlock.
             * @memberof prb.db
             * @classdesc Represents a ParentBlock.
             * @implements IParentBlock
             * @constructor
             * @param {prb.db.IParentBlock=} [p] Properties to set
             */
            function ParentBlock(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * ParentBlock number.
             * @member {number} number
             * @memberof prb.db.ParentBlock
             * @instance
             */
            ParentBlock.prototype.number = 0;

            /**
             * ParentBlock hash.
             * @member {Uint8Array} hash
             * @memberof prb.db.ParentBlock
             * @instance
             */
            ParentBlock.prototype.hash = $util.newBuffer([]);

            /**
             * ParentBlock header.
             * @member {Uint8Array} header
             * @memberof prb.db.ParentBlock
             * @instance
             */
            ParentBlock.prototype.header = $util.newBuffer([]);

            /**
             * ParentBlock setId.
             * @member {number} setId
             * @memberof prb.db.ParentBlock
             * @instance
             */
            ParentBlock.prototype.setId = 0;

            /**
             * ParentBlock hasJustification.
             * @member {boolean} hasJustification
             * @memberof prb.db.ParentBlock
             * @instance
             */
            ParentBlock.prototype.hasJustification = false;

            /**
             * ParentBlock syncHeaderData.
             * @member {Uint8Array} syncHeaderData
             * @memberof prb.db.ParentBlock
             * @instance
             */
            ParentBlock.prototype.syncHeaderData = $util.newBuffer([]);

            /**
             * ParentBlock authoritySetChange.
             * @member {Uint8Array} authoritySetChange
             * @memberof prb.db.ParentBlock
             * @instance
             */
            ParentBlock.prototype.authoritySetChange = $util.newBuffer([]);

            /**
             * ParentBlock paraNumber.
             * @member {number} paraNumber
             * @memberof prb.db.ParentBlock
             * @instance
             */
            ParentBlock.prototype.paraNumber = 0;

            /**
             * ParentBlock paraProof.
             * @member {Uint8Array} paraProof
             * @memberof prb.db.ParentBlock
             * @instance
             */
            ParentBlock.prototype.paraProof = $util.newBuffer([]);

            /**
             * Creates a new ParentBlock instance using the specified properties.
             * @function create
             * @memberof prb.db.ParentBlock
             * @static
             * @param {prb.db.IParentBlock=} [properties] Properties to set
             * @returns {prb.db.ParentBlock} ParentBlock instance
             */
            ParentBlock.create = function create(properties) {
                return new ParentBlock(properties);
            };

            /**
             * Encodes the specified ParentBlock message. Does not implicitly {@link prb.db.ParentBlock.verify|verify} messages.
             * @function encode
             * @memberof prb.db.ParentBlock
             * @static
             * @param {prb.db.IParentBlock} m ParentBlock message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParentBlock.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.number != null && Object.hasOwnProperty.call(m, "number"))
                    w.uint32(8).uint32(m.number);
                if (m.hash != null && Object.hasOwnProperty.call(m, "hash"))
                    w.uint32(18).bytes(m.hash);
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    w.uint32(26).bytes(m.header);
                if (m.setId != null && Object.hasOwnProperty.call(m, "setId"))
                    w.uint32(32).uint32(m.setId);
                if (m.hasJustification != null && Object.hasOwnProperty.call(m, "hasJustification"))
                    w.uint32(40).bool(m.hasJustification);
                if (m.syncHeaderData != null && Object.hasOwnProperty.call(m, "syncHeaderData"))
                    w.uint32(50).bytes(m.syncHeaderData);
                if (m.authoritySetChange != null && Object.hasOwnProperty.call(m, "authoritySetChange"))
                    w.uint32(58).bytes(m.authoritySetChange);
                if (m.paraNumber != null && Object.hasOwnProperty.call(m, "paraNumber"))
                    w.uint32(64).uint32(m.paraNumber);
                if (m.paraProof != null && Object.hasOwnProperty.call(m, "paraProof"))
                    w.uint32(74).bytes(m.paraProof);
                return w;
            };

            /**
             * Encodes the specified ParentBlock message, length delimited. Does not implicitly {@link prb.db.ParentBlock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.db.ParentBlock
             * @static
             * @param {prb.db.IParentBlock} message ParentBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParentBlock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ParentBlock message from the specified reader or buffer.
             * @function decode
             * @memberof prb.db.ParentBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.db.ParentBlock} ParentBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParentBlock.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.db.ParentBlock();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.number = r.uint32();
                        break;
                    case 2:
                        m.hash = r.bytes();
                        break;
                    case 3:
                        m.header = r.bytes();
                        break;
                    case 4:
                        m.setId = r.uint32();
                        break;
                    case 5:
                        m.hasJustification = r.bool();
                        break;
                    case 6:
                        m.syncHeaderData = r.bytes();
                        break;
                    case 7:
                        m.authoritySetChange = r.bytes();
                        break;
                    case 8:
                        m.paraNumber = r.uint32();
                        break;
                    case 9:
                        m.paraProof = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a ParentBlock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.db.ParentBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.db.ParentBlock} ParentBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParentBlock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ParentBlock message.
             * @function verify
             * @memberof prb.db.ParentBlock
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ParentBlock.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.number != null && m.hasOwnProperty("number")) {
                    if (!$util.isInteger(m.number))
                        return "number: integer expected";
                }
                if (m.hash != null && m.hasOwnProperty("hash")) {
                    if (!(m.hash && typeof m.hash.length === "number" || $util.isString(m.hash)))
                        return "hash: buffer expected";
                }
                if (m.header != null && m.hasOwnProperty("header")) {
                    if (!(m.header && typeof m.header.length === "number" || $util.isString(m.header)))
                        return "header: buffer expected";
                }
                if (m.setId != null && m.hasOwnProperty("setId")) {
                    if (!$util.isInteger(m.setId))
                        return "setId: integer expected";
                }
                if (m.hasJustification != null && m.hasOwnProperty("hasJustification")) {
                    if (typeof m.hasJustification !== "boolean")
                        return "hasJustification: boolean expected";
                }
                if (m.syncHeaderData != null && m.hasOwnProperty("syncHeaderData")) {
                    if (!(m.syncHeaderData && typeof m.syncHeaderData.length === "number" || $util.isString(m.syncHeaderData)))
                        return "syncHeaderData: buffer expected";
                }
                if (m.authoritySetChange != null && m.hasOwnProperty("authoritySetChange")) {
                    if (!(m.authoritySetChange && typeof m.authoritySetChange.length === "number" || $util.isString(m.authoritySetChange)))
                        return "authoritySetChange: buffer expected";
                }
                if (m.paraNumber != null && m.hasOwnProperty("paraNumber")) {
                    if (!$util.isInteger(m.paraNumber))
                        return "paraNumber: integer expected";
                }
                if (m.paraProof != null && m.hasOwnProperty("paraProof")) {
                    if (!(m.paraProof && typeof m.paraProof.length === "number" || $util.isString(m.paraProof)))
                        return "paraProof: buffer expected";
                }
                return null;
            };

            /**
             * Creates a ParentBlock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.db.ParentBlock
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.db.ParentBlock} ParentBlock
             */
            ParentBlock.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.db.ParentBlock)
                    return d;
                var m = new $root.prb.db.ParentBlock();
                if (d.number != null) {
                    m.number = d.number >>> 0;
                }
                if (d.hash != null) {
                    if (typeof d.hash === "string")
                        $util.base64.decode(d.hash, m.hash = $util.newBuffer($util.base64.length(d.hash)), 0);
                    else if (d.hash.length)
                        m.hash = d.hash;
                }
                if (d.header != null) {
                    if (typeof d.header === "string")
                        $util.base64.decode(d.header, m.header = $util.newBuffer($util.base64.length(d.header)), 0);
                    else if (d.header.length)
                        m.header = d.header;
                }
                if (d.setId != null) {
                    m.setId = d.setId >>> 0;
                }
                if (d.hasJustification != null) {
                    m.hasJustification = Boolean(d.hasJustification);
                }
                if (d.syncHeaderData != null) {
                    if (typeof d.syncHeaderData === "string")
                        $util.base64.decode(d.syncHeaderData, m.syncHeaderData = $util.newBuffer($util.base64.length(d.syncHeaderData)), 0);
                    else if (d.syncHeaderData.length)
                        m.syncHeaderData = d.syncHeaderData;
                }
                if (d.authoritySetChange != null) {
                    if (typeof d.authoritySetChange === "string")
                        $util.base64.decode(d.authoritySetChange, m.authoritySetChange = $util.newBuffer($util.base64.length(d.authoritySetChange)), 0);
                    else if (d.authoritySetChange.length)
                        m.authoritySetChange = d.authoritySetChange;
                }
                if (d.paraNumber != null) {
                    m.paraNumber = d.paraNumber >>> 0;
                }
                if (d.paraProof != null) {
                    if (typeof d.paraProof === "string")
                        $util.base64.decode(d.paraProof, m.paraProof = $util.newBuffer($util.base64.length(d.paraProof)), 0);
                    else if (d.paraProof.length)
                        m.paraProof = d.paraProof;
                }
                return m;
            };

            /**
             * Creates a plain object from a ParentBlock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.db.ParentBlock
             * @static
             * @param {prb.db.ParentBlock} m ParentBlock
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ParentBlock.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.number = 0;
                    if (o.bytes === String)
                        d.hash = "";
                    else {
                        d.hash = [];
                        if (o.bytes !== Array)
                            d.hash = $util.newBuffer(d.hash);
                    }
                    if (o.bytes === String)
                        d.header = "";
                    else {
                        d.header = [];
                        if (o.bytes !== Array)
                            d.header = $util.newBuffer(d.header);
                    }
                    d.setId = 0;
                    d.hasJustification = false;
                    if (o.bytes === String)
                        d.syncHeaderData = "";
                    else {
                        d.syncHeaderData = [];
                        if (o.bytes !== Array)
                            d.syncHeaderData = $util.newBuffer(d.syncHeaderData);
                    }
                    if (o.bytes === String)
                        d.authoritySetChange = "";
                    else {
                        d.authoritySetChange = [];
                        if (o.bytes !== Array)
                            d.authoritySetChange = $util.newBuffer(d.authoritySetChange);
                    }
                    d.paraNumber = 0;
                    if (o.bytes === String)
                        d.paraProof = "";
                    else {
                        d.paraProof = [];
                        if (o.bytes !== Array)
                            d.paraProof = $util.newBuffer(d.paraProof);
                    }
                }
                if (m.number != null && m.hasOwnProperty("number")) {
                    d.number = m.number;
                }
                if (m.hash != null && m.hasOwnProperty("hash")) {
                    d.hash = o.bytes === String ? $util.base64.encode(m.hash, 0, m.hash.length) : o.bytes === Array ? Array.prototype.slice.call(m.hash) : m.hash;
                }
                if (m.header != null && m.hasOwnProperty("header")) {
                    d.header = o.bytes === String ? $util.base64.encode(m.header, 0, m.header.length) : o.bytes === Array ? Array.prototype.slice.call(m.header) : m.header;
                }
                if (m.setId != null && m.hasOwnProperty("setId")) {
                    d.setId = m.setId;
                }
                if (m.hasJustification != null && m.hasOwnProperty("hasJustification")) {
                    d.hasJustification = m.hasJustification;
                }
                if (m.syncHeaderData != null && m.hasOwnProperty("syncHeaderData")) {
                    d.syncHeaderData = o.bytes === String ? $util.base64.encode(m.syncHeaderData, 0, m.syncHeaderData.length) : o.bytes === Array ? Array.prototype.slice.call(m.syncHeaderData) : m.syncHeaderData;
                }
                if (m.authoritySetChange != null && m.hasOwnProperty("authoritySetChange")) {
                    d.authoritySetChange = o.bytes === String ? $util.base64.encode(m.authoritySetChange, 0, m.authoritySetChange.length) : o.bytes === Array ? Array.prototype.slice.call(m.authoritySetChange) : m.authoritySetChange;
                }
                if (m.paraNumber != null && m.hasOwnProperty("paraNumber")) {
                    d.paraNumber = m.paraNumber;
                }
                if (m.paraProof != null && m.hasOwnProperty("paraProof")) {
                    d.paraProof = o.bytes === String ? $util.base64.encode(m.paraProof, 0, m.paraProof.length) : o.bytes === Array ? Array.prototype.slice.call(m.paraProof) : m.paraProof;
                }
                return d;
            };

            /**
             * Converts this ParentBlock to JSON.
             * @function toJSON
             * @memberof prb.db.ParentBlock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ParentBlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ParentBlock;
        })();

        db.ParaBlock = (function() {

            /**
             * Properties of a ParaBlock.
             * @memberof prb.db
             * @interface IParaBlock
             * @property {number|null} [number] ParaBlock number
             * @property {Uint8Array|null} [hash] ParaBlock hash
             * @property {Uint8Array|null} [header] ParaBlock header
             * @property {Uint8Array|null} [dispatchBlockData] ParaBlock dispatchBlockData
             */

            /**
             * Constructs a new ParaBlock.
             * @memberof prb.db
             * @classdesc Represents a ParaBlock.
             * @implements IParaBlock
             * @constructor
             * @param {prb.db.IParaBlock=} [p] Properties to set
             */
            function ParaBlock(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * ParaBlock number.
             * @member {number} number
             * @memberof prb.db.ParaBlock
             * @instance
             */
            ParaBlock.prototype.number = 0;

            /**
             * ParaBlock hash.
             * @member {Uint8Array} hash
             * @memberof prb.db.ParaBlock
             * @instance
             */
            ParaBlock.prototype.hash = $util.newBuffer([]);

            /**
             * ParaBlock header.
             * @member {Uint8Array} header
             * @memberof prb.db.ParaBlock
             * @instance
             */
            ParaBlock.prototype.header = $util.newBuffer([]);

            /**
             * ParaBlock dispatchBlockData.
             * @member {Uint8Array} dispatchBlockData
             * @memberof prb.db.ParaBlock
             * @instance
             */
            ParaBlock.prototype.dispatchBlockData = $util.newBuffer([]);

            /**
             * Creates a new ParaBlock instance using the specified properties.
             * @function create
             * @memberof prb.db.ParaBlock
             * @static
             * @param {prb.db.IParaBlock=} [properties] Properties to set
             * @returns {prb.db.ParaBlock} ParaBlock instance
             */
            ParaBlock.create = function create(properties) {
                return new ParaBlock(properties);
            };

            /**
             * Encodes the specified ParaBlock message. Does not implicitly {@link prb.db.ParaBlock.verify|verify} messages.
             * @function encode
             * @memberof prb.db.ParaBlock
             * @static
             * @param {prb.db.IParaBlock} m ParaBlock message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParaBlock.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.number != null && Object.hasOwnProperty.call(m, "number"))
                    w.uint32(8).uint32(m.number);
                if (m.hash != null && Object.hasOwnProperty.call(m, "hash"))
                    w.uint32(18).bytes(m.hash);
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    w.uint32(26).bytes(m.header);
                if (m.dispatchBlockData != null && Object.hasOwnProperty.call(m, "dispatchBlockData"))
                    w.uint32(42).bytes(m.dispatchBlockData);
                return w;
            };

            /**
             * Encodes the specified ParaBlock message, length delimited. Does not implicitly {@link prb.db.ParaBlock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.db.ParaBlock
             * @static
             * @param {prb.db.IParaBlock} message ParaBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParaBlock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ParaBlock message from the specified reader or buffer.
             * @function decode
             * @memberof prb.db.ParaBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.db.ParaBlock} ParaBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParaBlock.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.db.ParaBlock();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.number = r.uint32();
                        break;
                    case 2:
                        m.hash = r.bytes();
                        break;
                    case 3:
                        m.header = r.bytes();
                        break;
                    case 5:
                        m.dispatchBlockData = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a ParaBlock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.db.ParaBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.db.ParaBlock} ParaBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParaBlock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ParaBlock message.
             * @function verify
             * @memberof prb.db.ParaBlock
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ParaBlock.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.number != null && m.hasOwnProperty("number")) {
                    if (!$util.isInteger(m.number))
                        return "number: integer expected";
                }
                if (m.hash != null && m.hasOwnProperty("hash")) {
                    if (!(m.hash && typeof m.hash.length === "number" || $util.isString(m.hash)))
                        return "hash: buffer expected";
                }
                if (m.header != null && m.hasOwnProperty("header")) {
                    if (!(m.header && typeof m.header.length === "number" || $util.isString(m.header)))
                        return "header: buffer expected";
                }
                if (m.dispatchBlockData != null && m.hasOwnProperty("dispatchBlockData")) {
                    if (!(m.dispatchBlockData && typeof m.dispatchBlockData.length === "number" || $util.isString(m.dispatchBlockData)))
                        return "dispatchBlockData: buffer expected";
                }
                return null;
            };

            /**
             * Creates a ParaBlock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.db.ParaBlock
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.db.ParaBlock} ParaBlock
             */
            ParaBlock.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.db.ParaBlock)
                    return d;
                var m = new $root.prb.db.ParaBlock();
                if (d.number != null) {
                    m.number = d.number >>> 0;
                }
                if (d.hash != null) {
                    if (typeof d.hash === "string")
                        $util.base64.decode(d.hash, m.hash = $util.newBuffer($util.base64.length(d.hash)), 0);
                    else if (d.hash.length)
                        m.hash = d.hash;
                }
                if (d.header != null) {
                    if (typeof d.header === "string")
                        $util.base64.decode(d.header, m.header = $util.newBuffer($util.base64.length(d.header)), 0);
                    else if (d.header.length)
                        m.header = d.header;
                }
                if (d.dispatchBlockData != null) {
                    if (typeof d.dispatchBlockData === "string")
                        $util.base64.decode(d.dispatchBlockData, m.dispatchBlockData = $util.newBuffer($util.base64.length(d.dispatchBlockData)), 0);
                    else if (d.dispatchBlockData.length)
                        m.dispatchBlockData = d.dispatchBlockData;
                }
                return m;
            };

            /**
             * Creates a plain object from a ParaBlock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.db.ParaBlock
             * @static
             * @param {prb.db.ParaBlock} m ParaBlock
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ParaBlock.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.number = 0;
                    if (o.bytes === String)
                        d.hash = "";
                    else {
                        d.hash = [];
                        if (o.bytes !== Array)
                            d.hash = $util.newBuffer(d.hash);
                    }
                    if (o.bytes === String)
                        d.header = "";
                    else {
                        d.header = [];
                        if (o.bytes !== Array)
                            d.header = $util.newBuffer(d.header);
                    }
                    if (o.bytes === String)
                        d.dispatchBlockData = "";
                    else {
                        d.dispatchBlockData = [];
                        if (o.bytes !== Array)
                            d.dispatchBlockData = $util.newBuffer(d.dispatchBlockData);
                    }
                }
                if (m.number != null && m.hasOwnProperty("number")) {
                    d.number = m.number;
                }
                if (m.hash != null && m.hasOwnProperty("hash")) {
                    d.hash = o.bytes === String ? $util.base64.encode(m.hash, 0, m.hash.length) : o.bytes === Array ? Array.prototype.slice.call(m.hash) : m.hash;
                }
                if (m.header != null && m.hasOwnProperty("header")) {
                    d.header = o.bytes === String ? $util.base64.encode(m.header, 0, m.header.length) : o.bytes === Array ? Array.prototype.slice.call(m.header) : m.header;
                }
                if (m.dispatchBlockData != null && m.hasOwnProperty("dispatchBlockData")) {
                    d.dispatchBlockData = o.bytes === String ? $util.base64.encode(m.dispatchBlockData, 0, m.dispatchBlockData.length) : o.bytes === Array ? Array.prototype.slice.call(m.dispatchBlockData) : m.dispatchBlockData;
                }
                return d;
            };

            /**
             * Converts this ParaBlock to JSON.
             * @function toJSON
             * @memberof prb.db.ParaBlock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ParaBlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ParaBlock;
        })();

        db.Genesis = (function() {

            /**
             * Properties of a Genesis.
             * @memberof prb.db
             * @interface IGenesis
             * @property {number|null} [paraId] Genesis paraId
             * @property {number|null} [paraNumber] Genesis paraNumber
             * @property {number|null} [parentNumber] Genesis parentNumber
             * @property {Uint8Array|null} [bridgeGenesisInfo] Genesis bridgeGenesisInfo
             * @property {Uint8Array|null} [genesisState] Genesis genesisState
             */

            /**
             * Constructs a new Genesis.
             * @memberof prb.db
             * @classdesc Represents a Genesis.
             * @implements IGenesis
             * @constructor
             * @param {prb.db.IGenesis=} [p] Properties to set
             */
            function Genesis(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Genesis paraId.
             * @member {number} paraId
             * @memberof prb.db.Genesis
             * @instance
             */
            Genesis.prototype.paraId = 0;

            /**
             * Genesis paraNumber.
             * @member {number} paraNumber
             * @memberof prb.db.Genesis
             * @instance
             */
            Genesis.prototype.paraNumber = 0;

            /**
             * Genesis parentNumber.
             * @member {number} parentNumber
             * @memberof prb.db.Genesis
             * @instance
             */
            Genesis.prototype.parentNumber = 0;

            /**
             * Genesis bridgeGenesisInfo.
             * @member {Uint8Array} bridgeGenesisInfo
             * @memberof prb.db.Genesis
             * @instance
             */
            Genesis.prototype.bridgeGenesisInfo = $util.newBuffer([]);

            /**
             * Genesis genesisState.
             * @member {Uint8Array} genesisState
             * @memberof prb.db.Genesis
             * @instance
             */
            Genesis.prototype.genesisState = $util.newBuffer([]);

            /**
             * Creates a new Genesis instance using the specified properties.
             * @function create
             * @memberof prb.db.Genesis
             * @static
             * @param {prb.db.IGenesis=} [properties] Properties to set
             * @returns {prb.db.Genesis} Genesis instance
             */
            Genesis.create = function create(properties) {
                return new Genesis(properties);
            };

            /**
             * Encodes the specified Genesis message. Does not implicitly {@link prb.db.Genesis.verify|verify} messages.
             * @function encode
             * @memberof prb.db.Genesis
             * @static
             * @param {prb.db.IGenesis} m Genesis message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Genesis.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.paraId != null && Object.hasOwnProperty.call(m, "paraId"))
                    w.uint32(8).uint32(m.paraId);
                if (m.paraNumber != null && Object.hasOwnProperty.call(m, "paraNumber"))
                    w.uint32(16).uint32(m.paraNumber);
                if (m.parentNumber != null && Object.hasOwnProperty.call(m, "parentNumber"))
                    w.uint32(24).uint32(m.parentNumber);
                if (m.bridgeGenesisInfo != null && Object.hasOwnProperty.call(m, "bridgeGenesisInfo"))
                    w.uint32(34).bytes(m.bridgeGenesisInfo);
                if (m.genesisState != null && Object.hasOwnProperty.call(m, "genesisState"))
                    w.uint32(42).bytes(m.genesisState);
                return w;
            };

            /**
             * Encodes the specified Genesis message, length delimited. Does not implicitly {@link prb.db.Genesis.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.db.Genesis
             * @static
             * @param {prb.db.IGenesis} message Genesis message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Genesis.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Genesis message from the specified reader or buffer.
             * @function decode
             * @memberof prb.db.Genesis
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.db.Genesis} Genesis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Genesis.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.db.Genesis();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.paraId = r.uint32();
                        break;
                    case 2:
                        m.paraNumber = r.uint32();
                        break;
                    case 3:
                        m.parentNumber = r.uint32();
                        break;
                    case 4:
                        m.bridgeGenesisInfo = r.bytes();
                        break;
                    case 5:
                        m.genesisState = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a Genesis message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.db.Genesis
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.db.Genesis} Genesis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Genesis.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Genesis message.
             * @function verify
             * @memberof prb.db.Genesis
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Genesis.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.paraId != null && m.hasOwnProperty("paraId")) {
                    if (!$util.isInteger(m.paraId))
                        return "paraId: integer expected";
                }
                if (m.paraNumber != null && m.hasOwnProperty("paraNumber")) {
                    if (!$util.isInteger(m.paraNumber))
                        return "paraNumber: integer expected";
                }
                if (m.parentNumber != null && m.hasOwnProperty("parentNumber")) {
                    if (!$util.isInteger(m.parentNumber))
                        return "parentNumber: integer expected";
                }
                if (m.bridgeGenesisInfo != null && m.hasOwnProperty("bridgeGenesisInfo")) {
                    if (!(m.bridgeGenesisInfo && typeof m.bridgeGenesisInfo.length === "number" || $util.isString(m.bridgeGenesisInfo)))
                        return "bridgeGenesisInfo: buffer expected";
                }
                if (m.genesisState != null && m.hasOwnProperty("genesisState")) {
                    if (!(m.genesisState && typeof m.genesisState.length === "number" || $util.isString(m.genesisState)))
                        return "genesisState: buffer expected";
                }
                return null;
            };

            /**
             * Creates a Genesis message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.db.Genesis
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.db.Genesis} Genesis
             */
            Genesis.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.db.Genesis)
                    return d;
                var m = new $root.prb.db.Genesis();
                if (d.paraId != null) {
                    m.paraId = d.paraId >>> 0;
                }
                if (d.paraNumber != null) {
                    m.paraNumber = d.paraNumber >>> 0;
                }
                if (d.parentNumber != null) {
                    m.parentNumber = d.parentNumber >>> 0;
                }
                if (d.bridgeGenesisInfo != null) {
                    if (typeof d.bridgeGenesisInfo === "string")
                        $util.base64.decode(d.bridgeGenesisInfo, m.bridgeGenesisInfo = $util.newBuffer($util.base64.length(d.bridgeGenesisInfo)), 0);
                    else if (d.bridgeGenesisInfo.length)
                        m.bridgeGenesisInfo = d.bridgeGenesisInfo;
                }
                if (d.genesisState != null) {
                    if (typeof d.genesisState === "string")
                        $util.base64.decode(d.genesisState, m.genesisState = $util.newBuffer($util.base64.length(d.genesisState)), 0);
                    else if (d.genesisState.length)
                        m.genesisState = d.genesisState;
                }
                return m;
            };

            /**
             * Creates a plain object from a Genesis message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.db.Genesis
             * @static
             * @param {prb.db.Genesis} m Genesis
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Genesis.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.paraId = 0;
                    d.paraNumber = 0;
                    d.parentNumber = 0;
                    if (o.bytes === String)
                        d.bridgeGenesisInfo = "";
                    else {
                        d.bridgeGenesisInfo = [];
                        if (o.bytes !== Array)
                            d.bridgeGenesisInfo = $util.newBuffer(d.bridgeGenesisInfo);
                    }
                    if (o.bytes === String)
                        d.genesisState = "";
                    else {
                        d.genesisState = [];
                        if (o.bytes !== Array)
                            d.genesisState = $util.newBuffer(d.genesisState);
                    }
                }
                if (m.paraId != null && m.hasOwnProperty("paraId")) {
                    d.paraId = m.paraId;
                }
                if (m.paraNumber != null && m.hasOwnProperty("paraNumber")) {
                    d.paraNumber = m.paraNumber;
                }
                if (m.parentNumber != null && m.hasOwnProperty("parentNumber")) {
                    d.parentNumber = m.parentNumber;
                }
                if (m.bridgeGenesisInfo != null && m.hasOwnProperty("bridgeGenesisInfo")) {
                    d.bridgeGenesisInfo = o.bytes === String ? $util.base64.encode(m.bridgeGenesisInfo, 0, m.bridgeGenesisInfo.length) : o.bytes === Array ? Array.prototype.slice.call(m.bridgeGenesisInfo) : m.bridgeGenesisInfo;
                }
                if (m.genesisState != null && m.hasOwnProperty("genesisState")) {
                    d.genesisState = o.bytes === String ? $util.base64.encode(m.genesisState, 0, m.genesisState.length) : o.bytes === Array ? Array.prototype.slice.call(m.genesisState) : m.genesisState;
                }
                return d;
            };

            /**
             * Converts this Genesis to JSON.
             * @function toJSON
             * @memberof prb.db.Genesis
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Genesis.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Genesis;
        })();

        db.Window = (function() {

            /**
             * Properties of a Window.
             * @memberof prb.db
             * @interface IWindow
             * @property {number|null} [parentStartBlock] Window parentStartBlock
             * @property {number|null} [parentStopBlock] Window parentStopBlock
             * @property {number|null} [paraStartBlock] Window paraStartBlock
             * @property {number|null} [paraStopBlock] Window paraStopBlock
             * @property {number|null} [windowId] Window windowId
             * @property {number|null} [setId] Window setId
             * @property {boolean|null} [isFinished] Window isFinished
             */

            /**
             * Constructs a new Window.
             * @memberof prb.db
             * @classdesc Represents a Window.
             * @implements IWindow
             * @constructor
             * @param {prb.db.IWindow=} [p] Properties to set
             */
            function Window(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Window parentStartBlock.
             * @member {number} parentStartBlock
             * @memberof prb.db.Window
             * @instance
             */
            Window.prototype.parentStartBlock = 0;

            /**
             * Window parentStopBlock.
             * @member {number} parentStopBlock
             * @memberof prb.db.Window
             * @instance
             */
            Window.prototype.parentStopBlock = 0;

            /**
             * Window paraStartBlock.
             * @member {number} paraStartBlock
             * @memberof prb.db.Window
             * @instance
             */
            Window.prototype.paraStartBlock = 0;

            /**
             * Window paraStopBlock.
             * @member {number} paraStopBlock
             * @memberof prb.db.Window
             * @instance
             */
            Window.prototype.paraStopBlock = 0;

            /**
             * Window windowId.
             * @member {number} windowId
             * @memberof prb.db.Window
             * @instance
             */
            Window.prototype.windowId = 0;

            /**
             * Window setId.
             * @member {number} setId
             * @memberof prb.db.Window
             * @instance
             */
            Window.prototype.setId = 0;

            /**
             * Window isFinished.
             * @member {boolean} isFinished
             * @memberof prb.db.Window
             * @instance
             */
            Window.prototype.isFinished = false;

            /**
             * Creates a new Window instance using the specified properties.
             * @function create
             * @memberof prb.db.Window
             * @static
             * @param {prb.db.IWindow=} [properties] Properties to set
             * @returns {prb.db.Window} Window instance
             */
            Window.create = function create(properties) {
                return new Window(properties);
            };

            /**
             * Encodes the specified Window message. Does not implicitly {@link prb.db.Window.verify|verify} messages.
             * @function encode
             * @memberof prb.db.Window
             * @static
             * @param {prb.db.IWindow} m Window message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Window.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.parentStartBlock != null && Object.hasOwnProperty.call(m, "parentStartBlock"))
                    w.uint32(8).int32(m.parentStartBlock);
                if (m.parentStopBlock != null && Object.hasOwnProperty.call(m, "parentStopBlock"))
                    w.uint32(16).int32(m.parentStopBlock);
                if (m.paraStartBlock != null && Object.hasOwnProperty.call(m, "paraStartBlock"))
                    w.uint32(24).int32(m.paraStartBlock);
                if (m.paraStopBlock != null && Object.hasOwnProperty.call(m, "paraStopBlock"))
                    w.uint32(32).int32(m.paraStopBlock);
                if (m.windowId != null && Object.hasOwnProperty.call(m, "windowId"))
                    w.uint32(40).int32(m.windowId);
                if (m.setId != null && Object.hasOwnProperty.call(m, "setId"))
                    w.uint32(48).int32(m.setId);
                if (m.isFinished != null && Object.hasOwnProperty.call(m, "isFinished"))
                    w.uint32(56).bool(m.isFinished);
                return w;
            };

            /**
             * Encodes the specified Window message, length delimited. Does not implicitly {@link prb.db.Window.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.db.Window
             * @static
             * @param {prb.db.IWindow} message Window message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Window.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Window message from the specified reader or buffer.
             * @function decode
             * @memberof prb.db.Window
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.db.Window} Window
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Window.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.db.Window();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.parentStartBlock = r.int32();
                        break;
                    case 2:
                        m.parentStopBlock = r.int32();
                        break;
                    case 3:
                        m.paraStartBlock = r.int32();
                        break;
                    case 4:
                        m.paraStopBlock = r.int32();
                        break;
                    case 5:
                        m.windowId = r.int32();
                        break;
                    case 6:
                        m.setId = r.int32();
                        break;
                    case 7:
                        m.isFinished = r.bool();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a Window message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.db.Window
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.db.Window} Window
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Window.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Window message.
             * @function verify
             * @memberof prb.db.Window
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Window.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.parentStartBlock != null && m.hasOwnProperty("parentStartBlock")) {
                    if (!$util.isInteger(m.parentStartBlock))
                        return "parentStartBlock: integer expected";
                }
                if (m.parentStopBlock != null && m.hasOwnProperty("parentStopBlock")) {
                    if (!$util.isInteger(m.parentStopBlock))
                        return "parentStopBlock: integer expected";
                }
                if (m.paraStartBlock != null && m.hasOwnProperty("paraStartBlock")) {
                    if (!$util.isInteger(m.paraStartBlock))
                        return "paraStartBlock: integer expected";
                }
                if (m.paraStopBlock != null && m.hasOwnProperty("paraStopBlock")) {
                    if (!$util.isInteger(m.paraStopBlock))
                        return "paraStopBlock: integer expected";
                }
                if (m.windowId != null && m.hasOwnProperty("windowId")) {
                    if (!$util.isInteger(m.windowId))
                        return "windowId: integer expected";
                }
                if (m.setId != null && m.hasOwnProperty("setId")) {
                    if (!$util.isInteger(m.setId))
                        return "setId: integer expected";
                }
                if (m.isFinished != null && m.hasOwnProperty("isFinished")) {
                    if (typeof m.isFinished !== "boolean")
                        return "isFinished: boolean expected";
                }
                return null;
            };

            /**
             * Creates a Window message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.db.Window
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.db.Window} Window
             */
            Window.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.db.Window)
                    return d;
                var m = new $root.prb.db.Window();
                if (d.parentStartBlock != null) {
                    m.parentStartBlock = d.parentStartBlock | 0;
                }
                if (d.parentStopBlock != null) {
                    m.parentStopBlock = d.parentStopBlock | 0;
                }
                if (d.paraStartBlock != null) {
                    m.paraStartBlock = d.paraStartBlock | 0;
                }
                if (d.paraStopBlock != null) {
                    m.paraStopBlock = d.paraStopBlock | 0;
                }
                if (d.windowId != null) {
                    m.windowId = d.windowId | 0;
                }
                if (d.setId != null) {
                    m.setId = d.setId | 0;
                }
                if (d.isFinished != null) {
                    m.isFinished = Boolean(d.isFinished);
                }
                return m;
            };

            /**
             * Creates a plain object from a Window message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.db.Window
             * @static
             * @param {prb.db.Window} m Window
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Window.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.parentStartBlock = 0;
                    d.parentStopBlock = 0;
                    d.paraStartBlock = 0;
                    d.paraStopBlock = 0;
                    d.windowId = 0;
                    d.setId = 0;
                    d.isFinished = false;
                }
                if (m.parentStartBlock != null && m.hasOwnProperty("parentStartBlock")) {
                    d.parentStartBlock = m.parentStartBlock;
                }
                if (m.parentStopBlock != null && m.hasOwnProperty("parentStopBlock")) {
                    d.parentStopBlock = m.parentStopBlock;
                }
                if (m.paraStartBlock != null && m.hasOwnProperty("paraStartBlock")) {
                    d.paraStartBlock = m.paraStartBlock;
                }
                if (m.paraStopBlock != null && m.hasOwnProperty("paraStopBlock")) {
                    d.paraStopBlock = m.paraStopBlock;
                }
                if (m.windowId != null && m.hasOwnProperty("windowId")) {
                    d.windowId = m.windowId;
                }
                if (m.setId != null && m.hasOwnProperty("setId")) {
                    d.setId = m.setId;
                }
                if (m.isFinished != null && m.hasOwnProperty("isFinished")) {
                    d.isFinished = m.isFinished;
                }
                return d;
            };

            /**
             * Converts this Window to JSON.
             * @function toJSON
             * @memberof prb.db.Window
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Window.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Window;
        })();

        db.RangeMeta = (function() {

            /**
             * Properties of a RangeMeta.
             * @memberof prb.db
             * @interface IRangeMeta
             * @property {number|null} [parentStartBlock] RangeMeta parentStartBlock
             * @property {number|null} [parentStopBlock] RangeMeta parentStopBlock
             * @property {number|null} [paraStartBlock] RangeMeta paraStartBlock
             * @property {number|null} [paraStopBlock] RangeMeta paraStopBlock
             * @property {Array.<number>|null} [parentRange] RangeMeta parentRange
             * @property {Array.<number>|null} [paraRange] RangeMeta paraRange
             * @property {string|null} [drySyncHeaderReqKey] RangeMeta drySyncHeaderReqKey
             * @property {number|null} [latestSetId] RangeMeta latestSetId
             * @property {number|null} [blobParentStopBlock] RangeMeta blobParentStopBlock
             * @property {number|null} [blobParaStopBlock] RangeMeta blobParaStopBlock
             * @property {string|null} [blobSyncHeaderReqKey] RangeMeta blobSyncHeaderReqKey
             */

            /**
             * Constructs a new RangeMeta.
             * @memberof prb.db
             * @classdesc Represents a RangeMeta.
             * @implements IRangeMeta
             * @constructor
             * @param {prb.db.IRangeMeta=} [p] Properties to set
             */
            function RangeMeta(p) {
                this.parentRange = [];
                this.paraRange = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * RangeMeta parentStartBlock.
             * @member {number} parentStartBlock
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.parentStartBlock = 0;

            /**
             * RangeMeta parentStopBlock.
             * @member {number} parentStopBlock
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.parentStopBlock = 0;

            /**
             * RangeMeta paraStartBlock.
             * @member {number} paraStartBlock
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.paraStartBlock = 0;

            /**
             * RangeMeta paraStopBlock.
             * @member {number} paraStopBlock
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.paraStopBlock = 0;

            /**
             * RangeMeta parentRange.
             * @member {Array.<number>} parentRange
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.parentRange = $util.emptyArray;

            /**
             * RangeMeta paraRange.
             * @member {Array.<number>} paraRange
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.paraRange = $util.emptyArray;

            /**
             * RangeMeta drySyncHeaderReqKey.
             * @member {string} drySyncHeaderReqKey
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.drySyncHeaderReqKey = "";

            /**
             * RangeMeta latestSetId.
             * @member {number} latestSetId
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.latestSetId = 0;

            /**
             * RangeMeta blobParentStopBlock.
             * @member {number} blobParentStopBlock
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.blobParentStopBlock = 0;

            /**
             * RangeMeta blobParaStopBlock.
             * @member {number} blobParaStopBlock
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.blobParaStopBlock = 0;

            /**
             * RangeMeta blobSyncHeaderReqKey.
             * @member {string} blobSyncHeaderReqKey
             * @memberof prb.db.RangeMeta
             * @instance
             */
            RangeMeta.prototype.blobSyncHeaderReqKey = "";

            /**
             * Creates a new RangeMeta instance using the specified properties.
             * @function create
             * @memberof prb.db.RangeMeta
             * @static
             * @param {prb.db.IRangeMeta=} [properties] Properties to set
             * @returns {prb.db.RangeMeta} RangeMeta instance
             */
            RangeMeta.create = function create(properties) {
                return new RangeMeta(properties);
            };

            /**
             * Encodes the specified RangeMeta message. Does not implicitly {@link prb.db.RangeMeta.verify|verify} messages.
             * @function encode
             * @memberof prb.db.RangeMeta
             * @static
             * @param {prb.db.IRangeMeta} m RangeMeta message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RangeMeta.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.parentStartBlock != null && Object.hasOwnProperty.call(m, "parentStartBlock"))
                    w.uint32(8).uint32(m.parentStartBlock);
                if (m.parentStopBlock != null && Object.hasOwnProperty.call(m, "parentStopBlock"))
                    w.uint32(16).uint32(m.parentStopBlock);
                if (m.paraStartBlock != null && Object.hasOwnProperty.call(m, "paraStartBlock"))
                    w.uint32(24).int32(m.paraStartBlock);
                if (m.paraStopBlock != null && Object.hasOwnProperty.call(m, "paraStopBlock"))
                    w.uint32(32).int32(m.paraStopBlock);
                if (m.parentRange != null && m.parentRange.length) {
                    w.uint32(42).fork();
                    for (var i = 0; i < m.parentRange.length; ++i)
                        w.uint32(m.parentRange[i]);
                    w.ldelim();
                }
                if (m.paraRange != null && m.paraRange.length) {
                    w.uint32(50).fork();
                    for (var i = 0; i < m.paraRange.length; ++i)
                        w.uint32(m.paraRange[i]);
                    w.ldelim();
                }
                if (m.drySyncHeaderReqKey != null && Object.hasOwnProperty.call(m, "drySyncHeaderReqKey"))
                    w.uint32(58).string(m.drySyncHeaderReqKey);
                if (m.latestSetId != null && Object.hasOwnProperty.call(m, "latestSetId"))
                    w.uint32(64).int32(m.latestSetId);
                if (m.blobParentStopBlock != null && Object.hasOwnProperty.call(m, "blobParentStopBlock"))
                    w.uint32(72).uint32(m.blobParentStopBlock);
                if (m.blobParaStopBlock != null && Object.hasOwnProperty.call(m, "blobParaStopBlock"))
                    w.uint32(80).int32(m.blobParaStopBlock);
                if (m.blobSyncHeaderReqKey != null && Object.hasOwnProperty.call(m, "blobSyncHeaderReqKey"))
                    w.uint32(90).string(m.blobSyncHeaderReqKey);
                return w;
            };

            /**
             * Encodes the specified RangeMeta message, length delimited. Does not implicitly {@link prb.db.RangeMeta.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.db.RangeMeta
             * @static
             * @param {prb.db.IRangeMeta} message RangeMeta message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RangeMeta.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RangeMeta message from the specified reader or buffer.
             * @function decode
             * @memberof prb.db.RangeMeta
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.db.RangeMeta} RangeMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RangeMeta.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.db.RangeMeta();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.parentStartBlock = r.uint32();
                        break;
                    case 2:
                        m.parentStopBlock = r.uint32();
                        break;
                    case 3:
                        m.paraStartBlock = r.int32();
                        break;
                    case 4:
                        m.paraStopBlock = r.int32();
                        break;
                    case 5:
                        if (!(m.parentRange && m.parentRange.length))
                            m.parentRange = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.parentRange.push(r.uint32());
                        } else
                            m.parentRange.push(r.uint32());
                        break;
                    case 6:
                        if (!(m.paraRange && m.paraRange.length))
                            m.paraRange = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.paraRange.push(r.uint32());
                        } else
                            m.paraRange.push(r.uint32());
                        break;
                    case 7:
                        m.drySyncHeaderReqKey = r.string();
                        break;
                    case 8:
                        m.latestSetId = r.int32();
                        break;
                    case 9:
                        m.blobParentStopBlock = r.uint32();
                        break;
                    case 10:
                        m.blobParaStopBlock = r.int32();
                        break;
                    case 11:
                        m.blobSyncHeaderReqKey = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a RangeMeta message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.db.RangeMeta
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.db.RangeMeta} RangeMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RangeMeta.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RangeMeta message.
             * @function verify
             * @memberof prb.db.RangeMeta
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RangeMeta.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.parentStartBlock != null && m.hasOwnProperty("parentStartBlock")) {
                    if (!$util.isInteger(m.parentStartBlock))
                        return "parentStartBlock: integer expected";
                }
                if (m.parentStopBlock != null && m.hasOwnProperty("parentStopBlock")) {
                    if (!$util.isInteger(m.parentStopBlock))
                        return "parentStopBlock: integer expected";
                }
                if (m.paraStartBlock != null && m.hasOwnProperty("paraStartBlock")) {
                    if (!$util.isInteger(m.paraStartBlock))
                        return "paraStartBlock: integer expected";
                }
                if (m.paraStopBlock != null && m.hasOwnProperty("paraStopBlock")) {
                    if (!$util.isInteger(m.paraStopBlock))
                        return "paraStopBlock: integer expected";
                }
                if (m.parentRange != null && m.hasOwnProperty("parentRange")) {
                    if (!Array.isArray(m.parentRange))
                        return "parentRange: array expected";
                    for (var i = 0; i < m.parentRange.length; ++i) {
                        if (!$util.isInteger(m.parentRange[i]))
                            return "parentRange: integer[] expected";
                    }
                }
                if (m.paraRange != null && m.hasOwnProperty("paraRange")) {
                    if (!Array.isArray(m.paraRange))
                        return "paraRange: array expected";
                    for (var i = 0; i < m.paraRange.length; ++i) {
                        if (!$util.isInteger(m.paraRange[i]))
                            return "paraRange: integer[] expected";
                    }
                }
                if (m.drySyncHeaderReqKey != null && m.hasOwnProperty("drySyncHeaderReqKey")) {
                    if (!$util.isString(m.drySyncHeaderReqKey))
                        return "drySyncHeaderReqKey: string expected";
                }
                if (m.latestSetId != null && m.hasOwnProperty("latestSetId")) {
                    if (!$util.isInteger(m.latestSetId))
                        return "latestSetId: integer expected";
                }
                if (m.blobParentStopBlock != null && m.hasOwnProperty("blobParentStopBlock")) {
                    if (!$util.isInteger(m.blobParentStopBlock))
                        return "blobParentStopBlock: integer expected";
                }
                if (m.blobParaStopBlock != null && m.hasOwnProperty("blobParaStopBlock")) {
                    if (!$util.isInteger(m.blobParaStopBlock))
                        return "blobParaStopBlock: integer expected";
                }
                if (m.blobSyncHeaderReqKey != null && m.hasOwnProperty("blobSyncHeaderReqKey")) {
                    if (!$util.isString(m.blobSyncHeaderReqKey))
                        return "blobSyncHeaderReqKey: string expected";
                }
                return null;
            };

            /**
             * Creates a RangeMeta message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.db.RangeMeta
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.db.RangeMeta} RangeMeta
             */
            RangeMeta.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.db.RangeMeta)
                    return d;
                var m = new $root.prb.db.RangeMeta();
                if (d.parentStartBlock != null) {
                    m.parentStartBlock = d.parentStartBlock >>> 0;
                }
                if (d.parentStopBlock != null) {
                    m.parentStopBlock = d.parentStopBlock >>> 0;
                }
                if (d.paraStartBlock != null) {
                    m.paraStartBlock = d.paraStartBlock | 0;
                }
                if (d.paraStopBlock != null) {
                    m.paraStopBlock = d.paraStopBlock | 0;
                }
                if (d.parentRange) {
                    if (!Array.isArray(d.parentRange))
                        throw TypeError(".prb.db.RangeMeta.parentRange: array expected");
                    m.parentRange = [];
                    for (var i = 0; i < d.parentRange.length; ++i) {
                        m.parentRange[i] = d.parentRange[i] >>> 0;
                    }
                }
                if (d.paraRange) {
                    if (!Array.isArray(d.paraRange))
                        throw TypeError(".prb.db.RangeMeta.paraRange: array expected");
                    m.paraRange = [];
                    for (var i = 0; i < d.paraRange.length; ++i) {
                        m.paraRange[i] = d.paraRange[i] >>> 0;
                    }
                }
                if (d.drySyncHeaderReqKey != null) {
                    m.drySyncHeaderReqKey = String(d.drySyncHeaderReqKey);
                }
                if (d.latestSetId != null) {
                    m.latestSetId = d.latestSetId | 0;
                }
                if (d.blobParentStopBlock != null) {
                    m.blobParentStopBlock = d.blobParentStopBlock >>> 0;
                }
                if (d.blobParaStopBlock != null) {
                    m.blobParaStopBlock = d.blobParaStopBlock | 0;
                }
                if (d.blobSyncHeaderReqKey != null) {
                    m.blobSyncHeaderReqKey = String(d.blobSyncHeaderReqKey);
                }
                return m;
            };

            /**
             * Creates a plain object from a RangeMeta message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.db.RangeMeta
             * @static
             * @param {prb.db.RangeMeta} m RangeMeta
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RangeMeta.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.parentRange = [];
                    d.paraRange = [];
                }
                if (o.defaults) {
                    d.parentStartBlock = 0;
                    d.parentStopBlock = 0;
                    d.paraStartBlock = 0;
                    d.paraStopBlock = 0;
                    d.drySyncHeaderReqKey = "";
                    d.latestSetId = 0;
                    d.blobParentStopBlock = 0;
                    d.blobParaStopBlock = 0;
                    d.blobSyncHeaderReqKey = "";
                }
                if (m.parentStartBlock != null && m.hasOwnProperty("parentStartBlock")) {
                    d.parentStartBlock = m.parentStartBlock;
                }
                if (m.parentStopBlock != null && m.hasOwnProperty("parentStopBlock")) {
                    d.parentStopBlock = m.parentStopBlock;
                }
                if (m.paraStartBlock != null && m.hasOwnProperty("paraStartBlock")) {
                    d.paraStartBlock = m.paraStartBlock;
                }
                if (m.paraStopBlock != null && m.hasOwnProperty("paraStopBlock")) {
                    d.paraStopBlock = m.paraStopBlock;
                }
                if (m.parentRange && m.parentRange.length) {
                    d.parentRange = [];
                    for (var j = 0; j < m.parentRange.length; ++j) {
                        d.parentRange[j] = m.parentRange[j];
                    }
                }
                if (m.paraRange && m.paraRange.length) {
                    d.paraRange = [];
                    for (var j = 0; j < m.paraRange.length; ++j) {
                        d.paraRange[j] = m.paraRange[j];
                    }
                }
                if (m.drySyncHeaderReqKey != null && m.hasOwnProperty("drySyncHeaderReqKey")) {
                    d.drySyncHeaderReqKey = m.drySyncHeaderReqKey;
                }
                if (m.latestSetId != null && m.hasOwnProperty("latestSetId")) {
                    d.latestSetId = m.latestSetId;
                }
                if (m.blobParentStopBlock != null && m.hasOwnProperty("blobParentStopBlock")) {
                    d.blobParentStopBlock = m.blobParentStopBlock;
                }
                if (m.blobParaStopBlock != null && m.hasOwnProperty("blobParaStopBlock")) {
                    d.blobParaStopBlock = m.blobParaStopBlock;
                }
                if (m.blobSyncHeaderReqKey != null && m.hasOwnProperty("blobSyncHeaderReqKey")) {
                    d.blobSyncHeaderReqKey = m.blobSyncHeaderReqKey;
                }
                return d;
            };

            /**
             * Converts this RangeMeta to JSON.
             * @function toJSON
             * @memberof prb.db.RangeMeta
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RangeMeta.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RangeMeta;
        })();

        db.Pool = (function() {

            /**
             * Properties of a Pool.
             * @memberof prb.db
             * @interface IPool
             * @property {string|null} [uuid] Pool uuid
             * @property {prb.IFullAccount|null} [owner] Pool owner
             * @property {number|Long|null} [pid] Pool pid
             * @property {string|null} [name] Pool name
             * @property {boolean|null} [enabled] Pool enabled
             * @property {boolean|null} [deleted] Pool deleted
             * @property {string|null} [realPhalaSs58] Pool realPhalaSs58
             */

            /**
             * Constructs a new Pool.
             * @memberof prb.db
             * @classdesc Represents a Pool.
             * @implements IPool
             * @constructor
             * @param {prb.db.IPool=} [p] Properties to set
             */
            function Pool(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Pool uuid.
             * @member {string} uuid
             * @memberof prb.db.Pool
             * @instance
             */
            Pool.prototype.uuid = "";

            /**
             * Pool owner.
             * @member {prb.IFullAccount|null|undefined} owner
             * @memberof prb.db.Pool
             * @instance
             */
            Pool.prototype.owner = null;

            /**
             * Pool pid.
             * @member {number|Long} pid
             * @memberof prb.db.Pool
             * @instance
             */
            Pool.prototype.pid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Pool name.
             * @member {string} name
             * @memberof prb.db.Pool
             * @instance
             */
            Pool.prototype.name = "";

            /**
             * Pool enabled.
             * @member {boolean} enabled
             * @memberof prb.db.Pool
             * @instance
             */
            Pool.prototype.enabled = false;

            /**
             * Pool deleted.
             * @member {boolean} deleted
             * @memberof prb.db.Pool
             * @instance
             */
            Pool.prototype.deleted = false;

            /**
             * Pool realPhalaSs58.
             * @member {string} realPhalaSs58
             * @memberof prb.db.Pool
             * @instance
             */
            Pool.prototype.realPhalaSs58 = "";

            /**
             * Creates a new Pool instance using the specified properties.
             * @function create
             * @memberof prb.db.Pool
             * @static
             * @param {prb.db.IPool=} [properties] Properties to set
             * @returns {prb.db.Pool} Pool instance
             */
            Pool.create = function create(properties) {
                return new Pool(properties);
            };

            /**
             * Encodes the specified Pool message. Does not implicitly {@link prb.db.Pool.verify|verify} messages.
             * @function encode
             * @memberof prb.db.Pool
             * @static
             * @param {prb.db.IPool} m Pool message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pool.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.uuid != null && Object.hasOwnProperty.call(m, "uuid"))
                    w.uint32(10).string(m.uuid);
                if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
                    $root.prb.FullAccount.encode(m.owner, w.uint32(18).fork()).ldelim();
                if (m.pid != null && Object.hasOwnProperty.call(m, "pid"))
                    w.uint32(24).uint64(m.pid);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(34).string(m.name);
                if (m.enabled != null && Object.hasOwnProperty.call(m, "enabled"))
                    w.uint32(40).bool(m.enabled);
                if (m.deleted != null && Object.hasOwnProperty.call(m, "deleted"))
                    w.uint32(48).bool(m.deleted);
                if (m.realPhalaSs58 != null && Object.hasOwnProperty.call(m, "realPhalaSs58"))
                    w.uint32(58).string(m.realPhalaSs58);
                return w;
            };

            /**
             * Encodes the specified Pool message, length delimited. Does not implicitly {@link prb.db.Pool.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.db.Pool
             * @static
             * @param {prb.db.IPool} message Pool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Pool message from the specified reader or buffer.
             * @function decode
             * @memberof prb.db.Pool
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.db.Pool} Pool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pool.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.db.Pool();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.uuid = r.string();
                        break;
                    case 2:
                        m.owner = $root.prb.FullAccount.decode(r, r.uint32());
                        break;
                    case 3:
                        m.pid = r.uint64();
                        break;
                    case 4:
                        m.name = r.string();
                        break;
                    case 5:
                        m.enabled = r.bool();
                        break;
                    case 6:
                        m.deleted = r.bool();
                        break;
                    case 7:
                        m.realPhalaSs58 = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a Pool message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.db.Pool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.db.Pool} Pool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Pool message.
             * @function verify
             * @memberof prb.db.Pool
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pool.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.uuid != null && m.hasOwnProperty("uuid")) {
                    if (!$util.isString(m.uuid))
                        return "uuid: string expected";
                }
                if (m.owner != null && m.hasOwnProperty("owner")) {
                    {
                        var e = $root.prb.FullAccount.verify(m.owner);
                        if (e)
                            return "owner." + e;
                    }
                }
                if (m.pid != null && m.hasOwnProperty("pid")) {
                    if (!$util.isInteger(m.pid) && !(m.pid && $util.isInteger(m.pid.low) && $util.isInteger(m.pid.high)))
                        return "pid: integer|Long expected";
                }
                if (m.name != null && m.hasOwnProperty("name")) {
                    if (!$util.isString(m.name))
                        return "name: string expected";
                }
                if (m.enabled != null && m.hasOwnProperty("enabled")) {
                    if (typeof m.enabled !== "boolean")
                        return "enabled: boolean expected";
                }
                if (m.deleted != null && m.hasOwnProperty("deleted")) {
                    if (typeof m.deleted !== "boolean")
                        return "deleted: boolean expected";
                }
                if (m.realPhalaSs58 != null && m.hasOwnProperty("realPhalaSs58")) {
                    if (!$util.isString(m.realPhalaSs58))
                        return "realPhalaSs58: string expected";
                }
                return null;
            };

            /**
             * Creates a Pool message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.db.Pool
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.db.Pool} Pool
             */
            Pool.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.db.Pool)
                    return d;
                var m = new $root.prb.db.Pool();
                if (d.uuid != null) {
                    m.uuid = String(d.uuid);
                }
                if (d.owner != null) {
                    if (typeof d.owner !== "object")
                        throw TypeError(".prb.db.Pool.owner: object expected");
                    m.owner = $root.prb.FullAccount.fromObject(d.owner);
                }
                if (d.pid != null) {
                    if ($util.Long)
                        (m.pid = $util.Long.fromValue(d.pid)).unsigned = true;
                    else if (typeof d.pid === "string")
                        m.pid = parseInt(d.pid, 10);
                    else if (typeof d.pid === "number")
                        m.pid = d.pid;
                    else if (typeof d.pid === "object")
                        m.pid = new $util.LongBits(d.pid.low >>> 0, d.pid.high >>> 0).toNumber(true);
                }
                if (d.name != null) {
                    m.name = String(d.name);
                }
                if (d.enabled != null) {
                    m.enabled = Boolean(d.enabled);
                }
                if (d.deleted != null) {
                    m.deleted = Boolean(d.deleted);
                }
                if (d.realPhalaSs58 != null) {
                    m.realPhalaSs58 = String(d.realPhalaSs58);
                }
                return m;
            };

            /**
             * Creates a plain object from a Pool message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.db.Pool
             * @static
             * @param {prb.db.Pool} m Pool
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pool.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.uuid = "";
                    d.owner = null;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, true);
                        d.pid = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                    } else
                        d.pid = o.longs === String ? "0" : 0;
                    d.name = "";
                    d.enabled = false;
                    d.deleted = false;
                    d.realPhalaSs58 = "";
                }
                if (m.uuid != null && m.hasOwnProperty("uuid")) {
                    d.uuid = m.uuid;
                }
                if (m.owner != null && m.hasOwnProperty("owner")) {
                    d.owner = $root.prb.FullAccount.toObject(m.owner, o);
                }
                if (m.pid != null && m.hasOwnProperty("pid")) {
                    if (typeof m.pid === "number")
                        d.pid = o.longs === String ? String(m.pid) : m.pid;
                    else
                        d.pid = o.longs === String ? $util.Long.prototype.toString.call(m.pid) : o.longs === Number ? new $util.LongBits(m.pid.low >>> 0, m.pid.high >>> 0).toNumber(true) : m.pid;
                }
                if (m.name != null && m.hasOwnProperty("name")) {
                    d.name = m.name;
                }
                if (m.enabled != null && m.hasOwnProperty("enabled")) {
                    d.enabled = m.enabled;
                }
                if (m.deleted != null && m.hasOwnProperty("deleted")) {
                    d.deleted = m.deleted;
                }
                if (m.realPhalaSs58 != null && m.hasOwnProperty("realPhalaSs58")) {
                    d.realPhalaSs58 = m.realPhalaSs58;
                }
                return d;
            };

            /**
             * Converts this Pool to JSON.
             * @function toJSON
             * @memberof prb.db.Pool
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Pool;
        })();

        db.Worker = (function() {

            /**
             * Properties of a Worker.
             * @memberof prb.db
             * @interface IWorker
             * @property {string|null} [uuid] Worker uuid
             * @property {number|Long|null} [pid] Worker pid
             * @property {string|null} [name] Worker name
             * @property {string|null} [endpoint] Worker endpoint
             * @property {boolean|null} [enabled] Worker enabled
             * @property {boolean|null} [deleted] Worker deleted
             * @property {string|null} [stake] Worker stake
             */

            /**
             * Constructs a new Worker.
             * @memberof prb.db
             * @classdesc Represents a Worker.
             * @implements IWorker
             * @constructor
             * @param {prb.db.IWorker=} [p] Properties to set
             */
            function Worker(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Worker uuid.
             * @member {string} uuid
             * @memberof prb.db.Worker
             * @instance
             */
            Worker.prototype.uuid = "";

            /**
             * Worker pid.
             * @member {number|Long} pid
             * @memberof prb.db.Worker
             * @instance
             */
            Worker.prototype.pid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Worker name.
             * @member {string} name
             * @memberof prb.db.Worker
             * @instance
             */
            Worker.prototype.name = "";

            /**
             * Worker endpoint.
             * @member {string} endpoint
             * @memberof prb.db.Worker
             * @instance
             */
            Worker.prototype.endpoint = "";

            /**
             * Worker enabled.
             * @member {boolean} enabled
             * @memberof prb.db.Worker
             * @instance
             */
            Worker.prototype.enabled = false;

            /**
             * Worker deleted.
             * @member {boolean} deleted
             * @memberof prb.db.Worker
             * @instance
             */
            Worker.prototype.deleted = false;

            /**
             * Worker stake.
             * @member {string} stake
             * @memberof prb.db.Worker
             * @instance
             */
            Worker.prototype.stake = "";

            /**
             * Creates a new Worker instance using the specified properties.
             * @function create
             * @memberof prb.db.Worker
             * @static
             * @param {prb.db.IWorker=} [properties] Properties to set
             * @returns {prb.db.Worker} Worker instance
             */
            Worker.create = function create(properties) {
                return new Worker(properties);
            };

            /**
             * Encodes the specified Worker message. Does not implicitly {@link prb.db.Worker.verify|verify} messages.
             * @function encode
             * @memberof prb.db.Worker
             * @static
             * @param {prb.db.IWorker} m Worker message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Worker.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.uuid != null && Object.hasOwnProperty.call(m, "uuid"))
                    w.uint32(10).string(m.uuid);
                if (m.pid != null && Object.hasOwnProperty.call(m, "pid"))
                    w.uint32(16).uint64(m.pid);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(26).string(m.name);
                if (m.endpoint != null && Object.hasOwnProperty.call(m, "endpoint"))
                    w.uint32(34).string(m.endpoint);
                if (m.enabled != null && Object.hasOwnProperty.call(m, "enabled"))
                    w.uint32(40).bool(m.enabled);
                if (m.deleted != null && Object.hasOwnProperty.call(m, "deleted"))
                    w.uint32(48).bool(m.deleted);
                if (m.stake != null && Object.hasOwnProperty.call(m, "stake"))
                    w.uint32(58).string(m.stake);
                return w;
            };

            /**
             * Encodes the specified Worker message, length delimited. Does not implicitly {@link prb.db.Worker.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.db.Worker
             * @static
             * @param {prb.db.IWorker} message Worker message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Worker.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Worker message from the specified reader or buffer.
             * @function decode
             * @memberof prb.db.Worker
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.db.Worker} Worker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Worker.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.db.Worker();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.uuid = r.string();
                        break;
                    case 2:
                        m.pid = r.uint64();
                        break;
                    case 3:
                        m.name = r.string();
                        break;
                    case 4:
                        m.endpoint = r.string();
                        break;
                    case 5:
                        m.enabled = r.bool();
                        break;
                    case 6:
                        m.deleted = r.bool();
                        break;
                    case 7:
                        m.stake = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a Worker message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.db.Worker
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.db.Worker} Worker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Worker.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Worker message.
             * @function verify
             * @memberof prb.db.Worker
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Worker.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.uuid != null && m.hasOwnProperty("uuid")) {
                    if (!$util.isString(m.uuid))
                        return "uuid: string expected";
                }
                if (m.pid != null && m.hasOwnProperty("pid")) {
                    if (!$util.isInteger(m.pid) && !(m.pid && $util.isInteger(m.pid.low) && $util.isInteger(m.pid.high)))
                        return "pid: integer|Long expected";
                }
                if (m.name != null && m.hasOwnProperty("name")) {
                    if (!$util.isString(m.name))
                        return "name: string expected";
                }
                if (m.endpoint != null && m.hasOwnProperty("endpoint")) {
                    if (!$util.isString(m.endpoint))
                        return "endpoint: string expected";
                }
                if (m.enabled != null && m.hasOwnProperty("enabled")) {
                    if (typeof m.enabled !== "boolean")
                        return "enabled: boolean expected";
                }
                if (m.deleted != null && m.hasOwnProperty("deleted")) {
                    if (typeof m.deleted !== "boolean")
                        return "deleted: boolean expected";
                }
                if (m.stake != null && m.hasOwnProperty("stake")) {
                    if (!$util.isString(m.stake))
                        return "stake: string expected";
                }
                return null;
            };

            /**
             * Creates a Worker message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.db.Worker
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.db.Worker} Worker
             */
            Worker.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.db.Worker)
                    return d;
                var m = new $root.prb.db.Worker();
                if (d.uuid != null) {
                    m.uuid = String(d.uuid);
                }
                if (d.pid != null) {
                    if ($util.Long)
                        (m.pid = $util.Long.fromValue(d.pid)).unsigned = true;
                    else if (typeof d.pid === "string")
                        m.pid = parseInt(d.pid, 10);
                    else if (typeof d.pid === "number")
                        m.pid = d.pid;
                    else if (typeof d.pid === "object")
                        m.pid = new $util.LongBits(d.pid.low >>> 0, d.pid.high >>> 0).toNumber(true);
                }
                if (d.name != null) {
                    m.name = String(d.name);
                }
                if (d.endpoint != null) {
                    m.endpoint = String(d.endpoint);
                }
                if (d.enabled != null) {
                    m.enabled = Boolean(d.enabled);
                }
                if (d.deleted != null) {
                    m.deleted = Boolean(d.deleted);
                }
                if (d.stake != null) {
                    m.stake = String(d.stake);
                }
                return m;
            };

            /**
             * Creates a plain object from a Worker message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.db.Worker
             * @static
             * @param {prb.db.Worker} m Worker
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Worker.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.uuid = "";
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, true);
                        d.pid = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                    } else
                        d.pid = o.longs === String ? "0" : 0;
                    d.name = "";
                    d.endpoint = "";
                    d.enabled = false;
                    d.deleted = false;
                    d.stake = "";
                }
                if (m.uuid != null && m.hasOwnProperty("uuid")) {
                    d.uuid = m.uuid;
                }
                if (m.pid != null && m.hasOwnProperty("pid")) {
                    if (typeof m.pid === "number")
                        d.pid = o.longs === String ? String(m.pid) : m.pid;
                    else
                        d.pid = o.longs === String ? $util.Long.prototype.toString.call(m.pid) : o.longs === Number ? new $util.LongBits(m.pid.low >>> 0, m.pid.high >>> 0).toNumber(true) : m.pid;
                }
                if (m.name != null && m.hasOwnProperty("name")) {
                    d.name = m.name;
                }
                if (m.endpoint != null && m.hasOwnProperty("endpoint")) {
                    d.endpoint = m.endpoint;
                }
                if (m.enabled != null && m.hasOwnProperty("enabled")) {
                    d.enabled = m.enabled;
                }
                if (m.deleted != null && m.hasOwnProperty("deleted")) {
                    d.deleted = m.deleted;
                }
                if (m.stake != null && m.hasOwnProperty("stake")) {
                    d.stake = m.stake;
                }
                return d;
            };

            /**
             * Converts this Worker to JSON.
             * @function toJSON
             * @memberof prb.db.Worker
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Worker.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Worker;
        })();

        return db;
    })();

    prb.data_provider = (function() {

        /**
         * Namespace data_provider.
         * @memberof prb
         * @namespace
         */
        const data_provider = {};

        /**
         * Status enum.
         * @name prb.data_provider.Status
         * @enum {number}
         * @property {number} S_UNKNOWN=0 S_UNKNOWN value
         * @property {number} S_IDLE=1 S_IDLE value
         * @property {number} S_BUSY=2 S_BUSY value
         * @property {number} S_ORPHAN=3 S_ORPHAN value
         */
        data_provider.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "S_UNKNOWN"] = 0;
            values[valuesById[1] = "S_IDLE"] = 1;
            values[valuesById[2] = "S_BUSY"] = 2;
            values[valuesById[3] = "S_ORPHAN"] = 3;
            return values;
        })();

        /**
         * BlobType enum.
         * @name prb.data_provider.BlobType
         * @enum {number}
         * @property {number} BT_UNKNOWN=0 BT_UNKNOWN value
         * @property {number} BT_PARENT_BLOCK=1 BT_PARENT_BLOCK value
         * @property {number} BT_PARA_BLOCK=2 BT_PARA_BLOCK value
         */
        data_provider.BlobType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BT_UNKNOWN"] = 0;
            values[valuesById[1] = "BT_PARENT_BLOCK"] = 1;
            values[valuesById[2] = "BT_PARA_BLOCK"] = 2;
            return values;
        })();

        data_provider.Info = (function() {

            /**
             * Properties of an Info.
             * @memberof prb.data_provider
             * @interface IInfo
             * @property {prb.data_provider.Status|null} [status] Info status
             * @property {number|null} [paraId] Info paraId
             * @property {number|null} [parentStartHeader] Info parentStartHeader
             * @property {number|null} [parentKnownEight] Info parentKnownEight
             * @property {number|null} [parentBlobEight] Info parentBlobEight
             * @property {number|null} [parentArchivedEight] Info parentArchivedEight
             * @property {number|null} [paraKnownEight] Info paraKnownEight
             * @property {number|null} [paraBlobEight] Info paraBlobEight
             * @property {number|null} [paraArchivedEight] Info paraArchivedEight
             * @property {boolean|null} [synched] Info synched
             */

            /**
             * Constructs a new Info.
             * @memberof prb.data_provider
             * @classdesc Represents an Info.
             * @implements IInfo
             * @constructor
             * @param {prb.data_provider.IInfo=} [p] Properties to set
             */
            function Info(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Info status.
             * @member {prb.data_provider.Status} status
             * @memberof prb.data_provider.Info
             * @instance
             */
            Info.prototype.status = 0;

            /**
             * Info paraId.
             * @member {number} paraId
             * @memberof prb.data_provider.Info
             * @instance
             */
            Info.prototype.paraId = 0;

            /**
             * Info parentStartHeader.
             * @member {number} parentStartHeader
             * @memberof prb.data_provider.Info
             * @instance
             */
            Info.prototype.parentStartHeader = 0;

            /**
             * Info parentKnownEight.
             * @member {number} parentKnownEight
             * @memberof prb.data_provider.Info
             * @instance
             */
            Info.prototype.parentKnownEight = 0;

            /**
             * Info parentBlobEight.
             * @member {number} parentBlobEight
             * @memberof prb.data_provider.Info
             * @instance
             */
            Info.prototype.parentBlobEight = 0;

            /**
             * Info parentArchivedEight.
             * @member {number} parentArchivedEight
             * @memberof prb.data_provider.Info
             * @instance
             */
            Info.prototype.parentArchivedEight = 0;

            /**
             * Info paraKnownEight.
             * @member {number} paraKnownEight
             * @memberof prb.data_provider.Info
             * @instance
             */
            Info.prototype.paraKnownEight = 0;

            /**
             * Info paraBlobEight.
             * @member {number} paraBlobEight
             * @memberof prb.data_provider.Info
             * @instance
             */
            Info.prototype.paraBlobEight = 0;

            /**
             * Info paraArchivedEight.
             * @member {number} paraArchivedEight
             * @memberof prb.data_provider.Info
             * @instance
             */
            Info.prototype.paraArchivedEight = 0;

            /**
             * Info synched.
             * @member {boolean} synched
             * @memberof prb.data_provider.Info
             * @instance
             */
            Info.prototype.synched = false;

            /**
             * Creates a new Info instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.Info
             * @static
             * @param {prb.data_provider.IInfo=} [properties] Properties to set
             * @returns {prb.data_provider.Info} Info instance
             */
            Info.create = function create(properties) {
                return new Info(properties);
            };

            /**
             * Encodes the specified Info message. Does not implicitly {@link prb.data_provider.Info.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.Info
             * @static
             * @param {prb.data_provider.IInfo} m Info message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Info.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                    w.uint32(8).int32(m.status);
                if (m.paraId != null && Object.hasOwnProperty.call(m, "paraId"))
                    w.uint32(16).int32(m.paraId);
                if (m.parentStartHeader != null && Object.hasOwnProperty.call(m, "parentStartHeader"))
                    w.uint32(24).int32(m.parentStartHeader);
                if (m.parentKnownEight != null && Object.hasOwnProperty.call(m, "parentKnownEight"))
                    w.uint32(32).int32(m.parentKnownEight);
                if (m.parentBlobEight != null && Object.hasOwnProperty.call(m, "parentBlobEight"))
                    w.uint32(40).int32(m.parentBlobEight);
                if (m.parentArchivedEight != null && Object.hasOwnProperty.call(m, "parentArchivedEight"))
                    w.uint32(48).int32(m.parentArchivedEight);
                if (m.paraKnownEight != null && Object.hasOwnProperty.call(m, "paraKnownEight"))
                    w.uint32(56).int32(m.paraKnownEight);
                if (m.paraBlobEight != null && Object.hasOwnProperty.call(m, "paraBlobEight"))
                    w.uint32(64).int32(m.paraBlobEight);
                if (m.paraArchivedEight != null && Object.hasOwnProperty.call(m, "paraArchivedEight"))
                    w.uint32(72).int32(m.paraArchivedEight);
                if (m.synched != null && Object.hasOwnProperty.call(m, "synched"))
                    w.uint32(80).bool(m.synched);
                return w;
            };

            /**
             * Encodes the specified Info message, length delimited. Does not implicitly {@link prb.data_provider.Info.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.Info
             * @static
             * @param {prb.data_provider.IInfo} message Info message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Info.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Info message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.Info
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.Info} Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Info.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.Info();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.status = r.int32();
                        break;
                    case 2:
                        m.paraId = r.int32();
                        break;
                    case 3:
                        m.parentStartHeader = r.int32();
                        break;
                    case 4:
                        m.parentKnownEight = r.int32();
                        break;
                    case 5:
                        m.parentBlobEight = r.int32();
                        break;
                    case 6:
                        m.parentArchivedEight = r.int32();
                        break;
                    case 7:
                        m.paraKnownEight = r.int32();
                        break;
                    case 8:
                        m.paraBlobEight = r.int32();
                        break;
                    case 9:
                        m.paraArchivedEight = r.int32();
                        break;
                    case 10:
                        m.synched = r.bool();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes an Info message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.Info
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.Info} Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Info.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Info message.
             * @function verify
             * @memberof prb.data_provider.Info
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Info.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.status != null && m.hasOwnProperty("status")) {
                    switch (m.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
                if (m.paraId != null && m.hasOwnProperty("paraId")) {
                    if (!$util.isInteger(m.paraId))
                        return "paraId: integer expected";
                }
                if (m.parentStartHeader != null && m.hasOwnProperty("parentStartHeader")) {
                    if (!$util.isInteger(m.parentStartHeader))
                        return "parentStartHeader: integer expected";
                }
                if (m.parentKnownEight != null && m.hasOwnProperty("parentKnownEight")) {
                    if (!$util.isInteger(m.parentKnownEight))
                        return "parentKnownEight: integer expected";
                }
                if (m.parentBlobEight != null && m.hasOwnProperty("parentBlobEight")) {
                    if (!$util.isInteger(m.parentBlobEight))
                        return "parentBlobEight: integer expected";
                }
                if (m.parentArchivedEight != null && m.hasOwnProperty("parentArchivedEight")) {
                    if (!$util.isInteger(m.parentArchivedEight))
                        return "parentArchivedEight: integer expected";
                }
                if (m.paraKnownEight != null && m.hasOwnProperty("paraKnownEight")) {
                    if (!$util.isInteger(m.paraKnownEight))
                        return "paraKnownEight: integer expected";
                }
                if (m.paraBlobEight != null && m.hasOwnProperty("paraBlobEight")) {
                    if (!$util.isInteger(m.paraBlobEight))
                        return "paraBlobEight: integer expected";
                }
                if (m.paraArchivedEight != null && m.hasOwnProperty("paraArchivedEight")) {
                    if (!$util.isInteger(m.paraArchivedEight))
                        return "paraArchivedEight: integer expected";
                }
                if (m.synched != null && m.hasOwnProperty("synched")) {
                    if (typeof m.synched !== "boolean")
                        return "synched: boolean expected";
                }
                return null;
            };

            /**
             * Creates an Info message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.Info
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.Info} Info
             */
            Info.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.Info)
                    return d;
                var m = new $root.prb.data_provider.Info();
                switch (d.status) {
                case "S_UNKNOWN":
                case 0:
                    m.status = 0;
                    break;
                case "S_IDLE":
                case 1:
                    m.status = 1;
                    break;
                case "S_BUSY":
                case 2:
                    m.status = 2;
                    break;
                case "S_ORPHAN":
                case 3:
                    m.status = 3;
                    break;
                }
                if (d.paraId != null) {
                    m.paraId = d.paraId | 0;
                }
                if (d.parentStartHeader != null) {
                    m.parentStartHeader = d.parentStartHeader | 0;
                }
                if (d.parentKnownEight != null) {
                    m.parentKnownEight = d.parentKnownEight | 0;
                }
                if (d.parentBlobEight != null) {
                    m.parentBlobEight = d.parentBlobEight | 0;
                }
                if (d.parentArchivedEight != null) {
                    m.parentArchivedEight = d.parentArchivedEight | 0;
                }
                if (d.paraKnownEight != null) {
                    m.paraKnownEight = d.paraKnownEight | 0;
                }
                if (d.paraBlobEight != null) {
                    m.paraBlobEight = d.paraBlobEight | 0;
                }
                if (d.paraArchivedEight != null) {
                    m.paraArchivedEight = d.paraArchivedEight | 0;
                }
                if (d.synched != null) {
                    m.synched = Boolean(d.synched);
                }
                return m;
            };

            /**
             * Creates a plain object from an Info message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.Info
             * @static
             * @param {prb.data_provider.Info} m Info
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Info.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.status = o.enums === String ? "S_UNKNOWN" : 0;
                    d.paraId = 0;
                    d.parentStartHeader = 0;
                    d.parentKnownEight = 0;
                    d.parentBlobEight = 0;
                    d.parentArchivedEight = 0;
                    d.paraKnownEight = 0;
                    d.paraBlobEight = 0;
                    d.paraArchivedEight = 0;
                    d.synched = false;
                }
                if (m.status != null && m.hasOwnProperty("status")) {
                    d.status = o.enums === String ? $root.prb.data_provider.Status[m.status] : m.status;
                }
                if (m.paraId != null && m.hasOwnProperty("paraId")) {
                    d.paraId = m.paraId;
                }
                if (m.parentStartHeader != null && m.hasOwnProperty("parentStartHeader")) {
                    d.parentStartHeader = m.parentStartHeader;
                }
                if (m.parentKnownEight != null && m.hasOwnProperty("parentKnownEight")) {
                    d.parentKnownEight = m.parentKnownEight;
                }
                if (m.parentBlobEight != null && m.hasOwnProperty("parentBlobEight")) {
                    d.parentBlobEight = m.parentBlobEight;
                }
                if (m.parentArchivedEight != null && m.hasOwnProperty("parentArchivedEight")) {
                    d.parentArchivedEight = m.parentArchivedEight;
                }
                if (m.paraKnownEight != null && m.hasOwnProperty("paraKnownEight")) {
                    d.paraKnownEight = m.paraKnownEight;
                }
                if (m.paraBlobEight != null && m.hasOwnProperty("paraBlobEight")) {
                    d.paraBlobEight = m.paraBlobEight;
                }
                if (m.paraArchivedEight != null && m.hasOwnProperty("paraArchivedEight")) {
                    d.paraArchivedEight = m.paraArchivedEight;
                }
                if (m.synched != null && m.hasOwnProperty("synched")) {
                    d.synched = m.synched;
                }
                return d;
            };

            /**
             * Converts this Info to JSON.
             * @function toJSON
             * @memberof prb.data_provider.Info
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Info.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Info;
        })();

        data_provider.WantBlob = (function() {

            /**
             * Properties of a WantBlob.
             * @memberof prb.data_provider
             * @interface IWantBlob
             * @property {number|null} [number] WantBlob number
             * @property {prb.data_provider.BlobType|null} [type] WantBlob type
             */

            /**
             * Constructs a new WantBlob.
             * @memberof prb.data_provider
             * @classdesc Represents a WantBlob.
             * @implements IWantBlob
             * @constructor
             * @param {prb.data_provider.IWantBlob=} [p] Properties to set
             */
            function WantBlob(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * WantBlob number.
             * @member {number} number
             * @memberof prb.data_provider.WantBlob
             * @instance
             */
            WantBlob.prototype.number = 0;

            /**
             * WantBlob type.
             * @member {prb.data_provider.BlobType} type
             * @memberof prb.data_provider.WantBlob
             * @instance
             */
            WantBlob.prototype.type = 0;

            /**
             * Creates a new WantBlob instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.WantBlob
             * @static
             * @param {prb.data_provider.IWantBlob=} [properties] Properties to set
             * @returns {prb.data_provider.WantBlob} WantBlob instance
             */
            WantBlob.create = function create(properties) {
                return new WantBlob(properties);
            };

            /**
             * Encodes the specified WantBlob message. Does not implicitly {@link prb.data_provider.WantBlob.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.WantBlob
             * @static
             * @param {prb.data_provider.IWantBlob} m WantBlob message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WantBlob.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.number != null && Object.hasOwnProperty.call(m, "number"))
                    w.uint32(8).uint32(m.number);
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(16).int32(m.type);
                return w;
            };

            /**
             * Encodes the specified WantBlob message, length delimited. Does not implicitly {@link prb.data_provider.WantBlob.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.WantBlob
             * @static
             * @param {prb.data_provider.IWantBlob} message WantBlob message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WantBlob.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WantBlob message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.WantBlob
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.WantBlob} WantBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WantBlob.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.WantBlob();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.number = r.uint32();
                        break;
                    case 2:
                        m.type = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a WantBlob message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.WantBlob
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.WantBlob} WantBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WantBlob.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WantBlob message.
             * @function verify
             * @memberof prb.data_provider.WantBlob
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WantBlob.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.number != null && m.hasOwnProperty("number")) {
                    if (!$util.isInteger(m.number))
                        return "number: integer expected";
                }
                if (m.type != null && m.hasOwnProperty("type")) {
                    switch (m.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a WantBlob message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.WantBlob
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.WantBlob} WantBlob
             */
            WantBlob.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.WantBlob)
                    return d;
                var m = new $root.prb.data_provider.WantBlob();
                if (d.number != null) {
                    m.number = d.number >>> 0;
                }
                switch (d.type) {
                case "BT_UNKNOWN":
                case 0:
                    m.type = 0;
                    break;
                case "BT_PARENT_BLOCK":
                case 1:
                    m.type = 1;
                    break;
                case "BT_PARA_BLOCK":
                case 2:
                    m.type = 2;
                    break;
                }
                return m;
            };

            /**
             * Creates a plain object from a WantBlob message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.WantBlob
             * @static
             * @param {prb.data_provider.WantBlob} m WantBlob
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WantBlob.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.number = 0;
                    d.type = o.enums === String ? "BT_UNKNOWN" : 0;
                }
                if (m.number != null && m.hasOwnProperty("number")) {
                    d.number = m.number;
                }
                if (m.type != null && m.hasOwnProperty("type")) {
                    d.type = o.enums === String ? $root.prb.data_provider.BlobType[m.type] : m.type;
                }
                return d;
            };

            /**
             * Converts this WantBlob to JSON.
             * @function toJSON
             * @memberof prb.data_provider.WantBlob
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WantBlob.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WantBlob;
        })();

        data_provider.BlobMeta = (function() {

            /**
             * Properties of a BlobMeta.
             * @memberof prb.data_provider
             * @interface IBlobMeta
             * @property {number|null} [number] BlobMeta number
             * @property {Uint8Array|null} [hash] BlobMeta hash
             * @property {string|null} [originPeer] BlobMeta originPeer
             * @property {prb.data_provider.BlobType|null} [type] BlobMeta type
             * @property {string|null} [getToken] BlobMeta getToken
             * @property {number|Long|null} [tokenExpiresAt] BlobMeta tokenExpiresAt
             */

            /**
             * Constructs a new BlobMeta.
             * @memberof prb.data_provider
             * @classdesc Represents a BlobMeta.
             * @implements IBlobMeta
             * @constructor
             * @param {prb.data_provider.IBlobMeta=} [p] Properties to set
             */
            function BlobMeta(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * BlobMeta number.
             * @member {number} number
             * @memberof prb.data_provider.BlobMeta
             * @instance
             */
            BlobMeta.prototype.number = 0;

            /**
             * BlobMeta hash.
             * @member {Uint8Array} hash
             * @memberof prb.data_provider.BlobMeta
             * @instance
             */
            BlobMeta.prototype.hash = $util.newBuffer([]);

            /**
             * BlobMeta originPeer.
             * @member {string} originPeer
             * @memberof prb.data_provider.BlobMeta
             * @instance
             */
            BlobMeta.prototype.originPeer = "";

            /**
             * BlobMeta type.
             * @member {prb.data_provider.BlobType} type
             * @memberof prb.data_provider.BlobMeta
             * @instance
             */
            BlobMeta.prototype.type = 0;

            /**
             * BlobMeta getToken.
             * @member {string} getToken
             * @memberof prb.data_provider.BlobMeta
             * @instance
             */
            BlobMeta.prototype.getToken = "";

            /**
             * BlobMeta tokenExpiresAt.
             * @member {number|Long} tokenExpiresAt
             * @memberof prb.data_provider.BlobMeta
             * @instance
             */
            BlobMeta.prototype.tokenExpiresAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new BlobMeta instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.BlobMeta
             * @static
             * @param {prb.data_provider.IBlobMeta=} [properties] Properties to set
             * @returns {prb.data_provider.BlobMeta} BlobMeta instance
             */
            BlobMeta.create = function create(properties) {
                return new BlobMeta(properties);
            };

            /**
             * Encodes the specified BlobMeta message. Does not implicitly {@link prb.data_provider.BlobMeta.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.BlobMeta
             * @static
             * @param {prb.data_provider.IBlobMeta} m BlobMeta message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlobMeta.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.number != null && Object.hasOwnProperty.call(m, "number"))
                    w.uint32(8).uint32(m.number);
                if (m.hash != null && Object.hasOwnProperty.call(m, "hash"))
                    w.uint32(18).bytes(m.hash);
                if (m.originPeer != null && Object.hasOwnProperty.call(m, "originPeer"))
                    w.uint32(26).string(m.originPeer);
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(32).int32(m.type);
                if (m.getToken != null && Object.hasOwnProperty.call(m, "getToken"))
                    w.uint32(42).string(m.getToken);
                if (m.tokenExpiresAt != null && Object.hasOwnProperty.call(m, "tokenExpiresAt"))
                    w.uint32(48).uint64(m.tokenExpiresAt);
                return w;
            };

            /**
             * Encodes the specified BlobMeta message, length delimited. Does not implicitly {@link prb.data_provider.BlobMeta.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.BlobMeta
             * @static
             * @param {prb.data_provider.IBlobMeta} message BlobMeta message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BlobMeta.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BlobMeta message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.BlobMeta
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.BlobMeta} BlobMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlobMeta.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.BlobMeta();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.number = r.uint32();
                        break;
                    case 2:
                        m.hash = r.bytes();
                        break;
                    case 3:
                        m.originPeer = r.string();
                        break;
                    case 4:
                        m.type = r.int32();
                        break;
                    case 5:
                        m.getToken = r.string();
                        break;
                    case 6:
                        m.tokenExpiresAt = r.uint64();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a BlobMeta message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.BlobMeta
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.BlobMeta} BlobMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BlobMeta.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BlobMeta message.
             * @function verify
             * @memberof prb.data_provider.BlobMeta
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BlobMeta.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.number != null && m.hasOwnProperty("number")) {
                    if (!$util.isInteger(m.number))
                        return "number: integer expected";
                }
                if (m.hash != null && m.hasOwnProperty("hash")) {
                    if (!(m.hash && typeof m.hash.length === "number" || $util.isString(m.hash)))
                        return "hash: buffer expected";
                }
                if (m.originPeer != null && m.hasOwnProperty("originPeer")) {
                    if (!$util.isString(m.originPeer))
                        return "originPeer: string expected";
                }
                if (m.type != null && m.hasOwnProperty("type")) {
                    switch (m.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                if (m.getToken != null && m.hasOwnProperty("getToken")) {
                    if (!$util.isString(m.getToken))
                        return "getToken: string expected";
                }
                if (m.tokenExpiresAt != null && m.hasOwnProperty("tokenExpiresAt")) {
                    if (!$util.isInteger(m.tokenExpiresAt) && !(m.tokenExpiresAt && $util.isInteger(m.tokenExpiresAt.low) && $util.isInteger(m.tokenExpiresAt.high)))
                        return "tokenExpiresAt: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates a BlobMeta message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.BlobMeta
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.BlobMeta} BlobMeta
             */
            BlobMeta.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.BlobMeta)
                    return d;
                var m = new $root.prb.data_provider.BlobMeta();
                if (d.number != null) {
                    m.number = d.number >>> 0;
                }
                if (d.hash != null) {
                    if (typeof d.hash === "string")
                        $util.base64.decode(d.hash, m.hash = $util.newBuffer($util.base64.length(d.hash)), 0);
                    else if (d.hash.length)
                        m.hash = d.hash;
                }
                if (d.originPeer != null) {
                    m.originPeer = String(d.originPeer);
                }
                switch (d.type) {
                case "BT_UNKNOWN":
                case 0:
                    m.type = 0;
                    break;
                case "BT_PARENT_BLOCK":
                case 1:
                    m.type = 1;
                    break;
                case "BT_PARA_BLOCK":
                case 2:
                    m.type = 2;
                    break;
                }
                if (d.getToken != null) {
                    m.getToken = String(d.getToken);
                }
                if (d.tokenExpiresAt != null) {
                    if ($util.Long)
                        (m.tokenExpiresAt = $util.Long.fromValue(d.tokenExpiresAt)).unsigned = true;
                    else if (typeof d.tokenExpiresAt === "string")
                        m.tokenExpiresAt = parseInt(d.tokenExpiresAt, 10);
                    else if (typeof d.tokenExpiresAt === "number")
                        m.tokenExpiresAt = d.tokenExpiresAt;
                    else if (typeof d.tokenExpiresAt === "object")
                        m.tokenExpiresAt = new $util.LongBits(d.tokenExpiresAt.low >>> 0, d.tokenExpiresAt.high >>> 0).toNumber(true);
                }
                return m;
            };

            /**
             * Creates a plain object from a BlobMeta message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.BlobMeta
             * @static
             * @param {prb.data_provider.BlobMeta} m BlobMeta
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BlobMeta.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.number = 0;
                    if (o.bytes === String)
                        d.hash = "";
                    else {
                        d.hash = [];
                        if (o.bytes !== Array)
                            d.hash = $util.newBuffer(d.hash);
                    }
                    d.originPeer = "";
                    d.type = o.enums === String ? "BT_UNKNOWN" : 0;
                    d.getToken = "";
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, true);
                        d.tokenExpiresAt = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
                    } else
                        d.tokenExpiresAt = o.longs === String ? "0" : 0;
                }
                if (m.number != null && m.hasOwnProperty("number")) {
                    d.number = m.number;
                }
                if (m.hash != null && m.hasOwnProperty("hash")) {
                    d.hash = o.bytes === String ? $util.base64.encode(m.hash, 0, m.hash.length) : o.bytes === Array ? Array.prototype.slice.call(m.hash) : m.hash;
                }
                if (m.originPeer != null && m.hasOwnProperty("originPeer")) {
                    d.originPeer = m.originPeer;
                }
                if (m.type != null && m.hasOwnProperty("type")) {
                    d.type = o.enums === String ? $root.prb.data_provider.BlobType[m.type] : m.type;
                }
                if (m.getToken != null && m.hasOwnProperty("getToken")) {
                    d.getToken = m.getToken;
                }
                if (m.tokenExpiresAt != null && m.hasOwnProperty("tokenExpiresAt")) {
                    if (typeof m.tokenExpiresAt === "number")
                        d.tokenExpiresAt = o.longs === String ? String(m.tokenExpiresAt) : m.tokenExpiresAt;
                    else
                        d.tokenExpiresAt = o.longs === String ? $util.Long.prototype.toString.call(m.tokenExpiresAt) : o.longs === Number ? new $util.LongBits(m.tokenExpiresAt.low >>> 0, m.tokenExpiresAt.high >>> 0).toNumber(true) : m.tokenExpiresAt;
                }
                return d;
            };

            /**
             * Converts this BlobMeta to JSON.
             * @function toJSON
             * @memberof prb.data_provider.BlobMeta
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BlobMeta.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BlobMeta;
        })();

        data_provider.GetBlob = (function() {

            /**
             * Properties of a GetBlob.
             * @memberof prb.data_provider
             * @interface IGetBlob
             * @property {string|null} [token] GetBlob token
             */

            /**
             * Constructs a new GetBlob.
             * @memberof prb.data_provider
             * @classdesc Represents a GetBlob.
             * @implements IGetBlob
             * @constructor
             * @param {prb.data_provider.IGetBlob=} [p] Properties to set
             */
            function GetBlob(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * GetBlob token.
             * @member {string} token
             * @memberof prb.data_provider.GetBlob
             * @instance
             */
            GetBlob.prototype.token = "";

            /**
             * Creates a new GetBlob instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.GetBlob
             * @static
             * @param {prb.data_provider.IGetBlob=} [properties] Properties to set
             * @returns {prb.data_provider.GetBlob} GetBlob instance
             */
            GetBlob.create = function create(properties) {
                return new GetBlob(properties);
            };

            /**
             * Encodes the specified GetBlob message. Does not implicitly {@link prb.data_provider.GetBlob.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.GetBlob
             * @static
             * @param {prb.data_provider.IGetBlob} m GetBlob message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBlob.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                    w.uint32(10).string(m.token);
                return w;
            };

            /**
             * Encodes the specified GetBlob message, length delimited. Does not implicitly {@link prb.data_provider.GetBlob.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.GetBlob
             * @static
             * @param {prb.data_provider.IGetBlob} message GetBlob message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBlob.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetBlob message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.GetBlob
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.GetBlob} GetBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBlob.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.GetBlob();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.token = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a GetBlob message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.GetBlob
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.GetBlob} GetBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBlob.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetBlob message.
             * @function verify
             * @memberof prb.data_provider.GetBlob
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetBlob.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.token != null && m.hasOwnProperty("token")) {
                    if (!$util.isString(m.token))
                        return "token: string expected";
                }
                return null;
            };

            /**
             * Creates a GetBlob message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.GetBlob
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.GetBlob} GetBlob
             */
            GetBlob.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.GetBlob)
                    return d;
                var m = new $root.prb.data_provider.GetBlob();
                if (d.token != null) {
                    m.token = String(d.token);
                }
                return m;
            };

            /**
             * Creates a plain object from a GetBlob message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.GetBlob
             * @static
             * @param {prb.data_provider.GetBlob} m GetBlob
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetBlob.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.token = "";
                }
                if (m.token != null && m.hasOwnProperty("token")) {
                    d.token = m.token;
                }
                return d;
            };

            /**
             * Converts this GetBlob to JSON.
             * @function toJSON
             * @memberof prb.data_provider.GetBlob
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetBlob.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetBlob;
        })();

        data_provider.Blob = (function() {

            /**
             * Properties of a Blob.
             * @memberof prb.data_provider
             * @interface IBlob
             * @property {prb.data_provider.BlobType|null} [type] Blob type
             * @property {number|null} [number] Blob number
             * @property {Uint8Array|null} [data] Blob data
             */

            /**
             * Constructs a new Blob.
             * @memberof prb.data_provider
             * @classdesc Represents a Blob.
             * @implements IBlob
             * @constructor
             * @param {prb.data_provider.IBlob=} [p] Properties to set
             */
            function Blob(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Blob type.
             * @member {prb.data_provider.BlobType} type
             * @memberof prb.data_provider.Blob
             * @instance
             */
            Blob.prototype.type = 0;

            /**
             * Blob number.
             * @member {number} number
             * @memberof prb.data_provider.Blob
             * @instance
             */
            Blob.prototype.number = 0;

            /**
             * Blob data.
             * @member {Uint8Array} data
             * @memberof prb.data_provider.Blob
             * @instance
             */
            Blob.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new Blob instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.Blob
             * @static
             * @param {prb.data_provider.IBlob=} [properties] Properties to set
             * @returns {prb.data_provider.Blob} Blob instance
             */
            Blob.create = function create(properties) {
                return new Blob(properties);
            };

            /**
             * Encodes the specified Blob message. Does not implicitly {@link prb.data_provider.Blob.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.Blob
             * @static
             * @param {prb.data_provider.IBlob} m Blob message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Blob.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(8).int32(m.type);
                if (m.number != null && Object.hasOwnProperty.call(m, "number"))
                    w.uint32(16).uint32(m.number);
                if (m.data != null && Object.hasOwnProperty.call(m, "data"))
                    w.uint32(26).bytes(m.data);
                return w;
            };

            /**
             * Encodes the specified Blob message, length delimited. Does not implicitly {@link prb.data_provider.Blob.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.Blob
             * @static
             * @param {prb.data_provider.IBlob} message Blob message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Blob.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Blob message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.Blob
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.Blob} Blob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Blob.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.Blob();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.type = r.int32();
                        break;
                    case 2:
                        m.number = r.uint32();
                        break;
                    case 3:
                        m.data = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a Blob message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.Blob
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.Blob} Blob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Blob.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Blob message.
             * @function verify
             * @memberof prb.data_provider.Blob
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Blob.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.type != null && m.hasOwnProperty("type")) {
                    switch (m.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                if (m.number != null && m.hasOwnProperty("number")) {
                    if (!$util.isInteger(m.number))
                        return "number: integer expected";
                }
                if (m.data != null && m.hasOwnProperty("data")) {
                    if (!(m.data && typeof m.data.length === "number" || $util.isString(m.data)))
                        return "data: buffer expected";
                }
                return null;
            };

            /**
             * Creates a Blob message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.Blob
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.Blob} Blob
             */
            Blob.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.Blob)
                    return d;
                var m = new $root.prb.data_provider.Blob();
                switch (d.type) {
                case "BT_UNKNOWN":
                case 0:
                    m.type = 0;
                    break;
                case "BT_PARENT_BLOCK":
                case 1:
                    m.type = 1;
                    break;
                case "BT_PARA_BLOCK":
                case 2:
                    m.type = 2;
                    break;
                }
                if (d.number != null) {
                    m.number = d.number >>> 0;
                }
                if (d.data != null) {
                    if (typeof d.data === "string")
                        $util.base64.decode(d.data, m.data = $util.newBuffer($util.base64.length(d.data)), 0);
                    else if (d.data.length)
                        m.data = d.data;
                }
                return m;
            };

            /**
             * Creates a plain object from a Blob message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.Blob
             * @static
             * @param {prb.data_provider.Blob} m Blob
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Blob.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.type = o.enums === String ? "BT_UNKNOWN" : 0;
                    d.number = 0;
                    if (o.bytes === String)
                        d.data = "";
                    else {
                        d.data = [];
                        if (o.bytes !== Array)
                            d.data = $util.newBuffer(d.data);
                    }
                }
                if (m.type != null && m.hasOwnProperty("type")) {
                    d.type = o.enums === String ? $root.prb.data_provider.BlobType[m.type] : m.type;
                }
                if (m.number != null && m.hasOwnProperty("number")) {
                    d.number = m.number;
                }
                if (m.data != null && m.hasOwnProperty("data")) {
                    d.data = o.bytes === String ? $util.base64.encode(m.data, 0, m.data.length) : o.bytes === Array ? Array.prototype.slice.call(m.data) : m.data;
                }
                return d;
            };

            /**
             * Converts this Blob to JSON.
             * @function toJSON
             * @memberof prb.data_provider.Blob
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Blob.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Blob;
        })();

        data_provider.GetBlobByKey = (function() {

            /**
             * Properties of a GetBlobByKey.
             * @memberof prb.data_provider
             * @interface IGetBlobByKey
             * @property {string|null} [key] GetBlobByKey key
             */

            /**
             * Constructs a new GetBlobByKey.
             * @memberof prb.data_provider
             * @classdesc Represents a GetBlobByKey.
             * @implements IGetBlobByKey
             * @constructor
             * @param {prb.data_provider.IGetBlobByKey=} [p] Properties to set
             */
            function GetBlobByKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * GetBlobByKey key.
             * @member {string} key
             * @memberof prb.data_provider.GetBlobByKey
             * @instance
             */
            GetBlobByKey.prototype.key = "";

            /**
             * Creates a new GetBlobByKey instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.GetBlobByKey
             * @static
             * @param {prb.data_provider.IGetBlobByKey=} [properties] Properties to set
             * @returns {prb.data_provider.GetBlobByKey} GetBlobByKey instance
             */
            GetBlobByKey.create = function create(properties) {
                return new GetBlobByKey(properties);
            };

            /**
             * Encodes the specified GetBlobByKey message. Does not implicitly {@link prb.data_provider.GetBlobByKey.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.GetBlobByKey
             * @static
             * @param {prb.data_provider.IGetBlobByKey} m GetBlobByKey message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBlobByKey.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                    w.uint32(10).string(m.key);
                return w;
            };

            /**
             * Encodes the specified GetBlobByKey message, length delimited. Does not implicitly {@link prb.data_provider.GetBlobByKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.GetBlobByKey
             * @static
             * @param {prb.data_provider.IGetBlobByKey} message GetBlobByKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBlobByKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetBlobByKey message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.GetBlobByKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.GetBlobByKey} GetBlobByKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBlobByKey.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.GetBlobByKey();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.key = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a GetBlobByKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.GetBlobByKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.GetBlobByKey} GetBlobByKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBlobByKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetBlobByKey message.
             * @function verify
             * @memberof prb.data_provider.GetBlobByKey
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetBlobByKey.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.key != null && m.hasOwnProperty("key")) {
                    if (!$util.isString(m.key))
                        return "key: string expected";
                }
                return null;
            };

            /**
             * Creates a GetBlobByKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.GetBlobByKey
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.GetBlobByKey} GetBlobByKey
             */
            GetBlobByKey.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.GetBlobByKey)
                    return d;
                var m = new $root.prb.data_provider.GetBlobByKey();
                if (d.key != null) {
                    m.key = String(d.key);
                }
                return m;
            };

            /**
             * Creates a plain object from a GetBlobByKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.GetBlobByKey
             * @static
             * @param {prb.data_provider.GetBlobByKey} m GetBlobByKey
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetBlobByKey.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.key = "";
                }
                if (m.key != null && m.hasOwnProperty("key")) {
                    d.key = m.key;
                }
                return d;
            };

            /**
             * Converts this GetBlobByKey to JSON.
             * @function toJSON
             * @memberof prb.data_provider.GetBlobByKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetBlobByKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetBlobByKey;
        })();

        data_provider.RawBlob = (function() {

            /**
             * Properties of a RawBlob.
             * @memberof prb.data_provider
             * @interface IRawBlob
             * @property {string|null} [key] RawBlob key
             * @property {boolean|null} [empty] RawBlob empty
             * @property {Uint8Array|null} [data] RawBlob data
             */

            /**
             * Constructs a new RawBlob.
             * @memberof prb.data_provider
             * @classdesc Represents a RawBlob.
             * @implements IRawBlob
             * @constructor
             * @param {prb.data_provider.IRawBlob=} [p] Properties to set
             */
            function RawBlob(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * RawBlob key.
             * @member {string} key
             * @memberof prb.data_provider.RawBlob
             * @instance
             */
            RawBlob.prototype.key = "";

            /**
             * RawBlob empty.
             * @member {boolean} empty
             * @memberof prb.data_provider.RawBlob
             * @instance
             */
            RawBlob.prototype.empty = false;

            /**
             * RawBlob data.
             * @member {Uint8Array} data
             * @memberof prb.data_provider.RawBlob
             * @instance
             */
            RawBlob.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new RawBlob instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.RawBlob
             * @static
             * @param {prb.data_provider.IRawBlob=} [properties] Properties to set
             * @returns {prb.data_provider.RawBlob} RawBlob instance
             */
            RawBlob.create = function create(properties) {
                return new RawBlob(properties);
            };

            /**
             * Encodes the specified RawBlob message. Does not implicitly {@link prb.data_provider.RawBlob.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.RawBlob
             * @static
             * @param {prb.data_provider.IRawBlob} m RawBlob message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RawBlob.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                    w.uint32(10).string(m.key);
                if (m.empty != null && Object.hasOwnProperty.call(m, "empty"))
                    w.uint32(16).bool(m.empty);
                if (m.data != null && Object.hasOwnProperty.call(m, "data"))
                    w.uint32(26).bytes(m.data);
                return w;
            };

            /**
             * Encodes the specified RawBlob message, length delimited. Does not implicitly {@link prb.data_provider.RawBlob.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.RawBlob
             * @static
             * @param {prb.data_provider.IRawBlob} message RawBlob message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RawBlob.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RawBlob message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.RawBlob
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.RawBlob} RawBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RawBlob.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.RawBlob();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.key = r.string();
                        break;
                    case 2:
                        m.empty = r.bool();
                        break;
                    case 3:
                        m.data = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a RawBlob message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.RawBlob
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.RawBlob} RawBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RawBlob.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RawBlob message.
             * @function verify
             * @memberof prb.data_provider.RawBlob
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RawBlob.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.key != null && m.hasOwnProperty("key")) {
                    if (!$util.isString(m.key))
                        return "key: string expected";
                }
                if (m.empty != null && m.hasOwnProperty("empty")) {
                    if (typeof m.empty !== "boolean")
                        return "empty: boolean expected";
                }
                if (m.data != null && m.hasOwnProperty("data")) {
                    if (!(m.data && typeof m.data.length === "number" || $util.isString(m.data)))
                        return "data: buffer expected";
                }
                return null;
            };

            /**
             * Creates a RawBlob message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.RawBlob
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.RawBlob} RawBlob
             */
            RawBlob.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.RawBlob)
                    return d;
                var m = new $root.prb.data_provider.RawBlob();
                if (d.key != null) {
                    m.key = String(d.key);
                }
                if (d.empty != null) {
                    m.empty = Boolean(d.empty);
                }
                if (d.data != null) {
                    if (typeof d.data === "string")
                        $util.base64.decode(d.data, m.data = $util.newBuffer($util.base64.length(d.data)), 0);
                    else if (d.data.length)
                        m.data = d.data;
                }
                return m;
            };

            /**
             * Creates a plain object from a RawBlob message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.RawBlob
             * @static
             * @param {prb.data_provider.RawBlob} m RawBlob
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RawBlob.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.key = "";
                    d.empty = false;
                    if (o.bytes === String)
                        d.data = "";
                    else {
                        d.data = [];
                        if (o.bytes !== Array)
                            d.data = $util.newBuffer(d.data);
                    }
                }
                if (m.key != null && m.hasOwnProperty("key")) {
                    d.key = m.key;
                }
                if (m.empty != null && m.hasOwnProperty("empty")) {
                    d.empty = m.empty;
                }
                if (m.data != null && m.hasOwnProperty("data")) {
                    d.data = o.bytes === String ? $util.base64.encode(m.data, 0, m.data.length) : o.bytes === Array ? Array.prototype.slice.call(m.data) : m.data;
                }
                return d;
            };

            /**
             * Converts this RawBlob to JSON.
             * @function toJSON
             * @memberof prb.data_provider.RawBlob
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RawBlob.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RawBlob;
        })();

        data_provider.CreatePool = (function() {

            /**
             * Properties of a CreatePool.
             * @memberof prb.data_provider
             * @interface ICreatePool
             * @property {Array.<prb.db.IPool>|null} [pools] CreatePool pools
             */

            /**
             * Constructs a new CreatePool.
             * @memberof prb.data_provider
             * @classdesc Represents a CreatePool.
             * @implements ICreatePool
             * @constructor
             * @param {prb.data_provider.ICreatePool=} [p] Properties to set
             */
            function CreatePool(p) {
                this.pools = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * CreatePool pools.
             * @member {Array.<prb.db.IPool>} pools
             * @memberof prb.data_provider.CreatePool
             * @instance
             */
            CreatePool.prototype.pools = $util.emptyArray;

            /**
             * Creates a new CreatePool instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.CreatePool
             * @static
             * @param {prb.data_provider.ICreatePool=} [properties] Properties to set
             * @returns {prb.data_provider.CreatePool} CreatePool instance
             */
            CreatePool.create = function create(properties) {
                return new CreatePool(properties);
            };

            /**
             * Encodes the specified CreatePool message. Does not implicitly {@link prb.data_provider.CreatePool.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.CreatePool
             * @static
             * @param {prb.data_provider.ICreatePool} m CreatePool message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePool.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.pools != null && m.pools.length) {
                    for (var i = 0; i < m.pools.length; ++i)
                        $root.prb.db.Pool.encode(m.pools[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };

            /**
             * Encodes the specified CreatePool message, length delimited. Does not implicitly {@link prb.data_provider.CreatePool.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.CreatePool
             * @static
             * @param {prb.data_provider.ICreatePool} message CreatePool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreatePool message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.CreatePool
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.CreatePool} CreatePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePool.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.CreatePool();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        if (!(m.pools && m.pools.length))
                            m.pools = [];
                        m.pools.push($root.prb.db.Pool.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a CreatePool message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.CreatePool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.CreatePool} CreatePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreatePool message.
             * @function verify
             * @memberof prb.data_provider.CreatePool
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreatePool.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.pools != null && m.hasOwnProperty("pools")) {
                    if (!Array.isArray(m.pools))
                        return "pools: array expected";
                    for (var i = 0; i < m.pools.length; ++i) {
                        {
                            var e = $root.prb.db.Pool.verify(m.pools[i]);
                            if (e)
                                return "pools." + e;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a CreatePool message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.CreatePool
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.CreatePool} CreatePool
             */
            CreatePool.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.CreatePool)
                    return d;
                var m = new $root.prb.data_provider.CreatePool();
                if (d.pools) {
                    if (!Array.isArray(d.pools))
                        throw TypeError(".prb.data_provider.CreatePool.pools: array expected");
                    m.pools = [];
                    for (var i = 0; i < d.pools.length; ++i) {
                        if (typeof d.pools[i] !== "object")
                            throw TypeError(".prb.data_provider.CreatePool.pools: object expected");
                        m.pools[i] = $root.prb.db.Pool.fromObject(d.pools[i]);
                    }
                }
                return m;
            };

            /**
             * Creates a plain object from a CreatePool message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.CreatePool
             * @static
             * @param {prb.data_provider.CreatePool} m CreatePool
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreatePool.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.pools = [];
                }
                if (m.pools && m.pools.length) {
                    d.pools = [];
                    for (var j = 0; j < m.pools.length; ++j) {
                        d.pools[j] = $root.prb.db.Pool.toObject(m.pools[j], o);
                    }
                }
                return d;
            };

            /**
             * Converts this CreatePool to JSON.
             * @function toJSON
             * @memberof prb.data_provider.CreatePool
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreatePool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreatePool;
        })();

        data_provider.UpdatePool = (function() {

            /**
             * Properties of an UpdatePool.
             * @memberof prb.data_provider
             * @interface IUpdatePool
             * @property {Array.<prb.data_provider.UpdatePool.IItem>|null} [items] UpdatePool items
             */

            /**
             * Constructs a new UpdatePool.
             * @memberof prb.data_provider
             * @classdesc Represents an UpdatePool.
             * @implements IUpdatePool
             * @constructor
             * @param {prb.data_provider.IUpdatePool=} [p] Properties to set
             */
            function UpdatePool(p) {
                this.items = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * UpdatePool items.
             * @member {Array.<prb.data_provider.UpdatePool.IItem>} items
             * @memberof prb.data_provider.UpdatePool
             * @instance
             */
            UpdatePool.prototype.items = $util.emptyArray;

            /**
             * Creates a new UpdatePool instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.UpdatePool
             * @static
             * @param {prb.data_provider.IUpdatePool=} [properties] Properties to set
             * @returns {prb.data_provider.UpdatePool} UpdatePool instance
             */
            UpdatePool.create = function create(properties) {
                return new UpdatePool(properties);
            };

            /**
             * Encodes the specified UpdatePool message. Does not implicitly {@link prb.data_provider.UpdatePool.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.UpdatePool
             * @static
             * @param {prb.data_provider.IUpdatePool} m UpdatePool message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatePool.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.items != null && m.items.length) {
                    for (var i = 0; i < m.items.length; ++i)
                        $root.prb.data_provider.UpdatePool.Item.encode(m.items[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };

            /**
             * Encodes the specified UpdatePool message, length delimited. Does not implicitly {@link prb.data_provider.UpdatePool.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.UpdatePool
             * @static
             * @param {prb.data_provider.IUpdatePool} message UpdatePool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatePool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdatePool message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.UpdatePool
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.UpdatePool} UpdatePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatePool.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.UpdatePool();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        if (!(m.items && m.items.length))
                            m.items = [];
                        m.items.push($root.prb.data_provider.UpdatePool.Item.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes an UpdatePool message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.UpdatePool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.UpdatePool} UpdatePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatePool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdatePool message.
             * @function verify
             * @memberof prb.data_provider.UpdatePool
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdatePool.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.items != null && m.hasOwnProperty("items")) {
                    if (!Array.isArray(m.items))
                        return "items: array expected";
                    for (var i = 0; i < m.items.length; ++i) {
                        {
                            var e = $root.prb.data_provider.UpdatePool.Item.verify(m.items[i]);
                            if (e)
                                return "items." + e;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates an UpdatePool message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.UpdatePool
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.UpdatePool} UpdatePool
             */
            UpdatePool.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.UpdatePool)
                    return d;
                var m = new $root.prb.data_provider.UpdatePool();
                if (d.items) {
                    if (!Array.isArray(d.items))
                        throw TypeError(".prb.data_provider.UpdatePool.items: array expected");
                    m.items = [];
                    for (var i = 0; i < d.items.length; ++i) {
                        if (typeof d.items[i] !== "object")
                            throw TypeError(".prb.data_provider.UpdatePool.items: object expected");
                        m.items[i] = $root.prb.data_provider.UpdatePool.Item.fromObject(d.items[i]);
                    }
                }
                return m;
            };

            /**
             * Creates a plain object from an UpdatePool message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.UpdatePool
             * @static
             * @param {prb.data_provider.UpdatePool} m UpdatePool
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdatePool.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.items = [];
                }
                if (m.items && m.items.length) {
                    d.items = [];
                    for (var j = 0; j < m.items.length; ++j) {
                        d.items[j] = $root.prb.data_provider.UpdatePool.Item.toObject(m.items[j], o);
                    }
                }
                return d;
            };

            /**
             * Converts this UpdatePool to JSON.
             * @function toJSON
             * @memberof prb.data_provider.UpdatePool
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdatePool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UpdatePool.Item = (function() {

                /**
                 * Properties of an Item.
                 * @memberof prb.data_provider.UpdatePool
                 * @interface IItem
                 * @property {prb.IPoolOrWorkerQueryIdentity|null} [id] Item id
                 * @property {prb.db.IPool|null} [pool] Item pool
                 */

                /**
                 * Constructs a new Item.
                 * @memberof prb.data_provider.UpdatePool
                 * @classdesc Represents an Item.
                 * @implements IItem
                 * @constructor
                 * @param {prb.data_provider.UpdatePool.IItem=} [p] Properties to set
                 */
                function Item(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Item id.
                 * @member {prb.IPoolOrWorkerQueryIdentity|null|undefined} id
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @instance
                 */
                Item.prototype.id = null;

                /**
                 * Item pool.
                 * @member {prb.db.IPool|null|undefined} pool
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @instance
                 */
                Item.prototype.pool = null;

                /**
                 * Creates a new Item instance using the specified properties.
                 * @function create
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @static
                 * @param {prb.data_provider.UpdatePool.IItem=} [properties] Properties to set
                 * @returns {prb.data_provider.UpdatePool.Item} Item instance
                 */
                Item.create = function create(properties) {
                    return new Item(properties);
                };

                /**
                 * Encodes the specified Item message. Does not implicitly {@link prb.data_provider.UpdatePool.Item.verify|verify} messages.
                 * @function encode
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @static
                 * @param {prb.data_provider.UpdatePool.IItem} m Item message or plain object to encode
                 * @param {$protobuf.Writer} [w] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Item.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                        $root.prb.PoolOrWorkerQueryIdentity.encode(m.id, w.uint32(10).fork()).ldelim();
                    if (m.pool != null && Object.hasOwnProperty.call(m, "pool"))
                        $root.prb.db.Pool.encode(m.pool, w.uint32(18).fork()).ldelim();
                    return w;
                };

                /**
                 * Encodes the specified Item message, length delimited. Does not implicitly {@link prb.data_provider.UpdatePool.Item.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @static
                 * @param {prb.data_provider.UpdatePool.IItem} message Item message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Item.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Item message from the specified reader or buffer.
                 * @function decode
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {prb.data_provider.UpdatePool.Item} Item
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Item.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.UpdatePool.Item();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.id = $root.prb.PoolOrWorkerQueryIdentity.decode(r, r.uint32());
                            break;
                        case 2:
                            m.pool = $root.prb.db.Pool.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                /**
                 * Decodes an Item message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {prb.data_provider.UpdatePool.Item} Item
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Item.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Item message.
                 * @function verify
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @static
                 * @param {Object.<string,*>} m Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Item.verify = function verify(m) {
                    if (typeof m !== "object" || m === null)
                        return "object expected";
                    if (m.id != null && m.hasOwnProperty("id")) {
                        {
                            var e = $root.prb.PoolOrWorkerQueryIdentity.verify(m.id);
                            if (e)
                                return "id." + e;
                        }
                    }
                    if (m.pool != null && m.hasOwnProperty("pool")) {
                        {
                            var e = $root.prb.db.Pool.verify(m.pool);
                            if (e)
                                return "pool." + e;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an Item message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {prb.data_provider.UpdatePool.Item} Item
                 */
                Item.fromObject = function fromObject(d) {
                    if (d instanceof $root.prb.data_provider.UpdatePool.Item)
                        return d;
                    var m = new $root.prb.data_provider.UpdatePool.Item();
                    if (d.id != null) {
                        if (typeof d.id !== "object")
                            throw TypeError(".prb.data_provider.UpdatePool.Item.id: object expected");
                        m.id = $root.prb.PoolOrWorkerQueryIdentity.fromObject(d.id);
                    }
                    if (d.pool != null) {
                        if (typeof d.pool !== "object")
                            throw TypeError(".prb.data_provider.UpdatePool.Item.pool: object expected");
                        m.pool = $root.prb.db.Pool.fromObject(d.pool);
                    }
                    return m;
                };

                /**
                 * Creates a plain object from an Item message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @static
                 * @param {prb.data_provider.UpdatePool.Item} m Item
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Item.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.defaults) {
                        d.id = null;
                        d.pool = null;
                    }
                    if (m.id != null && m.hasOwnProperty("id")) {
                        d.id = $root.prb.PoolOrWorkerQueryIdentity.toObject(m.id, o);
                    }
                    if (m.pool != null && m.hasOwnProperty("pool")) {
                        d.pool = $root.prb.db.Pool.toObject(m.pool, o);
                    }
                    return d;
                };

                /**
                 * Converts this Item to JSON.
                 * @function toJSON
                 * @memberof prb.data_provider.UpdatePool.Item
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Item.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Item;
            })();

            return UpdatePool;
        })();

        data_provider.CreateWorker = (function() {

            /**
             * Properties of a CreateWorker.
             * @memberof prb.data_provider
             * @interface ICreateWorker
             * @property {Array.<prb.db.IWorker>|null} [workers] CreateWorker workers
             */

            /**
             * Constructs a new CreateWorker.
             * @memberof prb.data_provider
             * @classdesc Represents a CreateWorker.
             * @implements ICreateWorker
             * @constructor
             * @param {prb.data_provider.ICreateWorker=} [p] Properties to set
             */
            function CreateWorker(p) {
                this.workers = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * CreateWorker workers.
             * @member {Array.<prb.db.IWorker>} workers
             * @memberof prb.data_provider.CreateWorker
             * @instance
             */
            CreateWorker.prototype.workers = $util.emptyArray;

            /**
             * Creates a new CreateWorker instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.CreateWorker
             * @static
             * @param {prb.data_provider.ICreateWorker=} [properties] Properties to set
             * @returns {prb.data_provider.CreateWorker} CreateWorker instance
             */
            CreateWorker.create = function create(properties) {
                return new CreateWorker(properties);
            };

            /**
             * Encodes the specified CreateWorker message. Does not implicitly {@link prb.data_provider.CreateWorker.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.CreateWorker
             * @static
             * @param {prb.data_provider.ICreateWorker} m CreateWorker message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateWorker.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.workers != null && m.workers.length) {
                    for (var i = 0; i < m.workers.length; ++i)
                        $root.prb.db.Worker.encode(m.workers[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };

            /**
             * Encodes the specified CreateWorker message, length delimited. Does not implicitly {@link prb.data_provider.CreateWorker.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.CreateWorker
             * @static
             * @param {prb.data_provider.ICreateWorker} message CreateWorker message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateWorker.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateWorker message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.CreateWorker
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.CreateWorker} CreateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateWorker.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.CreateWorker();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        if (!(m.workers && m.workers.length))
                            m.workers = [];
                        m.workers.push($root.prb.db.Worker.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a CreateWorker message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.CreateWorker
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.CreateWorker} CreateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateWorker.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateWorker message.
             * @function verify
             * @memberof prb.data_provider.CreateWorker
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateWorker.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.workers != null && m.hasOwnProperty("workers")) {
                    if (!Array.isArray(m.workers))
                        return "workers: array expected";
                    for (var i = 0; i < m.workers.length; ++i) {
                        {
                            var e = $root.prb.db.Worker.verify(m.workers[i]);
                            if (e)
                                return "workers." + e;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a CreateWorker message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.CreateWorker
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.CreateWorker} CreateWorker
             */
            CreateWorker.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.CreateWorker)
                    return d;
                var m = new $root.prb.data_provider.CreateWorker();
                if (d.workers) {
                    if (!Array.isArray(d.workers))
                        throw TypeError(".prb.data_provider.CreateWorker.workers: array expected");
                    m.workers = [];
                    for (var i = 0; i < d.workers.length; ++i) {
                        if (typeof d.workers[i] !== "object")
                            throw TypeError(".prb.data_provider.CreateWorker.workers: object expected");
                        m.workers[i] = $root.prb.db.Worker.fromObject(d.workers[i]);
                    }
                }
                return m;
            };

            /**
             * Creates a plain object from a CreateWorker message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.CreateWorker
             * @static
             * @param {prb.data_provider.CreateWorker} m CreateWorker
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateWorker.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.workers = [];
                }
                if (m.workers && m.workers.length) {
                    d.workers = [];
                    for (var j = 0; j < m.workers.length; ++j) {
                        d.workers[j] = $root.prb.db.Worker.toObject(m.workers[j], o);
                    }
                }
                return d;
            };

            /**
             * Converts this CreateWorker to JSON.
             * @function toJSON
             * @memberof prb.data_provider.CreateWorker
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateWorker.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateWorker;
        })();

        data_provider.UpdateWorker = (function() {

            /**
             * Properties of an UpdateWorker.
             * @memberof prb.data_provider
             * @interface IUpdateWorker
             * @property {Array.<prb.data_provider.UpdateWorker.IItem>|null} [items] UpdateWorker items
             */

            /**
             * Constructs a new UpdateWorker.
             * @memberof prb.data_provider
             * @classdesc Represents an UpdateWorker.
             * @implements IUpdateWorker
             * @constructor
             * @param {prb.data_provider.IUpdateWorker=} [p] Properties to set
             */
            function UpdateWorker(p) {
                this.items = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * UpdateWorker items.
             * @member {Array.<prb.data_provider.UpdateWorker.IItem>} items
             * @memberof prb.data_provider.UpdateWorker
             * @instance
             */
            UpdateWorker.prototype.items = $util.emptyArray;

            /**
             * Creates a new UpdateWorker instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.UpdateWorker
             * @static
             * @param {prb.data_provider.IUpdateWorker=} [properties] Properties to set
             * @returns {prb.data_provider.UpdateWorker} UpdateWorker instance
             */
            UpdateWorker.create = function create(properties) {
                return new UpdateWorker(properties);
            };

            /**
             * Encodes the specified UpdateWorker message. Does not implicitly {@link prb.data_provider.UpdateWorker.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.UpdateWorker
             * @static
             * @param {prb.data_provider.IUpdateWorker} m UpdateWorker message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateWorker.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.items != null && m.items.length) {
                    for (var i = 0; i < m.items.length; ++i)
                        $root.prb.data_provider.UpdateWorker.Item.encode(m.items[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };

            /**
             * Encodes the specified UpdateWorker message, length delimited. Does not implicitly {@link prb.data_provider.UpdateWorker.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.UpdateWorker
             * @static
             * @param {prb.data_provider.IUpdateWorker} message UpdateWorker message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateWorker.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateWorker message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.UpdateWorker
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.UpdateWorker} UpdateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateWorker.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.UpdateWorker();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        if (!(m.items && m.items.length))
                            m.items = [];
                        m.items.push($root.prb.data_provider.UpdateWorker.Item.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes an UpdateWorker message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.UpdateWorker
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.UpdateWorker} UpdateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateWorker.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateWorker message.
             * @function verify
             * @memberof prb.data_provider.UpdateWorker
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateWorker.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.items != null && m.hasOwnProperty("items")) {
                    if (!Array.isArray(m.items))
                        return "items: array expected";
                    for (var i = 0; i < m.items.length; ++i) {
                        {
                            var e = $root.prb.data_provider.UpdateWorker.Item.verify(m.items[i]);
                            if (e)
                                return "items." + e;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates an UpdateWorker message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.UpdateWorker
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.UpdateWorker} UpdateWorker
             */
            UpdateWorker.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.UpdateWorker)
                    return d;
                var m = new $root.prb.data_provider.UpdateWorker();
                if (d.items) {
                    if (!Array.isArray(d.items))
                        throw TypeError(".prb.data_provider.UpdateWorker.items: array expected");
                    m.items = [];
                    for (var i = 0; i < d.items.length; ++i) {
                        if (typeof d.items[i] !== "object")
                            throw TypeError(".prb.data_provider.UpdateWorker.items: object expected");
                        m.items[i] = $root.prb.data_provider.UpdateWorker.Item.fromObject(d.items[i]);
                    }
                }
                return m;
            };

            /**
             * Creates a plain object from an UpdateWorker message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.UpdateWorker
             * @static
             * @param {prb.data_provider.UpdateWorker} m UpdateWorker
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateWorker.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.items = [];
                }
                if (m.items && m.items.length) {
                    d.items = [];
                    for (var j = 0; j < m.items.length; ++j) {
                        d.items[j] = $root.prb.data_provider.UpdateWorker.Item.toObject(m.items[j], o);
                    }
                }
                return d;
            };

            /**
             * Converts this UpdateWorker to JSON.
             * @function toJSON
             * @memberof prb.data_provider.UpdateWorker
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateWorker.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UpdateWorker.Item = (function() {

                /**
                 * Properties of an Item.
                 * @memberof prb.data_provider.UpdateWorker
                 * @interface IItem
                 * @property {prb.IPoolOrWorkerQueryIdentity|null} [id] Item id
                 * @property {prb.db.IWorker|null} [worker] Item worker
                 */

                /**
                 * Constructs a new Item.
                 * @memberof prb.data_provider.UpdateWorker
                 * @classdesc Represents an Item.
                 * @implements IItem
                 * @constructor
                 * @param {prb.data_provider.UpdateWorker.IItem=} [p] Properties to set
                 */
                function Item(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Item id.
                 * @member {prb.IPoolOrWorkerQueryIdentity|null|undefined} id
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @instance
                 */
                Item.prototype.id = null;

                /**
                 * Item worker.
                 * @member {prb.db.IWorker|null|undefined} worker
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @instance
                 */
                Item.prototype.worker = null;

                /**
                 * Creates a new Item instance using the specified properties.
                 * @function create
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @static
                 * @param {prb.data_provider.UpdateWorker.IItem=} [properties] Properties to set
                 * @returns {prb.data_provider.UpdateWorker.Item} Item instance
                 */
                Item.create = function create(properties) {
                    return new Item(properties);
                };

                /**
                 * Encodes the specified Item message. Does not implicitly {@link prb.data_provider.UpdateWorker.Item.verify|verify} messages.
                 * @function encode
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @static
                 * @param {prb.data_provider.UpdateWorker.IItem} m Item message or plain object to encode
                 * @param {$protobuf.Writer} [w] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Item.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                        $root.prb.PoolOrWorkerQueryIdentity.encode(m.id, w.uint32(10).fork()).ldelim();
                    if (m.worker != null && Object.hasOwnProperty.call(m, "worker"))
                        $root.prb.db.Worker.encode(m.worker, w.uint32(18).fork()).ldelim();
                    return w;
                };

                /**
                 * Encodes the specified Item message, length delimited. Does not implicitly {@link prb.data_provider.UpdateWorker.Item.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @static
                 * @param {prb.data_provider.UpdateWorker.IItem} message Item message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Item.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Item message from the specified reader or buffer.
                 * @function decode
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {prb.data_provider.UpdateWorker.Item} Item
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Item.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.UpdateWorker.Item();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.id = $root.prb.PoolOrWorkerQueryIdentity.decode(r, r.uint32());
                            break;
                        case 2:
                            m.worker = $root.prb.db.Worker.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                /**
                 * Decodes an Item message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {prb.data_provider.UpdateWorker.Item} Item
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Item.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Item message.
                 * @function verify
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @static
                 * @param {Object.<string,*>} m Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Item.verify = function verify(m) {
                    if (typeof m !== "object" || m === null)
                        return "object expected";
                    if (m.id != null && m.hasOwnProperty("id")) {
                        {
                            var e = $root.prb.PoolOrWorkerQueryIdentity.verify(m.id);
                            if (e)
                                return "id." + e;
                        }
                    }
                    if (m.worker != null && m.hasOwnProperty("worker")) {
                        {
                            var e = $root.prb.db.Worker.verify(m.worker);
                            if (e)
                                return "worker." + e;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an Item message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {prb.data_provider.UpdateWorker.Item} Item
                 */
                Item.fromObject = function fromObject(d) {
                    if (d instanceof $root.prb.data_provider.UpdateWorker.Item)
                        return d;
                    var m = new $root.prb.data_provider.UpdateWorker.Item();
                    if (d.id != null) {
                        if (typeof d.id !== "object")
                            throw TypeError(".prb.data_provider.UpdateWorker.Item.id: object expected");
                        m.id = $root.prb.PoolOrWorkerQueryIdentity.fromObject(d.id);
                    }
                    if (d.worker != null) {
                        if (typeof d.worker !== "object")
                            throw TypeError(".prb.data_provider.UpdateWorker.Item.worker: object expected");
                        m.worker = $root.prb.db.Worker.fromObject(d.worker);
                    }
                    return m;
                };

                /**
                 * Creates a plain object from an Item message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @static
                 * @param {prb.data_provider.UpdateWorker.Item} m Item
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Item.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.defaults) {
                        d.id = null;
                        d.worker = null;
                    }
                    if (m.id != null && m.hasOwnProperty("id")) {
                        d.id = $root.prb.PoolOrWorkerQueryIdentity.toObject(m.id, o);
                    }
                    if (m.worker != null && m.hasOwnProperty("worker")) {
                        d.worker = $root.prb.db.Worker.toObject(m.worker, o);
                    }
                    return d;
                };

                /**
                 * Converts this Item to JSON.
                 * @function toJSON
                 * @memberof prb.data_provider.UpdateWorker.Item
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Item.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Item;
            })();

            return UpdateWorker;
        })();

        data_provider.PoolList = (function() {

            /**
             * Properties of a PoolList.
             * @memberof prb.data_provider
             * @interface IPoolList
             * @property {Array.<prb.db.IPool>|null} [pools] PoolList pools
             */

            /**
             * Constructs a new PoolList.
             * @memberof prb.data_provider
             * @classdesc Represents a PoolList.
             * @implements IPoolList
             * @constructor
             * @param {prb.data_provider.IPoolList=} [p] Properties to set
             */
            function PoolList(p) {
                this.pools = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * PoolList pools.
             * @member {Array.<prb.db.IPool>} pools
             * @memberof prb.data_provider.PoolList
             * @instance
             */
            PoolList.prototype.pools = $util.emptyArray;

            /**
             * Creates a new PoolList instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.PoolList
             * @static
             * @param {prb.data_provider.IPoolList=} [properties] Properties to set
             * @returns {prb.data_provider.PoolList} PoolList instance
             */
            PoolList.create = function create(properties) {
                return new PoolList(properties);
            };

            /**
             * Encodes the specified PoolList message. Does not implicitly {@link prb.data_provider.PoolList.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.PoolList
             * @static
             * @param {prb.data_provider.IPoolList} m PoolList message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PoolList.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.pools != null && m.pools.length) {
                    for (var i = 0; i < m.pools.length; ++i)
                        $root.prb.db.Pool.encode(m.pools[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };

            /**
             * Encodes the specified PoolList message, length delimited. Does not implicitly {@link prb.data_provider.PoolList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.PoolList
             * @static
             * @param {prb.data_provider.IPoolList} message PoolList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PoolList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PoolList message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.PoolList
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.PoolList} PoolList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PoolList.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.PoolList();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        if (!(m.pools && m.pools.length))
                            m.pools = [];
                        m.pools.push($root.prb.db.Pool.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a PoolList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.PoolList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.PoolList} PoolList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PoolList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PoolList message.
             * @function verify
             * @memberof prb.data_provider.PoolList
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PoolList.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.pools != null && m.hasOwnProperty("pools")) {
                    if (!Array.isArray(m.pools))
                        return "pools: array expected";
                    for (var i = 0; i < m.pools.length; ++i) {
                        {
                            var e = $root.prb.db.Pool.verify(m.pools[i]);
                            if (e)
                                return "pools." + e;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a PoolList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.PoolList
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.PoolList} PoolList
             */
            PoolList.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.PoolList)
                    return d;
                var m = new $root.prb.data_provider.PoolList();
                if (d.pools) {
                    if (!Array.isArray(d.pools))
                        throw TypeError(".prb.data_provider.PoolList.pools: array expected");
                    m.pools = [];
                    for (var i = 0; i < d.pools.length; ++i) {
                        if (typeof d.pools[i] !== "object")
                            throw TypeError(".prb.data_provider.PoolList.pools: object expected");
                        m.pools[i] = $root.prb.db.Pool.fromObject(d.pools[i]);
                    }
                }
                return m;
            };

            /**
             * Creates a plain object from a PoolList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.PoolList
             * @static
             * @param {prb.data_provider.PoolList} m PoolList
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PoolList.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.pools = [];
                }
                if (m.pools && m.pools.length) {
                    d.pools = [];
                    for (var j = 0; j < m.pools.length; ++j) {
                        d.pools[j] = $root.prb.db.Pool.toObject(m.pools[j], o);
                    }
                }
                return d;
            };

            /**
             * Converts this PoolList to JSON.
             * @function toJSON
             * @memberof prb.data_provider.PoolList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PoolList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PoolList;
        })();

        data_provider.WorkerList = (function() {

            /**
             * Properties of a WorkerList.
             * @memberof prb.data_provider
             * @interface IWorkerList
             * @property {Array.<prb.db.IWorker>|null} [workers] WorkerList workers
             */

            /**
             * Constructs a new WorkerList.
             * @memberof prb.data_provider
             * @classdesc Represents a WorkerList.
             * @implements IWorkerList
             * @constructor
             * @param {prb.data_provider.IWorkerList=} [p] Properties to set
             */
            function WorkerList(p) {
                this.workers = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * WorkerList workers.
             * @member {Array.<prb.db.IWorker>} workers
             * @memberof prb.data_provider.WorkerList
             * @instance
             */
            WorkerList.prototype.workers = $util.emptyArray;

            /**
             * Creates a new WorkerList instance using the specified properties.
             * @function create
             * @memberof prb.data_provider.WorkerList
             * @static
             * @param {prb.data_provider.IWorkerList=} [properties] Properties to set
             * @returns {prb.data_provider.WorkerList} WorkerList instance
             */
            WorkerList.create = function create(properties) {
                return new WorkerList(properties);
            };

            /**
             * Encodes the specified WorkerList message. Does not implicitly {@link prb.data_provider.WorkerList.verify|verify} messages.
             * @function encode
             * @memberof prb.data_provider.WorkerList
             * @static
             * @param {prb.data_provider.IWorkerList} m WorkerList message or plain object to encode
             * @param {$protobuf.Writer} [w] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkerList.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.workers != null && m.workers.length) {
                    for (var i = 0; i < m.workers.length; ++i)
                        $root.prb.db.Worker.encode(m.workers[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };

            /**
             * Encodes the specified WorkerList message, length delimited. Does not implicitly {@link prb.data_provider.WorkerList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.data_provider.WorkerList
             * @static
             * @param {prb.data_provider.IWorkerList} message WorkerList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkerList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WorkerList message from the specified reader or buffer.
             * @function decode
             * @memberof prb.data_provider.WorkerList
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {prb.data_provider.WorkerList} WorkerList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkerList.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.data_provider.WorkerList();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        if (!(m.workers && m.workers.length))
                            m.workers = [];
                        m.workers.push($root.prb.db.Worker.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Decodes a WorkerList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.data_provider.WorkerList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.data_provider.WorkerList} WorkerList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkerList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WorkerList message.
             * @function verify
             * @memberof prb.data_provider.WorkerList
             * @static
             * @param {Object.<string,*>} m Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkerList.verify = function verify(m) {
                if (typeof m !== "object" || m === null)
                    return "object expected";
                if (m.workers != null && m.hasOwnProperty("workers")) {
                    if (!Array.isArray(m.workers))
                        return "workers: array expected";
                    for (var i = 0; i < m.workers.length; ++i) {
                        {
                            var e = $root.prb.db.Worker.verify(m.workers[i]);
                            if (e)
                                return "workers." + e;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a WorkerList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.data_provider.WorkerList
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {prb.data_provider.WorkerList} WorkerList
             */
            WorkerList.fromObject = function fromObject(d) {
                if (d instanceof $root.prb.data_provider.WorkerList)
                    return d;
                var m = new $root.prb.data_provider.WorkerList();
                if (d.workers) {
                    if (!Array.isArray(d.workers))
                        throw TypeError(".prb.data_provider.WorkerList.workers: array expected");
                    m.workers = [];
                    for (var i = 0; i < d.workers.length; ++i) {
                        if (typeof d.workers[i] !== "object")
                            throw TypeError(".prb.data_provider.WorkerList.workers: object expected");
                        m.workers[i] = $root.prb.db.Worker.fromObject(d.workers[i]);
                    }
                }
                return m;
            };

            /**
             * Creates a plain object from a WorkerList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.data_provider.WorkerList
             * @static
             * @param {prb.data_provider.WorkerList} m WorkerList
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WorkerList.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.workers = [];
                }
                if (m.workers && m.workers.length) {
                    d.workers = [];
                    for (var j = 0; j < m.workers.length; ++j) {
                        d.workers[j] = $root.prb.db.Worker.toObject(m.workers[j], o);
                    }
                }
                return d;
            };

            /**
             * Converts this WorkerList to JSON.
             * @function toJSON
             * @memberof prb.data_provider.WorkerList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WorkerList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WorkerList;
        })();

        return data_provider;
    })();

    prb.WorkerState = (function() {

        /**
         * Properties of a WorkerState.
         * @memberof prb
         * @interface IWorkerState
         * @property {prb.WorkerState.Status|null} [status] WorkerState status
         * @property {number|null} [parentHeaderSynchedTo] WorkerState parentHeaderSynchedTo
         * @property {number|null} [paraHeaderSynchedTo] WorkerState paraHeaderSynchedTo
         * @property {number|null} [paraBlockDispatchedTo] WorkerState paraBlockDispatchedTo
         * @property {boolean|null} [initialized] WorkerState initialized
         * @property {prb.db.IWorker|null} [worker] WorkerState worker
         * @property {string|null} [publicKey] WorkerState publicKey
         * @property {string|null} [lastMessage] WorkerState lastMessage
         * @property {string|null} [minerInfoJson] WorkerState minerInfoJson
         * @property {string|null} [minerAccountId] WorkerState minerAccountId
         */

        /**
         * Constructs a new WorkerState.
         * @memberof prb
         * @classdesc Represents a WorkerState.
         * @implements IWorkerState
         * @constructor
         * @param {prb.IWorkerState=} [p] Properties to set
         */
        function WorkerState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * WorkerState status.
         * @member {prb.WorkerState.Status} status
         * @memberof prb.WorkerState
         * @instance
         */
        WorkerState.prototype.status = 0;

        /**
         * WorkerState parentHeaderSynchedTo.
         * @member {number} parentHeaderSynchedTo
         * @memberof prb.WorkerState
         * @instance
         */
        WorkerState.prototype.parentHeaderSynchedTo = 0;

        /**
         * WorkerState paraHeaderSynchedTo.
         * @member {number} paraHeaderSynchedTo
         * @memberof prb.WorkerState
         * @instance
         */
        WorkerState.prototype.paraHeaderSynchedTo = 0;

        /**
         * WorkerState paraBlockDispatchedTo.
         * @member {number} paraBlockDispatchedTo
         * @memberof prb.WorkerState
         * @instance
         */
        WorkerState.prototype.paraBlockDispatchedTo = 0;

        /**
         * WorkerState initialized.
         * @member {boolean} initialized
         * @memberof prb.WorkerState
         * @instance
         */
        WorkerState.prototype.initialized = false;

        /**
         * WorkerState worker.
         * @member {prb.db.IWorker|null|undefined} worker
         * @memberof prb.WorkerState
         * @instance
         */
        WorkerState.prototype.worker = null;

        /**
         * WorkerState publicKey.
         * @member {string} publicKey
         * @memberof prb.WorkerState
         * @instance
         */
        WorkerState.prototype.publicKey = "";

        /**
         * WorkerState lastMessage.
         * @member {string} lastMessage
         * @memberof prb.WorkerState
         * @instance
         */
        WorkerState.prototype.lastMessage = "";

        /**
         * WorkerState minerInfoJson.
         * @member {string} minerInfoJson
         * @memberof prb.WorkerState
         * @instance
         */
        WorkerState.prototype.minerInfoJson = "";

        /**
         * WorkerState minerAccountId.
         * @member {string} minerAccountId
         * @memberof prb.WorkerState
         * @instance
         */
        WorkerState.prototype.minerAccountId = "";

        /**
         * Creates a new WorkerState instance using the specified properties.
         * @function create
         * @memberof prb.WorkerState
         * @static
         * @param {prb.IWorkerState=} [properties] Properties to set
         * @returns {prb.WorkerState} WorkerState instance
         */
        WorkerState.create = function create(properties) {
            return new WorkerState(properties);
        };

        /**
         * Encodes the specified WorkerState message. Does not implicitly {@link prb.WorkerState.verify|verify} messages.
         * @function encode
         * @memberof prb.WorkerState
         * @static
         * @param {prb.IWorkerState} m WorkerState message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.parentHeaderSynchedTo != null && Object.hasOwnProperty.call(m, "parentHeaderSynchedTo"))
                w.uint32(16).int32(m.parentHeaderSynchedTo);
            if (m.paraHeaderSynchedTo != null && Object.hasOwnProperty.call(m, "paraHeaderSynchedTo"))
                w.uint32(24).int32(m.paraHeaderSynchedTo);
            if (m.paraBlockDispatchedTo != null && Object.hasOwnProperty.call(m, "paraBlockDispatchedTo"))
                w.uint32(32).int32(m.paraBlockDispatchedTo);
            if (m.initialized != null && Object.hasOwnProperty.call(m, "initialized"))
                w.uint32(40).bool(m.initialized);
            if (m.worker != null && Object.hasOwnProperty.call(m, "worker"))
                $root.prb.db.Worker.encode(m.worker, w.uint32(50).fork()).ldelim();
            if (m.publicKey != null && Object.hasOwnProperty.call(m, "publicKey"))
                w.uint32(66).string(m.publicKey);
            if (m.lastMessage != null && Object.hasOwnProperty.call(m, "lastMessage"))
                w.uint32(74).string(m.lastMessage);
            if (m.minerInfoJson != null && Object.hasOwnProperty.call(m, "minerInfoJson"))
                w.uint32(82).string(m.minerInfoJson);
            if (m.minerAccountId != null && Object.hasOwnProperty.call(m, "minerAccountId"))
                w.uint32(90).string(m.minerAccountId);
            return w;
        };

        /**
         * Encodes the specified WorkerState message, length delimited. Does not implicitly {@link prb.WorkerState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.WorkerState
         * @static
         * @param {prb.IWorkerState} message WorkerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorkerState message from the specified reader or buffer.
         * @function decode
         * @memberof prb.WorkerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.WorkerState} WorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.WorkerState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.parentHeaderSynchedTo = r.int32();
                    break;
                case 3:
                    m.paraHeaderSynchedTo = r.int32();
                    break;
                case 4:
                    m.paraBlockDispatchedTo = r.int32();
                    break;
                case 5:
                    m.initialized = r.bool();
                    break;
                case 6:
                    m.worker = $root.prb.db.Worker.decode(r, r.uint32());
                    break;
                case 8:
                    m.publicKey = r.string();
                    break;
                case 9:
                    m.lastMessage = r.string();
                    break;
                case 10:
                    m.minerInfoJson = r.string();
                    break;
                case 11:
                    m.minerAccountId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a WorkerState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.WorkerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.WorkerState} WorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorkerState message.
         * @function verify
         * @memberof prb.WorkerState
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorkerState.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.status != null && m.hasOwnProperty("status")) {
                switch (m.status) {
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
            }
            if (m.parentHeaderSynchedTo != null && m.hasOwnProperty("parentHeaderSynchedTo")) {
                if (!$util.isInteger(m.parentHeaderSynchedTo))
                    return "parentHeaderSynchedTo: integer expected";
            }
            if (m.paraHeaderSynchedTo != null && m.hasOwnProperty("paraHeaderSynchedTo")) {
                if (!$util.isInteger(m.paraHeaderSynchedTo))
                    return "paraHeaderSynchedTo: integer expected";
            }
            if (m.paraBlockDispatchedTo != null && m.hasOwnProperty("paraBlockDispatchedTo")) {
                if (!$util.isInteger(m.paraBlockDispatchedTo))
                    return "paraBlockDispatchedTo: integer expected";
            }
            if (m.initialized != null && m.hasOwnProperty("initialized")) {
                if (typeof m.initialized !== "boolean")
                    return "initialized: boolean expected";
            }
            if (m.worker != null && m.hasOwnProperty("worker")) {
                {
                    var e = $root.prb.db.Worker.verify(m.worker);
                    if (e)
                        return "worker." + e;
                }
            }
            if (m.publicKey != null && m.hasOwnProperty("publicKey")) {
                if (!$util.isString(m.publicKey))
                    return "publicKey: string expected";
            }
            if (m.lastMessage != null && m.hasOwnProperty("lastMessage")) {
                if (!$util.isString(m.lastMessage))
                    return "lastMessage: string expected";
            }
            if (m.minerInfoJson != null && m.hasOwnProperty("minerInfoJson")) {
                if (!$util.isString(m.minerInfoJson))
                    return "minerInfoJson: string expected";
            }
            if (m.minerAccountId != null && m.hasOwnProperty("minerAccountId")) {
                if (!$util.isString(m.minerAccountId))
                    return "minerAccountId: string expected";
            }
            return null;
        };

        /**
         * Creates a WorkerState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.WorkerState
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.WorkerState} WorkerState
         */
        WorkerState.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.WorkerState)
                return d;
            var m = new $root.prb.WorkerState();
            switch (d.status) {
            case "S_IDLE":
            case 0:
                m.status = 0;
                break;
            case "S_STARTING":
            case 1:
                m.status = 1;
                break;
            case "S_SYNCHING":
            case 2:
                m.status = 2;
                break;
            case "S_SYNCHED":
            case 3:
                m.status = 3;
                break;
            case "S_PRE_MINING":
            case 4:
                m.status = 4;
                break;
            case "S_MINING":
            case 5:
                m.status = 5;
                break;
            case "S_KICKED":
            case 6:
                m.status = 6;
                break;
            case "S_ERROR":
            case 7:
                m.status = 7;
                break;
            }
            if (d.parentHeaderSynchedTo != null) {
                m.parentHeaderSynchedTo = d.parentHeaderSynchedTo | 0;
            }
            if (d.paraHeaderSynchedTo != null) {
                m.paraHeaderSynchedTo = d.paraHeaderSynchedTo | 0;
            }
            if (d.paraBlockDispatchedTo != null) {
                m.paraBlockDispatchedTo = d.paraBlockDispatchedTo | 0;
            }
            if (d.initialized != null) {
                m.initialized = Boolean(d.initialized);
            }
            if (d.worker != null) {
                if (typeof d.worker !== "object")
                    throw TypeError(".prb.WorkerState.worker: object expected");
                m.worker = $root.prb.db.Worker.fromObject(d.worker);
            }
            if (d.publicKey != null) {
                m.publicKey = String(d.publicKey);
            }
            if (d.lastMessage != null) {
                m.lastMessage = String(d.lastMessage);
            }
            if (d.minerInfoJson != null) {
                m.minerInfoJson = String(d.minerInfoJson);
            }
            if (d.minerAccountId != null) {
                m.minerAccountId = String(d.minerAccountId);
            }
            return m;
        };

        /**
         * Creates a plain object from a WorkerState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.WorkerState
         * @static
         * @param {prb.WorkerState} m WorkerState
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorkerState.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.status = o.enums === String ? "S_IDLE" : 0;
                d.parentHeaderSynchedTo = 0;
                d.paraHeaderSynchedTo = 0;
                d.paraBlockDispatchedTo = 0;
                d.initialized = false;
                d.worker = null;
                d.publicKey = "";
                d.lastMessage = "";
                d.minerInfoJson = "";
                d.minerAccountId = "";
            }
            if (m.status != null && m.hasOwnProperty("status")) {
                d.status = o.enums === String ? $root.prb.WorkerState.Status[m.status] : m.status;
            }
            if (m.parentHeaderSynchedTo != null && m.hasOwnProperty("parentHeaderSynchedTo")) {
                d.parentHeaderSynchedTo = m.parentHeaderSynchedTo;
            }
            if (m.paraHeaderSynchedTo != null && m.hasOwnProperty("paraHeaderSynchedTo")) {
                d.paraHeaderSynchedTo = m.paraHeaderSynchedTo;
            }
            if (m.paraBlockDispatchedTo != null && m.hasOwnProperty("paraBlockDispatchedTo")) {
                d.paraBlockDispatchedTo = m.paraBlockDispatchedTo;
            }
            if (m.initialized != null && m.hasOwnProperty("initialized")) {
                d.initialized = m.initialized;
            }
            if (m.worker != null && m.hasOwnProperty("worker")) {
                d.worker = $root.prb.db.Worker.toObject(m.worker, o);
            }
            if (m.publicKey != null && m.hasOwnProperty("publicKey")) {
                d.publicKey = m.publicKey;
            }
            if (m.lastMessage != null && m.hasOwnProperty("lastMessage")) {
                d.lastMessage = m.lastMessage;
            }
            if (m.minerInfoJson != null && m.hasOwnProperty("minerInfoJson")) {
                d.minerInfoJson = m.minerInfoJson;
            }
            if (m.minerAccountId != null && m.hasOwnProperty("minerAccountId")) {
                d.minerAccountId = m.minerAccountId;
            }
            return d;
        };

        /**
         * Converts this WorkerState to JSON.
         * @function toJSON
         * @memberof prb.WorkerState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorkerState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Status enum.
         * @name prb.WorkerState.Status
         * @enum {number}
         * @property {number} S_IDLE=0 S_IDLE value
         * @property {number} S_STARTING=1 S_STARTING value
         * @property {number} S_SYNCHING=2 S_SYNCHING value
         * @property {number} S_SYNCHED=3 S_SYNCHED value
         * @property {number} S_PRE_MINING=4 S_PRE_MINING value
         * @property {number} S_MINING=5 S_MINING value
         * @property {number} S_KICKED=6 S_KICKED value
         * @property {number} S_ERROR=7 S_ERROR value
         */
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

        /**
         * Properties of a PoolOrWorkerQueryIdentity.
         * @memberof prb
         * @interface IPoolOrWorkerQueryIdentity
         * @property {string|null} [uuid] PoolOrWorkerQueryIdentity uuid
         * @property {string|null} [name] PoolOrWorkerQueryIdentity name
         * @property {number|Long|null} [pid] PoolOrWorkerQueryIdentity pid
         */

        /**
         * Constructs a new PoolOrWorkerQueryIdentity.
         * @memberof prb
         * @classdesc Represents a PoolOrWorkerQueryIdentity.
         * @implements IPoolOrWorkerQueryIdentity
         * @constructor
         * @param {prb.IPoolOrWorkerQueryIdentity=} [p] Properties to set
         */
        function PoolOrWorkerQueryIdentity(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PoolOrWorkerQueryIdentity uuid.
         * @member {string|null|undefined} uuid
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @instance
         */
        PoolOrWorkerQueryIdentity.prototype.uuid = null;

        /**
         * PoolOrWorkerQueryIdentity name.
         * @member {string|null|undefined} name
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @instance
         */
        PoolOrWorkerQueryIdentity.prototype.name = null;

        /**
         * PoolOrWorkerQueryIdentity pid.
         * @member {number|Long|null|undefined} pid
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @instance
         */
        PoolOrWorkerQueryIdentity.prototype.pid = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * PoolOrWorkerQueryIdentity identity.
         * @member {"uuid"|"name"|"pid"|undefined} identity
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @instance
         */
        Object.defineProperty(PoolOrWorkerQueryIdentity.prototype, "identity", {
            get: $util.oneOfGetter($oneOfFields = ["uuid", "name", "pid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PoolOrWorkerQueryIdentity instance using the specified properties.
         * @function create
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @static
         * @param {prb.IPoolOrWorkerQueryIdentity=} [properties] Properties to set
         * @returns {prb.PoolOrWorkerQueryIdentity} PoolOrWorkerQueryIdentity instance
         */
        PoolOrWorkerQueryIdentity.create = function create(properties) {
            return new PoolOrWorkerQueryIdentity(properties);
        };

        /**
         * Encodes the specified PoolOrWorkerQueryIdentity message. Does not implicitly {@link prb.PoolOrWorkerQueryIdentity.verify|verify} messages.
         * @function encode
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @static
         * @param {prb.IPoolOrWorkerQueryIdentity} m PoolOrWorkerQueryIdentity message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PoolOrWorkerQueryIdentity.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uuid != null && Object.hasOwnProperty.call(m, "uuid"))
                w.uint32(10).string(m.uuid);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(18).string(m.name);
            if (m.pid != null && Object.hasOwnProperty.call(m, "pid"))
                w.uint32(24).uint64(m.pid);
            return w;
        };

        /**
         * Encodes the specified PoolOrWorkerQueryIdentity message, length delimited. Does not implicitly {@link prb.PoolOrWorkerQueryIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @static
         * @param {prb.IPoolOrWorkerQueryIdentity} message PoolOrWorkerQueryIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PoolOrWorkerQueryIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PoolOrWorkerQueryIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.PoolOrWorkerQueryIdentity} PoolOrWorkerQueryIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PoolOrWorkerQueryIdentity.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.PoolOrWorkerQueryIdentity();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uuid = r.string();
                    break;
                case 2:
                    m.name = r.string();
                    break;
                case 3:
                    m.pid = r.uint64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a PoolOrWorkerQueryIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.PoolOrWorkerQueryIdentity} PoolOrWorkerQueryIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PoolOrWorkerQueryIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PoolOrWorkerQueryIdentity message.
         * @function verify
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PoolOrWorkerQueryIdentity.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            var p = {};
            if (m.uuid != null && m.hasOwnProperty("uuid")) {
                p.identity = 1;
                if (!$util.isString(m.uuid))
                    return "uuid: string expected";
            }
            if (m.name != null && m.hasOwnProperty("name")) {
                if (p.identity === 1)
                    return "identity: multiple values";
                p.identity = 1;
                if (!$util.isString(m.name))
                    return "name: string expected";
            }
            if (m.pid != null && m.hasOwnProperty("pid")) {
                if (p.identity === 1)
                    return "identity: multiple values";
                p.identity = 1;
                if (!$util.isInteger(m.pid) && !(m.pid && $util.isInteger(m.pid.low) && $util.isInteger(m.pid.high)))
                    return "pid: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a PoolOrWorkerQueryIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.PoolOrWorkerQueryIdentity} PoolOrWorkerQueryIdentity
         */
        PoolOrWorkerQueryIdentity.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.PoolOrWorkerQueryIdentity)
                return d;
            var m = new $root.prb.PoolOrWorkerQueryIdentity();
            if (d.uuid != null) {
                m.uuid = String(d.uuid);
            }
            if (d.name != null) {
                m.name = String(d.name);
            }
            if (d.pid != null) {
                if ($util.Long)
                    (m.pid = $util.Long.fromValue(d.pid)).unsigned = true;
                else if (typeof d.pid === "string")
                    m.pid = parseInt(d.pid, 10);
                else if (typeof d.pid === "number")
                    m.pid = d.pid;
                else if (typeof d.pid === "object")
                    m.pid = new $util.LongBits(d.pid.low >>> 0, d.pid.high >>> 0).toNumber(true);
            }
            return m;
        };

        /**
         * Creates a plain object from a PoolOrWorkerQueryIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @static
         * @param {prb.PoolOrWorkerQueryIdentity} m PoolOrWorkerQueryIdentity
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PoolOrWorkerQueryIdentity.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.uuid != null && m.hasOwnProperty("uuid")) {
                d.uuid = m.uuid;
                if (o.oneofs)
                    d.identity = "uuid";
            }
            if (m.name != null && m.hasOwnProperty("name")) {
                d.name = m.name;
                if (o.oneofs)
                    d.identity = "name";
            }
            if (m.pid != null && m.hasOwnProperty("pid")) {
                if (typeof m.pid === "number")
                    d.pid = o.longs === String ? String(m.pid) : m.pid;
                else
                    d.pid = o.longs === String ? $util.Long.prototype.toString.call(m.pid) : o.longs === Number ? new $util.LongBits(m.pid.low >>> 0, m.pid.high >>> 0).toNumber(true) : m.pid;
                if (o.oneofs)
                    d.identity = "pid";
            }
            return d;
        };

        /**
         * Converts this PoolOrWorkerQueryIdentity to JSON.
         * @function toJSON
         * @memberof prb.PoolOrWorkerQueryIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PoolOrWorkerQueryIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PoolOrWorkerQueryIdentity;
    })();

    prb.QueryWorkerState = (function() {

        /**
         * Properties of a QueryWorkerState.
         * @memberof prb
         * @interface IQueryWorkerState
         * @property {Array.<prb.IPoolOrWorkerQueryIdentity>|null} [ids] QueryWorkerState ids
         */

        /**
         * Constructs a new QueryWorkerState.
         * @memberof prb
         * @classdesc Represents a QueryWorkerState.
         * @implements IQueryWorkerState
         * @constructor
         * @param {prb.IQueryWorkerState=} [p] Properties to set
         */
        function QueryWorkerState(p) {
            this.ids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * QueryWorkerState ids.
         * @member {Array.<prb.IPoolOrWorkerQueryIdentity>} ids
         * @memberof prb.QueryWorkerState
         * @instance
         */
        QueryWorkerState.prototype.ids = $util.emptyArray;

        /**
         * Creates a new QueryWorkerState instance using the specified properties.
         * @function create
         * @memberof prb.QueryWorkerState
         * @static
         * @param {prb.IQueryWorkerState=} [properties] Properties to set
         * @returns {prb.QueryWorkerState} QueryWorkerState instance
         */
        QueryWorkerState.create = function create(properties) {
            return new QueryWorkerState(properties);
        };

        /**
         * Encodes the specified QueryWorkerState message. Does not implicitly {@link prb.QueryWorkerState.verify|verify} messages.
         * @function encode
         * @memberof prb.QueryWorkerState
         * @static
         * @param {prb.IQueryWorkerState} m QueryWorkerState message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryWorkerState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ids != null && m.ids.length) {
                for (var i = 0; i < m.ids.length; ++i)
                    $root.prb.PoolOrWorkerQueryIdentity.encode(m.ids[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Encodes the specified QueryWorkerState message, length delimited. Does not implicitly {@link prb.QueryWorkerState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.QueryWorkerState
         * @static
         * @param {prb.IQueryWorkerState} message QueryWorkerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryWorkerState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryWorkerState message from the specified reader or buffer.
         * @function decode
         * @memberof prb.QueryWorkerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.QueryWorkerState} QueryWorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryWorkerState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.QueryWorkerState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.ids && m.ids.length))
                        m.ids = [];
                    m.ids.push($root.prb.PoolOrWorkerQueryIdentity.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a QueryWorkerState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.QueryWorkerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.QueryWorkerState} QueryWorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryWorkerState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryWorkerState message.
         * @function verify
         * @memberof prb.QueryWorkerState
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryWorkerState.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.ids != null && m.hasOwnProperty("ids")) {
                if (!Array.isArray(m.ids))
                    return "ids: array expected";
                for (var i = 0; i < m.ids.length; ++i) {
                    {
                        var e = $root.prb.PoolOrWorkerQueryIdentity.verify(m.ids[i]);
                        if (e)
                            return "ids." + e;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a QueryWorkerState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.QueryWorkerState
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.QueryWorkerState} QueryWorkerState
         */
        QueryWorkerState.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.QueryWorkerState)
                return d;
            var m = new $root.prb.QueryWorkerState();
            if (d.ids) {
                if (!Array.isArray(d.ids))
                    throw TypeError(".prb.QueryWorkerState.ids: array expected");
                m.ids = [];
                for (var i = 0; i < d.ids.length; ++i) {
                    if (typeof d.ids[i] !== "object")
                        throw TypeError(".prb.QueryWorkerState.ids: object expected");
                    m.ids[i] = $root.prb.PoolOrWorkerQueryIdentity.fromObject(d.ids[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a QueryWorkerState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.QueryWorkerState
         * @static
         * @param {prb.QueryWorkerState} m QueryWorkerState
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryWorkerState.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.ids = [];
            }
            if (m.ids && m.ids.length) {
                d.ids = [];
                for (var j = 0; j < m.ids.length; ++j) {
                    d.ids[j] = $root.prb.PoolOrWorkerQueryIdentity.toObject(m.ids[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this QueryWorkerState to JSON.
         * @function toJSON
         * @memberof prb.QueryWorkerState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QueryWorkerState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryWorkerState;
    })();

    prb.WorkerStateUpdate = (function() {

        /**
         * Properties of a WorkerStateUpdate.
         * @memberof prb
         * @interface IWorkerStateUpdate
         * @property {Array.<prb.IWorkerState>|null} [workerStates] WorkerStateUpdate workerStates
         */

        /**
         * Constructs a new WorkerStateUpdate.
         * @memberof prb
         * @classdesc Represents a WorkerStateUpdate.
         * @implements IWorkerStateUpdate
         * @constructor
         * @param {prb.IWorkerStateUpdate=} [p] Properties to set
         */
        function WorkerStateUpdate(p) {
            this.workerStates = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * WorkerStateUpdate workerStates.
         * @member {Array.<prb.IWorkerState>} workerStates
         * @memberof prb.WorkerStateUpdate
         * @instance
         */
        WorkerStateUpdate.prototype.workerStates = $util.emptyArray;

        /**
         * Creates a new WorkerStateUpdate instance using the specified properties.
         * @function create
         * @memberof prb.WorkerStateUpdate
         * @static
         * @param {prb.IWorkerStateUpdate=} [properties] Properties to set
         * @returns {prb.WorkerStateUpdate} WorkerStateUpdate instance
         */
        WorkerStateUpdate.create = function create(properties) {
            return new WorkerStateUpdate(properties);
        };

        /**
         * Encodes the specified WorkerStateUpdate message. Does not implicitly {@link prb.WorkerStateUpdate.verify|verify} messages.
         * @function encode
         * @memberof prb.WorkerStateUpdate
         * @static
         * @param {prb.IWorkerStateUpdate} m WorkerStateUpdate message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerStateUpdate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.workerStates != null && m.workerStates.length) {
                for (var i = 0; i < m.workerStates.length; ++i)
                    $root.prb.WorkerState.encode(m.workerStates[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Encodes the specified WorkerStateUpdate message, length delimited. Does not implicitly {@link prb.WorkerStateUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.WorkerStateUpdate
         * @static
         * @param {prb.IWorkerStateUpdate} message WorkerStateUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerStateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorkerStateUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof prb.WorkerStateUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.WorkerStateUpdate} WorkerStateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerStateUpdate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.WorkerStateUpdate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.workerStates && m.workerStates.length))
                        m.workerStates = [];
                    m.workerStates.push($root.prb.WorkerState.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a WorkerStateUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.WorkerStateUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.WorkerStateUpdate} WorkerStateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerStateUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorkerStateUpdate message.
         * @function verify
         * @memberof prb.WorkerStateUpdate
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorkerStateUpdate.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.workerStates != null && m.hasOwnProperty("workerStates")) {
                if (!Array.isArray(m.workerStates))
                    return "workerStates: array expected";
                for (var i = 0; i < m.workerStates.length; ++i) {
                    {
                        var e = $root.prb.WorkerState.verify(m.workerStates[i]);
                        if (e)
                            return "workerStates." + e;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a WorkerStateUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.WorkerStateUpdate
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.WorkerStateUpdate} WorkerStateUpdate
         */
        WorkerStateUpdate.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.WorkerStateUpdate)
                return d;
            var m = new $root.prb.WorkerStateUpdate();
            if (d.workerStates) {
                if (!Array.isArray(d.workerStates))
                    throw TypeError(".prb.WorkerStateUpdate.workerStates: array expected");
                m.workerStates = [];
                for (var i = 0; i < d.workerStates.length; ++i) {
                    if (typeof d.workerStates[i] !== "object")
                        throw TypeError(".prb.WorkerStateUpdate.workerStates: object expected");
                    m.workerStates[i] = $root.prb.WorkerState.fromObject(d.workerStates[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a WorkerStateUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.WorkerStateUpdate
         * @static
         * @param {prb.WorkerStateUpdate} m WorkerStateUpdate
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorkerStateUpdate.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.workerStates = [];
            }
            if (m.workerStates && m.workerStates.length) {
                d.workerStates = [];
                for (var j = 0; j < m.workerStates.length; ++j) {
                    d.workerStates[j] = $root.prb.WorkerState.toObject(m.workerStates[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this WorkerStateUpdate to JSON.
         * @function toJSON
         * @memberof prb.WorkerStateUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorkerStateUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorkerStateUpdate;
    })();

    prb.LifecycleManagerStateUpdate = (function() {

        /**
         * Properties of a LifecycleManagerStateUpdate.
         * @memberof prb
         * @interface ILifecycleManagerStateUpdate
         * @property {string|null} [hostname] LifecycleManagerStateUpdate hostname
         * @property {Array.<prb.db.IPool>|null} [pools] LifecycleManagerStateUpdate pools
         * @property {Array.<prb.db.IWorker>|null} [workers] LifecycleManagerStateUpdate workers
         */

        /**
         * Constructs a new LifecycleManagerStateUpdate.
         * @memberof prb
         * @classdesc Represents a LifecycleManagerStateUpdate.
         * @implements ILifecycleManagerStateUpdate
         * @constructor
         * @param {prb.ILifecycleManagerStateUpdate=} [p] Properties to set
         */
        function LifecycleManagerStateUpdate(p) {
            this.pools = [];
            this.workers = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LifecycleManagerStateUpdate hostname.
         * @member {string} hostname
         * @memberof prb.LifecycleManagerStateUpdate
         * @instance
         */
        LifecycleManagerStateUpdate.prototype.hostname = "";

        /**
         * LifecycleManagerStateUpdate pools.
         * @member {Array.<prb.db.IPool>} pools
         * @memberof prb.LifecycleManagerStateUpdate
         * @instance
         */
        LifecycleManagerStateUpdate.prototype.pools = $util.emptyArray;

        /**
         * LifecycleManagerStateUpdate workers.
         * @member {Array.<prb.db.IWorker>} workers
         * @memberof prb.LifecycleManagerStateUpdate
         * @instance
         */
        LifecycleManagerStateUpdate.prototype.workers = $util.emptyArray;

        /**
         * Creates a new LifecycleManagerStateUpdate instance using the specified properties.
         * @function create
         * @memberof prb.LifecycleManagerStateUpdate
         * @static
         * @param {prb.ILifecycleManagerStateUpdate=} [properties] Properties to set
         * @returns {prb.LifecycleManagerStateUpdate} LifecycleManagerStateUpdate instance
         */
        LifecycleManagerStateUpdate.create = function create(properties) {
            return new LifecycleManagerStateUpdate(properties);
        };

        /**
         * Encodes the specified LifecycleManagerStateUpdate message. Does not implicitly {@link prb.LifecycleManagerStateUpdate.verify|verify} messages.
         * @function encode
         * @memberof prb.LifecycleManagerStateUpdate
         * @static
         * @param {prb.ILifecycleManagerStateUpdate} m LifecycleManagerStateUpdate message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LifecycleManagerStateUpdate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.hostname != null && Object.hasOwnProperty.call(m, "hostname"))
                w.uint32(10).string(m.hostname);
            if (m.pools != null && m.pools.length) {
                for (var i = 0; i < m.pools.length; ++i)
                    $root.prb.db.Pool.encode(m.pools[i], w.uint32(18).fork()).ldelim();
            }
            if (m.workers != null && m.workers.length) {
                for (var i = 0; i < m.workers.length; ++i)
                    $root.prb.db.Worker.encode(m.workers[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Encodes the specified LifecycleManagerStateUpdate message, length delimited. Does not implicitly {@link prb.LifecycleManagerStateUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.LifecycleManagerStateUpdate
         * @static
         * @param {prb.ILifecycleManagerStateUpdate} message LifecycleManagerStateUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LifecycleManagerStateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LifecycleManagerStateUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof prb.LifecycleManagerStateUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.LifecycleManagerStateUpdate} LifecycleManagerStateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LifecycleManagerStateUpdate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.LifecycleManagerStateUpdate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.hostname = r.string();
                    break;
                case 2:
                    if (!(m.pools && m.pools.length))
                        m.pools = [];
                    m.pools.push($root.prb.db.Pool.decode(r, r.uint32()));
                    break;
                case 3:
                    if (!(m.workers && m.workers.length))
                        m.workers = [];
                    m.workers.push($root.prb.db.Worker.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a LifecycleManagerStateUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.LifecycleManagerStateUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.LifecycleManagerStateUpdate} LifecycleManagerStateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LifecycleManagerStateUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LifecycleManagerStateUpdate message.
         * @function verify
         * @memberof prb.LifecycleManagerStateUpdate
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LifecycleManagerStateUpdate.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.hostname != null && m.hasOwnProperty("hostname")) {
                if (!$util.isString(m.hostname))
                    return "hostname: string expected";
            }
            if (m.pools != null && m.hasOwnProperty("pools")) {
                if (!Array.isArray(m.pools))
                    return "pools: array expected";
                for (var i = 0; i < m.pools.length; ++i) {
                    {
                        var e = $root.prb.db.Pool.verify(m.pools[i]);
                        if (e)
                            return "pools." + e;
                    }
                }
            }
            if (m.workers != null && m.hasOwnProperty("workers")) {
                if (!Array.isArray(m.workers))
                    return "workers: array expected";
                for (var i = 0; i < m.workers.length; ++i) {
                    {
                        var e = $root.prb.db.Worker.verify(m.workers[i]);
                        if (e)
                            return "workers." + e;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a LifecycleManagerStateUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.LifecycleManagerStateUpdate
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.LifecycleManagerStateUpdate} LifecycleManagerStateUpdate
         */
        LifecycleManagerStateUpdate.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.LifecycleManagerStateUpdate)
                return d;
            var m = new $root.prb.LifecycleManagerStateUpdate();
            if (d.hostname != null) {
                m.hostname = String(d.hostname);
            }
            if (d.pools) {
                if (!Array.isArray(d.pools))
                    throw TypeError(".prb.LifecycleManagerStateUpdate.pools: array expected");
                m.pools = [];
                for (var i = 0; i < d.pools.length; ++i) {
                    if (typeof d.pools[i] !== "object")
                        throw TypeError(".prb.LifecycleManagerStateUpdate.pools: object expected");
                    m.pools[i] = $root.prb.db.Pool.fromObject(d.pools[i]);
                }
            }
            if (d.workers) {
                if (!Array.isArray(d.workers))
                    throw TypeError(".prb.LifecycleManagerStateUpdate.workers: array expected");
                m.workers = [];
                for (var i = 0; i < d.workers.length; ++i) {
                    if (typeof d.workers[i] !== "object")
                        throw TypeError(".prb.LifecycleManagerStateUpdate.workers: object expected");
                    m.workers[i] = $root.prb.db.Worker.fromObject(d.workers[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a LifecycleManagerStateUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.LifecycleManagerStateUpdate
         * @static
         * @param {prb.LifecycleManagerStateUpdate} m LifecycleManagerStateUpdate
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LifecycleManagerStateUpdate.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.pools = [];
                d.workers = [];
            }
            if (o.defaults) {
                d.hostname = "";
            }
            if (m.hostname != null && m.hasOwnProperty("hostname")) {
                d.hostname = m.hostname;
            }
            if (m.pools && m.pools.length) {
                d.pools = [];
                for (var j = 0; j < m.pools.length; ++j) {
                    d.pools[j] = $root.prb.db.Pool.toObject(m.pools[j], o);
                }
            }
            if (m.workers && m.workers.length) {
                d.workers = [];
                for (var j = 0; j < m.workers.length; ++j) {
                    d.workers[j] = $root.prb.db.Worker.toObject(m.workers[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this LifecycleManagerStateUpdate to JSON.
         * @function toJSON
         * @memberof prb.LifecycleManagerStateUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LifecycleManagerStateUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LifecycleManagerStateUpdate;
    })();

    prb.CallOnlineLifecycleManager = (function() {

        /**
         * Properties of a CallOnlineLifecycleManager.
         * @memberof prb
         * @interface ICallOnlineLifecycleManager
         * @property {boolean|null} [isResponse] CallOnlineLifecycleManager isResponse
         * @property {string|null} [hostname] CallOnlineLifecycleManager hostname
         */

        /**
         * Constructs a new CallOnlineLifecycleManager.
         * @memberof prb
         * @classdesc Represents a CallOnlineLifecycleManager.
         * @implements ICallOnlineLifecycleManager
         * @constructor
         * @param {prb.ICallOnlineLifecycleManager=} [p] Properties to set
         */
        function CallOnlineLifecycleManager(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CallOnlineLifecycleManager isResponse.
         * @member {boolean} isResponse
         * @memberof prb.CallOnlineLifecycleManager
         * @instance
         */
        CallOnlineLifecycleManager.prototype.isResponse = false;

        /**
         * CallOnlineLifecycleManager hostname.
         * @member {string} hostname
         * @memberof prb.CallOnlineLifecycleManager
         * @instance
         */
        CallOnlineLifecycleManager.prototype.hostname = "";

        /**
         * Creates a new CallOnlineLifecycleManager instance using the specified properties.
         * @function create
         * @memberof prb.CallOnlineLifecycleManager
         * @static
         * @param {prb.ICallOnlineLifecycleManager=} [properties] Properties to set
         * @returns {prb.CallOnlineLifecycleManager} CallOnlineLifecycleManager instance
         */
        CallOnlineLifecycleManager.create = function create(properties) {
            return new CallOnlineLifecycleManager(properties);
        };

        /**
         * Encodes the specified CallOnlineLifecycleManager message. Does not implicitly {@link prb.CallOnlineLifecycleManager.verify|verify} messages.
         * @function encode
         * @memberof prb.CallOnlineLifecycleManager
         * @static
         * @param {prb.ICallOnlineLifecycleManager} m CallOnlineLifecycleManager message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallOnlineLifecycleManager.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isResponse != null && Object.hasOwnProperty.call(m, "isResponse"))
                w.uint32(8).bool(m.isResponse);
            if (m.hostname != null && Object.hasOwnProperty.call(m, "hostname"))
                w.uint32(18).string(m.hostname);
            return w;
        };

        /**
         * Encodes the specified CallOnlineLifecycleManager message, length delimited. Does not implicitly {@link prb.CallOnlineLifecycleManager.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.CallOnlineLifecycleManager
         * @static
         * @param {prb.ICallOnlineLifecycleManager} message CallOnlineLifecycleManager message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallOnlineLifecycleManager.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CallOnlineLifecycleManager message from the specified reader or buffer.
         * @function decode
         * @memberof prb.CallOnlineLifecycleManager
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.CallOnlineLifecycleManager} CallOnlineLifecycleManager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallOnlineLifecycleManager.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.CallOnlineLifecycleManager();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.isResponse = r.bool();
                    break;
                case 2:
                    m.hostname = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a CallOnlineLifecycleManager message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.CallOnlineLifecycleManager
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.CallOnlineLifecycleManager} CallOnlineLifecycleManager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallOnlineLifecycleManager.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CallOnlineLifecycleManager message.
         * @function verify
         * @memberof prb.CallOnlineLifecycleManager
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CallOnlineLifecycleManager.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.isResponse != null && m.hasOwnProperty("isResponse")) {
                if (typeof m.isResponse !== "boolean")
                    return "isResponse: boolean expected";
            }
            if (m.hostname != null && m.hasOwnProperty("hostname")) {
                if (!$util.isString(m.hostname))
                    return "hostname: string expected";
            }
            return null;
        };

        /**
         * Creates a CallOnlineLifecycleManager message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.CallOnlineLifecycleManager
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.CallOnlineLifecycleManager} CallOnlineLifecycleManager
         */
        CallOnlineLifecycleManager.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.CallOnlineLifecycleManager)
                return d;
            var m = new $root.prb.CallOnlineLifecycleManager();
            if (d.isResponse != null) {
                m.isResponse = Boolean(d.isResponse);
            }
            if (d.hostname != null) {
                m.hostname = String(d.hostname);
            }
            return m;
        };

        /**
         * Creates a plain object from a CallOnlineLifecycleManager message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.CallOnlineLifecycleManager
         * @static
         * @param {prb.CallOnlineLifecycleManager} m CallOnlineLifecycleManager
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CallOnlineLifecycleManager.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.isResponse = false;
                d.hostname = "";
            }
            if (m.isResponse != null && m.hasOwnProperty("isResponse")) {
                d.isResponse = m.isResponse;
            }
            if (m.hostname != null && m.hasOwnProperty("hostname")) {
                d.hostname = m.hostname;
            }
            return d;
        };

        /**
         * Converts this CallOnlineLifecycleManager to JSON.
         * @function toJSON
         * @memberof prb.CallOnlineLifecycleManager
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CallOnlineLifecycleManager.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CallOnlineLifecycleManager;
    })();

    prb.LifecycleActionRequest = (function() {

        /**
         * Properties of a LifecycleActionRequest.
         * @memberof prb
         * @interface ILifecycleActionRequest
         * @property {prb.IPoolOrWorkerQueryIdentity|null} [id] LifecycleActionRequest id
         * @property {string|null} [reason] LifecycleActionRequest reason
         */

        /**
         * Constructs a new LifecycleActionRequest.
         * @memberof prb
         * @classdesc Represents a LifecycleActionRequest.
         * @implements ILifecycleActionRequest
         * @constructor
         * @param {prb.ILifecycleActionRequest=} [p] Properties to set
         */
        function LifecycleActionRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LifecycleActionRequest id.
         * @member {prb.IPoolOrWorkerQueryIdentity|null|undefined} id
         * @memberof prb.LifecycleActionRequest
         * @instance
         */
        LifecycleActionRequest.prototype.id = null;

        /**
         * LifecycleActionRequest reason.
         * @member {string} reason
         * @memberof prb.LifecycleActionRequest
         * @instance
         */
        LifecycleActionRequest.prototype.reason = "";

        /**
         * Creates a new LifecycleActionRequest instance using the specified properties.
         * @function create
         * @memberof prb.LifecycleActionRequest
         * @static
         * @param {prb.ILifecycleActionRequest=} [properties] Properties to set
         * @returns {prb.LifecycleActionRequest} LifecycleActionRequest instance
         */
        LifecycleActionRequest.create = function create(properties) {
            return new LifecycleActionRequest(properties);
        };

        /**
         * Encodes the specified LifecycleActionRequest message. Does not implicitly {@link prb.LifecycleActionRequest.verify|verify} messages.
         * @function encode
         * @memberof prb.LifecycleActionRequest
         * @static
         * @param {prb.ILifecycleActionRequest} m LifecycleActionRequest message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LifecycleActionRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                $root.prb.PoolOrWorkerQueryIdentity.encode(m.id, w.uint32(10).fork()).ldelim();
            if (m.reason != null && Object.hasOwnProperty.call(m, "reason"))
                w.uint32(18).string(m.reason);
            return w;
        };

        /**
         * Encodes the specified LifecycleActionRequest message, length delimited. Does not implicitly {@link prb.LifecycleActionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.LifecycleActionRequest
         * @static
         * @param {prb.ILifecycleActionRequest} message LifecycleActionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LifecycleActionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LifecycleActionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof prb.LifecycleActionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.LifecycleActionRequest} LifecycleActionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LifecycleActionRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.LifecycleActionRequest();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = $root.prb.PoolOrWorkerQueryIdentity.decode(r, r.uint32());
                    break;
                case 2:
                    m.reason = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a LifecycleActionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.LifecycleActionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.LifecycleActionRequest} LifecycleActionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LifecycleActionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LifecycleActionRequest message.
         * @function verify
         * @memberof prb.LifecycleActionRequest
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LifecycleActionRequest.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.id != null && m.hasOwnProperty("id")) {
                {
                    var e = $root.prb.PoolOrWorkerQueryIdentity.verify(m.id);
                    if (e)
                        return "id." + e;
                }
            }
            if (m.reason != null && m.hasOwnProperty("reason")) {
                if (!$util.isString(m.reason))
                    return "reason: string expected";
            }
            return null;
        };

        /**
         * Creates a LifecycleActionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.LifecycleActionRequest
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.LifecycleActionRequest} LifecycleActionRequest
         */
        LifecycleActionRequest.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.LifecycleActionRequest)
                return d;
            var m = new $root.prb.LifecycleActionRequest();
            if (d.id != null) {
                if (typeof d.id !== "object")
                    throw TypeError(".prb.LifecycleActionRequest.id: object expected");
                m.id = $root.prb.PoolOrWorkerQueryIdentity.fromObject(d.id);
            }
            if (d.reason != null) {
                m.reason = String(d.reason);
            }
            return m;
        };

        /**
         * Creates a plain object from a LifecycleActionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.LifecycleActionRequest
         * @static
         * @param {prb.LifecycleActionRequest} m LifecycleActionRequest
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LifecycleActionRequest.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.defaults) {
                d.id = null;
                d.reason = "";
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                d.id = $root.prb.PoolOrWorkerQueryIdentity.toObject(m.id, o);
            }
            if (m.reason != null && m.hasOwnProperty("reason")) {
                d.reason = m.reason;
            }
            return d;
        };

        /**
         * Converts this LifecycleActionRequest to JSON.
         * @function toJSON
         * @memberof prb.LifecycleActionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LifecycleActionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LifecycleActionRequest;
    })();

    prb.RequestStartWorkerLifecycle = (function() {

        /**
         * Properties of a RequestStartWorkerLifecycle.
         * @memberof prb
         * @interface IRequestStartWorkerLifecycle
         * @property {Array.<prb.ILifecycleActionRequest>|null} [requests] RequestStartWorkerLifecycle requests
         */

        /**
         * Constructs a new RequestStartWorkerLifecycle.
         * @memberof prb
         * @classdesc Represents a RequestStartWorkerLifecycle.
         * @implements IRequestStartWorkerLifecycle
         * @constructor
         * @param {prb.IRequestStartWorkerLifecycle=} [p] Properties to set
         */
        function RequestStartWorkerLifecycle(p) {
            this.requests = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RequestStartWorkerLifecycle requests.
         * @member {Array.<prb.ILifecycleActionRequest>} requests
         * @memberof prb.RequestStartWorkerLifecycle
         * @instance
         */
        RequestStartWorkerLifecycle.prototype.requests = $util.emptyArray;

        /**
         * Creates a new RequestStartWorkerLifecycle instance using the specified properties.
         * @function create
         * @memberof prb.RequestStartWorkerLifecycle
         * @static
         * @param {prb.IRequestStartWorkerLifecycle=} [properties] Properties to set
         * @returns {prb.RequestStartWorkerLifecycle} RequestStartWorkerLifecycle instance
         */
        RequestStartWorkerLifecycle.create = function create(properties) {
            return new RequestStartWorkerLifecycle(properties);
        };

        /**
         * Encodes the specified RequestStartWorkerLifecycle message. Does not implicitly {@link prb.RequestStartWorkerLifecycle.verify|verify} messages.
         * @function encode
         * @memberof prb.RequestStartWorkerLifecycle
         * @static
         * @param {prb.IRequestStartWorkerLifecycle} m RequestStartWorkerLifecycle message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestStartWorkerLifecycle.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.requests != null && m.requests.length) {
                for (var i = 0; i < m.requests.length; ++i)
                    $root.prb.LifecycleActionRequest.encode(m.requests[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Encodes the specified RequestStartWorkerLifecycle message, length delimited. Does not implicitly {@link prb.RequestStartWorkerLifecycle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.RequestStartWorkerLifecycle
         * @static
         * @param {prb.IRequestStartWorkerLifecycle} message RequestStartWorkerLifecycle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestStartWorkerLifecycle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestStartWorkerLifecycle message from the specified reader or buffer.
         * @function decode
         * @memberof prb.RequestStartWorkerLifecycle
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.RequestStartWorkerLifecycle} RequestStartWorkerLifecycle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestStartWorkerLifecycle.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.RequestStartWorkerLifecycle();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.requests && m.requests.length))
                        m.requests = [];
                    m.requests.push($root.prb.LifecycleActionRequest.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a RequestStartWorkerLifecycle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.RequestStartWorkerLifecycle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.RequestStartWorkerLifecycle} RequestStartWorkerLifecycle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestStartWorkerLifecycle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestStartWorkerLifecycle message.
         * @function verify
         * @memberof prb.RequestStartWorkerLifecycle
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestStartWorkerLifecycle.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.requests != null && m.hasOwnProperty("requests")) {
                if (!Array.isArray(m.requests))
                    return "requests: array expected";
                for (var i = 0; i < m.requests.length; ++i) {
                    {
                        var e = $root.prb.LifecycleActionRequest.verify(m.requests[i]);
                        if (e)
                            return "requests." + e;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a RequestStartWorkerLifecycle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.RequestStartWorkerLifecycle
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.RequestStartWorkerLifecycle} RequestStartWorkerLifecycle
         */
        RequestStartWorkerLifecycle.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.RequestStartWorkerLifecycle)
                return d;
            var m = new $root.prb.RequestStartWorkerLifecycle();
            if (d.requests) {
                if (!Array.isArray(d.requests))
                    throw TypeError(".prb.RequestStartWorkerLifecycle.requests: array expected");
                m.requests = [];
                for (var i = 0; i < d.requests.length; ++i) {
                    if (typeof d.requests[i] !== "object")
                        throw TypeError(".prb.RequestStartWorkerLifecycle.requests: object expected");
                    m.requests[i] = $root.prb.LifecycleActionRequest.fromObject(d.requests[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RequestStartWorkerLifecycle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.RequestStartWorkerLifecycle
         * @static
         * @param {prb.RequestStartWorkerLifecycle} m RequestStartWorkerLifecycle
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestStartWorkerLifecycle.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.requests = [];
            }
            if (m.requests && m.requests.length) {
                d.requests = [];
                for (var j = 0; j < m.requests.length; ++j) {
                    d.requests[j] = $root.prb.LifecycleActionRequest.toObject(m.requests[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RequestStartWorkerLifecycle to JSON.
         * @function toJSON
         * @memberof prb.RequestStartWorkerLifecycle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestStartWorkerLifecycle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestStartWorkerLifecycle;
    })();

    prb.RequestKickWorker = (function() {

        /**
         * Properties of a RequestKickWorker.
         * @memberof prb
         * @interface IRequestKickWorker
         * @property {Array.<prb.ILifecycleActionRequest>|null} [requests] RequestKickWorker requests
         */

        /**
         * Constructs a new RequestKickWorker.
         * @memberof prb
         * @classdesc Represents a RequestKickWorker.
         * @implements IRequestKickWorker
         * @constructor
         * @param {prb.IRequestKickWorker=} [p] Properties to set
         */
        function RequestKickWorker(p) {
            this.requests = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RequestKickWorker requests.
         * @member {Array.<prb.ILifecycleActionRequest>} requests
         * @memberof prb.RequestKickWorker
         * @instance
         */
        RequestKickWorker.prototype.requests = $util.emptyArray;

        /**
         * Creates a new RequestKickWorker instance using the specified properties.
         * @function create
         * @memberof prb.RequestKickWorker
         * @static
         * @param {prb.IRequestKickWorker=} [properties] Properties to set
         * @returns {prb.RequestKickWorker} RequestKickWorker instance
         */
        RequestKickWorker.create = function create(properties) {
            return new RequestKickWorker(properties);
        };

        /**
         * Encodes the specified RequestKickWorker message. Does not implicitly {@link prb.RequestKickWorker.verify|verify} messages.
         * @function encode
         * @memberof prb.RequestKickWorker
         * @static
         * @param {prb.IRequestKickWorker} m RequestKickWorker message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestKickWorker.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.requests != null && m.requests.length) {
                for (var i = 0; i < m.requests.length; ++i)
                    $root.prb.LifecycleActionRequest.encode(m.requests[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Encodes the specified RequestKickWorker message, length delimited. Does not implicitly {@link prb.RequestKickWorker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.RequestKickWorker
         * @static
         * @param {prb.IRequestKickWorker} message RequestKickWorker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestKickWorker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestKickWorker message from the specified reader or buffer.
         * @function decode
         * @memberof prb.RequestKickWorker
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {prb.RequestKickWorker} RequestKickWorker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestKickWorker.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.prb.RequestKickWorker();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.requests && m.requests.length))
                        m.requests = [];
                    m.requests.push($root.prb.LifecycleActionRequest.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a RequestKickWorker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.RequestKickWorker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.RequestKickWorker} RequestKickWorker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestKickWorker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestKickWorker message.
         * @function verify
         * @memberof prb.RequestKickWorker
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestKickWorker.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.requests != null && m.hasOwnProperty("requests")) {
                if (!Array.isArray(m.requests))
                    return "requests: array expected";
                for (var i = 0; i < m.requests.length; ++i) {
                    {
                        var e = $root.prb.LifecycleActionRequest.verify(m.requests[i]);
                        if (e)
                            return "requests." + e;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a RequestKickWorker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.RequestKickWorker
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {prb.RequestKickWorker} RequestKickWorker
         */
        RequestKickWorker.fromObject = function fromObject(d) {
            if (d instanceof $root.prb.RequestKickWorker)
                return d;
            var m = new $root.prb.RequestKickWorker();
            if (d.requests) {
                if (!Array.isArray(d.requests))
                    throw TypeError(".prb.RequestKickWorker.requests: array expected");
                m.requests = [];
                for (var i = 0; i < d.requests.length; ++i) {
                    if (typeof d.requests[i] !== "object")
                        throw TypeError(".prb.RequestKickWorker.requests: object expected");
                    m.requests[i] = $root.prb.LifecycleActionRequest.fromObject(d.requests[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a RequestKickWorker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.RequestKickWorker
         * @static
         * @param {prb.RequestKickWorker} m RequestKickWorker
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestKickWorker.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.requests = [];
            }
            if (m.requests && m.requests.length) {
                d.requests = [];
                for (var j = 0; j < m.requests.length; ++j) {
                    d.requests[j] = $root.prb.LifecycleActionRequest.toObject(m.requests[j], o);
                }
            }
            return d;
        };

        /**
         * Converts this RequestKickWorker to JSON.
         * @function toJSON
         * @memberof prb.RequestKickWorker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestKickWorker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestKickWorker;
    })();

    return prb;
})();

export { $root as default };

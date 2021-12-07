import * as $protobuf from "protobufjs";
/** Namespace prb. */
export namespace prb {

    /** WalkieRoles enum. */
    enum WalkieRoles {
        CLIENT = 0,
        DATA_PROVIDER = 1,
        LIFECYCLE_MANAGER = 2,
        TRADER = 3
    }

    /** Properties of a WalkieSystemInfo. */
    interface IWalkieSystemInfo {

        /** WalkieSystemInfo hostname */
        hostname?: (string|null);

        /** WalkieSystemInfo peerId */
        peerId?: (string|null);

        /** WalkieSystemInfo role */
        role?: (prb.WalkieRoles|null);
    }

    /** Represents a WalkieSystemInfo. */
    class WalkieSystemInfo implements IWalkieSystemInfo {

        /**
         * Constructs a new WalkieSystemInfo.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IWalkieSystemInfo);

        /** WalkieSystemInfo hostname. */
        public hostname: string;

        /** WalkieSystemInfo peerId. */
        public peerId: string;

        /** WalkieSystemInfo role. */
        public role: prb.WalkieRoles;

        /**
         * Creates a new WalkieSystemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WalkieSystemInfo instance
         */
        public static create(properties?: prb.IWalkieSystemInfo): prb.WalkieSystemInfo;

        /**
         * Encodes the specified WalkieSystemInfo message. Does not implicitly {@link prb.WalkieSystemInfo.verify|verify} messages.
         * @param m WalkieSystemInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IWalkieSystemInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WalkieSystemInfo message, length delimited. Does not implicitly {@link prb.WalkieSystemInfo.verify|verify} messages.
         * @param message WalkieSystemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IWalkieSystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WalkieSystemInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WalkieSystemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WalkieSystemInfo;

        /**
         * Decodes a WalkieSystemInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WalkieSystemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WalkieSystemInfo;

        /**
         * Verifies a WalkieSystemInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a WalkieSystemInfo message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns WalkieSystemInfo
         */
        public static fromObject(d: { [k: string]: any }): prb.WalkieSystemInfo;

        /**
         * Creates a plain object from a WalkieSystemInfo message. Also converts values to other types if specified.
         * @param m WalkieSystemInfo
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.WalkieSystemInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WalkieSystemInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WalkieRpcRequestWrapper. */
    interface IWalkieRpcRequestWrapper {

        /** WalkieRpcRequestWrapper createdAt */
        createdAt?: (number|Long|null);

        /** WalkieRpcRequestWrapper nonce */
        nonce?: (string|null);

        /** WalkieRpcRequestWrapper data */
        data?: (Uint8Array|null);

        /** WalkieRpcRequestWrapper method */
        method?: (string|null);

        /** WalkieRpcRequestWrapper ns */
        ns?: (string|null);
    }

    /** Represents a WalkieRpcRequestWrapper. */
    class WalkieRpcRequestWrapper implements IWalkieRpcRequestWrapper {

        /**
         * Constructs a new WalkieRpcRequestWrapper.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IWalkieRpcRequestWrapper);

        /** WalkieRpcRequestWrapper createdAt. */
        public createdAt: (number|Long);

        /** WalkieRpcRequestWrapper nonce. */
        public nonce: string;

        /** WalkieRpcRequestWrapper data. */
        public data: Uint8Array;

        /** WalkieRpcRequestWrapper method. */
        public method: string;

        /** WalkieRpcRequestWrapper ns. */
        public ns: string;

        /**
         * Creates a new WalkieRpcRequestWrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WalkieRpcRequestWrapper instance
         */
        public static create(properties?: prb.IWalkieRpcRequestWrapper): prb.WalkieRpcRequestWrapper;

        /**
         * Encodes the specified WalkieRpcRequestWrapper message. Does not implicitly {@link prb.WalkieRpcRequestWrapper.verify|verify} messages.
         * @param m WalkieRpcRequestWrapper message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IWalkieRpcRequestWrapper, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WalkieRpcRequestWrapper message, length delimited. Does not implicitly {@link prb.WalkieRpcRequestWrapper.verify|verify} messages.
         * @param message WalkieRpcRequestWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IWalkieRpcRequestWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WalkieRpcRequestWrapper message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WalkieRpcRequestWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WalkieRpcRequestWrapper;

        /**
         * Decodes a WalkieRpcRequestWrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WalkieRpcRequestWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WalkieRpcRequestWrapper;

        /**
         * Verifies a WalkieRpcRequestWrapper message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a WalkieRpcRequestWrapper message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns WalkieRpcRequestWrapper
         */
        public static fromObject(d: { [k: string]: any }): prb.WalkieRpcRequestWrapper;

        /**
         * Creates a plain object from a WalkieRpcRequestWrapper message. Also converts values to other types if specified.
         * @param m WalkieRpcRequestWrapper
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.WalkieRpcRequestWrapper, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WalkieRpcRequestWrapper to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WalkieRpcResponseWrapper. */
    interface IWalkieRpcResponseWrapper {

        /** WalkieRpcResponseWrapper createdAt */
        createdAt?: (number|Long|null);

        /** WalkieRpcResponseWrapper requestNonce */
        requestNonce?: (string|null);

        /** WalkieRpcResponseWrapper nonce */
        nonce?: (string|null);

        /** WalkieRpcResponseWrapper data */
        data?: (Uint8Array|null);

        /** WalkieRpcResponseWrapper hasError */
        hasError?: (boolean|null);
    }

    /** Represents a WalkieRpcResponseWrapper. */
    class WalkieRpcResponseWrapper implements IWalkieRpcResponseWrapper {

        /**
         * Constructs a new WalkieRpcResponseWrapper.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IWalkieRpcResponseWrapper);

        /** WalkieRpcResponseWrapper createdAt. */
        public createdAt: (number|Long);

        /** WalkieRpcResponseWrapper requestNonce. */
        public requestNonce: string;

        /** WalkieRpcResponseWrapper nonce. */
        public nonce: string;

        /** WalkieRpcResponseWrapper data. */
        public data: Uint8Array;

        /** WalkieRpcResponseWrapper hasError. */
        public hasError: boolean;

        /**
         * Creates a new WalkieRpcResponseWrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WalkieRpcResponseWrapper instance
         */
        public static create(properties?: prb.IWalkieRpcResponseWrapper): prb.WalkieRpcResponseWrapper;

        /**
         * Encodes the specified WalkieRpcResponseWrapper message. Does not implicitly {@link prb.WalkieRpcResponseWrapper.verify|verify} messages.
         * @param m WalkieRpcResponseWrapper message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IWalkieRpcResponseWrapper, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WalkieRpcResponseWrapper message, length delimited. Does not implicitly {@link prb.WalkieRpcResponseWrapper.verify|verify} messages.
         * @param message WalkieRpcResponseWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IWalkieRpcResponseWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WalkieRpcResponseWrapper message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WalkieRpcResponseWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WalkieRpcResponseWrapper;

        /**
         * Decodes a WalkieRpcResponseWrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WalkieRpcResponseWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WalkieRpcResponseWrapper;

        /**
         * Verifies a WalkieRpcResponseWrapper message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a WalkieRpcResponseWrapper message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns WalkieRpcResponseWrapper
         */
        public static fromObject(d: { [k: string]: any }): prb.WalkieRpcResponseWrapper;

        /**
         * Creates a plain object from a WalkieRpcResponseWrapper message. Also converts values to other types if specified.
         * @param m WalkieRpcResponseWrapper
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.WalkieRpcResponseWrapper, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WalkieRpcResponseWrapper to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WalkieBroadcastWrapper. */
    interface IWalkieBroadcastWrapper {

        /** WalkieBroadcastWrapper createdAt */
        createdAt?: (number|Long|null);

        /** WalkieBroadcastWrapper nonce */
        nonce?: (string|null);

        /** WalkieBroadcastWrapper data */
        data?: (Uint8Array|null);

        /** WalkieBroadcastWrapper method */
        method?: (string|null);

        /** WalkieBroadcastWrapper ns */
        ns?: (string|null);
    }

    /** Represents a WalkieBroadcastWrapper. */
    class WalkieBroadcastWrapper implements IWalkieBroadcastWrapper {

        /**
         * Constructs a new WalkieBroadcastWrapper.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IWalkieBroadcastWrapper);

        /** WalkieBroadcastWrapper createdAt. */
        public createdAt: (number|Long);

        /** WalkieBroadcastWrapper nonce. */
        public nonce: string;

        /** WalkieBroadcastWrapper data. */
        public data: Uint8Array;

        /** WalkieBroadcastWrapper method. */
        public method: string;

        /** WalkieBroadcastWrapper ns. */
        public ns: string;

        /**
         * Creates a new WalkieBroadcastWrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WalkieBroadcastWrapper instance
         */
        public static create(properties?: prb.IWalkieBroadcastWrapper): prb.WalkieBroadcastWrapper;

        /**
         * Encodes the specified WalkieBroadcastWrapper message. Does not implicitly {@link prb.WalkieBroadcastWrapper.verify|verify} messages.
         * @param m WalkieBroadcastWrapper message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IWalkieBroadcastWrapper, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WalkieBroadcastWrapper message, length delimited. Does not implicitly {@link prb.WalkieBroadcastWrapper.verify|verify} messages.
         * @param message WalkieBroadcastWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IWalkieBroadcastWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WalkieBroadcastWrapper message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WalkieBroadcastWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WalkieBroadcastWrapper;

        /**
         * Decodes a WalkieBroadcastWrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WalkieBroadcastWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WalkieBroadcastWrapper;

        /**
         * Verifies a WalkieBroadcastWrapper message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a WalkieBroadcastWrapper message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns WalkieBroadcastWrapper
         */
        public static fromObject(d: { [k: string]: any }): prb.WalkieBroadcastWrapper;

        /**
         * Creates a plain object from a WalkieBroadcastWrapper message. Also converts values to other types if specified.
         * @param m WalkieBroadcastWrapper
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.WalkieBroadcastWrapper, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WalkieBroadcastWrapper to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a WalkieRpc */
    class WalkieRpc extends $protobuf.rpc.Service {

        /**
         * Constructs a new WalkieRpc service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new WalkieRpc service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WalkieRpc;

        /**
         * Calls GetSystemInfo.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and WalkieSystemInfo
         */
        public getSystemInfo(request: prb.IEmpty, callback: prb.WalkieRpc.GetSystemInfoCallback): void;

        /**
         * Calls GetSystemInfo.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getSystemInfo(request: prb.IEmpty): Promise<prb.WalkieSystemInfo>;

        /**
         * Calls GetDataProviderInfo.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and Info
         */
        public getDataProviderInfo(request: prb.IEmpty, callback: prb.WalkieRpc.GetDataProviderInfoCallback): void;

        /**
         * Calls GetDataProviderInfo.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getDataProviderInfo(request: prb.IEmpty): Promise<prb.data_provider.Info>;

        /**
         * Calls GetBlobByKey.
         * @param request GetBlobByKey message or plain object
         * @param callback Node-style callback called with the error, if any, and RawBlob
         */
        public getBlobByKey(request: prb.data_provider.IGetBlobByKey, callback: prb.WalkieRpc.GetBlobByKeyCallback): void;

        /**
         * Calls GetBlobByKey.
         * @param request GetBlobByKey message or plain object
         * @returns Promise
         */
        public getBlobByKey(request: prb.data_provider.IGetBlobByKey): Promise<prb.data_provider.RawBlob>;

        /**
         * Calls ListPool.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and PoolList
         */
        public listPool(request: prb.IEmpty, callback: prb.WalkieRpc.ListPoolCallback): void;

        /**
         * Calls ListPool.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public listPool(request: prb.IEmpty): Promise<prb.data_provider.PoolList>;

        /**
         * Calls CreatePool.
         * @param request CreatePool message or plain object
         * @param callback Node-style callback called with the error, if any, and PoolList
         */
        public createPool(request: prb.data_provider.ICreatePool, callback: prb.WalkieRpc.CreatePoolCallback): void;

        /**
         * Calls CreatePool.
         * @param request CreatePool message or plain object
         * @returns Promise
         */
        public createPool(request: prb.data_provider.ICreatePool): Promise<prb.data_provider.PoolList>;

        /**
         * Calls UpdatePool.
         * @param request UpdatePool message or plain object
         * @param callback Node-style callback called with the error, if any, and PoolList
         */
        public updatePool(request: prb.data_provider.IUpdatePool, callback: prb.WalkieRpc.UpdatePoolCallback): void;

        /**
         * Calls UpdatePool.
         * @param request UpdatePool message or plain object
         * @returns Promise
         */
        public updatePool(request: prb.data_provider.IUpdatePool): Promise<prb.data_provider.PoolList>;

        /**
         * Calls ListWorker.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and WorkerList
         */
        public listWorker(request: prb.IEmpty, callback: prb.WalkieRpc.ListWorkerCallback): void;

        /**
         * Calls ListWorker.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public listWorker(request: prb.IEmpty): Promise<prb.data_provider.WorkerList>;

        /**
         * Calls CreateWorker.
         * @param request CreateWorker message or plain object
         * @param callback Node-style callback called with the error, if any, and WorkerList
         */
        public createWorker(request: prb.data_provider.ICreateWorker, callback: prb.WalkieRpc.CreateWorkerCallback): void;

        /**
         * Calls CreateWorker.
         * @param request CreateWorker message or plain object
         * @returns Promise
         */
        public createWorker(request: prb.data_provider.ICreateWorker): Promise<prb.data_provider.WorkerList>;

        /**
         * Calls UpdateWorker.
         * @param request UpdateWorker message or plain object
         * @param callback Node-style callback called with the error, if any, and WorkerList
         */
        public updateWorker(request: prb.data_provider.IUpdateWorker, callback: prb.WalkieRpc.UpdateWorkerCallback): void;

        /**
         * Calls UpdateWorker.
         * @param request UpdateWorker message or plain object
         * @returns Promise
         */
        public updateWorker(request: prb.data_provider.IUpdateWorker): Promise<prb.data_provider.WorkerList>;

        /**
         * Calls WantBlob.
         * @param request WantBlob message or plain object
         * @param callback Node-style callback called with the error, if any, and BlobMeta
         */
        public wantBlob(request: prb.data_provider.IWantBlob, callback: prb.WalkieRpc.WantBlobCallback): void;

        /**
         * Calls WantBlob.
         * @param request WantBlob message or plain object
         * @returns Promise
         */
        public wantBlob(request: prb.data_provider.IWantBlob): Promise<prb.data_provider.BlobMeta>;

        /**
         * Calls GetBlobWithToken.
         * @param request GetBlob message or plain object
         * @param callback Node-style callback called with the error, if any, and Blob
         */
        public getBlobWithToken(request: prb.data_provider.IGetBlob, callback: prb.WalkieRpc.GetBlobWithTokenCallback): void;

        /**
         * Calls GetBlobWithToken.
         * @param request GetBlob message or plain object
         * @returns Promise
         */
        public getBlobWithToken(request: prb.data_provider.IGetBlob): Promise<prb.data_provider.Blob>;
    }

    namespace WalkieRpc {

        /**
         * Callback as used by {@link prb.WalkieRpc#getSystemInfo}.
         * @param error Error, if any
         * @param [response] WalkieSystemInfo
         */
        type GetSystemInfoCallback = (error: (Error|null), response?: prb.WalkieSystemInfo) => void;

        /**
         * Callback as used by {@link prb.WalkieRpc#getDataProviderInfo}.
         * @param error Error, if any
         * @param [response] Info
         */
        type GetDataProviderInfoCallback = (error: (Error|null), response?: prb.data_provider.Info) => void;

        /**
         * Callback as used by {@link prb.WalkieRpc#getBlobByKey}.
         * @param error Error, if any
         * @param [response] RawBlob
         */
        type GetBlobByKeyCallback = (error: (Error|null), response?: prb.data_provider.RawBlob) => void;

        /**
         * Callback as used by {@link prb.WalkieRpc#listPool}.
         * @param error Error, if any
         * @param [response] PoolList
         */
        type ListPoolCallback = (error: (Error|null), response?: prb.data_provider.PoolList) => void;

        /**
         * Callback as used by {@link prb.WalkieRpc#createPool}.
         * @param error Error, if any
         * @param [response] PoolList
         */
        type CreatePoolCallback = (error: (Error|null), response?: prb.data_provider.PoolList) => void;

        /**
         * Callback as used by {@link prb.WalkieRpc#updatePool}.
         * @param error Error, if any
         * @param [response] PoolList
         */
        type UpdatePoolCallback = (error: (Error|null), response?: prb.data_provider.PoolList) => void;

        /**
         * Callback as used by {@link prb.WalkieRpc#listWorker}.
         * @param error Error, if any
         * @param [response] WorkerList
         */
        type ListWorkerCallback = (error: (Error|null), response?: prb.data_provider.WorkerList) => void;

        /**
         * Callback as used by {@link prb.WalkieRpc#createWorker}.
         * @param error Error, if any
         * @param [response] WorkerList
         */
        type CreateWorkerCallback = (error: (Error|null), response?: prb.data_provider.WorkerList) => void;

        /**
         * Callback as used by {@link prb.WalkieRpc#updateWorker}.
         * @param error Error, if any
         * @param [response] WorkerList
         */
        type UpdateWorkerCallback = (error: (Error|null), response?: prb.data_provider.WorkerList) => void;

        /**
         * Callback as used by {@link prb.WalkieRpc#wantBlob}.
         * @param error Error, if any
         * @param [response] BlobMeta
         */
        type WantBlobCallback = (error: (Error|null), response?: prb.data_provider.BlobMeta) => void;

        /**
         * Callback as used by {@link prb.WalkieRpc#getBlobWithToken}.
         * @param error Error, if any
         * @param [response] Blob
         */
        type GetBlobWithTokenCallback = (error: (Error|null), response?: prb.data_provider.Blob) => void;
    }

    /** Represents a WalkieBroadcast */
    class WalkieBroadcast extends $protobuf.rpc.Service {

        /**
         * Constructs a new WalkieBroadcast service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new WalkieBroadcast service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WalkieBroadcast;
    }

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: prb.IEmpty): prb.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link prb.Empty.verify|verify} messages.
         * @param m Empty message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IEmpty, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link prb.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.Empty;

        /**
         * Verifies an Empty message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Empty
         */
        public static fromObject(d: { [k: string]: any }): prb.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param m Empty
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.Empty, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Placeholder. */
    interface IPlaceholder {
    }

    /** Represents a Placeholder. */
    class Placeholder implements IPlaceholder {

        /**
         * Constructs a new Placeholder.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IPlaceholder);

        /**
         * Creates a new Placeholder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Placeholder instance
         */
        public static create(properties?: prb.IPlaceholder): prb.Placeholder;

        /**
         * Encodes the specified Placeholder message. Does not implicitly {@link prb.Placeholder.verify|verify} messages.
         * @param m Placeholder message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IPlaceholder, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Placeholder message, length delimited. Does not implicitly {@link prb.Placeholder.verify|verify} messages.
         * @param message Placeholder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IPlaceholder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Placeholder message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Placeholder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.Placeholder;

        /**
         * Decodes a Placeholder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Placeholder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.Placeholder;

        /**
         * Verifies a Placeholder message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a Placeholder message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Placeholder
         */
        public static fromObject(d: { [k: string]: any }): prb.Placeholder;

        /**
         * Creates a plain object from a Placeholder message. Also converts values to other types if specified.
         * @param m Placeholder
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.Placeholder, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Placeholder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Ack. */
    interface IAck {

        /** Ack ack */
        ack?: (boolean|null);
    }

    /** Represents an Ack. */
    class Ack implements IAck {

        /**
         * Constructs a new Ack.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IAck);

        /** Ack ack. */
        public ack: boolean;

        /**
         * Creates a new Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ack instance
         */
        public static create(properties?: prb.IAck): prb.Ack;

        /**
         * Encodes the specified Ack message. Does not implicitly {@link prb.Ack.verify|verify} messages.
         * @param m Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IAck, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ack message, length delimited. Does not implicitly {@link prb.Ack.verify|verify} messages.
         * @param message Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.Ack;

        /**
         * Decodes an Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.Ack;

        /**
         * Verifies an Ack message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates an Ack message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Ack
         */
        public static fromObject(d: { [k: string]: any }): prb.Ack;

        /**
         * Creates a plain object from an Ack message. Also converts values to other types if specified.
         * @param m Ack
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.Ack, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BN. */
    interface IBN {

        /** BN value */
        value?: (string|null);
    }

    /** Represents a BN. */
    class BN implements IBN {

        /**
         * Constructs a new BN.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IBN);

        /** BN value. */
        public value: string;

        /**
         * Creates a new BN instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BN instance
         */
        public static create(properties?: prb.IBN): prb.BN;

        /**
         * Encodes the specified BN message. Does not implicitly {@link prb.BN.verify|verify} messages.
         * @param m BN message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IBN, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BN message, length delimited. Does not implicitly {@link prb.BN.verify|verify} messages.
         * @param message BN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IBN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BN message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.BN;

        /**
         * Decodes a BN message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.BN;

        /**
         * Verifies a BN message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a BN message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns BN
         */
        public static fromObject(d: { [k: string]: any }): prb.BN;

        /**
         * Creates a plain object from a BN message. Also converts values to other types if specified.
         * @param m BN
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.BN, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BN to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FullAccount. */
    interface IFullAccount {

        /** FullAccount mnemonic */
        mnemonic?: (string|null);

        /** FullAccount polkadotJson */
        polkadotJson?: (string|null);

        /** FullAccount ss58Phala */
        ss58Phala?: (string|null);

        /** FullAccount ss58Polkadot */
        ss58Polkadot?: (string|null);
    }

    /** Represents a FullAccount. */
    class FullAccount implements IFullAccount {

        /**
         * Constructs a new FullAccount.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IFullAccount);

        /** FullAccount mnemonic. */
        public mnemonic: string;

        /** FullAccount polkadotJson. */
        public polkadotJson: string;

        /** FullAccount ss58Phala. */
        public ss58Phala: string;

        /** FullAccount ss58Polkadot. */
        public ss58Polkadot: string;

        /**
         * Creates a new FullAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FullAccount instance
         */
        public static create(properties?: prb.IFullAccount): prb.FullAccount;

        /**
         * Encodes the specified FullAccount message. Does not implicitly {@link prb.FullAccount.verify|verify} messages.
         * @param m FullAccount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IFullAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FullAccount message, length delimited. Does not implicitly {@link prb.FullAccount.verify|verify} messages.
         * @param message FullAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IFullAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FullAccount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FullAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.FullAccount;

        /**
         * Decodes a FullAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FullAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.FullAccount;

        /**
         * Verifies a FullAccount message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a FullAccount message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns FullAccount
         */
        public static fromObject(d: { [k: string]: any }): prb.FullAccount;

        /**
         * Creates a plain object from a FullAccount message. Also converts values to other types if specified.
         * @param m FullAccount
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.FullAccount, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FullAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Account. */
    interface IAccount {

        /** Account ss58Phala */
        ss58Phala?: (string|null);

        /** Account ss58Polkadot */
        ss58Polkadot?: (string|null);
    }

    /** Represents an Account. */
    class Account implements IAccount {

        /**
         * Constructs a new Account.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IAccount);

        /** Account ss58Phala. */
        public ss58Phala: string;

        /** Account ss58Polkadot. */
        public ss58Polkadot: string;

        /**
         * Creates a new Account instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Account instance
         */
        public static create(properties?: prb.IAccount): prb.Account;

        /**
         * Encodes the specified Account message. Does not implicitly {@link prb.Account.verify|verify} messages.
         * @param m Account message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link prb.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.Account;

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.Account;

        /**
         * Verifies an Account message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Account
         */
        public static fromObject(d: { [k: string]: any }): prb.Account;

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @param m Account
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.Account, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Account to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GenericError. */
    interface IGenericError {

        /** GenericError code */
        code?: (string|null);

        /** GenericError desc */
        desc?: (string|null);
    }

    /** Represents a GenericError. */
    class GenericError implements IGenericError {

        /**
         * Constructs a new GenericError.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IGenericError);

        /** GenericError code. */
        public code: string;

        /** GenericError desc. */
        public desc: string;

        /**
         * Creates a new GenericError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GenericError instance
         */
        public static create(properties?: prb.IGenericError): prb.GenericError;

        /**
         * Encodes the specified GenericError message. Does not implicitly {@link prb.GenericError.verify|verify} messages.
         * @param m GenericError message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IGenericError, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GenericError message, length delimited. Does not implicitly {@link prb.GenericError.verify|verify} messages.
         * @param message GenericError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IGenericError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GenericError message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GenericError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.GenericError;

        /**
         * Decodes a GenericError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GenericError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.GenericError;

        /**
         * Verifies a GenericError message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a GenericError message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns GenericError
         */
        public static fromObject(d: { [k: string]: any }): prb.GenericError;

        /**
         * Creates a plain object from a GenericError message. Also converts values to other types if specified.
         * @param m GenericError
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.GenericError, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GenericError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotFoundError. */
    interface INotFoundError {

        /** NotFoundError desc */
        desc?: (string|null);
    }

    /** Represents a NotFoundError. */
    class NotFoundError implements INotFoundError {

        /**
         * Constructs a new NotFoundError.
         * @param [p] Properties to set
         */
        constructor(p?: prb.INotFoundError);

        /** NotFoundError desc. */
        public desc: string;

        /**
         * Creates a new NotFoundError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotFoundError instance
         */
        public static create(properties?: prb.INotFoundError): prb.NotFoundError;

        /**
         * Encodes the specified NotFoundError message. Does not implicitly {@link prb.NotFoundError.verify|verify} messages.
         * @param m NotFoundError message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.INotFoundError, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotFoundError message, length delimited. Does not implicitly {@link prb.NotFoundError.verify|verify} messages.
         * @param message NotFoundError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.INotFoundError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotFoundError message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns NotFoundError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.NotFoundError;

        /**
         * Decodes a NotFoundError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotFoundError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.NotFoundError;

        /**
         * Verifies a NotFoundError message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a NotFoundError message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns NotFoundError
         */
        public static fromObject(d: { [k: string]: any }): prb.NotFoundError;

        /**
         * Creates a plain object from a NotFoundError message. Also converts values to other types if specified.
         * @param m NotFoundError
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.NotFoundError, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotFoundError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DuplicatedError. */
    interface IDuplicatedError {

        /** DuplicatedError desc */
        desc?: (string|null);
    }

    /** Represents a DuplicatedError. */
    class DuplicatedError implements IDuplicatedError {

        /**
         * Constructs a new DuplicatedError.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IDuplicatedError);

        /** DuplicatedError desc. */
        public desc: string;

        /**
         * Creates a new DuplicatedError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DuplicatedError instance
         */
        public static create(properties?: prb.IDuplicatedError): prb.DuplicatedError;

        /**
         * Encodes the specified DuplicatedError message. Does not implicitly {@link prb.DuplicatedError.verify|verify} messages.
         * @param m DuplicatedError message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IDuplicatedError, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DuplicatedError message, length delimited. Does not implicitly {@link prb.DuplicatedError.verify|verify} messages.
         * @param message DuplicatedError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IDuplicatedError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DuplicatedError message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DuplicatedError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.DuplicatedError;

        /**
         * Decodes a DuplicatedError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DuplicatedError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.DuplicatedError;

        /**
         * Verifies a DuplicatedError message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a DuplicatedError message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns DuplicatedError
         */
        public static fromObject(d: { [k: string]: any }): prb.DuplicatedError;

        /**
         * Creates a plain object from a DuplicatedError message. Also converts values to other types if specified.
         * @param m DuplicatedError
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.DuplicatedError, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DuplicatedError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Error. */
    interface IError {

        /** Error extra */
        extra?: (string|null);

        /** Error generic */
        generic?: (prb.IGenericError|null);

        /** Error notFound */
        notFound?: (prb.INotFoundError|null);

        /** Error duplicated */
        duplicated?: (prb.IDuplicatedError|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IError);

        /** Error extra. */
        public extra: string;

        /** Error generic. */
        public generic?: (prb.IGenericError|null);

        /** Error notFound. */
        public notFound?: (prb.INotFoundError|null);

        /** Error duplicated. */
        public duplicated?: (prb.IDuplicatedError|null);

        /** Error error. */
        public error?: ("generic"|"notFound"|"duplicated");

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: prb.IError): prb.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link prb.Error.verify|verify} messages.
         * @param m Error message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IError, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link prb.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.Error;

        /**
         * Verifies an Error message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Error
         */
        public static fromObject(d: { [k: string]: any }): prb.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param m Error
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.Error, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Namespace db. */
    namespace db {

        /** Properties of a ParentBlock. */
        interface IParentBlock {

            /** ParentBlock number */
            number?: (number|null);

            /** ParentBlock hash */
            hash?: (Uint8Array|null);

            /** ParentBlock header */
            header?: (Uint8Array|null);

            /** ParentBlock setId */
            setId?: (number|null);

            /** ParentBlock hasJustification */
            hasJustification?: (boolean|null);

            /** ParentBlock syncHeaderData */
            syncHeaderData?: (Uint8Array|null);

            /** ParentBlock authoritySetChange */
            authoritySetChange?: (Uint8Array|null);

            /** ParentBlock paraNumber */
            paraNumber?: (number|null);

            /** ParentBlock paraProof */
            paraProof?: (Uint8Array|null);
        }

        /** Represents a ParentBlock. */
        class ParentBlock implements IParentBlock {

            /**
             * Constructs a new ParentBlock.
             * @param [p] Properties to set
             */
            constructor(p?: prb.db.IParentBlock);

            /** ParentBlock number. */
            public number: number;

            /** ParentBlock hash. */
            public hash: Uint8Array;

            /** ParentBlock header. */
            public header: Uint8Array;

            /** ParentBlock setId. */
            public setId: number;

            /** ParentBlock hasJustification. */
            public hasJustification: boolean;

            /** ParentBlock syncHeaderData. */
            public syncHeaderData: Uint8Array;

            /** ParentBlock authoritySetChange. */
            public authoritySetChange: Uint8Array;

            /** ParentBlock paraNumber. */
            public paraNumber: number;

            /** ParentBlock paraProof. */
            public paraProof: Uint8Array;

            /**
             * Creates a new ParentBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParentBlock instance
             */
            public static create(properties?: prb.db.IParentBlock): prb.db.ParentBlock;

            /**
             * Encodes the specified ParentBlock message. Does not implicitly {@link prb.db.ParentBlock.verify|verify} messages.
             * @param m ParentBlock message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.db.IParentBlock, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ParentBlock message, length delimited. Does not implicitly {@link prb.db.ParentBlock.verify|verify} messages.
             * @param message ParentBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.db.IParentBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParentBlock message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ParentBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.ParentBlock;

            /**
             * Decodes a ParentBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ParentBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.ParentBlock;

            /**
             * Verifies a ParentBlock message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a ParentBlock message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns ParentBlock
             */
            public static fromObject(d: { [k: string]: any }): prb.db.ParentBlock;

            /**
             * Creates a plain object from a ParentBlock message. Also converts values to other types if specified.
             * @param m ParentBlock
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.db.ParentBlock, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ParentBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ParaBlock. */
        interface IParaBlock {

            /** ParaBlock number */
            number?: (number|null);

            /** ParaBlock hash */
            hash?: (Uint8Array|null);

            /** ParaBlock header */
            header?: (Uint8Array|null);

            /** ParaBlock dispatchBlockData */
            dispatchBlockData?: (Uint8Array|null);
        }

        /** Represents a ParaBlock. */
        class ParaBlock implements IParaBlock {

            /**
             * Constructs a new ParaBlock.
             * @param [p] Properties to set
             */
            constructor(p?: prb.db.IParaBlock);

            /** ParaBlock number. */
            public number: number;

            /** ParaBlock hash. */
            public hash: Uint8Array;

            /** ParaBlock header. */
            public header: Uint8Array;

            /** ParaBlock dispatchBlockData. */
            public dispatchBlockData: Uint8Array;

            /**
             * Creates a new ParaBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParaBlock instance
             */
            public static create(properties?: prb.db.IParaBlock): prb.db.ParaBlock;

            /**
             * Encodes the specified ParaBlock message. Does not implicitly {@link prb.db.ParaBlock.verify|verify} messages.
             * @param m ParaBlock message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.db.IParaBlock, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ParaBlock message, length delimited. Does not implicitly {@link prb.db.ParaBlock.verify|verify} messages.
             * @param message ParaBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.db.IParaBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParaBlock message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ParaBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.ParaBlock;

            /**
             * Decodes a ParaBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ParaBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.ParaBlock;

            /**
             * Verifies a ParaBlock message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a ParaBlock message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns ParaBlock
             */
            public static fromObject(d: { [k: string]: any }): prb.db.ParaBlock;

            /**
             * Creates a plain object from a ParaBlock message. Also converts values to other types if specified.
             * @param m ParaBlock
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.db.ParaBlock, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ParaBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Genesis. */
        interface IGenesis {

            /** Genesis paraId */
            paraId?: (number|null);

            /** Genesis paraNumber */
            paraNumber?: (number|null);

            /** Genesis parentNumber */
            parentNumber?: (number|null);

            /** Genesis bridgeGenesisInfo */
            bridgeGenesisInfo?: (Uint8Array|null);

            /** Genesis genesisState */
            genesisState?: (Uint8Array|null);
        }

        /** Represents a Genesis. */
        class Genesis implements IGenesis {

            /**
             * Constructs a new Genesis.
             * @param [p] Properties to set
             */
            constructor(p?: prb.db.IGenesis);

            /** Genesis paraId. */
            public paraId: number;

            /** Genesis paraNumber. */
            public paraNumber: number;

            /** Genesis parentNumber. */
            public parentNumber: number;

            /** Genesis bridgeGenesisInfo. */
            public bridgeGenesisInfo: Uint8Array;

            /** Genesis genesisState. */
            public genesisState: Uint8Array;

            /**
             * Creates a new Genesis instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Genesis instance
             */
            public static create(properties?: prb.db.IGenesis): prb.db.Genesis;

            /**
             * Encodes the specified Genesis message. Does not implicitly {@link prb.db.Genesis.verify|verify} messages.
             * @param m Genesis message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.db.IGenesis, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Genesis message, length delimited. Does not implicitly {@link prb.db.Genesis.verify|verify} messages.
             * @param message Genesis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.db.IGenesis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Genesis message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Genesis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.Genesis;

            /**
             * Decodes a Genesis message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Genesis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.Genesis;

            /**
             * Verifies a Genesis message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a Genesis message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns Genesis
             */
            public static fromObject(d: { [k: string]: any }): prb.db.Genesis;

            /**
             * Creates a plain object from a Genesis message. Also converts values to other types if specified.
             * @param m Genesis
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.db.Genesis, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Genesis to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Window. */
        interface IWindow {

            /** Window parentStartBlock */
            parentStartBlock?: (number|null);

            /** Window parentStopBlock */
            parentStopBlock?: (number|null);

            /** Window paraStartBlock */
            paraStartBlock?: (number|null);

            /** Window paraStopBlock */
            paraStopBlock?: (number|null);

            /** Window windowId */
            windowId?: (number|null);

            /** Window setId */
            setId?: (number|null);

            /** Window isFinished */
            isFinished?: (boolean|null);
        }

        /** Represents a Window. */
        class Window implements IWindow {

            /**
             * Constructs a new Window.
             * @param [p] Properties to set
             */
            constructor(p?: prb.db.IWindow);

            /** Window parentStartBlock. */
            public parentStartBlock: number;

            /** Window parentStopBlock. */
            public parentStopBlock: number;

            /** Window paraStartBlock. */
            public paraStartBlock: number;

            /** Window paraStopBlock. */
            public paraStopBlock: number;

            /** Window windowId. */
            public windowId: number;

            /** Window setId. */
            public setId: number;

            /** Window isFinished. */
            public isFinished: boolean;

            /**
             * Creates a new Window instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Window instance
             */
            public static create(properties?: prb.db.IWindow): prb.db.Window;

            /**
             * Encodes the specified Window message. Does not implicitly {@link prb.db.Window.verify|verify} messages.
             * @param m Window message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.db.IWindow, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Window message, length delimited. Does not implicitly {@link prb.db.Window.verify|verify} messages.
             * @param message Window message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.db.IWindow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Window message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Window
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.Window;

            /**
             * Decodes a Window message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Window
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.Window;

            /**
             * Verifies a Window message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a Window message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns Window
             */
            public static fromObject(d: { [k: string]: any }): prb.db.Window;

            /**
             * Creates a plain object from a Window message. Also converts values to other types if specified.
             * @param m Window
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.db.Window, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Window to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RangeMeta. */
        interface IRangeMeta {

            /** RangeMeta parentStartBlock */
            parentStartBlock?: (number|null);

            /** RangeMeta parentStopBlock */
            parentStopBlock?: (number|null);

            /** RangeMeta paraStartBlock */
            paraStartBlock?: (number|null);

            /** RangeMeta paraStopBlock */
            paraStopBlock?: (number|null);

            /** RangeMeta parentRange */
            parentRange?: (number[]|null);

            /** RangeMeta paraRange */
            paraRange?: (number[]|null);

            /** RangeMeta drySyncHeaderReqKey */
            drySyncHeaderReqKey?: (string|null);

            /** RangeMeta latestSetId */
            latestSetId?: (number|null);

            /** RangeMeta blobParentStopBlock */
            blobParentStopBlock?: (number|null);

            /** RangeMeta blobParaStopBlock */
            blobParaStopBlock?: (number|null);

            /** RangeMeta blobSyncHeaderReqKey */
            blobSyncHeaderReqKey?: (string|null);
        }

        /** Represents a RangeMeta. */
        class RangeMeta implements IRangeMeta {

            /**
             * Constructs a new RangeMeta.
             * @param [p] Properties to set
             */
            constructor(p?: prb.db.IRangeMeta);

            /** RangeMeta parentStartBlock. */
            public parentStartBlock: number;

            /** RangeMeta parentStopBlock. */
            public parentStopBlock: number;

            /** RangeMeta paraStartBlock. */
            public paraStartBlock: number;

            /** RangeMeta paraStopBlock. */
            public paraStopBlock: number;

            /** RangeMeta parentRange. */
            public parentRange: number[];

            /** RangeMeta paraRange. */
            public paraRange: number[];

            /** RangeMeta drySyncHeaderReqKey. */
            public drySyncHeaderReqKey: string;

            /** RangeMeta latestSetId. */
            public latestSetId: number;

            /** RangeMeta blobParentStopBlock. */
            public blobParentStopBlock: number;

            /** RangeMeta blobParaStopBlock. */
            public blobParaStopBlock: number;

            /** RangeMeta blobSyncHeaderReqKey. */
            public blobSyncHeaderReqKey: string;

            /**
             * Creates a new RangeMeta instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RangeMeta instance
             */
            public static create(properties?: prb.db.IRangeMeta): prb.db.RangeMeta;

            /**
             * Encodes the specified RangeMeta message. Does not implicitly {@link prb.db.RangeMeta.verify|verify} messages.
             * @param m RangeMeta message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.db.IRangeMeta, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RangeMeta message, length delimited. Does not implicitly {@link prb.db.RangeMeta.verify|verify} messages.
             * @param message RangeMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.db.IRangeMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RangeMeta message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RangeMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.RangeMeta;

            /**
             * Decodes a RangeMeta message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RangeMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.RangeMeta;

            /**
             * Verifies a RangeMeta message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a RangeMeta message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns RangeMeta
             */
            public static fromObject(d: { [k: string]: any }): prb.db.RangeMeta;

            /**
             * Creates a plain object from a RangeMeta message. Also converts values to other types if specified.
             * @param m RangeMeta
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.db.RangeMeta, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RangeMeta to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Pool. */
        interface IPool {

            /** Pool uuid */
            uuid?: (string|null);

            /** Pool owner */
            owner?: (prb.IFullAccount|null);

            /** Pool pid */
            pid?: (number|Long|null);

            /** Pool name */
            name?: (string|null);

            /** Pool enabled */
            enabled?: (boolean|null);

            /** Pool deleted */
            deleted?: (boolean|null);

            /** Pool realPhalaSs58 */
            realPhalaSs58?: (string|null);
        }

        /** Represents a Pool. */
        class Pool implements IPool {

            /**
             * Constructs a new Pool.
             * @param [p] Properties to set
             */
            constructor(p?: prb.db.IPool);

            /** Pool uuid. */
            public uuid: string;

            /** Pool owner. */
            public owner?: (prb.IFullAccount|null);

            /** Pool pid. */
            public pid: (number|Long);

            /** Pool name. */
            public name: string;

            /** Pool enabled. */
            public enabled: boolean;

            /** Pool deleted. */
            public deleted: boolean;

            /** Pool realPhalaSs58. */
            public realPhalaSs58: string;

            /**
             * Creates a new Pool instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pool instance
             */
            public static create(properties?: prb.db.IPool): prb.db.Pool;

            /**
             * Encodes the specified Pool message. Does not implicitly {@link prb.db.Pool.verify|verify} messages.
             * @param m Pool message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.db.IPool, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pool message, length delimited. Does not implicitly {@link prb.db.Pool.verify|verify} messages.
             * @param message Pool message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.db.IPool, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pool message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Pool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.Pool;

            /**
             * Decodes a Pool message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Pool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.Pool;

            /**
             * Verifies a Pool message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a Pool message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns Pool
             */
            public static fromObject(d: { [k: string]: any }): prb.db.Pool;

            /**
             * Creates a plain object from a Pool message. Also converts values to other types if specified.
             * @param m Pool
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.db.Pool, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pool to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Worker. */
        interface IWorker {

            /** Worker uuid */
            uuid?: (string|null);

            /** Worker pid */
            pid?: (number|Long|null);

            /** Worker name */
            name?: (string|null);

            /** Worker endpoint */
            endpoint?: (string|null);

            /** Worker enabled */
            enabled?: (boolean|null);

            /** Worker deleted */
            deleted?: (boolean|null);

            /** Worker stake */
            stake?: (string|null);
        }

        /** Represents a Worker. */
        class Worker implements IWorker {

            /**
             * Constructs a new Worker.
             * @param [p] Properties to set
             */
            constructor(p?: prb.db.IWorker);

            /** Worker uuid. */
            public uuid: string;

            /** Worker pid. */
            public pid: (number|Long);

            /** Worker name. */
            public name: string;

            /** Worker endpoint. */
            public endpoint: string;

            /** Worker enabled. */
            public enabled: boolean;

            /** Worker deleted. */
            public deleted: boolean;

            /** Worker stake. */
            public stake: string;

            /**
             * Creates a new Worker instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Worker instance
             */
            public static create(properties?: prb.db.IWorker): prb.db.Worker;

            /**
             * Encodes the specified Worker message. Does not implicitly {@link prb.db.Worker.verify|verify} messages.
             * @param m Worker message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.db.IWorker, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Worker message, length delimited. Does not implicitly {@link prb.db.Worker.verify|verify} messages.
             * @param message Worker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.db.IWorker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Worker message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Worker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.Worker;

            /**
             * Decodes a Worker message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Worker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.Worker;

            /**
             * Verifies a Worker message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a Worker message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns Worker
             */
            public static fromObject(d: { [k: string]: any }): prb.db.Worker;

            /**
             * Creates a plain object from a Worker message. Also converts values to other types if specified.
             * @param m Worker
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.db.Worker, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Worker to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace data_provider. */
    namespace data_provider {

        /** Status enum. */
        enum Status {
            S_UNKNOWN = 0,
            S_IDLE = 1,
            S_BUSY = 2,
            S_ORPHAN = 3
        }

        /** BlobType enum. */
        enum BlobType {
            BT_UNKNOWN = 0,
            BT_PARENT_BLOCK = 1,
            BT_PARA_BLOCK = 2
        }

        /** Properties of an Info. */
        interface IInfo {

            /** Info status */
            status?: (prb.data_provider.Status|null);

            /** Info paraId */
            paraId?: (number|null);

            /** Info parentStartHeader */
            parentStartHeader?: (number|null);

            /** Info parentKnownEight */
            parentKnownEight?: (number|null);

            /** Info parentBlobEight */
            parentBlobEight?: (number|null);

            /** Info parentArchivedEight */
            parentArchivedEight?: (number|null);

            /** Info paraKnownEight */
            paraKnownEight?: (number|null);

            /** Info paraBlobEight */
            paraBlobEight?: (number|null);

            /** Info paraArchivedEight */
            paraArchivedEight?: (number|null);

            /** Info synched */
            synched?: (boolean|null);
        }

        /** Represents an Info. */
        class Info implements IInfo {

            /**
             * Constructs a new Info.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IInfo);

            /** Info status. */
            public status: prb.data_provider.Status;

            /** Info paraId. */
            public paraId: number;

            /** Info parentStartHeader. */
            public parentStartHeader: number;

            /** Info parentKnownEight. */
            public parentKnownEight: number;

            /** Info parentBlobEight. */
            public parentBlobEight: number;

            /** Info parentArchivedEight. */
            public parentArchivedEight: number;

            /** Info paraKnownEight. */
            public paraKnownEight: number;

            /** Info paraBlobEight. */
            public paraBlobEight: number;

            /** Info paraArchivedEight. */
            public paraArchivedEight: number;

            /** Info synched. */
            public synched: boolean;

            /**
             * Creates a new Info instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Info instance
             */
            public static create(properties?: prb.data_provider.IInfo): prb.data_provider.Info;

            /**
             * Encodes the specified Info message. Does not implicitly {@link prb.data_provider.Info.verify|verify} messages.
             * @param m Info message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IInfo, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Info message, length delimited. Does not implicitly {@link prb.data_provider.Info.verify|verify} messages.
             * @param message Info message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Info message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.Info;

            /**
             * Decodes an Info message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.Info;

            /**
             * Verifies an Info message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates an Info message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns Info
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.Info;

            /**
             * Creates a plain object from an Info message. Also converts values to other types if specified.
             * @param m Info
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.Info, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Info to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WantBlob. */
        interface IWantBlob {

            /** WantBlob number */
            number?: (number|null);

            /** WantBlob type */
            type?: (prb.data_provider.BlobType|null);
        }

        /** Represents a WantBlob. */
        class WantBlob implements IWantBlob {

            /**
             * Constructs a new WantBlob.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IWantBlob);

            /** WantBlob number. */
            public number: number;

            /** WantBlob type. */
            public type: prb.data_provider.BlobType;

            /**
             * Creates a new WantBlob instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WantBlob instance
             */
            public static create(properties?: prb.data_provider.IWantBlob): prb.data_provider.WantBlob;

            /**
             * Encodes the specified WantBlob message. Does not implicitly {@link prb.data_provider.WantBlob.verify|verify} messages.
             * @param m WantBlob message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IWantBlob, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WantBlob message, length delimited. Does not implicitly {@link prb.data_provider.WantBlob.verify|verify} messages.
             * @param message WantBlob message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IWantBlob, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WantBlob message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns WantBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.WantBlob;

            /**
             * Decodes a WantBlob message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WantBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.WantBlob;

            /**
             * Verifies a WantBlob message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a WantBlob message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns WantBlob
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.WantBlob;

            /**
             * Creates a plain object from a WantBlob message. Also converts values to other types if specified.
             * @param m WantBlob
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.WantBlob, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WantBlob to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlobMeta. */
        interface IBlobMeta {

            /** BlobMeta number */
            number?: (number|null);

            /** BlobMeta hash */
            hash?: (Uint8Array|null);

            /** BlobMeta originPeer */
            originPeer?: (string|null);

            /** BlobMeta type */
            type?: (prb.data_provider.BlobType|null);

            /** BlobMeta getToken */
            getToken?: (string|null);

            /** BlobMeta tokenExpiresAt */
            tokenExpiresAt?: (number|Long|null);
        }

        /** Represents a BlobMeta. */
        class BlobMeta implements IBlobMeta {

            /**
             * Constructs a new BlobMeta.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IBlobMeta);

            /** BlobMeta number. */
            public number: number;

            /** BlobMeta hash. */
            public hash: Uint8Array;

            /** BlobMeta originPeer. */
            public originPeer: string;

            /** BlobMeta type. */
            public type: prb.data_provider.BlobType;

            /** BlobMeta getToken. */
            public getToken: string;

            /** BlobMeta tokenExpiresAt. */
            public tokenExpiresAt: (number|Long);

            /**
             * Creates a new BlobMeta instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlobMeta instance
             */
            public static create(properties?: prb.data_provider.IBlobMeta): prb.data_provider.BlobMeta;

            /**
             * Encodes the specified BlobMeta message. Does not implicitly {@link prb.data_provider.BlobMeta.verify|verify} messages.
             * @param m BlobMeta message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IBlobMeta, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlobMeta message, length delimited. Does not implicitly {@link prb.data_provider.BlobMeta.verify|verify} messages.
             * @param message BlobMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IBlobMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlobMeta message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns BlobMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.BlobMeta;

            /**
             * Decodes a BlobMeta message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlobMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.BlobMeta;

            /**
             * Verifies a BlobMeta message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a BlobMeta message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns BlobMeta
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.BlobMeta;

            /**
             * Creates a plain object from a BlobMeta message. Also converts values to other types if specified.
             * @param m BlobMeta
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.BlobMeta, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlobMeta to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetBlob. */
        interface IGetBlob {

            /** GetBlob token */
            token?: (string|null);
        }

        /** Represents a GetBlob. */
        class GetBlob implements IGetBlob {

            /**
             * Constructs a new GetBlob.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IGetBlob);

            /** GetBlob token. */
            public token: string;

            /**
             * Creates a new GetBlob instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetBlob instance
             */
            public static create(properties?: prb.data_provider.IGetBlob): prb.data_provider.GetBlob;

            /**
             * Encodes the specified GetBlob message. Does not implicitly {@link prb.data_provider.GetBlob.verify|verify} messages.
             * @param m GetBlob message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IGetBlob, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetBlob message, length delimited. Does not implicitly {@link prb.data_provider.GetBlob.verify|verify} messages.
             * @param message GetBlob message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IGetBlob, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetBlob message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GetBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.GetBlob;

            /**
             * Decodes a GetBlob message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.GetBlob;

            /**
             * Verifies a GetBlob message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a GetBlob message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns GetBlob
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.GetBlob;

            /**
             * Creates a plain object from a GetBlob message. Also converts values to other types if specified.
             * @param m GetBlob
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.GetBlob, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetBlob to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Blob. */
        interface IBlob {

            /** Blob type */
            type?: (prb.data_provider.BlobType|null);

            /** Blob number */
            number?: (number|null);

            /** Blob data */
            data?: (Uint8Array|null);
        }

        /** Represents a Blob. */
        class Blob implements IBlob {

            /**
             * Constructs a new Blob.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IBlob);

            /** Blob type. */
            public type: prb.data_provider.BlobType;

            /** Blob number. */
            public number: number;

            /** Blob data. */
            public data: Uint8Array;

            /**
             * Creates a new Blob instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Blob instance
             */
            public static create(properties?: prb.data_provider.IBlob): prb.data_provider.Blob;

            /**
             * Encodes the specified Blob message. Does not implicitly {@link prb.data_provider.Blob.verify|verify} messages.
             * @param m Blob message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IBlob, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Blob message, length delimited. Does not implicitly {@link prb.data_provider.Blob.verify|verify} messages.
             * @param message Blob message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IBlob, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Blob message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Blob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.Blob;

            /**
             * Decodes a Blob message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Blob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.Blob;

            /**
             * Verifies a Blob message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a Blob message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns Blob
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.Blob;

            /**
             * Creates a plain object from a Blob message. Also converts values to other types if specified.
             * @param m Blob
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.Blob, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Blob to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetBlobByKey. */
        interface IGetBlobByKey {

            /** GetBlobByKey key */
            key?: (string|null);
        }

        /** Represents a GetBlobByKey. */
        class GetBlobByKey implements IGetBlobByKey {

            /**
             * Constructs a new GetBlobByKey.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IGetBlobByKey);

            /** GetBlobByKey key. */
            public key: string;

            /**
             * Creates a new GetBlobByKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetBlobByKey instance
             */
            public static create(properties?: prb.data_provider.IGetBlobByKey): prb.data_provider.GetBlobByKey;

            /**
             * Encodes the specified GetBlobByKey message. Does not implicitly {@link prb.data_provider.GetBlobByKey.verify|verify} messages.
             * @param m GetBlobByKey message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IGetBlobByKey, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetBlobByKey message, length delimited. Does not implicitly {@link prb.data_provider.GetBlobByKey.verify|verify} messages.
             * @param message GetBlobByKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IGetBlobByKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetBlobByKey message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GetBlobByKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.GetBlobByKey;

            /**
             * Decodes a GetBlobByKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetBlobByKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.GetBlobByKey;

            /**
             * Verifies a GetBlobByKey message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a GetBlobByKey message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns GetBlobByKey
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.GetBlobByKey;

            /**
             * Creates a plain object from a GetBlobByKey message. Also converts values to other types if specified.
             * @param m GetBlobByKey
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.GetBlobByKey, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetBlobByKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RawBlob. */
        interface IRawBlob {

            /** RawBlob key */
            key?: (string|null);

            /** RawBlob empty */
            empty?: (boolean|null);

            /** RawBlob data */
            data?: (Uint8Array|null);
        }

        /** Represents a RawBlob. */
        class RawBlob implements IRawBlob {

            /**
             * Constructs a new RawBlob.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IRawBlob);

            /** RawBlob key. */
            public key: string;

            /** RawBlob empty. */
            public empty: boolean;

            /** RawBlob data. */
            public data: Uint8Array;

            /**
             * Creates a new RawBlob instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RawBlob instance
             */
            public static create(properties?: prb.data_provider.IRawBlob): prb.data_provider.RawBlob;

            /**
             * Encodes the specified RawBlob message. Does not implicitly {@link prb.data_provider.RawBlob.verify|verify} messages.
             * @param m RawBlob message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IRawBlob, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RawBlob message, length delimited. Does not implicitly {@link prb.data_provider.RawBlob.verify|verify} messages.
             * @param message RawBlob message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IRawBlob, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RawBlob message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RawBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.RawBlob;

            /**
             * Decodes a RawBlob message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RawBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.RawBlob;

            /**
             * Verifies a RawBlob message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a RawBlob message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns RawBlob
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.RawBlob;

            /**
             * Creates a plain object from a RawBlob message. Also converts values to other types if specified.
             * @param m RawBlob
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.RawBlob, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RawBlob to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreatePool. */
        interface ICreatePool {

            /** CreatePool pools */
            pools?: (prb.db.IPool[]|null);
        }

        /** Represents a CreatePool. */
        class CreatePool implements ICreatePool {

            /**
             * Constructs a new CreatePool.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.ICreatePool);

            /** CreatePool pools. */
            public pools: prb.db.IPool[];

            /**
             * Creates a new CreatePool instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreatePool instance
             */
            public static create(properties?: prb.data_provider.ICreatePool): prb.data_provider.CreatePool;

            /**
             * Encodes the specified CreatePool message. Does not implicitly {@link prb.data_provider.CreatePool.verify|verify} messages.
             * @param m CreatePool message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.ICreatePool, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreatePool message, length delimited. Does not implicitly {@link prb.data_provider.CreatePool.verify|verify} messages.
             * @param message CreatePool message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.ICreatePool, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreatePool message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CreatePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.CreatePool;

            /**
             * Decodes a CreatePool message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreatePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.CreatePool;

            /**
             * Verifies a CreatePool message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a CreatePool message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns CreatePool
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.CreatePool;

            /**
             * Creates a plain object from a CreatePool message. Also converts values to other types if specified.
             * @param m CreatePool
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.CreatePool, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreatePool to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdatePool. */
        interface IUpdatePool {

            /** UpdatePool items */
            items?: (prb.data_provider.UpdatePool.IItem[]|null);
        }

        /** Represents an UpdatePool. */
        class UpdatePool implements IUpdatePool {

            /**
             * Constructs a new UpdatePool.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IUpdatePool);

            /** UpdatePool items. */
            public items: prb.data_provider.UpdatePool.IItem[];

            /**
             * Creates a new UpdatePool instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdatePool instance
             */
            public static create(properties?: prb.data_provider.IUpdatePool): prb.data_provider.UpdatePool;

            /**
             * Encodes the specified UpdatePool message. Does not implicitly {@link prb.data_provider.UpdatePool.verify|verify} messages.
             * @param m UpdatePool message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IUpdatePool, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdatePool message, length delimited. Does not implicitly {@link prb.data_provider.UpdatePool.verify|verify} messages.
             * @param message UpdatePool message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IUpdatePool, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdatePool message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns UpdatePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.UpdatePool;

            /**
             * Decodes an UpdatePool message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdatePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.UpdatePool;

            /**
             * Verifies an UpdatePool message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdatePool message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns UpdatePool
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.UpdatePool;

            /**
             * Creates a plain object from an UpdatePool message. Also converts values to other types if specified.
             * @param m UpdatePool
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.UpdatePool, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdatePool to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UpdatePool {

            /** Properties of an Item. */
            interface IItem {

                /** Item id */
                id?: (prb.IPoolOrWorkerQueryIdentity|null);

                /** Item pool */
                pool?: (prb.db.IPool|null);
            }

            /** Represents an Item. */
            class Item implements IItem {

                /**
                 * Constructs a new Item.
                 * @param [p] Properties to set
                 */
                constructor(p?: prb.data_provider.UpdatePool.IItem);

                /** Item id. */
                public id?: (prb.IPoolOrWorkerQueryIdentity|null);

                /** Item pool. */
                public pool?: (prb.db.IPool|null);

                /**
                 * Creates a new Item instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Item instance
                 */
                public static create(properties?: prb.data_provider.UpdatePool.IItem): prb.data_provider.UpdatePool.Item;

                /**
                 * Encodes the specified Item message. Does not implicitly {@link prb.data_provider.UpdatePool.Item.verify|verify} messages.
                 * @param m Item message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: prb.data_provider.UpdatePool.IItem, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Item message, length delimited. Does not implicitly {@link prb.data_provider.UpdatePool.Item.verify|verify} messages.
                 * @param message Item message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: prb.data_provider.UpdatePool.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Item message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Item
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.UpdatePool.Item;

                /**
                 * Decodes an Item message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Item
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.UpdatePool.Item;

                /**
                 * Verifies an Item message.
                 * @param m Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(m: { [k: string]: any }): (string|null);

                /**
                 * Creates an Item message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Item
                 */
                public static fromObject(d: { [k: string]: any }): prb.data_provider.UpdatePool.Item;

                /**
                 * Creates a plain object from an Item message. Also converts values to other types if specified.
                 * @param m Item
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: prb.data_provider.UpdatePool.Item, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Item to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a CreateWorker. */
        interface ICreateWorker {

            /** CreateWorker workers */
            workers?: (prb.db.IWorker[]|null);
        }

        /** Represents a CreateWorker. */
        class CreateWorker implements ICreateWorker {

            /**
             * Constructs a new CreateWorker.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.ICreateWorker);

            /** CreateWorker workers. */
            public workers: prb.db.IWorker[];

            /**
             * Creates a new CreateWorker instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateWorker instance
             */
            public static create(properties?: prb.data_provider.ICreateWorker): prb.data_provider.CreateWorker;

            /**
             * Encodes the specified CreateWorker message. Does not implicitly {@link prb.data_provider.CreateWorker.verify|verify} messages.
             * @param m CreateWorker message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.ICreateWorker, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateWorker message, length delimited. Does not implicitly {@link prb.data_provider.CreateWorker.verify|verify} messages.
             * @param message CreateWorker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.ICreateWorker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateWorker message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CreateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.CreateWorker;

            /**
             * Decodes a CreateWorker message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.CreateWorker;

            /**
             * Verifies a CreateWorker message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateWorker message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns CreateWorker
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.CreateWorker;

            /**
             * Creates a plain object from a CreateWorker message. Also converts values to other types if specified.
             * @param m CreateWorker
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.CreateWorker, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateWorker to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateWorker. */
        interface IUpdateWorker {

            /** UpdateWorker items */
            items?: (prb.data_provider.UpdateWorker.IItem[]|null);
        }

        /** Represents an UpdateWorker. */
        class UpdateWorker implements IUpdateWorker {

            /**
             * Constructs a new UpdateWorker.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IUpdateWorker);

            /** UpdateWorker items. */
            public items: prb.data_provider.UpdateWorker.IItem[];

            /**
             * Creates a new UpdateWorker instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateWorker instance
             */
            public static create(properties?: prb.data_provider.IUpdateWorker): prb.data_provider.UpdateWorker;

            /**
             * Encodes the specified UpdateWorker message. Does not implicitly {@link prb.data_provider.UpdateWorker.verify|verify} messages.
             * @param m UpdateWorker message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IUpdateWorker, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateWorker message, length delimited. Does not implicitly {@link prb.data_provider.UpdateWorker.verify|verify} messages.
             * @param message UpdateWorker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IUpdateWorker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateWorker message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns UpdateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.UpdateWorker;

            /**
             * Decodes an UpdateWorker message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.UpdateWorker;

            /**
             * Verifies an UpdateWorker message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateWorker message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns UpdateWorker
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.UpdateWorker;

            /**
             * Creates a plain object from an UpdateWorker message. Also converts values to other types if specified.
             * @param m UpdateWorker
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.UpdateWorker, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateWorker to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UpdateWorker {

            /** Properties of an Item. */
            interface IItem {

                /** Item id */
                id?: (prb.IPoolOrWorkerQueryIdentity|null);

                /** Item worker */
                worker?: (prb.db.IWorker|null);
            }

            /** Represents an Item. */
            class Item implements IItem {

                /**
                 * Constructs a new Item.
                 * @param [p] Properties to set
                 */
                constructor(p?: prb.data_provider.UpdateWorker.IItem);

                /** Item id. */
                public id?: (prb.IPoolOrWorkerQueryIdentity|null);

                /** Item worker. */
                public worker?: (prb.db.IWorker|null);

                /**
                 * Creates a new Item instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Item instance
                 */
                public static create(properties?: prb.data_provider.UpdateWorker.IItem): prb.data_provider.UpdateWorker.Item;

                /**
                 * Encodes the specified Item message. Does not implicitly {@link prb.data_provider.UpdateWorker.Item.verify|verify} messages.
                 * @param m Item message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: prb.data_provider.UpdateWorker.IItem, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Item message, length delimited. Does not implicitly {@link prb.data_provider.UpdateWorker.Item.verify|verify} messages.
                 * @param message Item message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: prb.data_provider.UpdateWorker.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Item message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Item
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.UpdateWorker.Item;

                /**
                 * Decodes an Item message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Item
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.UpdateWorker.Item;

                /**
                 * Verifies an Item message.
                 * @param m Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(m: { [k: string]: any }): (string|null);

                /**
                 * Creates an Item message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Item
                 */
                public static fromObject(d: { [k: string]: any }): prb.data_provider.UpdateWorker.Item;

                /**
                 * Creates a plain object from an Item message. Also converts values to other types if specified.
                 * @param m Item
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: prb.data_provider.UpdateWorker.Item, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Item to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a PoolList. */
        interface IPoolList {

            /** PoolList pools */
            pools?: (prb.db.IPool[]|null);
        }

        /** Represents a PoolList. */
        class PoolList implements IPoolList {

            /**
             * Constructs a new PoolList.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IPoolList);

            /** PoolList pools. */
            public pools: prb.db.IPool[];

            /**
             * Creates a new PoolList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PoolList instance
             */
            public static create(properties?: prb.data_provider.IPoolList): prb.data_provider.PoolList;

            /**
             * Encodes the specified PoolList message. Does not implicitly {@link prb.data_provider.PoolList.verify|verify} messages.
             * @param m PoolList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IPoolList, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PoolList message, length delimited. Does not implicitly {@link prb.data_provider.PoolList.verify|verify} messages.
             * @param message PoolList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IPoolList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PoolList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns PoolList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.PoolList;

            /**
             * Decodes a PoolList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PoolList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.PoolList;

            /**
             * Verifies a PoolList message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a PoolList message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns PoolList
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.PoolList;

            /**
             * Creates a plain object from a PoolList message. Also converts values to other types if specified.
             * @param m PoolList
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.PoolList, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PoolList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WorkerList. */
        interface IWorkerList {

            /** WorkerList workers */
            workers?: (prb.db.IWorker[]|null);
        }

        /** Represents a WorkerList. */
        class WorkerList implements IWorkerList {

            /**
             * Constructs a new WorkerList.
             * @param [p] Properties to set
             */
            constructor(p?: prb.data_provider.IWorkerList);

            /** WorkerList workers. */
            public workers: prb.db.IWorker[];

            /**
             * Creates a new WorkerList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkerList instance
             */
            public static create(properties?: prb.data_provider.IWorkerList): prb.data_provider.WorkerList;

            /**
             * Encodes the specified WorkerList message. Does not implicitly {@link prb.data_provider.WorkerList.verify|verify} messages.
             * @param m WorkerList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: prb.data_provider.IWorkerList, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WorkerList message, length delimited. Does not implicitly {@link prb.data_provider.WorkerList.verify|verify} messages.
             * @param message WorkerList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: prb.data_provider.IWorkerList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkerList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns WorkerList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.WorkerList;

            /**
             * Decodes a WorkerList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WorkerList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.WorkerList;

            /**
             * Verifies a WorkerList message.
             * @param m Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(m: { [k: string]: any }): (string|null);

            /**
             * Creates a WorkerList message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns WorkerList
             */
            public static fromObject(d: { [k: string]: any }): prb.data_provider.WorkerList;

            /**
             * Creates a plain object from a WorkerList message. Also converts values to other types if specified.
             * @param m WorkerList
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: prb.data_provider.WorkerList, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WorkerList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a WorkerState. */
    interface IWorkerState {

        /** WorkerState status */
        status?: (prb.WorkerState.Status|null);

        /** WorkerState parentHeaderSynchedTo */
        parentHeaderSynchedTo?: (number|null);

        /** WorkerState paraHeaderSynchedTo */
        paraHeaderSynchedTo?: (number|null);

        /** WorkerState paraBlockDispatchedTo */
        paraBlockDispatchedTo?: (number|null);

        /** WorkerState initialized */
        initialized?: (boolean|null);

        /** WorkerState worker */
        worker?: (prb.db.IWorker|null);

        /** WorkerState publicKey */
        publicKey?: (string|null);

        /** WorkerState lastMessage */
        lastMessage?: (string|null);

        /** WorkerState minerInfoJson */
        minerInfoJson?: (string|null);

        /** WorkerState minerAccountId */
        minerAccountId?: (string|null);
    }

    /** Represents a WorkerState. */
    class WorkerState implements IWorkerState {

        /**
         * Constructs a new WorkerState.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IWorkerState);

        /** WorkerState status. */
        public status: prb.WorkerState.Status;

        /** WorkerState parentHeaderSynchedTo. */
        public parentHeaderSynchedTo: number;

        /** WorkerState paraHeaderSynchedTo. */
        public paraHeaderSynchedTo: number;

        /** WorkerState paraBlockDispatchedTo. */
        public paraBlockDispatchedTo: number;

        /** WorkerState initialized. */
        public initialized: boolean;

        /** WorkerState worker. */
        public worker?: (prb.db.IWorker|null);

        /** WorkerState publicKey. */
        public publicKey: string;

        /** WorkerState lastMessage. */
        public lastMessage: string;

        /** WorkerState minerInfoJson. */
        public minerInfoJson: string;

        /** WorkerState minerAccountId. */
        public minerAccountId: string;

        /**
         * Creates a new WorkerState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorkerState instance
         */
        public static create(properties?: prb.IWorkerState): prb.WorkerState;

        /**
         * Encodes the specified WorkerState message. Does not implicitly {@link prb.WorkerState.verify|verify} messages.
         * @param m WorkerState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IWorkerState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorkerState message, length delimited. Does not implicitly {@link prb.WorkerState.verify|verify} messages.
         * @param message WorkerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IWorkerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorkerState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WorkerState;

        /**
         * Decodes a WorkerState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WorkerState;

        /**
         * Verifies a WorkerState message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a WorkerState message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns WorkerState
         */
        public static fromObject(d: { [k: string]: any }): prb.WorkerState;

        /**
         * Creates a plain object from a WorkerState message. Also converts values to other types if specified.
         * @param m WorkerState
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.WorkerState, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorkerState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace WorkerState {

        /** Status enum. */
        enum Status {
            S_IDLE = 0,
            S_STARTING = 1,
            S_SYNCHING = 2,
            S_SYNCHED = 3,
            S_PRE_MINING = 4,
            S_MINING = 5,
            S_KICKED = 6,
            S_ERROR = 7
        }
    }

    /** Properties of a PoolOrWorkerQueryIdentity. */
    interface IPoolOrWorkerQueryIdentity {

        /** PoolOrWorkerQueryIdentity uuid */
        uuid?: (string|null);

        /** PoolOrWorkerQueryIdentity name */
        name?: (string|null);

        /** PoolOrWorkerQueryIdentity pid */
        pid?: (number|Long|null);
    }

    /** Represents a PoolOrWorkerQueryIdentity. */
    class PoolOrWorkerQueryIdentity implements IPoolOrWorkerQueryIdentity {

        /**
         * Constructs a new PoolOrWorkerQueryIdentity.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IPoolOrWorkerQueryIdentity);

        /** PoolOrWorkerQueryIdentity uuid. */
        public uuid?: (string|null);

        /** PoolOrWorkerQueryIdentity name. */
        public name?: (string|null);

        /** PoolOrWorkerQueryIdentity pid. */
        public pid?: (number|Long|null);

        /** PoolOrWorkerQueryIdentity identity. */
        public identity?: ("uuid"|"name"|"pid");

        /**
         * Creates a new PoolOrWorkerQueryIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PoolOrWorkerQueryIdentity instance
         */
        public static create(properties?: prb.IPoolOrWorkerQueryIdentity): prb.PoolOrWorkerQueryIdentity;

        /**
         * Encodes the specified PoolOrWorkerQueryIdentity message. Does not implicitly {@link prb.PoolOrWorkerQueryIdentity.verify|verify} messages.
         * @param m PoolOrWorkerQueryIdentity message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IPoolOrWorkerQueryIdentity, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PoolOrWorkerQueryIdentity message, length delimited. Does not implicitly {@link prb.PoolOrWorkerQueryIdentity.verify|verify} messages.
         * @param message PoolOrWorkerQueryIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IPoolOrWorkerQueryIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PoolOrWorkerQueryIdentity message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PoolOrWorkerQueryIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.PoolOrWorkerQueryIdentity;

        /**
         * Decodes a PoolOrWorkerQueryIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PoolOrWorkerQueryIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.PoolOrWorkerQueryIdentity;

        /**
         * Verifies a PoolOrWorkerQueryIdentity message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a PoolOrWorkerQueryIdentity message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns PoolOrWorkerQueryIdentity
         */
        public static fromObject(d: { [k: string]: any }): prb.PoolOrWorkerQueryIdentity;

        /**
         * Creates a plain object from a PoolOrWorkerQueryIdentity message. Also converts values to other types if specified.
         * @param m PoolOrWorkerQueryIdentity
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.PoolOrWorkerQueryIdentity, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PoolOrWorkerQueryIdentity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryWorkerState. */
    interface IQueryWorkerState {

        /** QueryWorkerState ids */
        ids?: (prb.IPoolOrWorkerQueryIdentity[]|null);
    }

    /** Represents a QueryWorkerState. */
    class QueryWorkerState implements IQueryWorkerState {

        /**
         * Constructs a new QueryWorkerState.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IQueryWorkerState);

        /** QueryWorkerState ids. */
        public ids: prb.IPoolOrWorkerQueryIdentity[];

        /**
         * Creates a new QueryWorkerState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryWorkerState instance
         */
        public static create(properties?: prb.IQueryWorkerState): prb.QueryWorkerState;

        /**
         * Encodes the specified QueryWorkerState message. Does not implicitly {@link prb.QueryWorkerState.verify|verify} messages.
         * @param m QueryWorkerState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IQueryWorkerState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryWorkerState message, length delimited. Does not implicitly {@link prb.QueryWorkerState.verify|verify} messages.
         * @param message QueryWorkerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IQueryWorkerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryWorkerState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryWorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.QueryWorkerState;

        /**
         * Decodes a QueryWorkerState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryWorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.QueryWorkerState;

        /**
         * Verifies a QueryWorkerState message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryWorkerState message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns QueryWorkerState
         */
        public static fromObject(d: { [k: string]: any }): prb.QueryWorkerState;

        /**
         * Creates a plain object from a QueryWorkerState message. Also converts values to other types if specified.
         * @param m QueryWorkerState
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.QueryWorkerState, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryWorkerState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WorkerStateUpdate. */
    interface IWorkerStateUpdate {

        /** WorkerStateUpdate workerStates */
        workerStates?: (prb.IWorkerState[]|null);
    }

    /** Represents a WorkerStateUpdate. */
    class WorkerStateUpdate implements IWorkerStateUpdate {

        /**
         * Constructs a new WorkerStateUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IWorkerStateUpdate);

        /** WorkerStateUpdate workerStates. */
        public workerStates: prb.IWorkerState[];

        /**
         * Creates a new WorkerStateUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorkerStateUpdate instance
         */
        public static create(properties?: prb.IWorkerStateUpdate): prb.WorkerStateUpdate;

        /**
         * Encodes the specified WorkerStateUpdate message. Does not implicitly {@link prb.WorkerStateUpdate.verify|verify} messages.
         * @param m WorkerStateUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IWorkerStateUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorkerStateUpdate message, length delimited. Does not implicitly {@link prb.WorkerStateUpdate.verify|verify} messages.
         * @param message WorkerStateUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IWorkerStateUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorkerStateUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WorkerStateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WorkerStateUpdate;

        /**
         * Decodes a WorkerStateUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WorkerStateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WorkerStateUpdate;

        /**
         * Verifies a WorkerStateUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a WorkerStateUpdate message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns WorkerStateUpdate
         */
        public static fromObject(d: { [k: string]: any }): prb.WorkerStateUpdate;

        /**
         * Creates a plain object from a WorkerStateUpdate message. Also converts values to other types if specified.
         * @param m WorkerStateUpdate
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.WorkerStateUpdate, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorkerStateUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LifecycleManagerStateUpdate. */
    interface ILifecycleManagerStateUpdate {

        /** LifecycleManagerStateUpdate hostname */
        hostname?: (string|null);

        /** LifecycleManagerStateUpdate pools */
        pools?: (prb.db.IPool[]|null);

        /** LifecycleManagerStateUpdate workers */
        workers?: (prb.db.IWorker[]|null);
    }

    /** Represents a LifecycleManagerStateUpdate. */
    class LifecycleManagerStateUpdate implements ILifecycleManagerStateUpdate {

        /**
         * Constructs a new LifecycleManagerStateUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: prb.ILifecycleManagerStateUpdate);

        /** LifecycleManagerStateUpdate hostname. */
        public hostname: string;

        /** LifecycleManagerStateUpdate pools. */
        public pools: prb.db.IPool[];

        /** LifecycleManagerStateUpdate workers. */
        public workers: prb.db.IWorker[];

        /**
         * Creates a new LifecycleManagerStateUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LifecycleManagerStateUpdate instance
         */
        public static create(properties?: prb.ILifecycleManagerStateUpdate): prb.LifecycleManagerStateUpdate;

        /**
         * Encodes the specified LifecycleManagerStateUpdate message. Does not implicitly {@link prb.LifecycleManagerStateUpdate.verify|verify} messages.
         * @param m LifecycleManagerStateUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.ILifecycleManagerStateUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LifecycleManagerStateUpdate message, length delimited. Does not implicitly {@link prb.LifecycleManagerStateUpdate.verify|verify} messages.
         * @param message LifecycleManagerStateUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.ILifecycleManagerStateUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LifecycleManagerStateUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LifecycleManagerStateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.LifecycleManagerStateUpdate;

        /**
         * Decodes a LifecycleManagerStateUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LifecycleManagerStateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.LifecycleManagerStateUpdate;

        /**
         * Verifies a LifecycleManagerStateUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a LifecycleManagerStateUpdate message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns LifecycleManagerStateUpdate
         */
        public static fromObject(d: { [k: string]: any }): prb.LifecycleManagerStateUpdate;

        /**
         * Creates a plain object from a LifecycleManagerStateUpdate message. Also converts values to other types if specified.
         * @param m LifecycleManagerStateUpdate
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.LifecycleManagerStateUpdate, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LifecycleManagerStateUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CallOnlineLifecycleManager. */
    interface ICallOnlineLifecycleManager {

        /** CallOnlineLifecycleManager isResponse */
        isResponse?: (boolean|null);

        /** CallOnlineLifecycleManager hostname */
        hostname?: (string|null);
    }

    /** Represents a CallOnlineLifecycleManager. */
    class CallOnlineLifecycleManager implements ICallOnlineLifecycleManager {

        /**
         * Constructs a new CallOnlineLifecycleManager.
         * @param [p] Properties to set
         */
        constructor(p?: prb.ICallOnlineLifecycleManager);

        /** CallOnlineLifecycleManager isResponse. */
        public isResponse: boolean;

        /** CallOnlineLifecycleManager hostname. */
        public hostname: string;

        /**
         * Creates a new CallOnlineLifecycleManager instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CallOnlineLifecycleManager instance
         */
        public static create(properties?: prb.ICallOnlineLifecycleManager): prb.CallOnlineLifecycleManager;

        /**
         * Encodes the specified CallOnlineLifecycleManager message. Does not implicitly {@link prb.CallOnlineLifecycleManager.verify|verify} messages.
         * @param m CallOnlineLifecycleManager message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.ICallOnlineLifecycleManager, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CallOnlineLifecycleManager message, length delimited. Does not implicitly {@link prb.CallOnlineLifecycleManager.verify|verify} messages.
         * @param message CallOnlineLifecycleManager message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.ICallOnlineLifecycleManager, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CallOnlineLifecycleManager message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CallOnlineLifecycleManager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.CallOnlineLifecycleManager;

        /**
         * Decodes a CallOnlineLifecycleManager message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CallOnlineLifecycleManager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.CallOnlineLifecycleManager;

        /**
         * Verifies a CallOnlineLifecycleManager message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a CallOnlineLifecycleManager message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns CallOnlineLifecycleManager
         */
        public static fromObject(d: { [k: string]: any }): prb.CallOnlineLifecycleManager;

        /**
         * Creates a plain object from a CallOnlineLifecycleManager message. Also converts values to other types if specified.
         * @param m CallOnlineLifecycleManager
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.CallOnlineLifecycleManager, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CallOnlineLifecycleManager to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LifecycleActionRequest. */
    interface ILifecycleActionRequest {

        /** LifecycleActionRequest id */
        id?: (prb.IPoolOrWorkerQueryIdentity|null);

        /** LifecycleActionRequest reason */
        reason?: (string|null);
    }

    /** Represents a LifecycleActionRequest. */
    class LifecycleActionRequest implements ILifecycleActionRequest {

        /**
         * Constructs a new LifecycleActionRequest.
         * @param [p] Properties to set
         */
        constructor(p?: prb.ILifecycleActionRequest);

        /** LifecycleActionRequest id. */
        public id?: (prb.IPoolOrWorkerQueryIdentity|null);

        /** LifecycleActionRequest reason. */
        public reason: string;

        /**
         * Creates a new LifecycleActionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LifecycleActionRequest instance
         */
        public static create(properties?: prb.ILifecycleActionRequest): prb.LifecycleActionRequest;

        /**
         * Encodes the specified LifecycleActionRequest message. Does not implicitly {@link prb.LifecycleActionRequest.verify|verify} messages.
         * @param m LifecycleActionRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.ILifecycleActionRequest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LifecycleActionRequest message, length delimited. Does not implicitly {@link prb.LifecycleActionRequest.verify|verify} messages.
         * @param message LifecycleActionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.ILifecycleActionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LifecycleActionRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LifecycleActionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.LifecycleActionRequest;

        /**
         * Decodes a LifecycleActionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LifecycleActionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.LifecycleActionRequest;

        /**
         * Verifies a LifecycleActionRequest message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a LifecycleActionRequest message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns LifecycleActionRequest
         */
        public static fromObject(d: { [k: string]: any }): prb.LifecycleActionRequest;

        /**
         * Creates a plain object from a LifecycleActionRequest message. Also converts values to other types if specified.
         * @param m LifecycleActionRequest
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.LifecycleActionRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LifecycleActionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestStartWorkerLifecycle. */
    interface IRequestStartWorkerLifecycle {

        /** RequestStartWorkerLifecycle requests */
        requests?: (prb.ILifecycleActionRequest[]|null);
    }

    /** Represents a RequestStartWorkerLifecycle. */
    class RequestStartWorkerLifecycle implements IRequestStartWorkerLifecycle {

        /**
         * Constructs a new RequestStartWorkerLifecycle.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IRequestStartWorkerLifecycle);

        /** RequestStartWorkerLifecycle requests. */
        public requests: prb.ILifecycleActionRequest[];

        /**
         * Creates a new RequestStartWorkerLifecycle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestStartWorkerLifecycle instance
         */
        public static create(properties?: prb.IRequestStartWorkerLifecycle): prb.RequestStartWorkerLifecycle;

        /**
         * Encodes the specified RequestStartWorkerLifecycle message. Does not implicitly {@link prb.RequestStartWorkerLifecycle.verify|verify} messages.
         * @param m RequestStartWorkerLifecycle message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IRequestStartWorkerLifecycle, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestStartWorkerLifecycle message, length delimited. Does not implicitly {@link prb.RequestStartWorkerLifecycle.verify|verify} messages.
         * @param message RequestStartWorkerLifecycle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IRequestStartWorkerLifecycle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestStartWorkerLifecycle message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RequestStartWorkerLifecycle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.RequestStartWorkerLifecycle;

        /**
         * Decodes a RequestStartWorkerLifecycle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestStartWorkerLifecycle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.RequestStartWorkerLifecycle;

        /**
         * Verifies a RequestStartWorkerLifecycle message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestStartWorkerLifecycle message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RequestStartWorkerLifecycle
         */
        public static fromObject(d: { [k: string]: any }): prb.RequestStartWorkerLifecycle;

        /**
         * Creates a plain object from a RequestStartWorkerLifecycle message. Also converts values to other types if specified.
         * @param m RequestStartWorkerLifecycle
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.RequestStartWorkerLifecycle, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestStartWorkerLifecycle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestKickWorker. */
    interface IRequestKickWorker {

        /** RequestKickWorker requests */
        requests?: (prb.ILifecycleActionRequest[]|null);
    }

    /** Represents a RequestKickWorker. */
    class RequestKickWorker implements IRequestKickWorker {

        /**
         * Constructs a new RequestKickWorker.
         * @param [p] Properties to set
         */
        constructor(p?: prb.IRequestKickWorker);

        /** RequestKickWorker requests. */
        public requests: prb.ILifecycleActionRequest[];

        /**
         * Creates a new RequestKickWorker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestKickWorker instance
         */
        public static create(properties?: prb.IRequestKickWorker): prb.RequestKickWorker;

        /**
         * Encodes the specified RequestKickWorker message. Does not implicitly {@link prb.RequestKickWorker.verify|verify} messages.
         * @param m RequestKickWorker message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: prb.IRequestKickWorker, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestKickWorker message, length delimited. Does not implicitly {@link prb.RequestKickWorker.verify|verify} messages.
         * @param message RequestKickWorker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prb.IRequestKickWorker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestKickWorker message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RequestKickWorker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.RequestKickWorker;

        /**
         * Decodes a RequestKickWorker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestKickWorker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.RequestKickWorker;

        /**
         * Verifies a RequestKickWorker message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestKickWorker message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RequestKickWorker
         */
        public static fromObject(d: { [k: string]: any }): prb.RequestKickWorker;

        /**
         * Creates a plain object from a RequestKickWorker message. Also converts values to other types if specified.
         * @param m RequestKickWorker
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: prb.RequestKickWorker, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestKickWorker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

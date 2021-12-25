import * as $protobuf from "protobufjs";
export namespace prb {

    enum WalkieRoles {
        WR_CLIENT = 0,
        WR_DATA_PROVIDER_INT = 1,
        WR_DATA_PROVIDER_EXT = 2,
        WR_LIFECYCLE_MANAGER = 3,
        WR_TRADER = 4
    }

    interface IWalkieSystemInfo {
        hostname?: (string|null);
        peerId?: (string|null);
        role?: (prb.WalkieRoles|null);
        chainIdentity?: (string|null);
        bridgeIdentity?: (string|null);
    }

    class WalkieSystemInfo implements IWalkieSystemInfo {
        constructor(p?: prb.IWalkieSystemInfo);
        public hostname: string;
        public peerId: string;
        public role: prb.WalkieRoles;
        public chainIdentity: string;
        public bridgeIdentity: string;
        public static create(properties?: prb.IWalkieSystemInfo): prb.WalkieSystemInfo;
        public static encode(m: prb.IWalkieSystemInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IWalkieSystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WalkieSystemInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WalkieSystemInfo;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.WalkieSystemInfo;
        public static toObject(m: prb.WalkieSystemInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IWalkieRpcRequestWrapper {
        createdAt?: (number|Long|null);
        nonce?: (string|null);
        data?: (Uint8Array|null);
        method?: (string|null);
    }

    class WalkieRpcRequestWrapper implements IWalkieRpcRequestWrapper {
        constructor(p?: prb.IWalkieRpcRequestWrapper);
        public createdAt: (number|Long);
        public nonce: string;
        public data: Uint8Array;
        public method: string;
        public static create(properties?: prb.IWalkieRpcRequestWrapper): prb.WalkieRpcRequestWrapper;
        public static encode(m: prb.IWalkieRpcRequestWrapper, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IWalkieRpcRequestWrapper, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WalkieRpcRequestWrapper;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WalkieRpcRequestWrapper;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.WalkieRpcRequestWrapper;
        public static toObject(m: prb.WalkieRpcRequestWrapper, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IWalkieRpcResponseWrapper {
        createdAt?: (number|Long|null);
        requestNonce?: (string|null);
        nonce?: (string|null);
        data?: (Uint8Array|null);
        hasError?: (boolean|null);
    }

    class WalkieRpcResponseWrapper implements IWalkieRpcResponseWrapper {
        constructor(p?: prb.IWalkieRpcResponseWrapper);
        public createdAt: (number|Long);
        public requestNonce: string;
        public nonce: string;
        public data: Uint8Array;
        public hasError: boolean;
        public static create(properties?: prb.IWalkieRpcResponseWrapper): prb.WalkieRpcResponseWrapper;
        public static encode(m: prb.IWalkieRpcResponseWrapper, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IWalkieRpcResponseWrapper, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WalkieRpcResponseWrapper;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WalkieRpcResponseWrapper;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.WalkieRpcResponseWrapper;
        public static toObject(m: prb.WalkieRpcResponseWrapper, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IWalkieBroadcastWrapper {
        createdAt?: (number|Long|null);
        nonce?: (string|null);
        data?: (Uint8Array|null);
        method?: (string|null);
    }

    class WalkieBroadcastWrapper implements IWalkieBroadcastWrapper {
        constructor(p?: prb.IWalkieBroadcastWrapper);
        public createdAt: (number|Long);
        public nonce: string;
        public data: Uint8Array;
        public method: string;
        public static create(properties?: prb.IWalkieBroadcastWrapper): prb.WalkieBroadcastWrapper;
        public static encode(m: prb.IWalkieBroadcastWrapper, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IWalkieBroadcastWrapper, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WalkieBroadcastWrapper;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WalkieBroadcastWrapper;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.WalkieBroadcastWrapper;
        public static toObject(m: prb.WalkieBroadcastWrapper, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    class WalkieRpc extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WalkieRpc;
        public hello(request: prb.IWalkieSystemInfo, callback: prb.WalkieRpc.HelloCallback): void;
        public hello(request: prb.IWalkieSystemInfo): Promise<prb.WalkieSystemInfo>;
        public getDataProviderInfo(request: prb.IEmpty, callback: prb.WalkieRpc.GetDataProviderInfoCallback): void;
        public getDataProviderInfo(request: prb.IEmpty): Promise<prb.data_provider.Info>;
        public getBlobByKey(request: prb.data_provider.IGetBlobByKey, callback: prb.WalkieRpc.GetBlobByKeyCallback): void;
        public getBlobByKey(request: prb.data_provider.IGetBlobByKey): Promise<prb.data_provider.RawBlob>;
        public wantBlob(request: prb.data_provider.IWantBlob, callback: prb.WalkieRpc.WantBlobCallback): void;
        public wantBlob(request: prb.data_provider.IWantBlob): Promise<prb.data_provider.BlobMeta>;
        public getBlobWithToken(request: prb.data_provider.IGetBlob, callback: prb.WalkieRpc.GetBlobWithTokenCallback): void;
        public getBlobWithToken(request: prb.data_provider.IGetBlob): Promise<prb.data_provider.Blob>;
        public listPool(request: prb.IEmpty, callback: prb.WalkieRpc.ListPoolCallback): void;
        public listPool(request: prb.IEmpty): Promise<prb.data_provider.PoolList>;
        public createPool(request: prb.data_provider.ICreatePool, callback: prb.WalkieRpc.CreatePoolCallback): void;
        public createPool(request: prb.data_provider.ICreatePool): Promise<prb.data_provider.PoolList>;
        public updatePool(request: prb.data_provider.IUpdatePool, callback: prb.WalkieRpc.UpdatePoolCallback): void;
        public updatePool(request: prb.data_provider.IUpdatePool): Promise<prb.data_provider.PoolList>;
        public listWorker(request: prb.IEmpty, callback: prb.WalkieRpc.ListWorkerCallback): void;
        public listWorker(request: prb.IEmpty): Promise<prb.data_provider.WorkerList>;
        public createWorker(request: prb.data_provider.ICreateWorker, callback: prb.WalkieRpc.CreateWorkerCallback): void;
        public createWorker(request: prb.data_provider.ICreateWorker): Promise<prb.data_provider.WorkerList>;
        public updateWorker(request: prb.data_provider.IUpdateWorker, callback: prb.WalkieRpc.UpdateWorkerCallback): void;
        public updateWorker(request: prb.data_provider.IUpdateWorker): Promise<prb.data_provider.WorkerList>;
    }

    namespace WalkieRpc {

        type HelloCallback = (error: (Error|null), response?: prb.WalkieSystemInfo) => void;

        type GetDataProviderInfoCallback = (error: (Error|null), response?: prb.data_provider.Info) => void;

        type GetBlobByKeyCallback = (error: (Error|null), response?: prb.data_provider.RawBlob) => void;

        type WantBlobCallback = (error: (Error|null), response?: prb.data_provider.BlobMeta) => void;

        type GetBlobWithTokenCallback = (error: (Error|null), response?: prb.data_provider.Blob) => void;

        type ListPoolCallback = (error: (Error|null), response?: prb.data_provider.PoolList) => void;

        type CreatePoolCallback = (error: (Error|null), response?: prb.data_provider.PoolList) => void;

        type UpdatePoolCallback = (error: (Error|null), response?: prb.data_provider.PoolList) => void;

        type ListWorkerCallback = (error: (Error|null), response?: prb.data_provider.WorkerList) => void;

        type CreateWorkerCallback = (error: (Error|null), response?: prb.data_provider.WorkerList) => void;

        type UpdateWorkerCallback = (error: (Error|null), response?: prb.data_provider.WorkerList) => void;
    }

    class WalkieBroadcast extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WalkieBroadcast;
    }

    interface IEmpty {
    }

    class Empty implements IEmpty {
        constructor(p?: prb.IEmpty);
        public static create(properties?: prb.IEmpty): prb.Empty;
        public static encode(m: prb.IEmpty, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.Empty;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.Empty;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.Empty;
        public static toObject(m: prb.Empty, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IPlaceholder {
    }

    class Placeholder implements IPlaceholder {
        constructor(p?: prb.IPlaceholder);
        public static create(properties?: prb.IPlaceholder): prb.Placeholder;
        public static encode(m: prb.IPlaceholder, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IPlaceholder, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.Placeholder;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.Placeholder;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.Placeholder;
        public static toObject(m: prb.Placeholder, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAck {
        ack?: (boolean|null);
    }

    class Ack implements IAck {
        constructor(p?: prb.IAck);
        public ack: boolean;
        public static create(properties?: prb.IAck): prb.Ack;
        public static encode(m: prb.IAck, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IAck, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.Ack;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.Ack;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.Ack;
        public static toObject(m: prb.Ack, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IBN {
        value?: (string|null);
    }

    class BN implements IBN {
        constructor(p?: prb.IBN);
        public value: string;
        public static create(properties?: prb.IBN): prb.BN;
        public static encode(m: prb.IBN, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IBN, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.BN;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.BN;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.BN;
        public static toObject(m: prb.BN, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IFullAccount {
        mnemonic?: (string|null);
        polkadotJson?: (string|null);
        ss58Phala?: (string|null);
        ss58Polkadot?: (string|null);
    }

    class FullAccount implements IFullAccount {
        constructor(p?: prb.IFullAccount);
        public mnemonic: string;
        public polkadotJson: string;
        public ss58Phala: string;
        public ss58Polkadot: string;
        public static create(properties?: prb.IFullAccount): prb.FullAccount;
        public static encode(m: prb.IFullAccount, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IFullAccount, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.FullAccount;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.FullAccount;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.FullAccount;
        public static toObject(m: prb.FullAccount, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAccount {
        ss58Phala?: (string|null);
        ss58Polkadot?: (string|null);
    }

    class Account implements IAccount {
        constructor(p?: prb.IAccount);
        public ss58Phala: string;
        public ss58Polkadot: string;
        public static create(properties?: prb.IAccount): prb.Account;
        public static encode(m: prb.IAccount, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.Account;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.Account;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.Account;
        public static toObject(m: prb.Account, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGenericError {
        code?: (string|null);
        desc?: (string|null);
    }

    class GenericError implements IGenericError {
        constructor(p?: prb.IGenericError);
        public code: string;
        public desc: string;
        public static create(properties?: prb.IGenericError): prb.GenericError;
        public static encode(m: prb.IGenericError, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IGenericError, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.GenericError;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.GenericError;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.GenericError;
        public static toObject(m: prb.GenericError, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface INotFoundError {
        desc?: (string|null);
    }

    class NotFoundError implements INotFoundError {
        constructor(p?: prb.INotFoundError);
        public desc: string;
        public static create(properties?: prb.INotFoundError): prb.NotFoundError;
        public static encode(m: prb.INotFoundError, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.INotFoundError, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.NotFoundError;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.NotFoundError;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.NotFoundError;
        public static toObject(m: prb.NotFoundError, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IDuplicatedError {
        desc?: (string|null);
    }

    class DuplicatedError implements IDuplicatedError {
        constructor(p?: prb.IDuplicatedError);
        public desc: string;
        public static create(properties?: prb.IDuplicatedError): prb.DuplicatedError;
        public static encode(m: prb.IDuplicatedError, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IDuplicatedError, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.DuplicatedError;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.DuplicatedError;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.DuplicatedError;
        public static toObject(m: prb.DuplicatedError, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IError {
        extra?: (string|null);
        generic?: (prb.IGenericError|null);
        notFound?: (prb.INotFoundError|null);
        duplicated?: (prb.IDuplicatedError|null);
    }

    class Error implements IError {
        constructor(p?: prb.IError);
        public extra: string;
        public generic?: (prb.IGenericError|null);
        public notFound?: (prb.INotFoundError|null);
        public duplicated?: (prb.IDuplicatedError|null);
        public error?: ("generic"|"notFound"|"duplicated");
        public static create(properties?: prb.IError): prb.Error;
        public static encode(m: prb.IError, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IError, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.Error;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.Error;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.Error;
        public static toObject(m: prb.Error, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace db {

        interface IParentBlock {
            number?: (number|null);
            hash?: (Uint8Array|null);
            header?: (Uint8Array|null);
            setId?: (number|null);
            hasJustification?: (boolean|null);
            syncHeaderData?: (Uint8Array|null);
            authoritySetChange?: (Uint8Array|null);
            paraNumber?: (number|null);
            paraProof?: (Uint8Array|null);
        }

        class ParentBlock implements IParentBlock {
            constructor(p?: prb.db.IParentBlock);
            public number: number;
            public hash: Uint8Array;
            public header: Uint8Array;
            public setId: number;
            public hasJustification: boolean;
            public syncHeaderData: Uint8Array;
            public authoritySetChange: Uint8Array;
            public paraNumber: number;
            public paraProof: Uint8Array;
            public static create(properties?: prb.db.IParentBlock): prb.db.ParentBlock;
            public static encode(m: prb.db.IParentBlock, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.db.IParentBlock, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.ParentBlock;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.ParentBlock;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.db.ParentBlock;
            public static toObject(m: prb.db.ParentBlock, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IParaBlock {
            number?: (number|null);
            hash?: (Uint8Array|null);
            header?: (Uint8Array|null);
            dispatchBlockData?: (Uint8Array|null);
        }

        class ParaBlock implements IParaBlock {
            constructor(p?: prb.db.IParaBlock);
            public number: number;
            public hash: Uint8Array;
            public header: Uint8Array;
            public dispatchBlockData: Uint8Array;
            public static create(properties?: prb.db.IParaBlock): prb.db.ParaBlock;
            public static encode(m: prb.db.IParaBlock, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.db.IParaBlock, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.ParaBlock;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.ParaBlock;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.db.ParaBlock;
            public static toObject(m: prb.db.ParaBlock, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGenesis {
            paraId?: (number|null);
            paraNumber?: (number|null);
            parentNumber?: (number|null);
            bridgeGenesisInfo?: (Uint8Array|null);
            genesisState?: (Uint8Array|null);
        }

        class Genesis implements IGenesis {
            constructor(p?: prb.db.IGenesis);
            public paraId: number;
            public paraNumber: number;
            public parentNumber: number;
            public bridgeGenesisInfo: Uint8Array;
            public genesisState: Uint8Array;
            public static create(properties?: prb.db.IGenesis): prb.db.Genesis;
            public static encode(m: prb.db.IGenesis, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.db.IGenesis, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.Genesis;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.Genesis;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.db.Genesis;
            public static toObject(m: prb.db.Genesis, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IWindow {
            parentStartBlock?: (number|null);
            parentStopBlock?: (number|null);
            paraStartBlock?: (number|null);
            paraStopBlock?: (number|null);
            windowId?: (number|null);
            setId?: (number|null);
            isFinished?: (boolean|null);
        }

        class Window implements IWindow {
            constructor(p?: prb.db.IWindow);
            public parentStartBlock: number;
            public parentStopBlock: number;
            public paraStartBlock: number;
            public paraStopBlock: number;
            public windowId: number;
            public setId: number;
            public isFinished: boolean;
            public static create(properties?: prb.db.IWindow): prb.db.Window;
            public static encode(m: prb.db.IWindow, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.db.IWindow, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.Window;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.Window;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.db.Window;
            public static toObject(m: prb.db.Window, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IRangeMeta {
            parentStartBlock?: (number|null);
            parentStopBlock?: (number|null);
            paraStartBlock?: (number|null);
            paraStopBlock?: (number|null);
            parentRange?: (number[]|null);
            paraRange?: (number[]|null);
            drySyncHeaderReqKey?: (string|null);
            latestSetId?: (number|null);
            blobParentStopBlock?: (number|null);
            blobParaStopBlock?: (number|null);
            blobSyncHeaderReqKey?: (string|null);
        }

        class RangeMeta implements IRangeMeta {
            constructor(p?: prb.db.IRangeMeta);
            public parentStartBlock: number;
            public parentStopBlock: number;
            public paraStartBlock: number;
            public paraStopBlock: number;
            public parentRange: number[];
            public paraRange: number[];
            public drySyncHeaderReqKey: string;
            public latestSetId: number;
            public blobParentStopBlock: number;
            public blobParaStopBlock: number;
            public blobSyncHeaderReqKey: string;
            public static create(properties?: prb.db.IRangeMeta): prb.db.RangeMeta;
            public static encode(m: prb.db.IRangeMeta, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.db.IRangeMeta, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.RangeMeta;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.RangeMeta;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.db.RangeMeta;
            public static toObject(m: prb.db.RangeMeta, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPool {
            uuid?: (string|null);
            owner?: (prb.IFullAccount|null);
            pid?: (number|Long|null);
            name?: (string|null);
            enabled?: (boolean|null);
            deleted?: (boolean|null);
            realPhalaSs58?: (string|null);
        }

        class Pool implements IPool {
            constructor(p?: prb.db.IPool);
            public uuid: string;
            public owner?: (prb.IFullAccount|null);
            public pid: (number|Long);
            public name: string;
            public enabled: boolean;
            public deleted: boolean;
            public realPhalaSs58: string;
            public static create(properties?: prb.db.IPool): prb.db.Pool;
            public static encode(m: prb.db.IPool, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.db.IPool, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.Pool;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.Pool;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.db.Pool;
            public static toObject(m: prb.db.Pool, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IWorker {
            uuid?: (string|null);
            pid?: (number|Long|null);
            name?: (string|null);
            endpoint?: (string|null);
            enabled?: (boolean|null);
            deleted?: (boolean|null);
            stake?: (string|null);
        }

        class Worker implements IWorker {
            constructor(p?: prb.db.IWorker);
            public uuid: string;
            public pid: (number|Long);
            public name: string;
            public endpoint: string;
            public enabled: boolean;
            public deleted: boolean;
            public stake: string;
            public static create(properties?: prb.db.IWorker): prb.db.Worker;
            public static encode(m: prb.db.IWorker, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.db.IWorker, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.db.Worker;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.db.Worker;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.db.Worker;
            public static toObject(m: prb.db.Worker, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }

    namespace data_provider {

        enum Status {
            S_UNKNOWN = 0,
            S_IDLE = 1,
            S_BUSY = 2,
            S_ORPHAN = 3
        }

        enum BlobType {
            BT_UNKNOWN = 0,
            BT_PARENT_BLOCK = 1,
            BT_PARA_BLOCK = 2
        }

        interface IInfo {
            status?: (prb.data_provider.Status|null);
            paraId?: (number|null);
            parentStartHeader?: (number|null);
            parentKnownEight?: (number|null);
            parentBlobEight?: (number|null);
            parentArchivedEight?: (number|null);
            paraKnownEight?: (number|null);
            paraBlobEight?: (number|null);
            paraArchivedEight?: (number|null);
            synched?: (boolean|null);
        }

        class Info implements IInfo {
            constructor(p?: prb.data_provider.IInfo);
            public status: prb.data_provider.Status;
            public paraId: number;
            public parentStartHeader: number;
            public parentKnownEight: number;
            public parentBlobEight: number;
            public parentArchivedEight: number;
            public paraKnownEight: number;
            public paraBlobEight: number;
            public paraArchivedEight: number;
            public synched: boolean;
            public static create(properties?: prb.data_provider.IInfo): prb.data_provider.Info;
            public static encode(m: prb.data_provider.IInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.Info;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.Info;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.Info;
            public static toObject(m: prb.data_provider.Info, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IWantBlob {
            number?: (number|null);
            type?: (prb.data_provider.BlobType|null);
        }

        class WantBlob implements IWantBlob {
            constructor(p?: prb.data_provider.IWantBlob);
            public number: number;
            public type: prb.data_provider.BlobType;
            public static create(properties?: prb.data_provider.IWantBlob): prb.data_provider.WantBlob;
            public static encode(m: prb.data_provider.IWantBlob, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IWantBlob, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.WantBlob;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.WantBlob;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.WantBlob;
            public static toObject(m: prb.data_provider.WantBlob, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IBlobMeta {
            number?: (number|null);
            hash?: (Uint8Array|null);
            originPeer?: (string|null);
            type?: (prb.data_provider.BlobType|null);
            getToken?: (string|null);
            tokenExpiresAt?: (number|Long|null);
        }

        class BlobMeta implements IBlobMeta {
            constructor(p?: prb.data_provider.IBlobMeta);
            public number: number;
            public hash: Uint8Array;
            public originPeer: string;
            public type: prb.data_provider.BlobType;
            public getToken: string;
            public tokenExpiresAt: (number|Long);
            public static create(properties?: prb.data_provider.IBlobMeta): prb.data_provider.BlobMeta;
            public static encode(m: prb.data_provider.IBlobMeta, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IBlobMeta, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.BlobMeta;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.BlobMeta;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.BlobMeta;
            public static toObject(m: prb.data_provider.BlobMeta, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGetBlob {
            token?: (string|null);
        }

        class GetBlob implements IGetBlob {
            constructor(p?: prb.data_provider.IGetBlob);
            public token: string;
            public static create(properties?: prb.data_provider.IGetBlob): prb.data_provider.GetBlob;
            public static encode(m: prb.data_provider.IGetBlob, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IGetBlob, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.GetBlob;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.GetBlob;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.GetBlob;
            public static toObject(m: prb.data_provider.GetBlob, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IBlob {
            type?: (prb.data_provider.BlobType|null);
            number?: (number|null);
            data?: (Uint8Array|null);
        }

        class Blob implements IBlob {
            constructor(p?: prb.data_provider.IBlob);
            public type: prb.data_provider.BlobType;
            public number: number;
            public data: Uint8Array;
            public static create(properties?: prb.data_provider.IBlob): prb.data_provider.Blob;
            public static encode(m: prb.data_provider.IBlob, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IBlob, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.Blob;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.Blob;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.Blob;
            public static toObject(m: prb.data_provider.Blob, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGetBlobByKey {
            key?: (string|null);
        }

        class GetBlobByKey implements IGetBlobByKey {
            constructor(p?: prb.data_provider.IGetBlobByKey);
            public key: string;
            public static create(properties?: prb.data_provider.IGetBlobByKey): prb.data_provider.GetBlobByKey;
            public static encode(m: prb.data_provider.IGetBlobByKey, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IGetBlobByKey, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.GetBlobByKey;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.GetBlobByKey;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.GetBlobByKey;
            public static toObject(m: prb.data_provider.GetBlobByKey, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IRawBlob {
            key?: (string|null);
            empty?: (boolean|null);
            data?: (Uint8Array|null);
        }

        class RawBlob implements IRawBlob {
            constructor(p?: prb.data_provider.IRawBlob);
            public key: string;
            public empty: boolean;
            public data: Uint8Array;
            public static create(properties?: prb.data_provider.IRawBlob): prb.data_provider.RawBlob;
            public static encode(m: prb.data_provider.IRawBlob, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IRawBlob, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.RawBlob;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.RawBlob;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.RawBlob;
            public static toObject(m: prb.data_provider.RawBlob, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICreatePool {
            pools?: (prb.db.IPool[]|null);
        }

        class CreatePool implements ICreatePool {
            constructor(p?: prb.data_provider.ICreatePool);
            public pools: prb.db.IPool[];
            public static create(properties?: prb.data_provider.ICreatePool): prb.data_provider.CreatePool;
            public static encode(m: prb.data_provider.ICreatePool, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.ICreatePool, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.CreatePool;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.CreatePool;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.CreatePool;
            public static toObject(m: prb.data_provider.CreatePool, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IUpdatePool {
            items?: (prb.data_provider.UpdatePool.IItem[]|null);
        }

        class UpdatePool implements IUpdatePool {
            constructor(p?: prb.data_provider.IUpdatePool);
            public items: prb.data_provider.UpdatePool.IItem[];
            public static create(properties?: prb.data_provider.IUpdatePool): prb.data_provider.UpdatePool;
            public static encode(m: prb.data_provider.IUpdatePool, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IUpdatePool, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.UpdatePool;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.UpdatePool;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.UpdatePool;
            public static toObject(m: prb.data_provider.UpdatePool, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace UpdatePool {

            interface IItem {
                id?: (prb.IPoolOrWorkerQueryIdentity|null);
                pool?: (prb.db.IPool|null);
            }

            class Item implements IItem {
                constructor(p?: prb.data_provider.UpdatePool.IItem);
                public id?: (prb.IPoolOrWorkerQueryIdentity|null);
                public pool?: (prb.db.IPool|null);
                public static create(properties?: prb.data_provider.UpdatePool.IItem): prb.data_provider.UpdatePool.Item;
                public static encode(m: prb.data_provider.UpdatePool.IItem, w?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: prb.data_provider.UpdatePool.IItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.UpdatePool.Item;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.UpdatePool.Item;
                public static verify(m: { [k: string]: any }): (string|null);
                public static fromObject(d: { [k: string]: any }): prb.data_provider.UpdatePool.Item;
                public static toObject(m: prb.data_provider.UpdatePool.Item, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface ICreateWorker {
            workers?: (prb.db.IWorker[]|null);
        }

        class CreateWorker implements ICreateWorker {
            constructor(p?: prb.data_provider.ICreateWorker);
            public workers: prb.db.IWorker[];
            public static create(properties?: prb.data_provider.ICreateWorker): prb.data_provider.CreateWorker;
            public static encode(m: prb.data_provider.ICreateWorker, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.ICreateWorker, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.CreateWorker;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.CreateWorker;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.CreateWorker;
            public static toObject(m: prb.data_provider.CreateWorker, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IUpdateWorker {
            items?: (prb.data_provider.UpdateWorker.IItem[]|null);
        }

        class UpdateWorker implements IUpdateWorker {
            constructor(p?: prb.data_provider.IUpdateWorker);
            public items: prb.data_provider.UpdateWorker.IItem[];
            public static create(properties?: prb.data_provider.IUpdateWorker): prb.data_provider.UpdateWorker;
            public static encode(m: prb.data_provider.IUpdateWorker, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IUpdateWorker, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.UpdateWorker;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.UpdateWorker;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.UpdateWorker;
            public static toObject(m: prb.data_provider.UpdateWorker, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace UpdateWorker {

            interface IItem {
                id?: (prb.IPoolOrWorkerQueryIdentity|null);
                worker?: (prb.db.IWorker|null);
            }

            class Item implements IItem {
                constructor(p?: prb.data_provider.UpdateWorker.IItem);
                public id?: (prb.IPoolOrWorkerQueryIdentity|null);
                public worker?: (prb.db.IWorker|null);
                public static create(properties?: prb.data_provider.UpdateWorker.IItem): prb.data_provider.UpdateWorker.Item;
                public static encode(m: prb.data_provider.UpdateWorker.IItem, w?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: prb.data_provider.UpdateWorker.IItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.UpdateWorker.Item;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.UpdateWorker.Item;
                public static verify(m: { [k: string]: any }): (string|null);
                public static fromObject(d: { [k: string]: any }): prb.data_provider.UpdateWorker.Item;
                public static toObject(m: prb.data_provider.UpdateWorker.Item, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IPoolList {
            pools?: (prb.db.IPool[]|null);
        }

        class PoolList implements IPoolList {
            constructor(p?: prb.data_provider.IPoolList);
            public pools: prb.db.IPool[];
            public static create(properties?: prb.data_provider.IPoolList): prb.data_provider.PoolList;
            public static encode(m: prb.data_provider.IPoolList, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IPoolList, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.PoolList;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.PoolList;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.PoolList;
            public static toObject(m: prb.data_provider.PoolList, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IWorkerList {
            workers?: (prb.db.IWorker[]|null);
        }

        class WorkerList implements IWorkerList {
            constructor(p?: prb.data_provider.IWorkerList);
            public workers: prb.db.IWorker[];
            public static create(properties?: prb.data_provider.IWorkerList): prb.data_provider.WorkerList;
            public static encode(m: prb.data_provider.IWorkerList, w?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: prb.data_provider.IWorkerList, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.data_provider.WorkerList;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.data_provider.WorkerList;
            public static verify(m: { [k: string]: any }): (string|null);
            public static fromObject(d: { [k: string]: any }): prb.data_provider.WorkerList;
            public static toObject(m: prb.data_provider.WorkerList, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }

    interface IWorkerState {
        status?: (prb.WorkerState.Status|null);
        parentHeaderSynchedTo?: (number|null);
        paraHeaderSynchedTo?: (number|null);
        paraBlockDispatchedTo?: (number|null);
        initialized?: (boolean|null);
        worker?: (prb.db.IWorker|null);
        publicKey?: (string|null);
        lastMessage?: (string|null);
        minerInfoJson?: (string|null);
        minerAccountId?: (string|null);
    }

    class WorkerState implements IWorkerState {
        constructor(p?: prb.IWorkerState);
        public status: prb.WorkerState.Status;
        public parentHeaderSynchedTo: number;
        public paraHeaderSynchedTo: number;
        public paraBlockDispatchedTo: number;
        public initialized: boolean;
        public worker?: (prb.db.IWorker|null);
        public publicKey: string;
        public lastMessage: string;
        public minerInfoJson: string;
        public minerAccountId: string;
        public static create(properties?: prb.IWorkerState): prb.WorkerState;
        public static encode(m: prb.IWorkerState, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IWorkerState, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WorkerState;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WorkerState;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.WorkerState;
        public static toObject(m: prb.WorkerState, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace WorkerState {

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

    interface IPoolOrWorkerQueryIdentity {
        uuid?: (string|null);
        name?: (string|null);
        pid?: (number|Long|null);
    }

    class PoolOrWorkerQueryIdentity implements IPoolOrWorkerQueryIdentity {
        constructor(p?: prb.IPoolOrWorkerQueryIdentity);
        public uuid?: (string|null);
        public name?: (string|null);
        public pid?: (number|Long|null);
        public identity?: ("uuid"|"name"|"pid");
        public static create(properties?: prb.IPoolOrWorkerQueryIdentity): prb.PoolOrWorkerQueryIdentity;
        public static encode(m: prb.IPoolOrWorkerQueryIdentity, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IPoolOrWorkerQueryIdentity, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.PoolOrWorkerQueryIdentity;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.PoolOrWorkerQueryIdentity;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.PoolOrWorkerQueryIdentity;
        public static toObject(m: prb.PoolOrWorkerQueryIdentity, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IQueryWorkerState {
        ids?: (prb.IPoolOrWorkerQueryIdentity[]|null);
    }

    class QueryWorkerState implements IQueryWorkerState {
        constructor(p?: prb.IQueryWorkerState);
        public ids: prb.IPoolOrWorkerQueryIdentity[];
        public static create(properties?: prb.IQueryWorkerState): prb.QueryWorkerState;
        public static encode(m: prb.IQueryWorkerState, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IQueryWorkerState, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.QueryWorkerState;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.QueryWorkerState;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.QueryWorkerState;
        public static toObject(m: prb.QueryWorkerState, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IWorkerStateUpdate {
        workerStates?: (prb.IWorkerState[]|null);
    }

    class WorkerStateUpdate implements IWorkerStateUpdate {
        constructor(p?: prb.IWorkerStateUpdate);
        public workerStates: prb.IWorkerState[];
        public static create(properties?: prb.IWorkerStateUpdate): prb.WorkerStateUpdate;
        public static encode(m: prb.IWorkerStateUpdate, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IWorkerStateUpdate, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.WorkerStateUpdate;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.WorkerStateUpdate;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.WorkerStateUpdate;
        public static toObject(m: prb.WorkerStateUpdate, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILifecycleManagerStateUpdate {
        hostname?: (string|null);
        pools?: (prb.db.IPool[]|null);
        workers?: (prb.db.IWorker[]|null);
    }

    class LifecycleManagerStateUpdate implements ILifecycleManagerStateUpdate {
        constructor(p?: prb.ILifecycleManagerStateUpdate);
        public hostname: string;
        public pools: prb.db.IPool[];
        public workers: prb.db.IWorker[];
        public static create(properties?: prb.ILifecycleManagerStateUpdate): prb.LifecycleManagerStateUpdate;
        public static encode(m: prb.ILifecycleManagerStateUpdate, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.ILifecycleManagerStateUpdate, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.LifecycleManagerStateUpdate;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.LifecycleManagerStateUpdate;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.LifecycleManagerStateUpdate;
        public static toObject(m: prb.LifecycleManagerStateUpdate, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICallOnlineLifecycleManager {
        isResponse?: (boolean|null);
        hostname?: (string|null);
    }

    class CallOnlineLifecycleManager implements ICallOnlineLifecycleManager {
        constructor(p?: prb.ICallOnlineLifecycleManager);
        public isResponse: boolean;
        public hostname: string;
        public static create(properties?: prb.ICallOnlineLifecycleManager): prb.CallOnlineLifecycleManager;
        public static encode(m: prb.ICallOnlineLifecycleManager, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.ICallOnlineLifecycleManager, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.CallOnlineLifecycleManager;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.CallOnlineLifecycleManager;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.CallOnlineLifecycleManager;
        public static toObject(m: prb.CallOnlineLifecycleManager, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILifecycleActionRequest {
        id?: (prb.IPoolOrWorkerQueryIdentity|null);
        reason?: (string|null);
    }

    class LifecycleActionRequest implements ILifecycleActionRequest {
        constructor(p?: prb.ILifecycleActionRequest);
        public id?: (prb.IPoolOrWorkerQueryIdentity|null);
        public reason: string;
        public static create(properties?: prb.ILifecycleActionRequest): prb.LifecycleActionRequest;
        public static encode(m: prb.ILifecycleActionRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.ILifecycleActionRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.LifecycleActionRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.LifecycleActionRequest;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.LifecycleActionRequest;
        public static toObject(m: prb.LifecycleActionRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRequestStartWorkerLifecycle {
        requests?: (prb.ILifecycleActionRequest[]|null);
    }

    class RequestStartWorkerLifecycle implements IRequestStartWorkerLifecycle {
        constructor(p?: prb.IRequestStartWorkerLifecycle);
        public requests: prb.ILifecycleActionRequest[];
        public static create(properties?: prb.IRequestStartWorkerLifecycle): prb.RequestStartWorkerLifecycle;
        public static encode(m: prb.IRequestStartWorkerLifecycle, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IRequestStartWorkerLifecycle, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.RequestStartWorkerLifecycle;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.RequestStartWorkerLifecycle;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.RequestStartWorkerLifecycle;
        public static toObject(m: prb.RequestStartWorkerLifecycle, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRequestKickWorker {
        requests?: (prb.ILifecycleActionRequest[]|null);
    }

    class RequestKickWorker implements IRequestKickWorker {
        constructor(p?: prb.IRequestKickWorker);
        public requests: prb.ILifecycleActionRequest[];
        public static create(properties?: prb.IRequestKickWorker): prb.RequestKickWorker;
        public static encode(m: prb.IRequestKickWorker, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: prb.IRequestKickWorker, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): prb.RequestKickWorker;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prb.RequestKickWorker;
        public static verify(m: { [k: string]: any }): (string|null);
        public static fromObject(d: { [k: string]: any }): prb.RequestKickWorker;
        public static toObject(m: prb.RequestKickWorker, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}

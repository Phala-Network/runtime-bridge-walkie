declare const schema: {
  "nested": {
    "prb": {
      "nested": {
        "WalkieRoles": {
          "values": {
            "WR_CLIENT": 0,
            "WR_DATA_PROVIDER_INT": 1,
            "WR_DATA_PROVIDER_EXT": 2,
            "WR_LIFECYCLE_MANAGER": 3,
            "WR_TRADER": 4
          }
        },
        "WalkieSystemInfo": {
          "fields": {
            "hostname": {
              "type": "string",
              "id": 1
            },
            "peerId": {
              "type": "string",
              "id": 2
            },
            "role": {
              "type": "WalkieRoles",
              "id": 3
            },
            "chainIdentity": {
              "type": "string",
              "id": 4
            },
            "bridgeIdentity": {
              "type": "string",
              "id": 5
            }
          }
        },
        "WalkieRpcRequestWrapper": {
          "fields": {
            "createdAt": {
              "type": "uint64",
              "id": 1
            },
            "nonce": {
              "type": "string",
              "id": 2
            },
            "data": {
              "type": "bytes",
              "id": 3
            },
            "method": {
              "type": "string",
              "id": 4
            }
          }
        },
        "WalkieRpcResponseWrapper": {
          "fields": {
            "createdAt": {
              "type": "uint64",
              "id": 1
            },
            "requestNonce": {
              "type": "string",
              "id": 2
            },
            "nonce": {
              "type": "string",
              "id": 3
            },
            "data": {
              "type": "bytes",
              "id": 4
            },
            "hasError": {
              "type": "bool",
              "id": 5
            }
          }
        },
        "WalkieBroadcastWrapper": {
          "fields": {
            "createdAt": {
              "type": "uint64",
              "id": 1
            },
            "nonce": {
              "type": "string",
              "id": 2
            },
            "data": {
              "type": "bytes",
              "id": 3
            },
            "method": {
              "type": "string",
              "id": 4
            }
          }
        },
        "WalkieRpc": {
          "methods": {
            "Hello": {
              "requestType": "WalkieSystemInfo",
              "responseType": "WalkieSystemInfo"
            },
            "GetDataProviderInfo": {
              "requestType": "Empty",
              "responseType": "data_provider.Info"
            },
            "GetBlobByKey": {
              "requestType": "data_provider.GetBlobByKey",
              "responseType": "data_provider.RawBlob"
            },
            "WantBlob": {
              "requestType": "data_provider.WantBlob",
              "responseType": "data_provider.BlobMeta"
            },
            "GetBlobWithToken": {
              "requestType": "data_provider.GetBlob",
              "responseType": "data_provider.Blob"
            },
            "ListPool": {
              "requestType": "Empty",
              "responseType": "data_provider.PoolList"
            },
            "CreatePool": {
              "requestType": "data_provider.CreatePool",
              "responseType": "data_provider.PoolList"
            },
            "UpdatePool": {
              "requestType": "data_provider.UpdatePool",
              "responseType": "data_provider.PoolList"
            },
            "ListWorker": {
              "requestType": "Empty",
              "responseType": "data_provider.WorkerList"
            },
            "CreateWorker": {
              "requestType": "data_provider.CreateWorker",
              "responseType": "data_provider.WorkerList"
            },
            "UpdateWorker": {
              "requestType": "data_provider.UpdateWorker",
              "responseType": "data_provider.WorkerList"
            }
          }
        },
        "WalkieBroadcast": {
          "methods": {}
        },
        "Empty": {
          "fields": {}
        },
        "Placeholder": {
          "fields": {}
        },
        "Ack": {
          "fields": {
            "ack": {
              "type": "bool",
              "id": 1
            }
          }
        },
        "BN": {
          "fields": {
            "value": {
              "type": "string",
              "id": 1
            }
          }
        },
        "FullAccount": {
          "fields": {
            "mnemonic": {
              "type": "string",
              "id": 1
            },
            "polkadotJson": {
              "type": "string",
              "id": 2
            },
            "ss58Phala": {
              "type": "string",
              "id": 3
            },
            "ss58Polkadot": {
              "type": "string",
              "id": 4
            }
          }
        },
        "Account": {
          "fields": {
            "ss58Phala": {
              "type": "string",
              "id": 1
            },
            "ss58Polkadot": {
              "type": "string",
              "id": 2
            }
          }
        },
        "GenericError": {
          "fields": {
            "code": {
              "type": "string",
              "id": 1
            },
            "desc": {
              "type": "string",
              "id": 2
            }
          }
        },
        "NotFoundError": {
          "fields": {
            "desc": {
              "type": "string",
              "id": 1
            }
          }
        },
        "DuplicatedError": {
          "fields": {
            "desc": {
              "type": "string",
              "id": 1
            }
          }
        },
        "Error": {
          "oneofs": {
            "error": {
              "oneof": [
                "generic",
                "notFound",
                "duplicated"
              ]
            }
          },
          "fields": {
            "extra": {
              "type": "string",
              "id": 1
            },
            "generic": {
              "type": "GenericError",
              "id": 2
            },
            "notFound": {
              "type": "NotFoundError",
              "id": 3
            },
            "duplicated": {
              "type": "DuplicatedError",
              "id": 4
            }
          }
        },
        "db": {
          "nested": {
            "ParentBlock": {
              "fields": {
                "number": {
                  "type": "uint32",
                  "id": 1
                },
                "hash": {
                  "type": "bytes",
                  "id": 2
                },
                "header": {
                  "type": "bytes",
                  "id": 3
                },
                "setId": {
                  "type": "uint32",
                  "id": 4
                },
                "hasJustification": {
                  "type": "bool",
                  "id": 5
                },
                "syncHeaderData": {
                  "type": "bytes",
                  "id": 6
                },
                "authoritySetChange": {
                  "type": "bytes",
                  "id": 7
                },
                "paraNumber": {
                  "type": "uint32",
                  "id": 8
                },
                "paraProof": {
                  "type": "bytes",
                  "id": 9
                }
              }
            },
            "ParaBlock": {
              "fields": {
                "number": {
                  "type": "uint32",
                  "id": 1
                },
                "hash": {
                  "type": "bytes",
                  "id": 2
                },
                "header": {
                  "type": "bytes",
                  "id": 3
                },
                "dispatchBlockData": {
                  "type": "bytes",
                  "id": 5
                }
              }
            },
            "Genesis": {
              "fields": {
                "paraId": {
                  "type": "uint32",
                  "id": 1
                },
                "paraNumber": {
                  "type": "uint32",
                  "id": 2
                },
                "parentNumber": {
                  "type": "uint32",
                  "id": 3
                },
                "bridgeGenesisInfo": {
                  "type": "bytes",
                  "id": 4
                },
                "genesisState": {
                  "type": "bytes",
                  "id": 5
                }
              }
            },
            "Window": {
              "fields": {
                "parentStartBlock": {
                  "type": "int32",
                  "id": 1
                },
                "parentStopBlock": {
                  "type": "int32",
                  "id": 2
                },
                "paraStartBlock": {
                  "type": "int32",
                  "id": 3
                },
                "paraStopBlock": {
                  "type": "int32",
                  "id": 4
                },
                "windowId": {
                  "type": "int32",
                  "id": 5
                },
                "setId": {
                  "type": "int32",
                  "id": 6
                },
                "isFinished": {
                  "type": "bool",
                  "id": 7
                }
              }
            },
            "RangeMeta": {
              "fields": {
                "parentStartBlock": {
                  "type": "uint32",
                  "id": 1
                },
                "parentStopBlock": {
                  "type": "uint32",
                  "id": 2
                },
                "paraStartBlock": {
                  "type": "int32",
                  "id": 3
                },
                "paraStopBlock": {
                  "type": "int32",
                  "id": 4
                },
                "parentRange": {
                  "rule": "repeated",
                  "type": "uint32",
                  "id": 5
                },
                "paraRange": {
                  "rule": "repeated",
                  "type": "uint32",
                  "id": 6
                },
                "drySyncHeaderReqKey": {
                  "type": "string",
                  "id": 7
                },
                "latestSetId": {
                  "type": "int32",
                  "id": 8
                },
                "blobParentStopBlock": {
                  "type": "uint32",
                  "id": 9
                },
                "blobParaStopBlock": {
                  "type": "int32",
                  "id": 10
                },
                "blobSyncHeaderReqKey": {
                  "type": "string",
                  "id": 11
                }
              }
            },
            "Pool": {
              "fields": {
                "uuid": {
                  "type": "string",
                  "id": 1
                },
                "owner": {
                  "type": "FullAccount",
                  "id": 2
                },
                "pid": {
                  "type": "uint64",
                  "id": 3
                },
                "name": {
                  "type": "string",
                  "id": 4
                },
                "enabled": {
                  "type": "bool",
                  "id": 5
                },
                "deleted": {
                  "type": "bool",
                  "id": 6
                },
                "realPhalaSs58": {
                  "type": "string",
                  "id": 7
                }
              }
            },
            "Worker": {
              "fields": {
                "uuid": {
                  "type": "string",
                  "id": 1
                },
                "pid": {
                  "type": "uint64",
                  "id": 2
                },
                "name": {
                  "type": "string",
                  "id": 3
                },
                "endpoint": {
                  "type": "string",
                  "id": 4
                },
                "enabled": {
                  "type": "bool",
                  "id": 5
                },
                "deleted": {
                  "type": "bool",
                  "id": 6
                },
                "stake": {
                  "type": "string",
                  "id": 7
                }
              }
            }
          }
        },
        "data_provider": {
          "nested": {
            "Status": {
              "values": {
                "S_UNKNOWN": 0,
                "S_IDLE": 1,
                "S_BUSY": 2,
                "S_ORPHAN": 3
              }
            },
            "BlobType": {
              "values": {
                "BT_UNKNOWN": 0,
                "BT_PARENT_BLOCK": 1,
                "BT_PARA_BLOCK": 2
              }
            },
            "Info": {
              "fields": {
                "status": {
                  "type": "Status",
                  "id": 1
                },
                "paraId": {
                  "type": "int32",
                  "id": 2
                },
                "parentStartHeader": {
                  "type": "int32",
                  "id": 3
                },
                "parentKnownEight": {
                  "type": "int32",
                  "id": 4
                },
                "parentBlobEight": {
                  "type": "int32",
                  "id": 5
                },
                "parentArchivedEight": {
                  "type": "int32",
                  "id": 6
                },
                "paraKnownEight": {
                  "type": "int32",
                  "id": 7
                },
                "paraBlobEight": {
                  "type": "int32",
                  "id": 8
                },
                "paraArchivedEight": {
                  "type": "int32",
                  "id": 9
                },
                "synched": {
                  "type": "bool",
                  "id": 10
                }
              }
            },
            "WantBlob": {
              "fields": {
                "number": {
                  "type": "uint32",
                  "id": 1
                },
                "type": {
                  "type": "BlobType",
                  "id": 2
                }
              }
            },
            "BlobMeta": {
              "fields": {
                "number": {
                  "type": "uint32",
                  "id": 1
                },
                "hash": {
                  "type": "bytes",
                  "id": 2
                },
                "originPeer": {
                  "type": "string",
                  "id": 3
                },
                "type": {
                  "type": "BlobType",
                  "id": 4
                },
                "getToken": {
                  "type": "string",
                  "id": 5
                },
                "tokenExpiresAt": {
                  "type": "uint64",
                  "id": 6
                }
              }
            },
            "GetBlob": {
              "fields": {
                "token": {
                  "type": "string",
                  "id": 1
                }
              }
            },
            "Blob": {
              "fields": {
                "type": {
                  "type": "BlobType",
                  "id": 1
                },
                "number": {
                  "type": "uint32",
                  "id": 2
                },
                "data": {
                  "type": "bytes",
                  "id": 3
                }
              }
            },
            "GetBlobByKey": {
              "fields": {
                "key": {
                  "type": "string",
                  "id": 1
                }
              }
            },
            "RawBlob": {
              "fields": {
                "key": {
                  "type": "string",
                  "id": 1
                },
                "empty": {
                  "type": "bool",
                  "id": 2
                },
                "data": {
                  "type": "bytes",
                  "id": 3
                }
              }
            },
            "CreatePool": {
              "fields": {
                "pools": {
                  "rule": "repeated",
                  "type": "db.Pool",
                  "id": 1
                }
              }
            },
            "UpdatePool": {
              "fields": {
                "items": {
                  "rule": "repeated",
                  "type": "Item",
                  "id": 1
                }
              },
              "nested": {
                "Item": {
                  "fields": {
                    "id": {
                      "type": "PoolOrWorkerQueryIdentity",
                      "id": 1
                    },
                    "pool": {
                      "type": "db.Pool",
                      "id": 2
                    }
                  }
                }
              }
            },
            "CreateWorker": {
              "fields": {
                "workers": {
                  "rule": "repeated",
                  "type": "db.Worker",
                  "id": 1
                }
              }
            },
            "UpdateWorker": {
              "fields": {
                "items": {
                  "rule": "repeated",
                  "type": "Item",
                  "id": 1
                }
              },
              "nested": {
                "Item": {
                  "fields": {
                    "id": {
                      "type": "PoolOrWorkerQueryIdentity",
                      "id": 1
                    },
                    "worker": {
                      "type": "db.Worker",
                      "id": 2
                    }
                  }
                }
              }
            },
            "PoolList": {
              "fields": {
                "pools": {
                  "rule": "repeated",
                  "type": "db.Pool",
                  "id": 1
                }
              }
            },
            "WorkerList": {
              "fields": {
                "workers": {
                  "rule": "repeated",
                  "type": "db.Worker",
                  "id": 1
                }
              }
            }
          }
        },
        "WorkerState": {
          "fields": {
            "status": {
              "type": "Status",
              "id": 1
            },
            "parentHeaderSynchedTo": {
              "type": "int32",
              "id": 2
            },
            "paraHeaderSynchedTo": {
              "type": "int32",
              "id": 3
            },
            "paraBlockDispatchedTo": {
              "type": "int32",
              "id": 4
            },
            "initialized": {
              "type": "bool",
              "id": 5
            },
            "worker": {
              "type": "db.Worker",
              "id": 6
            },
            "publicKey": {
              "type": "string",
              "id": 8
            },
            "lastMessage": {
              "type": "string",
              "id": 9
            },
            "minerInfoJson": {
              "type": "string",
              "id": 10
            },
            "minerAccountId": {
              "type": "string",
              "id": 11
            }
          },
          "nested": {
            "Status": {
              "values": {
                "S_IDLE": 0,
                "S_STARTING": 1,
                "S_SYNCHING": 2,
                "S_SYNCHED": 3,
                "S_PRE_MINING": 4,
                "S_MINING": 5,
                "S_KICKED": 6,
                "S_ERROR": 7
              }
            }
          }
        },
        "PoolOrWorkerQueryIdentity": {
          "oneofs": {
            "identity": {
              "oneof": [
                "uuid",
                "name",
                "pid"
              ]
            }
          },
          "fields": {
            "uuid": {
              "type": "string",
              "id": 1
            },
            "name": {
              "type": "string",
              "id": 2
            },
            "pid": {
              "type": "uint64",
              "id": 3
            }
          }
        },
        "QueryWorkerState": {
          "fields": {
            "ids": {
              "rule": "repeated",
              "type": "PoolOrWorkerQueryIdentity",
              "id": 1
            }
          }
        },
        "WorkerStateUpdate": {
          "fields": {
            "workerStates": {
              "rule": "repeated",
              "type": "WorkerState",
              "id": 1
            }
          }
        },
        "LifecycleManagerStateUpdate": {
          "fields": {
            "hostname": {
              "type": "string",
              "id": 1
            },
            "pools": {
              "rule": "repeated",
              "type": "db.Pool",
              "id": 2
            },
            "workers": {
              "rule": "repeated",
              "type": "db.Worker",
              "id": 3
            }
          }
        },
        "CallOnlineLifecycleManager": {
          "fields": {
            "isResponse": {
              "type": "bool",
              "id": 1
            },
            "hostname": {
              "type": "string",
              "id": 2
            }
          }
        },
        "LifecycleActionRequest": {
          "fields": {
            "id": {
              "type": "PoolOrWorkerQueryIdentity",
              "id": 1
            },
            "reason": {
              "type": "string",
              "id": 2
            }
          }
        },
        "RequestStartWorkerLifecycle": {
          "fields": {
            "requests": {
              "rule": "repeated",
              "type": "LifecycleActionRequest",
              "id": 1
            }
          }
        },
        "RequestKickWorker": {
          "fields": {
            "requests": {
              "rule": "repeated",
              "type": "LifecycleActionRequest",
              "id": 1
            }
          }
        }
      }
    }
  }
}; export default schema;

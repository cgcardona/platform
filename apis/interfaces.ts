export interface GetBlockchainID {
  blockchainID: string;
}

export interface GetNetworkID {
  networkID: number;
}

export interface GetNetworkName {
  networkName: string;
}

export interface GetNodeID {
  nodeID: string;
  nodePOP: {
    publicKey: string;
    proofOfPossession: string;
  };
}

export interface GetNodeIP {
  ip: string;
}

export interface GetNodeVersion {
  version: string,
  databaseVersion: string,
  gitCommit: string,
  vmVersions: {
    avm: string,
    evm: string,
    platform: string
  },
  rpcProtocolVersion: string,
}

export interface GetVMs {
  [key: string]: string[];
}

export interface IsBootstrapped {
  isBootstrapped: boolean;
}

export interface Peers {
  numPeers: number;
  peers: [
    {
      ip: string;
      publicIP: string;
      nodeID: string;
      version: string;
      lastSent: string;
      lastReceived: string;
      benched: [];
      observedUptime: string;
    }
  ];
}

export interface GetTxFee {
  txFee: string;
  createAssetTxFee: string;
  createSubnetTxFee: string;
  transformSubnetTxFee: string;
  createBlockchainTxFee: string;
  addPrimaryNetworkValidatorFee: string;
  addPrimaryNetworkDelegatorFee: string;
  addSubnetValidatorFee: string;
  addSubnetDelegatorFee: string;
}

export interface Uptime {
  rewardingStakePercentage: string;
  weightedAveragePercentage: string;
}
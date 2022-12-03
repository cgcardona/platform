import axios from 'axios';
import { 
  GetBlockchainID,
  GetNetworkID,
  GetNetworkName,
  GetNodeID,
  GetNodeIP,
  GetNodeVersion,
  GetVMs,
  IsBootstrapped,
  Peers,
  GetTxFee,
  Uptime 
} from './interfaces'

// Update the function definition to include the url and alias parameters
export async function getBlockchainID(url: string, alias: string): Promise<GetBlockchainID> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.getBlockchainID',
    params: {
      // Pass the alias argument to the alias property in the body
      alias
    }
  };

  // Make the POST request to the specified URL with the body
  const response = await axios.post(url, body);

  // Return the response data
  return response.data.result.blockchainID;
}

export async function getNetworkID(url: string): Promise<GetNetworkID> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.getNetworkID'
  };

  // Make the POST request using axios
  const response = await axios.post(url, body);

  return response.data.result.networkID;
}

export async function getNetworkName(url: string): Promise<GetNetworkName> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.getNetworkName'
  };

  // Make the POST request using axios
  const response = await axios.post(url, body);

  // Return the response data
  return response.data.result.networkName;
}

export async function getNodeID(url: string): Promise<GetNodeID> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.getNodeID'
  };

  // Make the POST request using axios
  const response = await axios.post(url, body);

  // Return the response data
  return response.data.result;
}

export async function getNodeIP(url: string): Promise<GetNodeIP> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.getNodeIP'
  };

  // Make the POST request using axios
  const response = await axios.post(url, body);

  // Return the response data
  return response.data.result.ip;
}

export async function getNodeVersion(url: string): Promise<GetNodeVersion> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.getNodeVersion'
  };

  // Make the POST request using axios
  const response = await axios.post(url, body);

  // Return the response data
  return response.data.result;
}

export async function getVMs(url: string): Promise<GetVMs> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.getVMs'
  };

  // Make the POST request using axios
  const response = await axios.post(url, body);

  // Return the response data
  return response.data.result.vms;
}

export async function isBootstrapped(url: string, chain: string): Promise<IsBootstrapped> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.isBootstrapped',
    params: {
      chain
    }
  };

  // Make the POST request using axios
  const response = await axios.post(url, body);

  // Return the response data
  return response.data.result.isBootstrapped;
}

export async function peers(url: string, nodeIDs: string[] = []): Promise<Peers> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.peers',
    params: {
      nodeIDs
    }
  };

  // Make the POST request using axios
  const response = await axios.post(url, body);

  // Return the response data
  return response.data.result;
}

export async function getTxFee(url: string): Promise<GetTxFee> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.getTxFee'
  };

  // Make the POST request using axios
  const response = await axios.post(url, body);

  // return response.data
  return response.data.result;
}

export async function uptime(url: string): Promise<Uptime> {
  // Create the body for the POST request
  const body = {
    jsonrpc: '2.0',
    id: 1,
    method: 'info.uptime'
  };

  // Make the POST request using axios
  const response = await axios.post(url, body);

  // Return the response data
  return response.data.result;
}
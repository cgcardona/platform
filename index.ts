import { 
  getBlockchainID, 
  getNetworkID, 
  getNetworkName, 
  getNodeID,
  getNodeIP,
  getNodeVersion,
  getVMs,
  isBootstrapped,
  peers,
  getTxFee,
  uptime
} from './apis/info';
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
} from './apis/interfaces'

// Define the async main function
async function main() {
  const url: string = 'http://127.0.0.1:9650/ext/info';
  const chain: string = 'X';
  const blockchainID: GetBlockchainID = await getBlockchainID(url, chain);
  const networkID: GetNetworkID = await getNetworkID(url);
  const networkName: GetNetworkName = await getNetworkName(url);
  const nodeID: GetNodeID = await getNodeID(url);
  const nodeIP: GetNodeIP = await getNodeIP(url);
  const nodeVersion: GetNodeVersion = await getNodeVersion(url);
  const VMs: GetVMs = await getVMs(url);
  const IsBootstrapped: IsBootstrapped = await isBootstrapped(url, chain);
  const Peers: Peers = await peers(url);
  const txFee: GetTxFee = await getTxFee(url);
  const Uptime: Uptime = await uptime(url);

    // Use the console.log method to print the variable name and the returned value for each function call
    console.log(`blockchainID: ${blockchainID}`);
    console.log(`networkID: ${networkID}`);
    console.log(`networkName: ${networkName}`);
    console.log(`nodeID:`, nodeID);
    console.log(`nodeIP: ${nodeIP}`);
    console.log(`nodeVersion:`, nodeVersion);
    console.log(`VMs:`, VMs);
    console.log(`IsBootstrapped: ${IsBootstrapped}`);
    console.log(`Peers:`, Peers);
    console.log(`txFee:`, txFee);
    console.log(`Uptime:`, Uptime);
}

// Call the main function
main();
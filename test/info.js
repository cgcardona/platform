// Import the functions from the info.ts file
const { 
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
} = require("../apis/info");
const chai = require('chai')
const spies = require('chai-spies');
const axios = require('axios');
chai.use(spies);
const url = 'http://127.0.0.1:9650/ext/info';

describe('Info API', () => {
  it('should make a POST request to the specified URL with the correct body', async () => {
    // Spy on the axios.post method to verify that it is called correctly
    // Check if the chai object is defined and not undefined
    if (chai && typeof chai === 'object') {
      // If the chai object is defined, create a spy for the axios.post method
      const postSpy = chai.spy.on(axios, 'post');
        // Call the getBlockchainID function
        await getBlockchainID(url, "X");

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.getBlockchainID',
          params: {
            alias: 'X'
          }
        });

        await getNetworkID(url);

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.getNetworkID'
        });

        await getNetworkName(url);

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.getNetworkName'
        });

        await getNodeID(url);

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.getNodeID'
        });

        await getNodeIP(url);

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.getNodeIP'
        });

        await getNodeVersion(url);

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.getNodeVersion'
        });

        await getVMs(url);

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.getVMs'
        });

        await isBootstrapped(url, "X");

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.isBootstrapped',
          params: {
              chain:"X"
          }
        });

        await peers(url);

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.peers',
          params: {
            nodeIDs:[]
          }
        });

        await getTxFee(url);

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.getTxFee'
        });

        await uptime(url);

        // Assert that the axios.post method was called with the correct arguments
        chai.expect(postSpy).to.have.been.called.with(url, {
          jsonrpc: '2.0',
          id: 1,
          method: 'info.uptime'
        });
    } else {
      // If the chai object is undefined, print an error message
      console.error('The chai object is undefined');
    }
  });
});

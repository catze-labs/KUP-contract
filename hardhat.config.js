require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const KLAYTN_TESTNET_RPC_URL = process.env.KLAYTN_TESTNET_RPC_URL;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "klaytn_testnet",
  networks: {
    klaytn_testnet: {
      url: `${KLAYTN_TESTNET_RPC_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  },
};
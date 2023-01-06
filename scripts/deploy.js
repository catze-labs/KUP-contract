const { deploy } = require("@openzeppelin/hardhat-upgrades/dist/utils");
const hre = require("hardhat");

async function main() {
    const accounts = await hre.ethers.getSigners();
    const deployer = accounts[0];
    console.log(`Deploy from account: ${deployer.address}`);

    const latestBlock = await hre.ethers.provider.getBlock("latest");
    const nonce = await hre.ethers.provider.getTransactionCount(deployer.address, "latest");
    const gasPrice = await hre.ethers.provider.getGasPrice();
    // const gasLimit = Math.round(latestBlock.gasLimit / latestBlock.transactions.length);
    const gasLimit = 6000000;
    console.log(`Latest Block: ${latestBlock.number} / Nonce: ${nonce}`);
    console.log(`Gas Price: ${gasPrice / 1e9} Gwei / Gas Limit: ${gasLimit}`);
    
    // KUPFT
    const Kupft = await hre.ethers.getContractFactory('KUPFT');
    const kupft = await Kupft.deploy();
    console.log(`  -> Deploying KUPFT contract`);
    console.log(`     - hash: ${kupft.deployTransaction.hash}`);
    console.log(`     - gasPrice: ${kupft.deployTransaction.gasPrice / 1e9}`);
    console.log(`     - nonce: ${kupft.deployTransaction.nonce}`);
    await kupft.deployed();
    console.log(kupft.address," KUPFT address")

    // KUPNFT
    const Kupnft = await hre.ethers.getContractFactory('KUPNFT');
    const kupnft = await Kupnft.deploy();
    console.log(`  -> Deploying KUPNFT contract`);
    console.log(`     - hash: ${kupnft.deployTransaction.hash}`);
    console.log(`     - gasPrice: ${kupnft.deployTransaction.gasPrice / 1e9}`);
    console.log(`     - nonce: ${kupnft.deployTransaction.nonce}`);
    await kupnft.deployed();
    console.log(kupnft.address," KUPNFT address")

    // KUPSBT
    const Kupsbt = await hre.ethers.getContractFactory('KUPSBT');
    const kupsbt = await Kupsbt.deploy();
    console.log(`  -> Deploying KUPSBT contract`);
    console.log(`     - hash: ${kupsbt.deployTransaction.hash}`);
    console.log(`     - gasPrice: ${kupsbt.deployTransaction.gasPrice / 1e9}`);
    console.log(`     - nonce: ${kupsbt.deployTransaction.nonce}`);
    await kupsbt.deployed();
    console.log(kupsbt.address," KUPSBT address")

    console.log(`\n\nNetwork: ${hre.network.name}`);
    console.log('```');
    console.log(`- KUPFT: ${kupft.address}`);
    console.log(`- KUPNFT: ${kupnft.address}`);
    console.log(`- KUPSBT: ${kupsbt.address}`);
    console.log('```');

    console.log(`
        npx hardhat verify --network ${hre.network.name} ${kupft.address}
        npx hardhat verify --network ${hre.network.name} ${kupnft.address}
        npx hardhat verify --network ${hre.network.name} ${kupsbt.address}
    `);
};

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


/* Deploy script

npx hardhat compile && npx hardhat run --network klaytn_testnet scripts/deploy.js

*/
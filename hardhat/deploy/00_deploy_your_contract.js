// deploy/00_deploy_your_contract.js
// const fs = require('fs');
// const chalk = require('chalk');
// const ethers = require('ethers');

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("Balloons"
  , {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: ["Hello"],
    log: true,
  }
  );
  
  const balloons = await ethers.getContract("Balloons", deployer);
  //await balloons.setPurpose("Hello");

  await deploy("DEX", 
  // [balloons.address]
  {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [balloons.address],
    log: true,
  }
  );
  
  const dex = await ethers.getContract("DEX", deployer);

  await balloons.transfer("0x2525f57807f1506C08a7f71829a5a1D8084ED727",""+(100*10**18))

  console.log("Approving DEX ("+dex.address+") to take Balloons from main account...")
  await balloons.approve(dex.address,ethers.utils.parseEther('100'))
  console.log("INIT exchange...")
  await dex.init(ethers.utils.parseEther('50'),{value:ethers.utils.parseEther('50')})

  /*
    // Getting a previously deployed contract
    const Balloons = await ethers.getContract("Balloons", deployer);
    await Balloons.setPurpose("Hello");
    
    //const Balloons = await ethers.getContractAt('Balloons', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */
};
module.exports.tags = ["Balloons", "DEX"];

/*
Tenderly verification
let verification = await tenderly.verify({
  name: contractName,
  address: contractAddress,
  network: targetNetwork,
});
*/

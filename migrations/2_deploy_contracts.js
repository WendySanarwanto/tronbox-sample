// var MyContract = artifacts.require("./MyContract.sol");
const Messenger = artifacts.require("./Messenger.sol");

module.exports = function(deployer) {
  deployer.deploy(Messenger);
};

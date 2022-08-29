const Feed = artifacts.require("Feed");

module.exports = function (deployer) {
  deployer.deploy(Feed);
};

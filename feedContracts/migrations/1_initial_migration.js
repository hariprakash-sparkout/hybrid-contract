const Feed = artifacts.require("Feed");
const SingleResponse = artifacts.require("SingleResponse");
const MultipleResponse = artifacts.require("MultipleResponse")

module.exports = function (deployer) {
  deployer.deploy(Feed);
};

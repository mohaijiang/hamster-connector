// 获取对应的合约文件
var GLDToken = artifacts.require("./GLDToken.sol");

// JavaScript export
module.exports = function(deployer) {
    // deployer 是用来部署

    // 部署
    deployer.deploy(GLDToken,1000000);
}


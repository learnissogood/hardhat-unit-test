const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("This is our main Faucet testing scope", function () {
  let faucet, signer;
  
  before("deploy the contract instance first", async function () {
    const Faucet = await ethers.getContractFactory("Faucet");
    faucet = await Faucet.deploy({
      value: ethers.utils.parseUnits("10", "ether"),
    });
    await faucet.deployed();
    [signer] = await ethers.provider.listAccounts();
  });

  it("it should set the owner to be the deployer of the contract", async function () {
    assert.equal(await faucet.owner(), signer);
  });

  it("it should withdraw the correct amount", async function () {
    let withdrawAmount = ethers.utils.parseUnits("1", "ether");
    await expect(faucet.withdraw(withdrawAmount)).to.be.reverted;
  });
});
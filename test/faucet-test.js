const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Faucet", function () {
  it("should do something with our faucet!", async function () {
    const Faucet = await ethers.getContractFactory("Faucet");
    const faucet = await Faucet.deploy();
    await faucet.deployed();
  });
});

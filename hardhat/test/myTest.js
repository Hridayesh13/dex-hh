const SmartContractWallet =  ethers.getContractFactory("DEX");
describe("My Dapp", function() {
  let accounts;
  let myContract;
  before(async function() {
    accounts = await ethers.getSigners();
  });
  describe("My SmartContractWallet", function() {
    it("Should deploy my SmartContractWallet", async function() {
      myContract = await SmartContractWallet.new();
    });
    describe("owner()", function() {
      it("Should have an owner equal to the deployer", async function() {
        assert.equal(await myContract.owner(), accounts[0]);
      });
    });
  });
});


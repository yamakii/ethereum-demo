var Eth = require('ethjs');
var eth;

contract('Tourium', function(accounts) {
    eth = new Eth(web3.currentProvider);

    it("should deposit correctly", function() {
        var sut = Tourium.deployed()
        return sut.deposit.sendTransaction(accounts[1], {from: accounts[0], value: web3.toWei('1', 'ether')}).then(function() {
            return eth.getBalance(sut.address);
        }).then(function(balance) {
            assert.equal(web3.fromWei(balance, 'ether') , '1', "Amount wasn't correctly taken from the sender");
        });
    });

    it("should payback correctly", function() {
        var sut = Tourium.deployed()
        return sut.deposit.sendTransaction(accounts[1], {from: accounts[0], value: web3.toWei('1', 'ether')}).then(function() {
            return eth.getBalance(sut.address);
        }).then(function(balance) {
            assert.equal(web3.fromWei(balance, 'ether') , '2', "Amount wasn't correctly taken from the sender");
            return sut.payback({from: accounts[0]});
        }).then(function() {
            return eth.getBalance(sut.address);
        }).then(function(balance) {
            assert.equal(web3.fromWei(balance, 'ether') , '0', "Amount wasn't correctly taken from the sender");
        });
    });
});

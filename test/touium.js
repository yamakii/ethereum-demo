contract('Tourium', function(accounts) {
  it("should deposit correctly", function() {
    var sut = Tourium.new();

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return sut.deposit.call(account_two, 100).then(function(balance) {
      return sut.getBalance.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      assert.equal(account_one_ending_balance, 0, "Amount wasn't correctly taken from the sender");
      // assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
});

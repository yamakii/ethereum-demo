//var util = require('ethereumjs-util')
var accounts;
var account;
var amount = 100;
var tourium;

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }
    accounts = accs;
    account = accounts[0];
    tourium = Tourium.new();
  });
}

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function deposit(receiver) {

  setStatus("Initiating transaction... (please wait)");

  tourium.deposit.call(receiver, amount, {from: account}).then(function(balance) {
    var value = tourium.getBalance.call(account).value;
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value;
    setStatus("Transaction complete!");
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

function payback() {
  setStatus("Initiating transaction... (please wait)");

  tourium.payback(amount, {from: account}).then(function() {
    value = tourium.getBalance.call(account);
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value;
    setStatus("Transaction complete!");
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};


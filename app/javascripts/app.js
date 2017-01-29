//var util = require('ethereumjs-util')
var accounts;
var account;
var amount;

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
    account = "0x41c404D65a599a62e92F1f8ca4C1634203ba100A";
    amount = web3.toWei('1', 'ether');
  });
}

function deposit() {
  var tourium = Tourium.deployed();

  var message =  document.getElementById("comment").value;
  console.log("Send message to matching partner");
  console.log("Initiating transaction... (please wait)");

  console.log("Transaction complete!");
  console.log("Send 1 ETH to deposit wallet");
  console.log("Initiating transaction... (please wait)");
  tourium.deposit.sendTransaction(account, {from: account, value: amount}).then(function(balance) {
    console.log("Transaction complete!");
    location.href='/contracted.html'
  }).catch(function(e) {
    console.log("Error sending coin; see log.");
  });
};

function payback() {
  var tourium = Tourium.deployed();
  console.log("Send feedback message from matching partner");
  console.log("Initiating transaction... (please wait)");
  console.log("Transaction complete!");

  console.log("Receive 1 ETH to deposit wallet");
  console.log("Initiating transaction... (please wait)");
  tourium.payback({from: account}).then(function() {
    console.log("Transaction complete!");
    location.href='/thankyou.html'
  }).catch(function(e) {
    console.log("Error sending coin; see log.");
  });
};


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
    account = "0xab4f23bc4f4a75ff635b630e11456581902f95b9";
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
  tourium.deposit.sendTransaction('0x017ce96c3b8234c7de5e48aae50c2c74ef1086aa', {from: account, value: amount}).then(function(balance) {
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
  tourium.payback.sendTransaction({from: account, gas: 300000}).then(function() {
    console.log("Transaction complete!");
    location.href='/thankyou.html'
  }).catch(function(e) {
    console.log("Error sending coin; see log.");
  });
};


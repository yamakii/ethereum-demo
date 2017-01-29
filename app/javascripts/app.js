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
    account = accounts[0];
    amount = web3.toWei('1', 'ether');
  });
}

function deposit(receiver) {
  var tourium = Tourium.deployed();
  //reciever = arguments[0];

  var message =  document.getElementById("comment").value;
  console.log("Send 10 work to deposit wallet");
  setTimeout(function() {
    console.log("Initiating transaction... (please wait)");
  }, 500000000);

  console.log("Transaction complete!");
  console.log("Send message to matching partner");
  console.log("Message:");
  console.log(message)
  setTimeout(() => {
    console.log("Initiating transaction... (please wait)");
  }, 500000000);

  tourium.deposit.sendTransaction(reciever, {from: account, value: amount}).then(function(balance) {
    //var value = tourium.getBalance.call(account).value;
    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = value;
    console.log("Transaction complete!");
  }).catch(function(e) {
    console.log("Error sending coin; see log.");
  });
};

function payback() {
  var tourium = Tourium.deployed();
  console.log("Receive 10 work to deposit wallet");
  setTimeout(() => {
    console.log("Initiating transaction... (please wait)");
  }, 500000000);

  console.log("Transaction complete!");
  console.log("Send message to matching partner");
  console.log("Message:");
  console.log(message)
  setTimeout(() => {
    console.log("Initiating transaction... (please wait)");
  }, 500000000);

  tourium.payback.sendTransaction(reciever, {from: account, value: amount}).then(function() {
    //value = tourium.getBalance.call(account);
    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = value;
    console.log("Transaction complete!");
  }).catch(function(e) {
    cosole.log("Error sending coin; see log.");
  });
};


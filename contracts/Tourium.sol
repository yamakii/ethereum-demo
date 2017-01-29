pragma solidity ^0.4.2;

contract Tourium {
    mapping (address => uint) balances;
    address owner;
    address contractor;

    function Tourium() {
        owner = tx.origin;
    }

    function deposit(address _contractor) payable returns(bool sufficient) {
        contractor = _contractor;
        return true;
    }

    function payback() returns(bool sufficient) {
        if (msg.sender != contractor) return false;
        return owner.send(this.balance);
    }

    function getBalance() returns(uint) {
        return this.balance;
    }
}

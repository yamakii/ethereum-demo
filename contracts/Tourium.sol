pragma solidity ^0.4.8;

contract Tourium {
    mapping (address => uint) balances;
    address owner;
    address contractor;

    function Tourium() {
        owner = tx.origin;
    }

    function deposit(address _contractor, uint amount) returns(bool sufficient) {
        if (msg.sender != owner) return false;
        balances[msg.sender] += amount;
        contractor = _contractor;
        return true;
    }

    function payback(uint amount) returns(bool sufficient) {
        if (msg.sender != contractor) return false;
        balances[owner] -= amount;
        return true;
    }

    function getBalance(address addr) returns(uint) {
        return balances[addr];
    }
}

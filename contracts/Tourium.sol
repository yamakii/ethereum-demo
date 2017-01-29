pragma solidity ^0.4.2;

contract Tourium {
    address owner;
    address contractor;

    function Tourium() {
        owner = tx.origin;
    }

    function deposit(address _contractor) payable returns(bool sufficient) {
        if (msg.sender != owner) return false;
        contractor = _contractor;
        return true;
    }

    function payback() returns(bool sufficient) {
        if (msg.sender != contractor) return false;
        return owner.send(this.balance);
    }
}

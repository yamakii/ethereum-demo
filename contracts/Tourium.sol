pragma solidity ^0.4.2;

contract Tourium {
    address owner;
    address contractor;

    function deposit(address _contractor) payable {
        owner = msg.sender;
        contractor = _contractor;
    }

    function payback() returns(bool sufficient) {
        if (msg.sender != owner) return false;
        return owner.send(this.balance);
    }
}

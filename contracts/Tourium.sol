pragma solidity ^0.4.2;

contract Tourium {
    address owner;
    address contractor;
    bool hasMeet;
    bool hasArrived;

    function Tourium () {
        hasMeet = false;
        hasArrived = false;
    }

    function deposit(address _contractor) payable {
        owner = msg.sender;
        contractor = _contractor;
    }

    function arrive() {
        hasArrived = msg.sender == contractor;
    }

    function meet() {
        hasMeet = msg.sender == contractor;
    }

    function payback() returns(bool sufficient) {
        if (msg.sender != owner || !hasArrived || !hasMeet) return false;
        return owner.send(this.balance);
    }
}

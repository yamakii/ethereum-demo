pragma solidity ^0.4.2;

import "ConvertLib.sol";

contract Tourium {
    address owner;
    address contractor;
    uint amount;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function Tourium() {
        owner = tx.origin;
    }

    function deposit(address _contractor, uint _amount) {
        contractor = _contractor;
        amount = _amount;
    }

    function payback() {
    }
}

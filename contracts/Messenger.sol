pragma solidity ^0.4.23;

contract Messenger {
    string private message;

    function postMessage(string memory value) public returns (string memory) {
        message = value;
        return message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}

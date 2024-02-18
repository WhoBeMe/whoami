// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract WhoContract {
    // status tracks the validity of a given public key
    mapping(string => bool) public validSet;

    constructor() {}

    // returns whether a given key is in the valid set
    function isValid(
        string calldata publicKey
    ) public view returns (bool _status) {
        return validSet[publicKey];
    }

    // adds a new key to the valid set
    function issueKey(string calldata publicKey) public {
        validSet[publicKey] = true;
    }

    // removes an entry from the valid key set
    function revokeKey(string calldata publicKey) public {
        validSet[publicKey] = false;
    }
}

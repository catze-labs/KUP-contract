// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

import '@klaytn/contracts/KIP/token/KIP7/KIP7.sol';

// Build Metaverse & GameFi apps Without Blockchain Experience with KUP
// This is a snippet from KUP's example smart contracts
// KUP is built by Catze Labs

contract KUPFT is KIP7 {

    constructor() KIP7 ("Sipping a KUP FT of metaverse", "KUPFT"){}

    function ensureAttackAmount(address player) public {
        _mint(player, 10);
    }
}
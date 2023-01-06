// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

import '@klaytn/contracts/KIP/token/KIP17/extensions/KIP17URIStorage.sol';
import '@klaytn/contracts/utils/Counters.sol';

// Build Metaverse & GameFi apps Without Blockchain Experience with KUP
// This is a snippet from KUP's example smart contracts
// KUP is built by Catze Labs

contract KUPNFT is KIP17URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() KIP17 ("Sipping a KUP NFT of metaverse", "KUPNFT"){}

    function ensureAttackAmount(address player, string memory tokenURI) public returns(uint){
        uint newTokenId = _tokenIds.current();
        _mint(player, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        _tokenIds.increment();
        return newTokenId;
    }
}
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

import '@klaytn/contracts/KIP/token/KIP17/KIP17.sol';
import '@klaytn/contracts/KIP/token/KIP17/extensions/KIP17URIStorage.sol';
import '@klaytn/contracts/utils/Counters.sol';

// Build Metaverse & GameFi apps Without Blockchain Experience with KUP
// This is a snippet from KUP's example smart contracts
// KUP is built by Catze Labs

contract KUPSBT is KIP17, KIP17URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() KIP17 ("Sipping a KUP SBT of metaverse", "KUP"){}

    function ensureAttackAmount(address player, string memory _tokenURI) public returns(uint){
        uint newTokenId = _tokenIds.current();
        _mint(player, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);

        _tokenIds.increment();
        return newTokenId;
    }

    // override _transfer function from KIP17 that should be reverted becuause it's SBT, not NFT.
    function _transfer(address from, address to, uint256 tokenId) internal virtual override(KIP17) {
        revert("SBT cannot be transferred");
    }

    // override function _burn
    function _burn(uint256 tokenId) internal virtual override(KIP17, KIP17URIStorage) {
        super._burn(tokenId);
    }

    // override function tokenURI
    function tokenURI(uint256 tokenId) public view virtual override(KIP17, KIP17URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    
}
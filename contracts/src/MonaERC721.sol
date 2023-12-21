//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MonaERC721 is ERC721 {
    constructor() ERC721("Mona", "MONA") {}

    function mintTo(address to, uint256 tokenId) external {
        _mint(to, tokenId);
    }
}

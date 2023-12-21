//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MonaERC20 is ERC20 {
    constructor() ERC20("Mona", "MONA") {}

    function mintTo(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

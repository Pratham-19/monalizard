// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {MonaERC721} from "../src/MonaERC721.sol";

contract DeployMonaERC721 is Script {
    MonaERC721 public monaERC721;

    function run() external returns (address) {
        vm.startBroadcast();
        monaERC721 = new MonaERC721();
        console.log("MonaERC721 deployed at: %s", address(monaERC721));
        vm.stopBroadcast();

        return address(monaERC721);
    }
}

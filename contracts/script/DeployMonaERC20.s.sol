// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {MonaERC20} from "../src/MonaERC20.sol";

contract DeployMonaERC20 is Script {
    MonaERC20 public monaERC20;

    function run() external returns (address) {
        vm.startBroadcast();
        monaERC20 = new MonaERC20();
        console.log("MonaERC20 deployed at: %s", address(monaERC20));
        vm.stopBroadcast();

        return address(monaERC20);
    }
}

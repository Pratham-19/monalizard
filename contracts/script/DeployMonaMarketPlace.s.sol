// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {MonaMarketPlace} from "../src/MonaMarketPlace.sol";

contract DeployMonaMarketPlace is Script {
    MonaMarketPlace public monaMarketPlace;

    function run() external returns (address) {
        vm.startBroadcast();
        monaMarketPlace = new MonaMarketPlace();
        console.log("MonaMarketPlace deployed at: %s", address(monaMarketPlace));
        vm.stopBroadcast();

        return address(monaMarketPlace);
    }
}

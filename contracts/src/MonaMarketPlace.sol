//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract MonaMarketPlace is IERC721Receiver {
    error NotListedForSale();
    error NotEnoughETH();
    error NotOwner();

    event NFTListed(uint256 indexed tokenId);
    event NFTBought(uint256 indexed tokenId, address indexed buyer, address indexed seller);
    event NFTReturned(uint256 indexed tokenId);
    event NFTReceived(address from, uint256 tokenId);

    uint256 constant PRICE = 0.01 ether;

    IERC721 public nftContract;

    // Mapping to store the owners
    mapping(uint256 tokenId => address owner) public owners;

    function setNFTContract(address _nft) external {
        nftContract = IERC721(_nft);
    }

    // Function to list NFT for sale
    function listNFTForSale(uint256 tokenId) external {
        // Check if the owner is the caller
        // Set the owner of the NFT
        // Transfer the NFT to this contract
        // Approve this contract to spend the NFT
        // Emit an event

        // Check if the owner is the caller
        if (nftContract.ownerOf(tokenId) != msg.sender) {
            revert NotOwner();
        }

        // Set the owner of the NFT
        owners[tokenId] = msg.sender;

        // Transfer the NFT to this contract
        nftContract.safeTransferFrom(msg.sender, address(this), tokenId);

        // Approve this contract to spend the NFT
        nftContract.approve(address(this), tokenId);

        // Emit an event
        emit NFTListed(tokenId);
    }

    // Function to buy NFT
    function buyNFT(uint256 tokenId) external payable {
        // Check if the NFT is listed for sale
        // Check if the buyer has paid enough
        // Transfer the NFT to the buyer
        // Transfer the ETH to the seller
        // Remove the NFT from listing

        // Check if the NFT is listed for sale
        if (nftContract.getApproved(tokenId) != address(this)) {
            revert NotListedForSale();
        }

        // Check if the buyer has paid enough
        if (msg.value < PRICE) {
            revert NotEnoughETH();
        }

        // Transfer the NFT to the buyer
        nftContract.safeTransferFrom(address(this), msg.sender, tokenId);

        // Transfer the ETH to the seller
        payable(owners[tokenId]).transfer(msg.value);

        // Remove the NFT from listing
        nftContract.approve(address(0), tokenId);

        // Emit an event
        emit NFTBought(tokenId, msg.sender, owners[tokenId]);
    }

    // Function to return the NFT
    function returnNFT(uint256 tokenId) external {
        // Check if the NFT is listed for sale
        // Check if the caller is the owner of the NFT
        // Transfer the NFT to the caller
        // Remove the NFT from listing

        // Check if the NFT is listed for sale
        require(nftContract.getApproved(tokenId) == address(this), "Not listed for sale");

        // Check if the caller is the owner of the NFT
        require(owners[tokenId] == msg.sender, "Not the owner");

        // Transfer the NFT to the caller
        nftContract.safeTransferFrom(address(this), msg.sender, tokenId);

        // Remove the NFT from listing
        nftContract.approve(address(0), tokenId);

        // Emit an event
        emit NFTReturned(tokenId);
    }

    function onERC721Received(address, address _from, uint256 _tokenId, bytes calldata)
        external
        override
        returns (bytes4)
    {
        emit NFTReceived(_from, _tokenId);
        return this.onERC721Received.selector;
    }
}

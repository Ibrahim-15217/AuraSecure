// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract AuraSecure {
    struct DataRecord {
        address owner;
        bytes32 dataHash;
        string encryptedData;
        address[] authorizedViewers;
        uint256 timestamp;
    }

    mapping(bytes32 => DataRecord) private records;
    mapping(address => bytes32[]) private userRecords;

    event DataUploaded(bytes32 indexed recordId, address indexed owner, bytes32 dataHash, uint256 timestamp);
    event AccessGranted(bytes32 indexed recordId, address indexed grantedTo, uint256 timestamp);
    event AccessRevoked(bytes32 indexed recordId, address indexed revokedFrom, uint256 timestamp);
    event DataVerified(bytes32 indexed recordId, address indexed verifier, bool verified, uint256 timestamp);

    // Upload encrypted data and its hash to the blockchain
    function uploadData(bytes32 dataHash, string calldata encryptedData) external returns (bytes32) {
        bytes32 recordId = keccak256(abi.encodePacked(msg.sender, dataHash, block.timestamp));
        require(records[recordId].timestamp == 0, "Record already exists");

        address[] memory emptyList;

        records[recordId] = DataRecord({
            owner: msg.sender,
            dataHash: dataHash,
            encryptedData: encryptedData,
            authorizedViewers: emptyList,
            timestamp: block.timestamp
        });

        userRecords[msg.sender].push(recordId);

        emit DataUploaded(recordId, msg.sender, dataHash, block.timestamp);
        return recordId;
    }

    // Grant access to another wallet
    function grantAccess(bytes32 recordId, address viewer) external {
        require(records[recordId].owner == msg.sender, "Only owner can grant access");
        records[recordId].authorizedViewers.push(viewer);
        emit AccessGranted(recordId, viewer, block.timestamp);
    }

    // Revoke access
    function revokeAccess(bytes32 recordId, address viewer) external {
        require(records[recordId].owner == msg.sender, "Only owner can revoke access");

        address[] storage viewers = records[recordId].authorizedViewers;
        for (uint i = 0; i < viewers.length; i++) {
            if (viewers[i] == viewer) {
                viewers[i] = viewers[viewers.length - 1];
                viewers.pop();
                emit AccessRevoked(recordId, viewer, block.timestamp);
                return;
            }
        }
    }

    // Verify data integrity using hash
    function verifyData(bytes32 recordId, bytes32 dataHash) external returns (bool) {
        bool verified = records[recordId].dataHash == dataHash;
        emit DataVerified(recordId, msg.sender, verified, block.timestamp);
        return verified;
    }

    // Retrieve encrypted data (only for owner or authorized viewers)
    function getEncryptedData(bytes32 recordId) external view returns (string memory) {
        DataRecord storage record = records[recordId];
        require(
            msg.sender == record.owner || isAuthorized(recordId, msg.sender),
            "Access denied"
        );
        return record.encryptedData;
    }

    // Helper: check authorization
    function isAuthorized(bytes32 recordId, address user) internal view returns (bool) {
        address[] storage viewers = records[recordId].authorizedViewers;
        for (uint i = 0; i < viewers.length; i++) {
            if (viewers[i] == user) {
                return true;
            }
        }
        return false;
    }

    // Get all records owned by a user
    function getUserRecords(address user) external view returns (bytes32[] memory) {
        return userRecords[user];
    }
}

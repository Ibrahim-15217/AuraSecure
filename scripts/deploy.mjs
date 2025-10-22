import hre from "hardhat";
import * as fs from "fs";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const AuraSecure = await hre.ethers.getContractFactory("AuraSecure");
  const aura = await AuraSecure.deploy();
  await aura.waitForDeployment();

  const contractAddress = await aura.getAddress();
  console.log(`✅ Contract deployed at: ${contractAddress}`);

  // ✅ Get ABI (no JSON.parse needed)
  const artifact = await hre.artifacts.readArtifact("AuraSecure");

  // Ensure directory exists
  const artifactDir = "./frontend/src/artifacts";
  if (!fs.existsSync(artifactDir)) fs.mkdirSync(artifactDir, { recursive: true });

  // Save ABI + address
  fs.writeFileSync(
    `${artifactDir}/AuraSecure.json`,
    JSON.stringify(
      {
        address: contractAddress,
        abi: artifact.abi,
      },
      null,
      2
    )
  );

  console.log("📦 Contract info saved to frontend/src/artifacts/AuraSecure.json");
}

main().catch((err) => {
  console.error("❌ Deployment failed:", err);
  process.exit(1);
});
// To run this script use the command: npx hardhat run scripts/deploy.mjs --network <network-name>
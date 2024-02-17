import { ethers } from "hardhat";

// submits smart contract to the ledger
async function main() {
  const contract = await ethers.deployContract("Test");
  await contract.waitForDeployment();
  console.log("contract submitted");
}

main().catch((error) => {
  console.error(error);
});

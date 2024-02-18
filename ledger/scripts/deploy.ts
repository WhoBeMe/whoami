import { ethers } from "hardhat";

// submits smart contract to the ledger
async function main() {
  const contract = await ethers.deployContract("WhoContract");
  await contract.waitForDeployment();
  await contract.issueKey("my-key");
  console.log(await contract.isValid("my-key"));
  await contract.revokeKey("my-key");
  console.log(await contract.isValid("my-key"));
}

main().catch((error) => {
  console.error(error);
});

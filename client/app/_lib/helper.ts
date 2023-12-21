import { NFTStorage, File, Blob } from "nft.storage";
import crypto from "crypto";
import prisma from "@/prisma";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_NFT_STORAGE_KEY;

const client = new NFTStorage({
  token: NFT_STORAGE_TOKEN ?? "",
});

export const storeFiles = async ({ componentsData }: any) => {
  let arr = [];
  console.log(componentsData);
  //   toast.loading("Uploading to IPFS...", { id: "uploading" });
  for (const key in componentsData) {
    if (componentsData.hasOwnProperty(key) && componentsData[key]) {
      console.log(key, componentsData[key]);
      const imageFile = new File(componentsData[key], "nft.png", {
        type: "image/png",
      });
      const newFile = new File(
        [JSON.stringify({ image: imageFile, name: key })],
        `${key}.json`,
        {
          type: "application/json",
        }
      );

      console.log(newFile);
      arr.push(newFile);
    }
  }
  console.log(arr);
  if (arr.length === 0) {
    // toast.dismiss("uploading");
    // toast.error("No files selected!");
    return;
  }
  const cid = await client.storeDirectory(arr);
  console.log(cid);
  //   toast.dismiss("uploading");
  //   toast.success("Uploaded to IPFS!");
};

const generateRandomName = () => {
  // Generate a random 8-byte buffer
  const randomBuffer = crypto.randomBytes(8);

  // Convert the buffer to a hex string
  const randomHexString = randomBuffer.toString("hex");

  // Return the hex string as the random name
  return randomHexString;
};

export const storeFile = async (
  file: BlobPart,
  title: string,
  description?: string
) => {
  const imgName = generateRandomName + ".png";
  const imageFile = new File([file], imgName, {
    type: "image/png",
  });
  const metadata = await client.store({
    name: title,
    description: description ?? "",
    image: imageFile,
  });
  return "https://" + metadata.ipnft + ".ipfs.dweb.link/" + imgName;
};
export const storeImg = async (
  file: BlobPart,
  title: string,
  description?: string
) => {
  const imgName = generateRandomName() + ".png";
  const imageFile = new File([file], imgName, {
    type: "image/png",
  });
  const metadata = await client.store({
    name: title,
    description: description ?? "",
    image: imageFile,
  });

  return (
    "https://nftstorage.link/ipfs" + metadata?.data?.image?.href?.substring(6)
  );
};

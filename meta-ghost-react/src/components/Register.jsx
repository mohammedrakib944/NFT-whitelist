import { ToastContainer, toast } from "react-toastify";
import { BsTwitter, BsArrowRight } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import Api from "../Api";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { ethers } from "ethers";
import { useState, useContext } from "react";
import Contract from "../Context";

const shortAddress = (str, n = 6) =>
  `${str.slice(0, n)}...${str.slice(str.length - n)}`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [stepOneIsShow, setStepOneIsShow] = useState(true);
  const [stepTwoIsShow, setStepTwoIsShow] = useState(false);
  const { address, success, setAddress, setSigner } = useContext(Contract);

  const [oneIsLoading, setOneIsLoading] = useState(false);

  const handleConnectWallet = async () => {
    if (!window.ethereum) return alert("Install Metamask!");
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    setSigner(signer);
    const userAddress = await signer.getAddress();
    setAddress(userAddress);
  };

  const Disconnect = () => {
    if (address) {
      setAddress("");
    }
  };

  const handleSubmit = async () => {
    if (!address) {
      toast.info("Please connect wallet!");
      return;
    }
    if (!email) {
      toast.error("Email is required!");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email!");
      return;
    }
    setOneIsLoading(true);
    try {
      const result = await Api({
        method: "POST",
        data: {
          email,
          walletAddress: address,
        },
      });

      if (result?.data?.status === "taken") {
        toast.info("This email was already Taken!");
        setOneIsLoading(false);
      } else {
        setStepOneIsShow(false);
        setStepTwoIsShow(true);
        toast.success("Email added success!");
        setOneIsLoading(false);
      }
    } catch (err) {
      toast.error("Fail!");
      setOneIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="bottom-center" theme="colored" />
      <div className="shadow-xl bg-gray-800/80 md:backdrop-blur-xl min-w-[350px] max-w-[450px] rounded-xl p-6 mt-10 md:-mt-80">
        <h3 className="pb-3 text-4xl font-bold text-gray-100">Register</h3>
        {stepOneIsShow && (
          <div>
            <p className="text-gray-400 font-bold pb-3">
              Follow the steps to add yourself to the Flexlist.
            </p>
            <div className="flex gap-4">
              <button
                disabled={address}
                className="w-full text-sm mb-5 disabled:opacity-70 disabled:pointer-events-none"
                onClick={() => handleConnectWallet()}
              >
                {address ? shortAddress(address) : "Connect Wallet"}
              </button>
              {address && (
                <button
                  className="w-full text-sm mb-5"
                  onClick={() => Disconnect()}
                >
                  Disconnect
                </button>
              )}
            </div>
            <div className="pb-4">
              <div className="flex items-center justify-between border border-gray-500/50 mt-4 py-3 px-6 rounded-md text-gray-200">
                <p className="flex items-center">
                  <span className="text-xl text-sky-500">
                    <BsTwitter />
                  </span>{" "}
                  &nbsp; Follow on Twitter
                </p>
                <button className="py-2 text-sm rounded-full bg-sky-500 hover:bg-sky-600">
                  <a
                    href="https://twitter.com/meta_ghost_nft"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <BsTwitter /> Follow
                  </a>
                </button>
              </div>
            </div>
            <div className="pb-4">
              <div className="flex items-center justify-between border border-gray-500/50 mt-4 py-3 px-6 rounded-md text-gray-200">
                <p className="flex items-center">
                  <span className="text-xl text-indigo-500">
                    <FaDiscord />
                  </span>{" "}
                  &nbsp; Join on Discord
                </p>
                <button className="py-2 text-sm rounded-full ">
                  <a
                    href="https://discord.gg/BtMVU6nNM8"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <FaDiscord /> Join
                  </a>
                </button>
              </div>
            </div>

            <div className="">
              <p className="text-gray-300 text-sm">
                ✉️ Get announcements and the mint reminder by email
              </p>
              <input
                className="border border-gray-500/50 w-full bg-gray-800 focus:outline-none mt-4 p-3 text-sm rounded-md text-gray-100"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="me@example.com"
              />
            </div>
            <br />
            <button
              onClick={handleSubmit}
              disabled={oneIsLoading}
              className="w-full disabled:opacity-20 bg-green-500 hover:bg-green-600 text-sm mb-5 flex items-center gap-4"
            >
              {oneIsLoading ? (
                "Loading..."
              ) : (
                <>
                  NEXT <BsArrowRight />
                </>
              )}
            </button>
          </div>
        )}
        {stepTwoIsShow && !success && <Step2 />}
        {success && (
          <Step3
            setStepTwoIsShow={setStepTwoIsShow}
            setStepOneIsShow={setStepOneIsShow}
          />
        )}
      </div>
    </>
  );
};

export default Register;

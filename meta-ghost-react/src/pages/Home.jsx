import React from "react";
import Ghost from "../assets/ghost.jpg";
import MetaDocs from "../components/MetaDocs";
import Register from "../components/Register";
import MetaGost from "../assets/meta_ghost.jpg";
import EE from "../assets/ee.png";

const Home = () => {
  return (
    <div>
      <div className="">
        <img
          className="w-[150px] border border-gray-500/10 rounded-full -mt-24 shadow-xl bg-gray-800"
          src={Ghost}
          alt=""
        />
      </div>
      <div>
        <br />
        <h2 className="mt-2 text-gray-100">META GHOST</h2>
        <br />
        <div className="md:flex justify-between relative">
          <MetaDocs />
          <div className="2xl:fixed 2xl:right-60">
            <Register />
          </div>
        </div>
        <br />
        <div className="w-full xl:w-[55%] 2xl:w-[60%]">
          <div className="text-gray-300 leading-6">
            <p>
              10 000 MetaGhosts NFTs living in the Metaverse & Blockchain
              Forever! 💎
            </p>
            <p>Digital Flex 👑 ETH Mainnet.</p>
            <br />
            <p>Instant liquidity with AMM pool! We can only moon 🚀</p>
          </div>
          <br />
          <div>
            <img className="-ml-1" src={MetaGost} alt="" />
            <br />
            <h3 className="text-gray-300 mt-2"> Tokenized Ecommerce</h3>

            <p className="text-gray-300 mt-2">
              The Flex keep going! At the fusion of the spatial internet, our
              vision is to deploy a tokenized ecosystem with e-commerce stores.
            </p>
            <br />
            <img src={EE} alt="" />
            <p>$MOON for everyone.</p>
          </div>
          <br />
          <div>
            <p className="mt-4 text-gray-300">
              This page requires a login to your wallet to be certain that you
              are the owner and a deposit of 0.009 eth to confirm your
              guaranteed spot on the waitlist. The fee will be sent to the eth
              address "moonflex.eth" & deducted from the final Mint. Do not sign
              any other transactions and NEVER sign an approval for all. Be
              safe.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;

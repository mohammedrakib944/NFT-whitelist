import { FaDiscord, FaEthereum } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { AiOutlineTwitter, AiFillDropboxCircle } from "react-icons/ai";
import { HiServer } from "react-icons/hi";

const MetaDocs = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-x-10 gap-y-6">
        <div>
          <p className="text-gray-500 text-sm">MINT DATE</p>
          <p className="text-gray-200 ">TBA PHASE 2</p>
        </div>
        <div>
          <p className="text-gray-500">MINT PRICE</p>
          <p className="text-gray-200  flex items-center">
            <FaEthereum /> &nbsp; 0.069Ξ
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">TOTAL SUPPLY</p>
          <p className="text-gray-200  flex items-center">
            <AiFillDropboxCircle />
            &nbsp; 10,000 NFTs
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">GUARANTEED SPOTS</p>
          <p className="text-gray-200  flex items-center">
            <HiServer />
            &nbsp; 900 Spots
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">OFFICIAL LINK</p>
          <a
            href="https://linktr.ee/metaghost"
            target="_blank"
            className="text-gray-200 flex items-center "
          >
            <FiLink /> &nbsp;{" "}
            <span className="text-sky-500"> linktr.ee/metaghost</span>
          </a>
        </div>

        <div>
          <p className="text-gray-500 text-sm">TWITTER</p>
          <a
            href="#"
            target="_blank"
            className="text-gray-200 flex items-center "
          >
            <AiOutlineTwitter /> &nbsp;{" "}
            <span className="text-sky-500"> meta_ghost_nft</span>
          </a>
        </div>

        <div>
          <p className="text-gray-500 text-sm">DISCORD</p>
          <a
            href="https://discord.com/invite/BtMVU6nNM8"
            target="_blank"
            className="text-gray-200 flex items-center "
          >
            <FaDiscord /> &nbsp;{" "}
            <span className="text-sky-500"> discord.gg/BtMVU6nNM8</span> &nbsp;
          </a>
        </div>
      </div>
    </div>
  );
};

export default MetaDocs;

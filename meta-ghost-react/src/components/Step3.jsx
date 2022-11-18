import { useContext } from "react";
import Contract from "../Context";
import { BiSmile } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

const Step3 = ({ setStepTwoIsShow, setStepOneIsShow }) => {
  const { setSuccess } = useContext(Contract);
  const backToHome = () => {
    setStepTwoIsShow(false);
    setSuccess(false);
    setStepOneIsShow(true);
  };
  return (
    <div className="text-center">
      <h3 className="w-fit  mx-auto text-2xl text-green-500 flex items-center py-6">
        Thank you ! &nbsp; <BiSmile />
      </h3>
      <button className="py-2 text-sm rounded-full bg-sky-500 hover:bg-sky-600">
        <a
          href="https://twitter.com/meta_ghost_nft"
          target="_blank"
          className="flex items-center gap-2"
        >
          <BsTwitter /> Share a tweet
        </a>
      </button>
      <br />
      <br />
      <button
        onClick={() => backToHome()}
        className="text-sm rounded-full py-2"
      >
        Back To home
      </button>
    </div>
  );
};

export default Step3;

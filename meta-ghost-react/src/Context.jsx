import { createContext, useState } from "react";

const Contract = createContext();

export const ContextProvidor = ({ children }) => {
  // const [contract, setContract] = useState("");
  const [address, setAddress] = useState("");
  const [signer, setSigner] = useState("");
  const [success, setSuccess] = useState(false);
  return (
    <Contract.Provider
      value={{ address, signer, success, setAddress, setSigner, setSuccess }}
    >
      {children}
    </Contract.Provider>
  );
};

export default Contract;

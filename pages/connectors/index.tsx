import React, { useState } from "react";
import axios from "axios"
import Styles from "@styles/connectors.module.css";
import ConnectedConnectors from "@components/connectedConnectors";
import AvailableConnectors from "@components/availableConnectors";

const Connectors: React.FC = (): JSX.Element => {
  const [connectedInputs, setConnectedInputs] = useState([]);
  const addInput = async (input) => {
    const res = await axios.post("",input);
  };
  const editInput = async (input) => {
    const res = await axios.post("",input);
  };

  console.log(connectedInputs);
  return (
    <div className={Styles.main}>
      <div className="mb-4">
        <AvailableConnectors addInput={addInput} />
      </div>
      <div>
        <ConnectedConnectors connectedInputs={connectedInputs} />
      </div>
    </div>
  );
};
export default Connectors;

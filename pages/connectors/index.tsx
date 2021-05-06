import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "@styles/connectors.module.css";
import ConnectedConnectors from "@components/connectedConnectors";
import AvailableConnectors from "@components/availableConnectors";

const Connectors: React.FC = (): JSX.Element => {
  const [connectedInputs, setConnectedInputs] = useState([]);

  useEffect(() => {
    const getInputs = async () => {
      const res = await axios.get("http://localhost:5000");
      setConnectedInputs(res.data);
    };
    getInputs();
  }, []);
  const addInput = async (input) => {
    await axios.post("http://localhost:5000", input);
    window.location.reload();
  };
  const editInput = async (input) => {
    await axios.post("http://localhost:5000/edit", input);
    window.location.reload();
  };

  const deleteInput = async (id) => {
    await axios.delete(`http://localhost:5000/${id}`);
    window.location.reload();
  };
console.log(connectedInputs);
  return (
    <div className={Styles.main}>
      <div className="mb-4">
        <AvailableConnectors addInput={addInput} />
      </div>
      <div>
        <ConnectedConnectors
          connectedInputs={connectedInputs}
          editInput={editInput}
          deleteInput={deleteInput}
        />
      </div>
    </div>
  );
};
export default Connectors;

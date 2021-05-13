import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "@styles/connectors.module.css";
import ConnectedConnectors from "@components/connectedConnectors";
import AvailableConnectors from "@components/availableConnectors";
import Alert from "@components/alert";

const Connectors: React.FC = (): JSX.Element => {
  const [connectedInputs, setConnectedInputs] = useState([]);
  const [showAlert, setShowAlert] = useState({
    show: false,
    variant: "",
    message: "",
  });

  useEffect(() => {
    const getInputs = async () => {
      const res = await axios.get("http://localhost:5000");
      setConnectedInputs(res.data);
    };
    getInputs();
  }, []);
  const addInput = async (input) => {
    try {
      const res = await axios.post("http://localhost:5000", input);
      setShowAlert({ show: true, variant: "success", message: "Added Successfully" });
      window.location.reload();
    } catch (err) {
      console.log(err)
      setShowAlert({ show: true, variant: "error", message: err.message });
    }
  };
  const editInput = async (input) => {
    try {
      await axios.post("http://localhost:5000/edit", input);
      window.location.reload();
    } catch (err) {
      alert(err);
    }
  };
  const deleteInput = async (id) => {
    await axios.delete(`http://localhost:5000/${id}`);
    window.location.reload();
  };

  return (
    <div className={Styles.main}>
      <div className="mb-4">
        {showAlert.show === true ? (
          <Alert
            variant={showAlert.variant}
            message={showAlert.message}
            setShowAlert={setShowAlert}
            show={showAlert.show}
          />
        ) : (
          ""
        )}
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

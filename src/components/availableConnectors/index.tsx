import React from "react";
import Styles from "@styles/connectors.module.css";
import Connector from "@components/connector";
import connectorsConfig from "@components/connector/config";

const AvailbableConnectors: React.FC<{ addInput: (input) => void }> = ({
  addInput,
}): JSX.Element => {
  const connectors = [];
  for (const key in connectorsConfig) {
    connectors.push(
      <Connector
        key={connectorsConfig[key].id}
        id={connectorsConfig[key].id}
        type={connectorsConfig[key].type}
        addInput={addInput}
        action="add"
        disable={connectorsConfig[key].disable}
      />
    );
  }

  return (
    <div className="ml-5">
      <p className="mb-2 ml-3">Available Inputs</p>
      <div className={Styles.cards}>
        {connectors}
      </div>
    </div>
  );
};
export default AvailbableConnectors;

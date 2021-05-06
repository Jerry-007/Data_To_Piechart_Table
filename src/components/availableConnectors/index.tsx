import React from "react";
import Styles from "@styles/connectors.module.css";
import Connector from "@components/connector";
import connectorsConfig from "@components/connector/config"

const AvailbableConnectors: React.FC<{ addInput: (input) => void }> = ({
  addInput,
}): JSX.Element => {
  
  return (
    <div className="ml-5">
      <p className="mb-2 ml-3">Available Inputs</p>
      <div className={Styles.cards}>
        {connectorsConfig.map((c) => (
          <Connector
            key={c.id}
            id={c.id}
            type={c.type}
            addInput={addInput}
            action="add"
            disable={c.disable}
          />
        ))}
      </div>
    </div>
  );
};
export default AvailbableConnectors;

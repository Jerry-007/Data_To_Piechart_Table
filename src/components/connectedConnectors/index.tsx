import React from "react";
import Styles from "@styles/connectors.module.css";
import Connector from "@components/connector";

const ConnectedConnectors: React.FC<{
  connectedInputs: any[];
  editInput: (input) => void;
  deleteInput: (id) => void;
}> = ({ connectedInputs, editInput, deleteInput }): JSX.Element => {
  return (
    <div className="ml-5">
      <p className="mb-2 ml-3">Connected Inputs</p>
      <div className={Styles.cards}>
        {connectedInputs.map((c) => (
          <Connector
            key={c.id}
            id={c.id}
            type={c.type}
            name={c.name}
            config={c.config}
            editInput={editInput}
            deleteInput={deleteInput}
            action="edit"
          />
        ))}
      </div>
    </div>
  );
};
export default ConnectedConnectors;

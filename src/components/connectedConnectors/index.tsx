import React from "react";
import Styles from "@styles/connectors.module.css";
import Connector from "@components/connector";

const ConnectedConnectors: React.FC<{
  connectedInputs: any[];
}> = ({ connectedInputs}): JSX.Element => {
  return (
    <div className="ml-5">
      <p className="mb-2 ml-3">Connected Inputs</p>
      <div className={Styles.cards}>
        {connectedInputs.map((c) => (
          <Connector
            key={c.id}
            label={c.label}
            type={c.type}
            imgSrc={c.imgSrc}
            description={c.description}
            helpLink={c.helpLink}
            name={c.name}
            config={c.config}
          />
        ))}
      </div>
    </div>
  );
};
export default ConnectedConnectors;

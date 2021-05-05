import React from "react";
import Styles from "@styles/connectors.module.css";
import Connector from "@components/connector";

const AvailbableConnectors: React.FC<{ addInput: (input) => void }> = ({
  addInput,
}): JSX.Element => {
  const connectors = [
    {
      id: 1,
      label: "Google Analytics",
      type: "google_analytic",
      imgSrc: "",
      helpLink: "",
      description: "",
    },
    {
      id: 2,
      label: "Clevertap",
      type: "clevertap",
      imgSrc: "",
      helpLink: "",
      description: "",
    },
    {
      id: 3,
      label: "Some other",
      type: "other",
      imgSrc: "",
      helpLink: "",
      description: "Coming soon",
    },
  ];
  return (
    <div className="ml-5">
      <p className="mb-2 ml-3">Available Inputs</p>
      <div className={Styles.cards}>
        {connectors.map((c) => (
          <Connector
            key={c.id}
            label={c.label}
            type={c.type}
            imgSrc={c.imgSrc}
            description={c.description}
            helpLink={c.helpLink}
            addInput={addInput}
          />
        ))}
      </div>
    </div>
  );
};
export default AvailbableConnectors;

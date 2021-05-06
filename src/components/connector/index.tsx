import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Styles from "@styles/connectors.module.css";
import ConnectorModal from "@components/connectorModal";
import connectorsConfig from "./config";

const Connector: React.FC<{
  id: number;
  type: string;
  name?: string;
  config?: {
    production: {
      accountID: string;
      passcode: string;
      accessToken: string;
      region: string;
    };
    development: {
      accountID: string;
      passcode: string;
      accessToken: string;
      region: string;
    };
  };
  addInput?: (input) => void;
  editInput?: (input) => void;
  deleteInput?: (id) => void;
  action?: string;
  disable?: boolean;
}> = ({
  id,
  type,
  name,
  config,
  addInput,
  editInput,
  deleteInput,
  action,
  disable,
}): JSX.Element => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (disable) return;
    setShow(true);
  };

  let connectorDetails: any = {};
  for (let i = 0; i < connectorsConfig.length; i++) {
    if (connectorsConfig[i].type === type) {
      connectorDetails = connectorsConfig[i];
      break;
    }
  }
  return (
    <>
      <Card className={Styles.card} onClick={handleShow}>
        {action !== "add" ? (
          <Button
            className={Styles.cbutton}
            onClick={(event) => {
              deleteInput(id);
              event.stopPropagation();
            }}
          >
            X
          </Button>
        ) : (
          ""
        )}
        <Card.Img variant="top" src={connectorDetails.imgSrc} />
        <Card.Body>
          <Card.Title className="text-center">
            {connectorDetails.label}
          </Card.Title>
          <Card.Text className="text-center" style={{ fontSize: "0.7rem" }}>
            {connectorDetails.description}
          </Card.Text>
        </Card.Body>
      </Card>
      <ConnectorModal
        label={connectorDetails.label}
        type={type}
        helpLink={connectorDetails.helpLink}
        name={name}
        config={config}
        formFormat={connectorDetails.form}
        show={show}
        handleClose={handleClose}
        addInput={addInput}
        editInput={editInput}
        action={action}
      />
    </>
  );
};
export default Connector;

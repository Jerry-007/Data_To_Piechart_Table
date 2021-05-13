import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Styles from "@styles/connectors.module.css";
import ConnectorModal from "@components/connectorModal";
import connectorsConfig from "./config";
import Prompt from "@components/prompt";

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
  const [showPrompt, setShowPrompt] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (disable) return;
    setShow(true);
  };

  const closePrompt = () => {
    setShowPrompt(false);
  };

  let connectorDetails: any = {};
  for (const key in connectorsConfig) {
    if (connectorsConfig[key].type === type) {
      connectorDetails = connectorsConfig[key];
      break;
    }
  }
  return (
    <>
      {showPrompt ? (
        <Prompt
          show={showPrompt}
          handleClose={closePrompt}
          message="Are you sure you want to delete this ?"
          execute={() => {
            deleteInput(id);
          }}
        />
      ) : (
        ""
      )}
      <Card className={Styles.card} onClick={handleShow}>
        {action !== "add" ? (
          <Button
            className={Styles.cbutton}
            onClick={(event) => {
              setShowPrompt(true);
              event.stopPropagation();
            }}
          >
            X
          </Button>
        ) : (
          ""
        )}
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Card.Img
            className={Styles.labelImg}
            src={connectorDetails.cardImgSrc}
            alt={connectorDetails.label}
          />
          {/* <Card.Title className="text-center">
            {connectorDetails.label}
          </Card.Title> */}
          <Card.Text className={Styles.description}>
            {connectorDetails.description}
            {config ? (
              config.production.accessToken !== "" ? (
                <span className={Styles.envLabel}>PROD</span>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {config ? (
              config.development.accessToken !== "" ? (
                <span className={Styles.envLabel}>DEV</span>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </Card.Text>
        </Card.Body>
      </Card>
      <ConnectorModal
        id={id}
        type={type}
        name={name}
        config={config}
        label={connectorDetails.label}
        modalImgSrc={connectorDetails.modalImgSrc}
        formFormat={connectorDetails.form}
        helpLink={connectorDetails.helpLink}
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

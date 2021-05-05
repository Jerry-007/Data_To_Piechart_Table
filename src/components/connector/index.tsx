import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Styles from "@styles/connectors.module.css";
import ConnectorModal from "@components/connectorModal";

const Connector: React.FC<{
  label: string;
  type: string;
  imgSrc: string;
  description: string;
  helpLink: string;
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
}> = ({
  label,
  type,
  imgSrc,
  description,
  helpLink,
  name,
  config,
  addInput,
}): JSX.Element => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className={Styles.card} onClick={handleShow}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title className="text-center">{label}</Card.Title>
          <Card.Text className="text-center" style={{fontSize:"0.7rem"}}>{description}</Card.Text>
        </Card.Body>
      </Card>
      <ConnectorModal
        label={label}
        type={type}
        helpLink={helpLink}
        name={name}
        config={config}
        show={show}
        handleClose={handleClose}
        addInput={addInput}
      />
    </>
  );
};
export default Connector;

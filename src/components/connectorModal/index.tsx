import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Container } from "react-bootstrap";
import Styles from "@styles/connectorModal.module.css";

const ConnectorModal: React.FC<{
  label: string;
  type: string;
  helpLink: string;
  show: boolean;
  handleClose: () => void;
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
  formFormat: any;
  addInput?: (input) => void;
  editInput?: (input) => void;
  action: string;
}> = ({
  label,
  type,
  helpLink,
  show,
  handleClose,
  name,
  config,
  formFormat,
  addInput,
  editInput,
  action,
}) => {
  const [check, setCheck] = useState(false);
  const [prod, setProd] = useState(false);
  const [dev, setDev] = useState(true);

  const [configName, setConfigName] = useState(name || "");
  const [p_AccountID, setP_AccountID] = useState("");
  const [p_Passcode, setP_Passcode] = useState("");
  const [p_Token, setP_Token] = useState("");
  const [p_Region, setP_Region] = useState("");
  const [d_AccountID, setD_AccountID] = useState("");
  const [d_Passcode, setD_Passcode] = useState("");
  const [d_Token, setD_Token] = useState("");
  const [d_Region, setD_Region] = useState("");

  useEffect(() => {
    if (config) {
      setP_AccountID(config.production.accountID);
      setP_Passcode(config.production.passcode);
      setP_Region(config.production.region);
      setP_Token(config.production.accessToken);

      setD_Passcode(config.development.passcode);
      setD_AccountID(config.development.accountID);
      setD_Region(config.development.region);
      setD_Token(config.development.accessToken);
    }
  }, []);

  const data = [
    { id: 1, p_token: "", d_token: "", label: "Token", name: "token" },
    { id: 2, p_id: "", d_id: "", label: "AccoutnID" ,name:"id"},
  ];
  const [formData, setFormData] = useState(data);

  const submitted = (e) => {
    e.preventDefault();
    const data = {
      name: configName,
      id: 333,
      type: type,
      config: {
        development: {
          accountID: d_AccountID,
          passcode: d_Passcode,
          accessToken: d_Token,
          region: d_Region,
        },
        production: {
          accountID: p_AccountID,
          passcode: p_Passcode,
          accessToken: p_Token,
          region: p_Region,
        },
      },
    };
    const anotherData = {
      config: {
        production: {},
        development: {},
      },
    };
    for (let i = 0; i < formData.length; i++) {
      anotherData.config.production[`${formData[i].name}`] = (formData[i])[`p_${formData[i].name}`];
      anotherData.config.development[`${formData[i].name}`] = (formData[i])[`d_${formData[i].name}`];
    }
    console.log(anotherData);
    // if (action === "add") addInput(data);
    // else editInput(data);
    // handleClose();
  };

  return (
    <Modal
      className={Styles.modal}
      dialogClassName={Styles.modalDialog}
      show={show}
      onHide={handleClose}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <h6 className="font-weight-bold ml-4 mb-0 mt-1">Event Configuration</h6>
      </Modal.Header>
      <Modal.Body className={Styles.modalContent}>
        <div className={Styles.modalLabel}>{label}</div>
        <div className="text-right mt-1 mb-2">
          Need Help? <a href={helpLink}>Check out the docs</a>
        </div>
        <Form id="connectorInfo" onSubmit={submitted}>
          <Form.Group>
            <Form.Label>Configuration Name</Form.Label>
            <Form.Control
              required
              value={configName}
              onChange={(e) => setConfigName(e.target.value)}
              type="text"
            />
          </Form.Group>
          <Form.Check
            className={Styles.checkbox}
            type="checkbox"
            checked={check}
            onChange={() => setCheck(!check)}
            label="Use same settings for development and production"
          />
          {check ? (
            ""
          ) : (
            <div className="mb-3 ml-5">
              <Form.Check
                checked={prod}
                onChange={() => {
                  setProd(true);
                  setDev(false);
                }}
                type="radio"
                label="Production"
                id="Production"
                inline
              />
              <Form.Check
                checked={dev}
                onChange={() => {
                  setProd(false);
                  setDev(true);
                }}
                type="radio"
                label="Development"
                id="Development"
                inline
              />
            </div>
          )}
          {formData.map((f) => (
            <Form.Group>
              <Form.Label>{f.label}</Form.Label>
              <Form.Control
                value={!check && prod ? f[`p_${f.name}`] : f[`d_${f.name}`]}
                onChange={(e) => {
                  console.log(formData);
                  if (check) {
                    const index = formData.findIndex((i) => i.id === f.id);
                    const newState = [...formData];
                    newState[index][`p_${f.name}`] = e.target.value;
                    setFormData(newState);
                  }
                  if (!check && prod) {
                    const index = formData.findIndex((i) => i.id === f.id);
                    const newState = [...formData];
                    newState[index][`p_${f.name}`] = e.target.value;
                    setFormData(newState);
                  } else {
                    const index = formData.findIndex((i) => i.id === f.id);
                    const newState = [...formData];
                    newState[index][`d_${f.name}`] = e.target.value;
                    setFormData(newState);
                  }
                }}
                type="text"
              />
            </Form.Group>
          ))}
          <Form.Group>
            <Form.Label>Account ID</Form.Label>
            <Form.Control
              required
              value={!check && prod ? p_AccountID : d_AccountID}
              onChange={(e) => {
                if (check) setP_AccountID(e.target.value);

                if (!check && prod) setP_AccountID(e.target.value);
                else setD_AccountID(e.target.value);
              }}
              type="id"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Passcode</Form.Label>
            <Form.Control
              required
              value={!check && prod ? p_Passcode : d_Passcode}
              onChange={(e) => {
                if (check) setP_Passcode(e.target.value);
                if (!check && prod) setP_Passcode(e.target.value);
                else setD_Passcode(e.target.value);
              }}
              type="password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Account Token</Form.Label>
            <Form.Control
              required
              value={!check && prod ? p_Token : d_Token}
              onChange={(e) => {
                if (check) setP_Token(e.target.value);
                if (!check && prod) setP_Token(e.target.value);
                else setD_Token(e.target.value);
              }}
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Region</Form.Label>
            <Form.Control
              value={!check && prod ? p_Region : d_Region}
              onChange={(e) => {
                if (check) setP_Region(e.target.value);
                if (!check && prod) setP_Region(e.target.value);
                else setD_Region(e.target.value);
              }}
              type="text"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Container className="p-0">
        <Button
          variant="secondary"
          className="rounded-0 w-50 p-3 mt-2"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          form="connectorInfo"
          variant="primary"
          className="rounded-0 w-50 p-3 mt-2"
          type="submit"
        >
          Save
        </Button>
      </Container>
    </Modal>
  );
};

export default ConnectorModal;

import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Container } from "react-bootstrap";
import Styles from "@styles/connectorModal.module.css";

const ConnectorModal: React.FC<{
  id: number;
  label: string;
  modalImgSrc: string;
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
  formFormat: any[];
  addInput?: (input) => void;
  editInput?: (input) => void;
  action: string;
}> = ({
  id,
  label,
  modalImgSrc,
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

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const initialState = [];
    if (config) {
      for (let i = 0; i < formFormat.length; i++) {
        const d_var = `d_${formFormat[i].name}`;
        const p_var = `p_${formFormat[i].name}`;
        initialState.push({
          name: formFormat[i].name,
          type: formFormat[i].type,
          required: formFormat[i].required,
          [d_var]: config["development"][`${formFormat[i].name}`],
          [p_var]: config["production"][`${formFormat[i].name}`],
          label: formFormat[i].label,
          id: i,
        });
      }
    } else {
      for (let i = 0; i < formFormat.length; i++) {
        const d_var = `d_${formFormat[i].name}`;
        const p_var = `p_${formFormat[i].name}`;
        initialState.push({
          name: formFormat[i].name,
          type: formFormat[i].type,
          required: formFormat[i].required,
          [d_var]: "",
          [p_var]: "",
          label: formFormat[i].label,
          id: i,
        });
      }
    }
    setFormData(initialState);
  }, []);

  const submitted = (e) => {
    e.preventDefault();
    const result = {
      name: configName,
      id: id,
      type: type,
      config: {
        production: {},
        development: {},
      },
    };
    for (let i = 0; i < formData.length; i++) {
      result.config.production[`${formData[i].name}`] =
        formData[i][`p_${formData[i].name}`];
      result.config.development[`${formData[i].name}`] =
        formData[i][`d_${formData[i].name}`];
    }
    if (action === "add") addInput(result);
    else editInput(result);

    const initialState = [];
    for (let i = 0; i < formFormat.length; i++) {
      const d_var = `d_${formFormat[i].name}`;
      const p_var = `p_${formFormat[i].name}`;
      initialState.push({
        name: formFormat[i].name,
        type: formFormat[i].type,
        required: formFormat[i].required,
        [d_var]: "",
        [p_var]: "",
        label: formFormat[i].label,
        id: i,
      });
    }
    setFormData(initialState);
    setConfigName("");

    handleClose();
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
        <div className={Styles.modalLabel}>
          <img src={modalImgSrc} alt={label} />
        </div>
        <div className="text-right mt-2 mb-2">
          Need Help?{" "}
          <a href={helpLink} target="_blank">
            Check out the docs
          </a>
        </div>
        <Form id="connectorInfo" onSubmit={submitted}>
          <Form.Group>
            <Form.Label>Configuration Name</Form.Label>
            <Form.Control
              required={true}
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
            <Form.Group key={f.id}>
              <Form.Label>{f.label}</Form.Label>
              <Form.Control
                required={f.required ? true : false}
                value={!check && prod ? f[`p_${f.name}`] : f[`d_${f.name}`]}
                type={f.type}
                onChange={(e) => {
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
              />
            </Form.Group>
          ))}
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

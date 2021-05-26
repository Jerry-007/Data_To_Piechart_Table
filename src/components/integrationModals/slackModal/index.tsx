import React, { useState, useEffect } from "react";
import Select from "react-select";
import Styles from "@styles/integrationModal.module.css";
import { Modal, Form, Button } from "react-bootstrap";
import IntegrationAlert from "@components/integrationAlert";

const index: React.FC<{
  title: string;
  show: boolean;
  closeModal: () => void;
  integrationData: {
    token: string;
    raiseTickets: boolean;
    selectedLevels: {
      name: string;
      label: string;
    };
  };
  setIntegrationData: React.Dispatch<any>;
}> = ({
  title,
  show,
  closeModal,
  integrationData,
  setIntegrationData,
}): JSX.Element => {
  const [selectedSeverityLevels, setSelectedSeverityLevels] = useState(null);
  const [token, setToken] = useState("");
  const [raiseTickets, setRaiseTickets] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    config: {
      hostConnectivity: {
        status: false,
        msg: "",
      },
      credentialsCheck: false,
    },
  });

  const severityLevels = [
    { value: "critical", label: "critical" },
    { value: "high", label: "high" },
    { value: "medium", label: "medium" },
    { value: "low", label: "low" },
  ];

  useEffect(() => {
    if (integrationData) {
      setToken(integrationData.token);
      setRaiseTickets(integrationData.raiseTickets);
      selectedSeverityLevels(selectedSeverityLevels);
    }
  }, []);

  const changeOption = (selected) => {
    setSelectedSeverityLevels(selected);
  };

  const submitData = async (e) => {
    e.preventDefault();
    const data = {
      token,
      raiseTickets,
      selectedSeverityLevels,
    };
    setIntegrationData(data);
    closeModal();
  };
  return (
    <>
      <IntegrationAlert
        show={showAlert.show}
        config={showAlert.config}
        handleClose={() => setShowAlert({ ...showAlert, show: false })}
      />
      <Modal
        show={show}
        onHide={closeModal}
        backdrop="static"
        dialogClassName={Styles.dialogbox}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-4">
            Create a<a href=""> Slack App </a>or use existing apps. And use the
            Bot user token in OAuth &amp; Permissions
          </p>
          <Form id="integrationDataSlack" onSubmit={(e) => submitData(e)}>
            <Form.Group controlId="token">
              <Form.Label>Api Token *</Form.Label>
              <Form.Control
                onChange={(e) => setToken(e.target.value)}
                value={token}
                required={true}
                type="text"
                placeholder="----secret----token----"
              />
            </Form.Group>
            <Form.Group controlId="checkbox">
              <Form.Check
                checked={raiseTickets}
                onChange={() => setRaiseTickets(!raiseTickets)}
                className={Styles.checkbox}
                type="checkbox"
                label="Automatically notify on slack for newly generated incidents"
              />
              <div className="mt-3">
                Automatically notify slack for selected severity levels
              </div>
              <Select
                isMulti
                name="priority"
                value={selectedSeverityLevels}
                onChange={changeOption}
                options={severityLevels}
                className={Styles.multiSelect}
                classNamePrefix="Select . . ."
              />
            </Form.Group>
          </Form>
          <Button
            form="integrationDataSlack"
            type="submit"
            className={Styles.modalButton}
          >
            Next
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default index;

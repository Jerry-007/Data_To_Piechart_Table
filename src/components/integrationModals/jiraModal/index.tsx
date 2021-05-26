import React, { useState, useEffect } from "react";
import Styles from "@styles/integrationModal.module.css";
import { Modal, Form, Button } from "react-bootstrap";
import IntegrationAlert from "@components/integrationAlert";
import axios from "axios";

const index: React.FC<{
  title: string;
  show: boolean;
  closeModal: () => void;
  integrationData: {
    host: string;
    username: string;
    token: string;
    raiseTickets: boolean;
    project: string;
    priorityMapping: {
      critical: string;
      high: string;
      medium: string;
      low: string;
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
  const projects = ["option1", "option2", "option3"];
  const [host, setHost] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [raiseTickets, setRaiseTickets] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [project, setProject] = useState("");
  const [priorityMapping, setPriorityMapping] = useState({
    critical: "Highest",
    high: "High",
    medium: "Medium",
    low: "Low",
  });

  useEffect(() => {
    if (integrationData) {
      setHost(integrationData.host);
      setUsername(integrationData.username);
      setToken(integrationData.token);
      setRaiseTickets(integrationData.raiseTickets);
      setProject(integrationData.project);
      setPriorityMapping(integrationData.priorityMapping);
    }
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    if (!showNext) {
      const data = {
        host: host,
        username: username,
        token: token,
      };
      try {
        const res = await axios.post("http://localhost:5000/check", data);
        setShowNext(true);
      } catch (err) {
        setShowAlert({
          show: true,
          config: {
            hostConnectivity: {
              status: false,
              msg: err.message,
            },
            credentialsCheck: false,
          },
        });
      }
    } else {
      const data = {
        host,
        username,
        token,
        raiseTickets,
        project,
        priorityMapping,
      };
      setIntegrationData(data);
      closeModal();
    }
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
            The api token can be created via
            <a href=""> Atlasian Manage api Tokens</a> web page
          </p>
          <Form id="integrationDataJira" onSubmit={(e) => submitData(e)}>
            <Form.Group controlId="host">
              <Form.Label>Host *</Form.Label>
              <Form.Control
                onChange={(e) => setHost(e.target.value)}
                value={host}
                required={true}
                type="text"
                placeholder="https://test.atlassian.net/"
              />
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Label>Username *</Form.Label>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required={true}
                type="text"
                placeholder="test@example.com"
              />
            </Form.Group>
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
                label="Automatically raise tickets for newly generated incidents"
              />
            </Form.Group>
            {showNext === false ? (
              ""
            ) : (
              <>
                <Form.Group>
                  <Form.Label>Project</Form.Label>
                  <Form.Control
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    as="select"
                    placeholder="Select . . ."
                  >
                    <option>Select . . .</option>
                    {projects.map((p) => (
                      <option>{p}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mt-5">
                  <p className="font-weight-bold">Jira Priorty Mapping</p>
                  {["critical", "high", "medium", "low"].map((i) => (
                    <Form.Group className="d-flex flex-row ml-3 align-item-center">
                      <Form.Label
                        style={{ width: "8rem" }}
                        className="mt-auto mb-auto"
                      >
                        {i}
                      </Form.Label>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right mt-auto mb-auto w-25 mr-5"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                      <Form.Control
                        className="w-25"
                        as="select"
                        value={priorityMapping[i]}
                        onChange={(e) =>
                          setPriorityMapping((prevState) => {
                            const newState = Object.assign({}, prevState);
                            newState[i] = e.target.value;
                            return newState;
                          })
                        }
                      >
                        {["Highest", "High", "Medium", "Low"].map((e) => (
                          <option value={e}>{e}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  ))}
                </Form.Group>
              </>
            )}
          </Form>

          <Button
            form="integrationDataJira"
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

import React, { useState } from "react";
import Styles from "@styles/integration.module.css";
import { Form } from "react-bootstrap";

const index: React.FC<{
  name: string;
  img: string;
  description: string;
  Modal: React.ComponentType<{
    title: string;
    show: boolean;
    closeModal: () => void;
    integrationData: any;
    setIntegrationData: React.Dispatch<any>;
  }>;
}> = ({ name, img, description, Modal }): JSX.Element => {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [integrationData, setIntegrationData] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const integrationToggled = () => {
    setToggleSwitch(!toggleSwitch);
    console.log(integrationData);
  };

  return (
    <>
      <Modal
        title={name}
        show={showModal}
        closeModal={closeModal}
        integrationData={integrationData}
        setIntegrationData={setIntegrationData}
      />
      <div className={Styles.item}>
        <img className={Styles.logo} src={img}></img>
        <div>{name}</div>
        <div>{description}</div>
        <div className="d-flex justify-content-end align-items-center">
          {integrationData ? (
            <div
              className={Styles.editButton}
              onClick={() => {
                if (integrationData) setShowModal(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-pencil-square mr-1"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              Edit
            </div>
          ) : (
            ""
          )}
          <Form.Switch
            className={Styles.switch}
            type="switch"
            id={`customswitch${name}`}
            checked={toggleSwitch}
            onClick={() => {
              if (integrationData) {
                integrationToggled();
              } else {
                setShowModal(true);
              }
            }}
          />
        </div>

        {/* <Switch
          className={Styles.switch}
          checked={toggleSwitch}
          onChange={() => {
            if (!toggleSwitch) {
              setShow(true);
            } else {
              setToggleSwitch(false);
              console.log("switchedOff")
            }
          }}
        /> */}
      </div>
    </>
  );
};
export default index;

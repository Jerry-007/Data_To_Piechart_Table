import React from "react";
import { Modal, Button } from "react-bootstrap";
import Styles from "@styles/integrationAlert.module.css";

const index: React.FC<{
  show: boolean;
  handleClose: () => void;
  config: any;
}> = ({ show, handleClose, config }) => {
  return (
    <Modal
      className={Styles.modal}
      show={show}
      onHide={handleClose}
      dialogClassName={Styles.dialogbox}
    >
      <Modal.Header closeButton>
        <Modal.Title className="font-weight-bold">Connection Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={Styles.dialogBody}>
          <h5
            className="p-4 font-weight-bold rounded"
            style={{ backgroundColor: "#e5e5e5" }}
          >
            Host Connectivity :{config.hostConnectivity.status}
          </h5>
          <p className="px-3 py-2">{config.hostConnectivity.msg}</p>
          <h5
            className="p-4 mb-0 font-weight-bold rounded"
            style={{ backgroundColor: "#e5e5e5" }}
          >
            Credentials Check : {config.credentialsCheck}
          </h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className="rounded-pill" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default index;

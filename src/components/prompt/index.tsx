import React from "react";
import { Modal, Button } from "react-bootstrap";
import Styles from "@styles/prompt.module.css";
const Prompt: React.FC<{
  show: boolean;
  handleClose: () => void;
  message: string;
  execute?: () => void;
}> = ({ show, handleClose, message, execute }) => {
  return (
    <Modal
      dialogClassName={Styles.prompt}
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Body className={Styles.modalBody}>{message}</Modal.Body>
      <div className="mt-1">
        <Button
          variant="secondary"
          className="w-50 rounded-0 btn-sm"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          className="w-50 rounded-0 btn-sm"
          onClick={() => {
            execute();
            handleClose();
          }}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default Prompt;

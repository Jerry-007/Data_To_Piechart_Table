import React from "react";
import { Alert, Button } from "react-bootstrap";
import Styles from "@styles/alert.module.css";
const AlertBox: React.FC<{
  message?: string;
  variant?: string;
  setShowAlert: React.Dispatch<
    React.SetStateAction<{
      show: boolean;
      variant: string;
      message: string;
    }>
  >;
  show: boolean;
}> = ({ message, variant, setShowAlert, show }) => {
  if (show) {
    return (
      <Alert
        className={Styles.alertbox}
        style={
          variant === "error"
            ? { backgroundColor: "#c30052bb" }
            : { backgroundColor: "#00966Dbb" }
        }
        variant={variant}
      >
        <Button
        style={
          variant === "error"
            ? { color: "#c30052" }
            : { color: "#00966D" }
        }
          onClick={() =>
            setShowAlert((prev) => {
              const newState = { ...prev };
              newState.show = false;
              return newState;
            })
          }
        >
          X
        </Button>
        <div>
          <h6 className="mb-1">
            {variant === "error" ? "Error!" : "Success!"}
          </h6>
          {message}
        </div>
      </Alert>
    );
  } else {
    return null;
  }
};

export default AlertBox;

import React from "react";
import { Container } from "react-bootstrap";
import Styles from "../../styles/main.module.css";

const main1: React.FC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => {
  return <Container className={Styles.main}>
    {children}
    </Container>;
};

export default main1;

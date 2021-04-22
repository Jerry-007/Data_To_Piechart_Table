import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";

import { Button } from "@components";

export const Main: React.FC = () => {
  return (
    <div className="text-center py-4" style={{ backgroundColor: "#282c34" }}>
      <Container>
        <h1 className="display-2 text-white">Valley</h1>
        <p className="lead text-white">
          Welcome to the Valley Frontpage.
        </p>
      </Container>
    </div>
  );
};

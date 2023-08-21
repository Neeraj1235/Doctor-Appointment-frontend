import React from "react";
import Container from "react-bootstrap/esm/Container";

function PurchaseApp() {
  return (
    <Container fluid className="text-center">
      <h3 className="mt-5 ps-5 text-muted" style={{ paddingTop: "35vh" }}>
        <span className="h1 px-3 text-dark fw-bolder fs-1">
          Doctor
          <span className="text-primary ps-2">Appointment</span>
        </span>
      </h3>
      <p className="text-muted fw-bolder">
        Purchase code is "9634-7895-1236-7520"
      </p>
    </Container>
  );
}

export default PurchaseApp;

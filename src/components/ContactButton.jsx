import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Contact from "./Contact";

const ContactButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-5">
      <a href="#" className="btn-main-offer" onClick={handleShow}>
        Contact Me
      </a>

      {/* <Button variant="primary" className="btn-main-offer" onClick={handleShow}>
        Contact Me
      </Button> */}

      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Contact />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactButton;

import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CreateModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    stateCode: "AL",
    date: "",
    positive: "",
    recovered: "",
    death: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="">
          <Form.Group className="mb-3" controlId="formBasicstate">
            <Form.Label>State</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="stateCode"
              value={formData?.stateCode}
              type="text"
              placeholder="Enter State"
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="date"
              value={formData?.date}
              type="date"
              placeholder="Select Date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPositive">
            <Form.Label>Positive</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="positive"
              value={formData?.positive}
              type="text"
              placeholder="Enter Positive"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRecovered">
            <Form.Label>Recovered</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="recovered"
              value={formData?.recovered}
              type="text"
              placeholder="Enter Recovered"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDeath">
            <Form.Label>Death</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="death"
              value={formData?.death}
              type="text"
              placeholder="Enter Death"
            />
          </Form.Group>
        </div>
      </Modal.Body>
      <div className="d-flex justify-content-end items-end m-2">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <button className="delete-btn ms-2" onClick={handleClose}>
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default CreateModal;

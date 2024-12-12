import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ title = "", placeholder = "", type = "text", require }) => {
  return (
    <Form.Group className="mb-3 input-main" controlId="formBasicEmail">
      <Form.Label>
        {title}
        {require && <span style={{ color: "red" }}>*</span>}
      </Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </Form.Group>
  );
};

export default Input;

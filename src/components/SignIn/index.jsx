import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { LogoBudgeSvg, LogoSvg } from "../svg";
import "./signin.css";
import Input from "../commom/Input";
import { NavLink } from "react-router-dom";
const SignIn = () => {
  return (
    <div
      className="bg-light text-dark sign-in p-5"
      style={{ overflowX: "hidden" }}
    >
      <Row className="justify-content-center align-items-center">
        <Col md={8} lg={6} className="border rounded-4 px-4 py-5 pb-3">
          <Form>
            <div className="d-flex gap-3 align-items-center">
              <div className="logo">
                <LogoSvg color="black" />
              </div>
              <div className="text">
                <h3 className="mb-0">
                  Funding Pipe{" "}
                  <span className="badge-svg">
                    {" "}
                    <LogoBudgeSvg />
                  </span>
                </h3>
              </div>
            </div>
            <h2 className="mt-4 account">Sign in to your account</h2>
            <Row className="p-0 m-0">
              <Col>
                <Input
                  title="Your email"
                  placeholder="name@company.com"
                  type="email"
                />
              </Col>
            </Row>
            <Row className="p-0 m-0">
              <Col>
                <Input
                  title="Password"
                  placeholder="********"
                  type="password"
                />
              </Col>
            </Row>
            <Form.Group
              className="mb-3 mt-3 d-flex justify-content-between"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember me" />
              <span className="forget">Forgot Password ?</span>
            </Form.Group>
            <div className="submit">
              <Button className="w-100" type="submit">
                Sign in
              </Button>
            </div>
            <p className="text-center mt-4 create-account">
              <NavLink
                to="/sign-up"
                style={{ textDecoration: "none", fontWeight: 700 }}
                className="text-muted"
              >
                Create Account
              </NavLink>
            </p>
            <p className="text-center mt-4 privacy">Privacy Policy</p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;

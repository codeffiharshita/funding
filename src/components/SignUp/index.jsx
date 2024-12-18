import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { LogoBudgeSvg, LogoSvg } from "../svg";
import "./signup.css";
import Input from "../commom/Input";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <div
      className="bg-light text-dark sign-up p-5"
      style={{ overflowX: "hidden" }}
    >
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="border rounded-4 px-4 py-5 pb-3">
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
            <h2 className="mt-4 account">Create an account</h2>
            <Row className="p-0 m-0">
              <Col md={6}>
                <Input
                  title="First Name"
                  placeholder="First Name"
                  require={true}
                />
              </Col>
              <Col md={6}>
                <Input
                  title="Last Name"
                  placeholder="Last Name"
                  require={true}
                />
              </Col>
            </Row>
            <Row className="p-0 m-0">
              <Col>
                <Input
                  title="Your email"
                  placeholder="name@company.com"
                  require={true}
                  type="email"
                />
              </Col>
            </Row>
            <Row className="p-0 m-0">
              <Col>
                <Input
                  title="Password"
                  placeholder="********"
                  require={true}
                  type="password"
                />
              </Col>
            </Row>
            <Row className="p-0 m-0">
              <Col>
                <Input
                  title="Confirm Password"
                  placeholder="********"
                  require={true}
                  type="password"
                />
              </Col>
            </Row>
            <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I certify that I am 18 years of age or older, agree to the User Agreement, and acknowledge the Privacy policy."
              />
            </Form.Group>
            <div className="submit">
              <Button className="w-100" type="submit">
                Create Account
              </Button>
            </div>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <NavLink
                to="/sign-in"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                Login Here
              </NavLink>
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;

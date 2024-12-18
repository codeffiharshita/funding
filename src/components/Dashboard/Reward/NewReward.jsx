import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BackSvg, DashboardRewardSvg, GreaterSvg } from "../../svg";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import "./reward.css";
const NewReward = () => {
  const [select, setSelect] = useState("step1");
  const [selectedValue, setSelectedValue] = useState("");
  const [page, setPage] = useState("trading");
  const navigate = useNavigate();
  return (
    <Container className="my-5 new-reward">
      <div>
        <Button className="dash-rewardnew bg-transparent border-0 d-flex justify-cntent-start">
          <span className="canvas-body">
            {" "}
            <DashboardRewardSvg />
          </span>

          <NavLink className="ps-2">
            Reward{" "}
            <span className="greater">
              <GreaterSvg />
            </span>{" "}
            New Rewards
          </NavLink>
        </Button>
      </div>
      <div className="mx-auto new-reward-content mt-5">
        <Button
          className="back d-flex align-items-center gap-2 bg-transparent border-0"
          onClick={() => navigate(-1)}
        >
          <BackSvg /> <span>Back</span>
        </Button>
        <div>
          <h4 className="new-reward-head mt-4">Request a new reward</h4>
          <p>
            Use this form to request a new reward, we will verify and get in
            touch with you for further advancements
          </p>
        </div>
        <Row className="justify-content-center mt-4">
          <Col
            md={7}
            className="buttons d-flex justify-content-around py-3 rounded-4"
          >
            <Button
              className="me-2 rounded-3"
              onClick={() => setPage("trading")}
            >
              Trading Account
            </Button>
            <Button className="rounded-3" onClick={() => setPage("affiliate")}>
              Affiliate
            </Button>
          </Col>
        </Row>
        {page == "trading" ? (
          <>
            <div className="note mt-4">
              <p>Note:</p>
              <ul>
                <li>
                  <b> ONLY FOR TUESDAY PAYDAY: </b>Rewards can be requested
                  every TUESDAY between 09:00 - 19:00 Dubai Time
                  (10:30 - 20:30 according to your timezone Asia/Calcutta)
                  effective from June 4th, 2024
                </li>
                <li>ALL TRADES MUST BE CLOSED INCLUDING PENDING ORDERS.</li>
                <li>
                  Please wait for at least 15 mins after you close your latest
                  trade to request a reward.
                </li>
                <li>
                  Minimum amount for an eligible reward is 1% of initial
                  balance.
                </li>
                <li>
                  Minimum amount to request via Rise is $500 for supported
                  countries
                </li>
              </ul>
            </div>
            <div>
              <Form.Group controlId="paymentMethod">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Choose Account Login ID*
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select aria-label="Select Payment Method">
                  <option>select Payment Method</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="crypto">Crypto Wallet</option>
                </Form.Select>
              </Form.Group>
            </div>
          </>
        ) : (
          <Container className="mt-5">
            {/* Affiliate Reward Card */}
            <Card className="text-center border-2 rounded-4 shadow-sm p-4">
              <Card.Body>
                <p style={{ color: "red", fontWeight: "bold" }}>
                  You are not eligible for an affiliate reward yet
                </p>
                <Row className="mt-3 mb-2">
                  <Col>
                    <p style={{ fontWeight: "bold" }}>
                      Next affiliate reward at
                    </p>
                    <p>--</p>
                  </Col>
                  <Col>
                    <p style={{ fontWeight: "bold" }}>Amount</p>
                    <p>$0.00</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Preferred Payment Method */}
            <div className="mt-4">
              <Form.Group controlId="paymentMethod">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Preferred Payment Method
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select aria-label="Select Payment Method">
                  <option>select Payment Method</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="crypto">Crypto Wallet</option>
                </Form.Select>
              </Form.Group>
            </div>
          </Container>
        )}
        {/* <div className="step mx-auto px-3 py-2 rounded-4">
          <Button
            className={`${
              select === "step1"
                ? "btn-primary text-white "
                : "bg-transparent text-dark"
            } py-2 rounded-4`}
            onClick={() => {
              setSelect("step1");
            }}
          >
            1 Step
          </Button>

          <Button
            className={`${
              select === "step2"
                ? "btn-primary text-white"
                : "bg-transparent text-dark"
            } py-2 rounded-4`}
            onClick={() => {
              setSelect("step2");
            }}
          >
            2 Step
          </Button>

          <Button
            className={`${
              select === "step3"
                ? "btn-primary text-white"
                : "bg-transparent text-dark"
            } py-2 rounded-4`}
            onClick={() => {
              setSelect("step3");
            }}
          >
            3 Step
          </Button>

          <Button
            className={`${
              select === " 2 Step X"
                ? "btn-primary text-white"
                : "bg-transparent text-dark"
            } py-2 rounded-4`}
            onClick={() => {
              setSelect(" 2 Step X");
            }}
          >
            2 Step X
          </Button>

          <Button
            className={`${
              select === "2 Step Plus"
                ? "btn-primary text-white"
                : "bg-transparent text-dark"
            } py-2 rounded-4`}
            onClick={() => {
              setSelect("2 Step Plus");
            }}
          >
            2 Step Plus
          </Button>
          <Button
            className={`${
              select === "Algo"
                ? "btn-primary text-white"
                : "bg-transparent text-dark"
            } py-2 rounded-4`}
            onClick={() => {
              setSelect("Algo");
            }}
          >
            Algo
          </Button>

          <div />
          <div />
        </div> */}
      </div>
    </Container>
  );
};

export default NewReward;

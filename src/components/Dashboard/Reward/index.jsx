import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { DashboardRewardSvg, PaswwordSvg } from "../../svg";
import { NavLink, useNavigate } from "react-router-dom";
import "./reward.css";
const Reward = () => {
  const navigate = useNavigate();
  return (
    <Container className="mt-5 px-5">
      <div>
        <Button className="dash-reward bg-transparent border-0 d-flex justify-cntent-start">
          <span className="canvas-body">
            {" "}
            <DashboardRewardSvg />
          </span>
          <NavLink to="/dashboard/reward" className="ps-2">
            Rewards
          </NavLink>
        </Button>
      </div>
      <div>
        <h2 className="mt-4 reward-head">Welcome to the reward section.</h2>
      </div>
      <div className="reward-content mt-5">
        <Row className="reward-data d-flex">
          <Col md={9} className="detail text-black">
            <h4>Ready to request your reward?</h4>
            <p>
              Please click on the request reward button then proceed to fill out
              the required information, our team will reach out to you for
              further advancements.
            </p>
          </Col>
          <Col md={3} className="reward-button">
            <Button
              className="rounded-3"
              onClick={() => navigate("/dashboard/new-reward")}
            >
              <span className="me-2">
                <PaswwordSvg />
              </span>
              Request Reward
            </Button>
          </Col>
        </Row>
        <div className="table-responsive mt-4">
          <Table bordered hover>
            <thead>
              <tr>
                <th>Reference ID</th>
                <th>Reward Type</th>
                <th>Requested On</th>
                <th>Method</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Admin Note</th>
                <th>Certificate</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan="9"
                  className="text-center py-3 border-start border-end"
                >
                  {/* Empty row with no data */}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default Reward;

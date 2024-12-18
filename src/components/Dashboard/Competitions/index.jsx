import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  CompetitionTrophySvg,
  EntryCardSvg,
  SidebarTrophySvg,
  UserSvg
} from "../../svg";
import { NavLink } from "react-router-dom";
import "./competitions.css";
const Competition = () => {
  return (
    <Container className="mt-4 competitions">
      <Button className="off bg-transparent border-0 d-flex mt-5">
        <span className="canvas-body">
          {" "}
          <SidebarTrophySvg />
        </span>
        <NavLink className="ps-2">Competitions</NavLink>
      </Button>
      <div className="main-card ">
        <Card
          className="px-4 py-3 rounded-4 border-0 shadow-sm "
          style={{ backgroundColor: "rgba(63, 131, 248, 1)" }}
        >
          <Card.Body>
            <div className="d-flex align-items-center gap-4 second-card">
              <div>
                <Card.Title className="text-white">
                  <h4 className="featured-comp">Featured Competition</h4>
                </Card.Title>
                <Card.Text className="text-white ends">Ends In</Card.Text>
                <div className="d-flex gap-2">
                  <div>
                    <Button
                      className="d-flex flex-column border-0"
                      style={{ backgroundColor: " rgba(255, 255, 255, 0.5)" }}
                    >
                      <b className="text-center">28</b>
                      <span className="text-center">Day</span>
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="d-flex flex-column border-0"
                      style={{ backgroundColor: " rgba(255, 255, 255, 0.5)" }}
                    >
                      <b className="text-center">00</b>
                      <span className="text-center">Hr</span>
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="d-flex flex-column border-0"
                      style={{ backgroundColor: " rgba(255, 255, 255, 0.5)" }}
                    >
                      <b className="text-center">09</b>
                      <span className="text-center">Min</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <Card className="px-2 py-3 rounded-4">
                  <Row className="gap-4 align-items-center">
                    <Col sm={1}>
                      <div>
                        <CompetitionTrophySvg />
                      </div>
                    </Col>
                    <Col sm={10}>
                      <h3 className="month-comp">
                        December 2024 Monthly Competition
                      </h3>
                      <div className="d-flex gap-2 buttons">
                        <Button>Matchtrader</Button>
                        <Button>Ongoing</Button>
                      </div>
                    </Col>
                  </Row>
                  <div>
                    <p className="month-detail mt-2">
                      Welcome to the thrilling world of FundingPips
                      competitions! Get ready to embark on a journey of
                      strategy, skill, and financial expertise as traders from
                      around the globe come together to showcase their abilities
                      and compete for exciting prices.
                    </p>
                    <div className="d-flex gap-5 month-svg">
                      <div className="d-flex gap-3 align-items-center detail">
                        <span className="svg-div p-3 rounded-4 d-flex align-items-center">
                          <EntryCardSvg />
                        </span>
                        <div className="d-flex flex-column">
                          <span>Entry</span>
                          <b>Free</b>
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center detail">
                        <span className="svg-div  p-3 rounded-4 d-flex align-items-center">
                          <UserSvg />
                        </span>
                        <div className="d-flex flex-column">
                          <span>Participants</span>
                          <b>16447</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Competition;

import React, { useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  DarkFacebookSvg,
  DarkInstagramSvg,
  DarkTwitterSvg,
  DashboardChampionSvg,
  DiscordSvg,
  HomeSvg,
  QuestionSvg,
  YoutubeSvg
} from "../../svg";
import { NavLink } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Container className="mt-3">
        <div>
          <Button className="dash-home bg-transparent border-0 d-flex justify-cntent-start">
            <span className="">
              {" "}
              <HomeSvg />
            </span>
            <NavLink to="/" className="ps-2">
              Home
            </NavLink>
          </Button>
        </div>
        <Container className="mt-4 ">
          <Row>
            <Col md={12} lg={8}>
              <div>
                <Card className="rounded-4 gradient-card border-none">
                  <div className="d-flex align-items-center justify-content-center champion-card">
                    <Card.Body>
                      <Card.Title>Welcome Hirpara Krushal</Card.Title>
                      <Card.Subtitle className="mt-4 mb-2">
                        Are you ready to buy your first challenge?
                      </Card.Subtitle>
                      <p>
                        We recommend you go through the FAQ section first before
                        starting a challenge
                      </p>
                      <div className="d-flex gap-3">
                        <Button className="rounded-3">New Challenge</Button>
                        <Button className="rounded-3">Trading Rules</Button>
                      </div>
                    </Card.Body>
                    <div className="champion-svg">
                      <DashboardChampionSvg />
                    </div>
                  </div>
                </Card>
              </div>
              <Row className="align-items-center doubt">
                <Col md={12} lg={8} className="">
                  <h3>Still in Doubt?</h3>
                  <p>
                    Get in touch with us either through our socials or visit the
                    help center on our website
                  </p>
                  <div className="d-flex gap-3 align-items-center dash-social">
                    <YoutubeSvg color="black" />
                    <DarkInstagramSvg />
                    <DarkTwitterSvg />
                    <DarkFacebookSvg />
                  </div>
                  <div className="mt-3 d-flex gap-3 ">
                    <Button className="d-flex align-items-center gap-2 px-4 bg-dark border-dark rounded-3">
                      Join Discord{" "}
                      <span className="discord">
                        <DiscordSvg />
                      </span>
                    </Button>
                    <Button className="d-flex align-items-center gap-2 px-4 rounded-3">
                      Help Center{" "}
                    </Button>
                  </div>
                </Col>
                <Col md={12} lg={4} className="order-que">
                  <div>
                    <QuestionSvg />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={4}>
              <h3
                style={{ paddingRight: "100px", wordBreak: "break-word" }}
                className="feq-que"
              >
                <span className="text-primary">F</span>requently
                <span className="text-primary"> A</span>sked{" "}
                <span className="text-primary"> Q</span>uestions
              </h3>
              <div className="faq-dash">
                <div>
                  <NavLink>General</NavLink>
                </div>
                <div>
                  <NavLink>Evaluation Process</NavLink>
                </div>
                <div>
                  <NavLink>Trading Objectives</NavLink>
                </div>
                <div>
                  <NavLink>Trading Rules</NavLink>
                </div>
                <div>
                  <NavLink>Funded Accounts</NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;

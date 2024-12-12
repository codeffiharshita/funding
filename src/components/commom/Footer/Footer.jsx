import React, { useState } from "react";
import "./Footer.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import logo from "../../../assets/logo-shape.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  ApplePaySvg,
  AstroPay,
  BankSvg,
  CustomerSupportSvg,
  DiscordSvg,
  FacebookSvg,
  GapySvg,
  GpayColorSvg,
  GpaySvg,
  InstagramSvg,
  LinkedInSvg,
  LogoSvg,
  MasterCard,
  NetellerCard,
  NewsLetterSvg,
  PayCard,
  Skrill,
  TrustPilotSvg,
  TwitterSvg,
  VisaCard,
  YoutubeSvg
} from "../../svg";
import SocialIcon from "../SocialIcon";
const Footer = () => {
  const [rating, setRating] = useState(4.5); // Holds the current rating
  const [hovered, setHovered] = useState(null); // Holds the hovered state

  const handleMouseOver = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);
  const handleClick = (index) => setRating(index);

  const renderStar = (index) => {
    const isFullStar = Number.isInteger(rating);
    for (let i = 0; i <= index; i++) {
      if (i + 1 < Math.floor(rating)) {
        // Full star

        return <FaStar key={i} size={40} color="gold" />;
      } else if (i + 1 === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star
        return <FaStarHalfAlt key={i} size={40} color="gold" />;
      } else {
        // Empty star
        return <FaStar key={i} size={40} color="grey" />;
      }
    }
  };
  return (
    <div className="footer mt-5">
      <div className="title mx-auto">
        <h1 className="text-center heading">
          Empowering Traders in 195+ Countries
        </h1>
      </div>

      <div className="cards mt-5 mx-auto">
        <Row className="justify-content-evenly g-5">
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="main rounded-4">
              <Card.Body>
                <Card.Title>
                  <div className="d-flex gap-3">
                    <div sx={2}>
                      <DiscordSvg />
                    </div>
                    <div>
                      <h4 className="text-white">Our Community</h4>
                    </div>
                  </div>
                </Card.Title>
                <Card.Subtitle className="mb-2 mt-3">
                  <h4 className="text-white"> Do not skip any beat.</h4>
                </Card.Subtitle>
                <Card.Text className="card-subtext">
                  The Ultimate Trading Community. Join our Discord server to get
                  the latest updates, news and more.
                </Card.Text>
                <div>
                  <Button className="bg-white text-dark rounded-4 fw-bold">
                    Open Discord
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="main rounded-4">
              <Card.Body>
                <Card.Title>
                  <div className="d-flex gap-3">
                    <div sx={2}>
                      <CustomerSupportSvg />
                    </div>
                    <div>
                      <h4 className="text-white">Customer Support</h4>
                    </div>
                  </div>
                </Card.Title>
                <Card.Subtitle className="mb-2 mt-3">
                  <h4 className="text-white"> 24/7 Customer Support</h4>
                </Card.Subtitle>
                <Card.Text className="card-subtext">
                  We provide customer support around the clock 24/7 in multiple
                  languages for our traders around the world.
                </Card.Text>
                <div className="d-flex gap-1">
                  <Button className="bg-white text-dark rounded-4 fw-bold">
                    Talk to our support
                  </Button>
                  <Button className="bg-transparent text-white border-white rounded-4 fw-bold mx-2">
                    Open FAQs
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="main rounded-4">
              <Card.Body>
                <Card.Title>
                  <div className="d-flex gap-3">
                    <div sx={2}>
                      <NewsLetterSvg />
                    </div>
                    <div>
                      <h4 className="text-white">Newsletter</h4>
                    </div>
                  </div>
                </Card.Title>
                <Card.Subtitle className="mb-2 mt-3">
                  <h4 className="text-white"> Join our Newsletter</h4>
                </Card.Subtitle>
                <Card.Text className="card-subtext">
                  Stay updated with our newsletter!
                </Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicInput">
                    <Form.Control
                      type="text"
                      placeholder="Enter your email"
                      className="bg-transparent custom-input text-white"
                    />
                  </Form.Group>
                  <Button className="bg-white text-dark rounded-4 fw-bold">
                    Subscribe
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="about mt-5 mx-auto">
        <Row className="justify-content-evenly g-5 g-md-3">
          <Col xs={12} sm={6} md={6} lg={3}>
            <h5>Company</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="#terms"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#affiliate"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Affiliate Program
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <h5>Community</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="#about"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#brandkit"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Brand Kit
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <h5>Legal</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="#termsconditions"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} className="p-0">
            <ul style={{ listStyle: "none", padding: 0 }} className="iso">
              <li
                style={{ marginBottom: "10px" }}
                className="d-flex align-items-center gap-3"
              >
                <img src={logo} alt="ISO" width={85} height={70} />
                <div>
                  <p className="subtitle">ISO 27001:2022</p>
                  <p className="description">
                    <p>Information Security Management System - ISMS</p>
                  </p>
                </div>
              </li>
              <li
                style={{ marginBottom: "10px" }}
                className="d-flex align-items-center gap-3"
              >
                <img src={logo} alt="ISO" width={85} height={70} />
                <div>
                  <p className="subtitle">ISO 22301:2019</p>
                  <p className="description">
                    <p>Business Continuity Management Systems - BCMSS</p>
                  </p>
                </div>
              </li>
              <li
                style={{ marginBottom: "10px" }}
                className="d-flex align-items-center gap-3"
              >
                <img src={logo} alt="ISO" width={85} height={70} />
                <div>
                  <p className="subtitle">ISO 9001:2015</p>
                  <p className="description">
                    <p>Quality Management System - QMS</p>
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      <div className="social border-top border-bottom">
        <div className="soical-detail my-4 mx-auto px-4">
          <Row className="align-items-center">
            {/* Left Section - Logo */}
            <Col xs={12} sm={3} md={3} lg={3} className="mb-2 mb-md-0 ">
              <div className="logo gap-2 gap-md-3 ">
                <LogoSvg />
                <span>Funding Pipe</span>
              </div>
            </Col>

            {/* Center Section - Social Media Icons */}
            <Col
              xs={12}
              sm={3}
              md={4}
              lg={4}
              className="mb-2 mb-md-0 mt-md-2 links"
            >
              <SocialIcon />
            </Col>

            {/* Right Section - Google Ratings and Trustpilot */}
            <Col xs={12} sm={6} md={5} lg={5}>
              <div className="d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-end gap-3 gap-sm-1 mt-md-2 google-rating">
                {/* Google Ratings */}
                <div className="d-flex align-items-center">
                  <div className="google-svg">
                    <GpayColorSvg />
                  </div>
                  <div className="d-flex flex-column align-items-start justify-content-evenly ms-2 border-end pe-3">
                    <h4>4.5/5</h4>
                    <div className="text-warning">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "5px"
                        }}
                        onMouseLeave={handleMouseLeave}
                        className="star"
                      >
                        {/* {Array.from({ length: 5 }, (_, index) =>
                        <span
                          key={index}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onClick={() => handleClick(index + 0.5)}
                          onDoubleClick={() => handleClick(index + 1)}
                        >
                          {renderStar(index)}
                        </span>
                      )} */}
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trustpilot Reviews */}
                <div className="d-flex align-items-center">
                  <TrustPilotSvg />
                  <span className="bg-white text-dark reviews">
                    15.7K Reviews
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="details mx-auto mt-4">
        <h4 className="text-center">
          Please note that all accounts we provide to our clients are demo
          accounts in a simulated trading environment.
        </h4>
        <p className="text-center mt-3">
          All content published and distributed by FundingPips, and its
          affiliates(collectively, the Company) is to be treated as general
          information only. None of the information provided by the Company or
          contained herein is intended as investment advice, an offer or
          solicitation of an offer to buy or sell, or a recommendation,
          endorsement, or sponsorship of any security, company, or fund,
          FundingPips does not act as or conduct services as a broker.
          FundingPips does not act as or conduct services as a custodian. People
          who register for our programs do so at their own volition, Purchases
          of programs should not be considered deposits. All program fees are
          used for operation costs including, but not limited to, staff,
          technology and other business related expenses. Nothing contained
          herein is a solicitation or an offer to buy or sell futures, options,
          or forex. Past performance is not necessarily indicative of future
          results. Applicable law to be under the laws of The United Arab
          Emirates.
        </p>

        <div className="symbols mx-auto">
          <Row>
            <div className="d-flex justify-content-between payment-section">
              <span className="payment">
                <VisaCard />
              </span>
              <span className="payment">
                <AstroPay />
              </span>
              <span className="payment">
                <ApplePaySvg />
              </span>
              <span className="payment">
                <MasterCard />
              </span>
              {/* </Col>
            <Col sm={12} md={6}> */}
              <span className="payment">
                <PayCard />
              </span>
              <span className="payment">
                <NetellerCard />
              </span>
              <span className="payment">
                <GpaySvg />
              </span>
              <span className="payment">
                <BankSvg />
              </span>
              <span className="payment">
                <Skrill />
              </span>
            </div>
          </Row>
        </div>
        <p className="text-center copyright">Copyright © 2024</p>
      </div>
    </div>
  );
};

export default Footer;

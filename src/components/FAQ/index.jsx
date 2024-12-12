import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Nav,
  Navbar,
  NavDropdown,
  Row
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./faq.css";
import {
  CollapseArrowSvg,
  DarkLogoSvg,
  EvaluationSvg,
  FundAccountSvg,
  GeneralSvg,
  LanguageSvg,
  LogoSvg,
  ObjectiveSvg,
  RefundSvg,
  RewardSvg,
  SearchSvg
} from "../svg";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import SocialIcon from "../commom/SocialIcon";
const FAQ = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    alert("Search triggered!");
  };
  const data = [
    'How can slippage occur?"news"',
    "Made a partial crypto currency transaction, what next?",
    "Can I hold trades during the news and over the weekend?",
    "H﻿ow to log in to Match Trader",
    "Which instrument can I trade?",
    "H﻿ow to log in to cTrader",
    "What is Toxic Trading Flow?",
    "How do I request a Reward?",
    "How to check contract sizes/Swap Rates?",
    "What is the IP rule?"
  ];

  const AllCardData = [
    {
      svg: <EvaluationSvg />,
      title: "Evaluation Models & Processes",
      text: "11 articles"
    },
    {
      svg: <GeneralSvg />,
      title: "General FAQ",
      text: "15 articles"
    },
    {
      svg: <FundAccountSvg />,
      title: "Funded Accounts",
      text: "7 articles"
    },
    {
      svg: <ObjectiveSvg />,
      title: "Terms of Use &  Objectives",
      text: "16 articles"
    },
    {
      svg: <RewardSvg />,
      title: "Rewards",
      text: "6 articles"
    },
    {
      svg: <RefundSvg />,
      title: "Refunds & Payments",
      text: "11 articles"
    }
  ];
  const [select, setSelect] = useState(0);
  return (
    <div className="bg-light text-dark faq">
      <Navbar bg="white" expand="lg" className=" py-2">
        <Container>
          {/* Left Section */}
          <Navbar.Brand className="d-flex align-items-center">
            <span>FundingPips Help Center</span>
          </Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="navbar-content" />

          {/* Right Section */}
          <Navbar.Collapse id="navbar-content" className="justify-content-end">
            <Nav>
              <NavLink href="#1-step" className="mx-2">
                1-Step Model
              </NavLink>
              <NavLink href="#2-step" className="mx-2">
                2-Step Model
              </NavLink>
              <NavLink href="#3-step" className="mx-2">
                3-Step Model
              </NavLink>
              <NavDropdown
                title={
                  <span>
                    <LanguageSvg className="me-1" /> {/* Icon added here */}
                    Language
                  </span>
                }
                id="language-dropdown"
                className="mx-2"
              >
                <NavDropdown.Item href="#english">English</NavDropdown.Item>
                <NavDropdown.Item href="#spanish">Spanish</NavDropdown.Item>
                <NavDropdown.Item href="#french">French</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <h1 className="text-center">FundingPips Help Centre</h1>
        <div className="d-flex justify-content-center align-items-center my-4">
          <InputGroup
            className=""
            style={{ borderRadius: "10px", border: "1px solid #ddd" }}
          >
            <InputGroup.Text
              id="search-icon"
              style={{
                backgroundColor: "transparent",
                border: "none",
                paddingLeft: "35px",
                paddingTop: "1%",
                paddingBottom: "1%"
              }}
            >
              <SearchSvg />
            </InputGroup.Text>
            <FormControl
              placeholder="Search for articles..."
              aria-label="Search"
              aria-describedby="search-icon"
              style={{
                border: "none",
                paddingLeft: "1%",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                paddingTop: "1%",
                paddingBottom: "1%",
                outline: "none", // Remove the default focus outline
                transition: "box-shadow 0.3s ease" // Smooth shadow transition
              }}
              onFocus={(e) => {
                e.target.style.boxShadow =
                  "10px 15px 50px 0 rgba(0, 0, 0, 0.25)";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "none"; // Remove shadow when focus is lost
              }}
            />
          </InputGroup>
        </div>
      </Container>
      <Container className="my-4">
        <Card style={{ borderRadius: "15px", border: "1px solid #ddd" }}>
          <Card.Body>
            <Card.Title className="mb-4 ps-3">
              <strong>Most Viewed Articles</strong>
            </Card.Title>
            <Row className="gx-5">
              {data?.length &&
                data?.map((item, index) => (
                  <Col md={6} key={`${index}-faqlist`}>
                    <ListGroup variant="flush">
                      <ListGroup.Item
                        className={`active-article ${
                          index == select ? "bg-list" : ""
                        }`}
                        onClick={() => setSelect(index)}
                      >
                        <span className="px-3"> {item}</span>
                        <span>
                          <CollapseArrowSvg />
                        </span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Container className="mt-5 allCards">
        <Row className="g-4">
          {AllCardData?.length &&
            AllCardData?.map((item, index) => (
              <Col md={6} key={`${index}-allCard`}>
                <Card className="rounded-4">
                  <Card.Body className="d-flex gap-5 align-items-center justify-content-space-between">
                    <div className="ps-4">{item?.svg}</div>
                    <div>
                      <Card.Title>{item?.title}</Card.Title>
                      <Card.Text>{item?.text}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <Container style={{ margin: "10% auto" }}>
        <div className="d-flex flex-column align-items-center gap-4">
          <div className="logo">
            <DarkLogoSvg />
          </div>
          <div className="capital">
            <h1>Your skill is our capital</h1>
          </div>
          <div>
            <div className="d-flex gap-5 justify-content-center faq-link">
              <span>Home</span>
              <span>Terms of use</span>
              <span>Contact Us</span>
              <span>Blog</span>
            </div>
            <div className="faq-svg mt-3">
              <SocialIcon color="black" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;

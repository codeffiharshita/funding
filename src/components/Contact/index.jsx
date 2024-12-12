import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiscordSvg,
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  TwitterSvg,
  YoutubeSvg
} from "../svg";
import "./contact.css";
import Map from "../../assets/map.png";
import SocialIcon from "../commom/SocialIcon";
const Contact = () => {
  return (
    <div className="mt-5 contact">
      <Row className="g-5">
        <Col sm={12} md={12} lg={6}>
          <div className="help">
            <h1 className="heading">How can we help you?</h1>
          </div>
          <div className="location mt-5">
            <h5>Our location</h5>
            <h3>In the heart of the vibrant city of Dubai - UAE</h3>
          </div>
          <div className="email mt-5">
            <h5>Stay in touch</h5>
            <div className="join d-flex justify-content-between mt-4">
              <div className="detail">
                <h4 className="title">Email our team</h4>
                <h4 className="description">We are here to help!</h4>
              </div>
              <div className="button">
                <button>support@fundingpips.com</button>
              </div>
            </div>
            <div className="join d-flex justify-content-between mt-5">
              <div className="detail">
                <h4 className="title">Join our Discord</h4>
                <h4 className="description"> Join community of traders</h4>
              </div>
              <div className="button">
                <button>Open Dashboard</button>
              </div>
            </div>
          </div>
          <div className="follow mt-5">
            <h5>Follow us</h5>
            <div className="mt-4">
              <SocialIcon />
            </div>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6} className="mt-3 address">
          <img src={Map} alt="map" />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;

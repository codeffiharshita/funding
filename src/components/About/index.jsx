import React from "react";
import "./about.css";
import FundingImg from "../../assets/fundingpips image 1.png";
import Creative1 from '../../assets/creative-1.png';
import Creative2 from '../../assets/creative2.png';
import Creative3 from '../../assets/creative3.png';
import Creative4 from '../../assets/creative4.png';
import Creative5 from '../../assets/creative5.png';
import Creative6 from '../../assets/creative6.png';
import Creative7 from '../../assets/creative7.png';
import Creative8 from '../../assets/creative8.png';
import Creative9 from '../../assets/creative9.png';
import Creative10 from '../../assets/creative10.png';
import Creative11 from '../../assets/creative11.png';
import Creative12 from '../../assets/creative12.png';
import Creative13 from '../../assets/creative13.png';
import Creative14 from '../../assets/creative14.png';
import Creative16 from '../../assets/creative16.png';
import Creative17 from '../../assets/creative17.png';
import Creative18 from '../../assets/creative18.png';
import Creative19 from '../../assets/creative19.png';
import Creative20 from '../../assets/creative20.png';
import Creative21 from '../../assets/creative21.png';
import Creative22 from '../../assets/creative22.png';
import Creative23 from '../../assets/creative23.png';
import { Card, Col, Container, Row } from "react-bootstrap";
import { CommunitySvg, ExcellenceSvg, InovationSvg } from "../svg";
const AboutUs = () => {
  const images=[Creative1,
    Creative2,
    Creative3,
    Creative4,
    Creative5,
    Creative6,
    Creative7,
    Creative8,
    Creative9,
    Creative10,
    Creative11,
    Creative12,
    Creative13,
    Creative14,
    Creative16,
    Creative17,
    Creative18,
    Creative19,
    Creative20,
    Creative21,
    Creative22,
    Creative23]
  const CardData = [
    {
      svg: <CommunitySvg />,
      title: "Community",
      description: `To become the world’s most trusted firm by providing unparalleled support, education, and growth opportunities to traders of all levels.`
    },
    {
      svg: <ExcellenceSvg />,
      title: "Excellence",
      description: `Our pursuit of excellence drives us to provide top-notch service, resources, and support to all users.`
    },
    {
      svg: <InovationSvg />,
      title: "Innovation",
      description: `We continuously evolve, leveraging cutting-edge technology and creative solutions to stay ahead.`
    }
  ];
  return (
    <div className="mt-5 about-us">
      <div className="title mx-auto">
        <h1 className="text-center heading">
          Fueling Global Traders with Innovation and Success
        </h1>
        <p>
          The team behind FundingPips consists of experienced traders and
          industry professionals who fully comprehend the complexities of the
          trading world and are committed to enhancing the trading experience by
          offering top-notch products, trader-friendly rules, and skill
          development, with the ultimate goal of cultivating consistent and
          profitable traders.
        </p>
      </div>
      <div className="mission">
        <div className="image position-relative">
          <div>
            <img src={FundingImg} alt="" width="80%" />
          </div>
          <div className="position-absolute mission-card">
            <Card className="bg-transparent px-3 py-2 rounded-5">
              <Card.Body className="text-center">
                <Card.Title className="fw-bold text-white">
                  Our mission
                </Card.Title>
                <Card.Text className="text-white text-start">
                  Enabling widespread access to trading while upholding
                  transparency, integrity, and consistency.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="vision mx-auto">
        <h2>Our Vision</h2>
        <p>
          To become the world’s most trusted firm by providing unparalleled
          support, education, and growth opportunities to traders of all levels.
        </p>
      </div>
      <div className="core">
        <h1 className="heading">Our core values</h1>
        <div className="cards">
          <Row className="justify-content-evenly justify-content-md-center g-5">
            {
              CardData?.length&&CardData?.map((item,index)=> <Col xs={12} sm={6} md={6} lg={4} key={`${index}-corecard`}>
              <Card className="rounded-4">
                <Card.Body>
                  <Card.Title>
                    <div className="d-flex gap-3">
                      <div sx={2}>
                        {item?.svg}
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 mt-3">
                    <h2 className="text-white">{item?.title}</h2>
                  </Card.Subtitle>
                  <Card.Text className="text-white">
                    {item?.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>)
            }
           
          </Row>
        </div>
      </div>
      <div className="creative">
        <div className="creative-title">
        <h1 className="heading">
        Team where Creative Minds Innovate
          </h1>
   
        </div>
        <Container>
        <Row className="justify-content-evenly justify-content-md-center g-5 m-0">
            {
              images?.map((item,index)=> <Col xs={12} sm={6} md={4} lg={3} key={`${index}-creativecard`}>
              <div style={{width:"100%"}}>
              <img src={item} alt="" width="100%" />
              </div>
            </Col>)
            }
           
          </Row>
     </Container>

      </div>
      <Container>
        <hr />
        <div className="d-flex flex-column align-items-center join-journey">
          <h1 className="heading">
          Join us on our journey
          </h1>
          <p>
          From humble beginnings to a leading global firm, FundingPips has grown by empowering over 750,000 traders worldwide. We've continually evolved, offering innovative tools educational resources, and unmatched opportunities to help traders succeed in the ever-changing financial markets.
          </p>
          <button className="btn btn-primary rounded-4">Get Started</button>
        </div>
        <hr />
      </Container>
    </div>
  );
};

export default AboutUs;

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./affiliate.css";
import { CalenderSvg, ChartSvg, TrophySvg, VolumeSvg } from "../svg";
const Affiliate = () => {
  const CardData = [
    {
      svg: <ChartSvg />,
      description: "Eam 5% commission when a person buys their first account"
    },
    {
      svg: <TrophySvg />,
      description: "Your referee receives a 5% discount on their first purchase"
    },
    {
      svg: <CalenderSvg />,
      description:
        "Track your earnings with ease through our dashboard on the app."
    },
    {
      svg: <VolumeSvg />,
      description: "Promote easily with any method(s) using your unique link."
    }
  ];
  const steps = [
    {
      number: "1",
      title: "Generate your affiliate link",
      description:
        "Purchase any challenge on our app and you will automatically be eligible for our unique link to start promoting on your favourite platforms."
    },
    {
      number: "2",
      title: "Promote FundingPips",
      description:
        "Promote FP online using any social media platform. A unique cookie will be set on the user's side so even if they buy later, you will be eligible for a commission."
    },
    {
      number: "3",
      title: "Monitor Results",
      description:
        "You can track all the purchases that have happened through your link by visiting the affiliate dashboard."
    },
    {
      number: "4",
      title: "Reward Time",
      description:
        "You can request for a reward on the rewards page when you are eligible for a reward."
    }
  ];
  return (
    <div className="affiliate">
      {" "}
      <Container>
        <div className="d-flex flex-column align-items-center join-journey">
          <h1 className="heading">Affiliate Program</h1>
          <p>
            Find talented traders from around the world to join us on our
            journey, and take advantage of the great benefits we provide you for
            each referral.
          </p>
          <button className="btn btn-primary rounded-4">Get Started</button>
        </div>
        <Row className="justify-content-evenly justify-content-md-center g-5 g-md-2 mt-5 p-0 m-0">
          {CardData?.length &&
            CardData?.map((item, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={`${index}-affiliate`}>
                <Card
                  className="rounded-4"
                  style={{ backgroundColor: "rgba(33, 48, 125, 0.3)" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <div className="d-flex gap-3">
                        <div sx={2}>{item?.svg}</div>
                      </div>
                    </Card.Title>
                    <Card.Text className="text-white">
                      {item?.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
        {/* <section class="design-section">
          <div class="timeline">
            <div class="timeline-empty"></div>

            <div class="timeline-middle">
              <div class="timeline-circle">
                <h6 className="text-center mt-2">1</h6>
              </div>
            </div>
            <div class="timeline-component timeline-content">
              <h3>Generate your affiliate link</h3>
              <p>
                Purchase any challenge on our app and you will automatically be
                eligible for a unique link to start promoting on your favourite
                platform.
              </p>
            </div>
            <div class="timeline-component timeline-content">
              <h3 className="text-end">Promote FundingPips</h3>
              <p className="text-end">
                Promote FP online using any social media platform, a unique
                cookie will be set on the users side so even if they buys later,
                you will be eligible for a commission
              </p>
            </div>
            <div class="timeline-middle">
              <div class="timeline-circle">
                <h6 className="text-center mt-2">2</h6>
              </div>
            </div>
            <div class="timeline-empty"></div>

            <div class="timeline-empty"></div>

            <div class="timeline-middle">
              <div class="timeline-circle">
                <h6 className="text-center mt-2">3</h6>
              </div>
            </div>
            <div class=" timeline-component timeline-content">
              <h3>Monitor Results</h3>
              <p>
                You can track all the purchases that have happened through your
                link by visiting the affiliate dashboard
              </p>
            </div>
            <div class="timeline-component timeline-content">
              <h3 className="text-end">Reward Time</h3>
              <p className="text-end">
                You can request for a reward on the rewards page when you are
                eligible for a reward
              </p>
            </div>
            <div class="timeline-middle">
              <div class="timeline-circle">
                <h6 className="text-center mt-2">4</h6>
              </div>
            </div>
            <div class="timeline-empty"></div>
          </div>
        </section> */}
        <h1 className="mt-5">How it works?</h1>
        <div class="wrapper">
          <div class="timeline">
            <dl class="timeline--entry">
              <h3 class="timeline--entry__title">
                Generate your affiliate link
              </h3>
              <dd class="timeline--entry__detail">
                Purchase any challenge on our app and you will automatically be
                eligible for a unique link to start promoting on your favourite
                platform.
              </dd>
            </dl>
            <dl class="timeline--entry">
              <h3 class="timeline--entry__title">Promote FundingPips</h3>
              <dd class="timeline--entry__detail">
                {" "}
                Promote FP online using any social media platform, a unique
                cookie will be set on the users side so even if they buys later,
                you will be eligible for a commission
              </dd>
            </dl>
            <dl class="timeline--entry">
              <h3 class="timeline--entry__title">Monitor Results</h3>
              <dd class="timeline--entry__detail">
                You can track all the purchases that have happened through your
                link by visiting the affiliate dashboard
              </dd>
            </dl>
            <dl class="timeline--entry">
              <h3 class="timeline--entry__title">Reward Time</h3>
              <dd class="timeline--entry__detail">
                You can request for a reward on the rewards page when you are
                eligible for a reward
              </dd>
            </dl>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Affiliate;

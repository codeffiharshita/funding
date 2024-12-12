import React, { useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import './terms.css'
const Terms = () => {
  const[select,setSelect]=useState("step1")
  const [selectedItem, setSelectedItem] = useState(0);

  const items = [
    "It's All About Discipline And Consistency.",
    "Trading Behaviour and Rules",
    "Trading Instruments",
    "Account Credentials",
    "Rewards",
    "Scaling Up",
    "Merging Accounts",
    "Refunds",
    "Inactivity",
    "IP Address",
    "Toxic Trading Flow",
  ];


  return <>
  <div className="terms mt-5">
    <Row className="justify-content-between align-items-center">
        <Col md={5} className="terms-head">
          <h1 className="heading">
          Terms of Use In A Fully Simulated Environment
          </h1>
        </Col>
        <Col md={7}>
          <div className="step mx-auto px-3 py-2 rounded-4">
           
                <Button
                  className={`${
                    select === "step1" ? "btn-primary" : "select-btn "
                  } py-2 px-4 text-white rounded-4`}
                  onClick={() => {
                    setSelect("step1");
                  }}
                >
                  1 Step
                </Button>
              
            
                <Button
                  className={`${
                    select === "step2" ? "btn-primary" : "select-btn "
                  } py-2 px-4  text-white rounded-4`}
                  onClick={() => {
                    setSelect("step2");
                  }}
                >
                  2 Step
                </Button>
           
              
                <Button
                  className={`${
                    select === "step3" ? "btn-primary" : "select-btn "
                  } py-2 px-4  text-white rounded-4`}
                  onClick={() => {
                    setSelect("step3");
                  }}
                >
                  3 Step
                </Button>
            
                <Button
                  className={`${
                    select === "FundigPips X" ? "btn-primary" : "select-btn "
                  } py-2 px-4  text-white rounded-4`}
                  onClick={() => {
                    setSelect("FundigPips X");
                  }}
                >
                  FundigPips X
                </Button>
              
            
                <Button
                  className={`${
                    select === "FundigPips Pluse" ? "btn-primary" : "select-btn "
                  } py-2 px-4  text-white rounded-4`}
                  onClick={() => {
                    setSelect("FundigPips Pluse");
                  }}
                >
                 FundigPips Pluse
                </Button>
            
            
            <div />
            <div />
          </div>
        </Col>
    </Row>
    <Container className="pt-4">
      <Row>
        <Col xs={12} md={4} className="mb-3">
          <ListGroup>
            {items.map((item, index) => (
              <ListGroup.Item
                key={index}
                action
                active={selectedItem === index}
                onClick={() => setSelectedItem(index)}
                className={`${selectedItem===index ? "active-li" : "bg-transparent"} text-white border-0 py-2 `}
                // style={{
                //   borderRadius: selectedItem == index ? "10px" : "0",
                //   backgroundColor: selectedItem == index ? "#000" : "transparent",
                // }}
              >
               
                {index + 1}. {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={12} md={8} className="d-flex flex-column list-detail">
          <h4>{items[selectedItem]}</h4>
          <p>{ "No need to rush, you don’t build a life in a day. There is plenty of time to pass the evaluation successfully, being dynamic is crucial."}</p>
        </Col>
      </Row>
    </Container>
    <div>

    </div>
  </div>
  </>;
};

export default Terms;

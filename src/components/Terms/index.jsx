import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import './terms.css'
const Terms = () => {
  const[select,setSelect]=useState("step1")
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
    <div>

    </div>
  </div>
  </>;
};

export default Terms;

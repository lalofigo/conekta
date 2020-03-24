import React from "react";
import {Card, CardBody, CardTitle, Row, Col, Label, Badge } from 'reactstrap';
import { FaCcAmex, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { IconContext } from "react-icons";


const PaymentMethod = props => {
 
   return (
    <Card className="card-main">
    <CardBody>
      <CardTitle>Payment Method</CardTitle>
      <Row>
            <Col lg="8">
              <Label  for="bank">{props.data.bank}</Label>
            </Col>
            <Col lg="4" className='text-center'>
              <Label sm={12} className='padding-left-5 padding-right-5 padding-top-0 padding-bottom-0'><IconContext.Provider value={{ color: "#334898", size:'20px', style:{marginLeft:'0px'} }}><FaCcVisa /></IconContext.Provider></Label>
              <Label sm={12} className='padding-left-5 padding-right-5 padding-top-0'>Credit</Label>
            </Col>
      </Row>  
      <Row className="bg-dark-blue font-white font-12 margin-right-10m margin-left-10m">
            <Col sm="12" className='text-center'>
              <Label></Label>
            </Col>
      </Row>    
      <Row className="bg-dark-blue font-white font-12 margin-right-10m margin-left-10m">
            <Col sm="12" className='text-center'>
              <Label className="">.... .... .... {props.data.last4}</Label>
            </Col>
      </Row> 
      <Row className="bg-dark-blue font-white font-12 margin-right-10m margin-left-10m">
            <Col sm="12" className='text-center'>
              <Label>{props.data.name}</Label>
            </Col>
      </Row>  
      <Row className="bg-dark-blue font-white font-12 margin-right-10m margin-left-10m">
            <Col sm="12" className='text-center'>
              <Label></Label>
            </Col>
      </Row>    
      <Row className="bg-dark-blue font-white margin-right-10m margin-left-10m">
            <Col sm="12">
              <Label for="expiration" className='padding-left-0 padding-right-5 margin-bottom-0'>Expiration date:</Label>
              <Label id="expiration" className='font-12 padding-left-0 padding-right-0 margin-bottom-0'>{props.data.exp_month}/{props.data.exp_year}</Label>
            </Col>
            <Col sm="12">
              <Label for="authorization"  className='padding-left-0 padding-right-5 margin-bottom-0'>Authorization code:</Label>
              <Label id="authorization"  className='font-12 padding-left-0 padding-right-0'>{props.data.auth_code}</Label>
            </Col>
      </Row>  
    </CardBody>
  </Card>
  );
};


export default PaymentMethod;
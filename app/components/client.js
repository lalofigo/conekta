import React from "react";
import {Card, CardBody, CardTitle, Row, Col, Label, Badge } from 'reactstrap';

import { MdPersonOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Client = props => {
   return (
    <Card className="card-main">
    <CardBody>
      <CardTitle>Client</CardTitle>
      <Row>
        <Col sm="1"><MdPersonOutline/></Col>
        <Col sm="10" className='padding-right-5 padding-left-5'>
          <Label sm={12} for="name" className="padding-right-5 padding-left-5 padding-top-0 padding-bottom-0 lbl-main">Name:</Label>
          <Label sm={12} id="name" className="padding-right-5 padding-left-5 padding-top-0 padding-bottom-15">{props.data.name}</Label>
        </Col>
      </Row>
      <Row>
        <Col sm="1"><AiOutlineMail/></Col>
        <Col sm="10" className='padding-right-5 padding-left-5'>
        <Label sm={12} for="email" className="padding-right-5 padding-left-5 padding-top-0 padding-bottom-0 lbl-main">Email:</Label>
        <Label sm={12} id="email" className="padding-right-5 padding-left-5 padding-top-0 padding-bottom-15">{props.data.email}</Label>
        </Col>
      </Row>
      <Row>
        <Col sm="1"><FiPhoneCall/></Col>
        <Col sm="10" className='padding-right-5 padding-left-5'>
          <Label sm={12} for="phone" className="padding-right-5 padding-left-5 padding-top-0 padding-bottom-0 lbl-main">Phone number:</Label>
          <Label sm={12} id="phone" className="padding-right-5 padding-left-5 padding-top-0 padding-bottom-15">{props.data.phone}</Label>
      </Col>
      </Row>
    </CardBody>
  </Card>
  );
};


export default Client;
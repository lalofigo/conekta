import React from "react";
import {Card, CardBody, CardTitle, Row, Col, Label, Badge } from 'reactstrap';
import NumberFormat from 'react-number-format';
import Moment from 'react-moment';
import { FiAlertCircle } from 'react-icons/fi';
import { IoMdLink } from "react-icons/io";

const PaymentStatus = props => {
  console.log(props.data)
   return (
    <Card className="card-main">
    <CardBody>
      <CardTitle>Payment Status</CardTitle>
      <Row>
            <Col lg="6">
              <Row><Col sm="12"><Label for="amount" className="label-amount lbl-main">Amount:</Label></Col></Row>
              <Row><Col sm="12"><Label id="amount"><NumberFormat value={props.data.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className='lbl-amount'>{value}</div>} /></Label></Col></Row>
            </Col>
            <Col lg="6">
              <Row>
                <Col lg="12" className="text-center">
                <Label for="createdAt" className='lbl-main'>Created At:</Label>
                <Label id="createdAt" className='margin-left-5'><Moment format="D MMM YYYY">{props.data.created}</Moment>,<Moment format="hh:mm a">{props.data.created}</Moment></Label>
                </Col>
                <Col lg="12" className="text-center light-gray">
                <Label for="paidAt" className='lbl-main'>Paid At:</Label>
                <Label id="paidAt" className='margin-left-5'>{props.data.paid_at == null ? 'Not yet paid' : props.data.paid_at}</Label>
                </Col>
              </Row>
            </Col>
      </Row>    
      <Row className='margin-top-20'>
        <Col sm="12"><Badge color="danger">{props.data.status}<FiAlertCircle className='fi-alert-circle'/></Badge><Label className='lbl-msg-failure'>{props.data.nested_charges[0].failure_message}</Label></Col>
      </Row>
      <Row className='margin-top-15'>
        <Col sm="6">
          <Row><Col sm="12"><Label for="orderId" className='lbl-main'>Order Id:</Label></Col></Row>
          <Row><Col sm="12"><Label id="orderId">{props.data.id}</Label></Col></Row>
        </Col>
        <Col sm="6" className='text-right'>
          <Row><Col sm="12"><Label for="createdAt" className='bold'>View Transfer <IoMdLink/></Label></Col></Row>
          <Row><Col sm="12"><Label id="createdAt" className='bold light-gray'>View Chargeback <IoMdLink/></Label></Col></Row>
        </Col>
      </Row>  
    </CardBody>
  </Card>
  );
};


export default PaymentStatus;
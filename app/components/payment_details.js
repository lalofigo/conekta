import React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PaymentStatus from './payment_status'
import Client from './client'
import PaymentMethod from './payment_method'
import PaymentAttemps from './payment_attemps'
import Breakdown from './breakdown'
import PaymentsDetailsData from '../data/payments_details.json'

const data = PaymentsDetailsData;
const dataPayment = data.data.payment;

class PaymentDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle (tab) {
    if(this.state.activeTab !== tab)  this.setState({ activeTab: tab });
  }

  render(){
    return (
      <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
          >
           Data
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
          >
            Breakdown
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col lg="6">
              <PaymentStatus data={dataPayment}/>
            </Col>
            <Col lg="3">
              <Client data={dataPayment.customer}/>
            </Col>
            <Col lg="3">
              <PaymentMethod data={dataPayment.nested_charges[0].payment_method}/>
            </Col>
          </Row>
          <Row>
            <Col lg="9">
              <PaymentAttemps/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col lg="12">
              <Breakdown/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
    );
  }
   
}
export default PaymentDetails


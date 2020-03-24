import React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PaymentStatus from './payment_status'
import Client from './client'
import PaymentMethod from './payment_method'
import TablePaymentAttemps from './table_payment_attemps'


class PaymentAttemps extends React.Component {

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
      <div className='margin-top-15'>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
          >
           Payment Attemps 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
          >
            Refunds
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
          >
            Notification
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12" className='table-payment-attemps'>
             <TablePaymentAttemps/>
            </Col>
          </Row>  
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>Refunds</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>Notification</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
    );
  }
   
}
export default PaymentAttemps


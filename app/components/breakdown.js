import React from "react";
import DataTable from 'react-data-table-component';

import { Row, Col } from 'reactstrap';
import { FaCcAmex, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import { FiEye } from "react-icons/fi";
import {
     Link
  } from "react-router-dom";
import PaymentsDetailsData from '../data/payments_details.json'

  /*const data = PaymentsDetailsData;
  const dataPayment = data.data.payment;*/
 const data = PaymentsDetailsData;
 const dataDetails = data.data.payment.line_items[0];
 const details = [{
   name: dataDetails.name,
   unit_price:  dataDetails.unit_price,
   quantity:  dataDetails.quantity,
   metadata:  dataDetails.metadata
 }]
           
 const customStyles = {
  headCells: {
      style: {
          fontSize: '12px',
          fontFamily: 'Raleway',
          color: '#000000'
      },
  },
  rows: {
      style: {
          fontSize: '12px',
          fontFamily: 'Raleway',
          color: '#000000',
          paddingTop:"5px",
          paddingBottom:"5px",
      }
  },
  header:{
    style:{
      display:"none"
    }
  }
}
const columns = [
  {name: 'SKU',
  },
  {name: 'Quantity',
    sortable: false,
cell: row => <span>{row.quantity}</span>
  },
  {name: 'Articles',
    sortable: false,
    cell: row => <span>{row.name}</span>,
  },
  {name: 'Taxes',
    sortable: false,
  },
  {name: 'Shipping',
  sortable: false,
  },
  {name: 'Discounts',
  sortable: false,
  },
  {name: 'Unit Price',
  sortable: false,
  cell: row => <NumberFormat value={row.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
  },
];
 
const Breakdown = props => {
  //console.log(Details.data.payment)
    return <div><DataTable
    columns={columns}
    data={details}
    customStyles={customStyles}
  />
  <Row className='lbl-breakdown'>
    <Col sm="8"></Col>
    <Col sm="2"><label for="subtotal">Subtotal</label></Col>
    <Col sm="2"><label id="subtotal">$93.74</label></Col>
  </Row>
  <Row className='lbl-breakdown'>
    <Col sm="8"></Col>
    <Col sm="2"><label for="fee">Fee</label></Col>
    <Col sm="2"><label id="fee">$6.26</label></Col>
  </Row>
  <Row className='lbl-breakdown-bolder'>
    <Col sm="8"></Col>
    <Col sm="2"><label for="total">Total</label></Col>
    <Col sm="2"><label id="Total">$100.0</label></Col>
  </Row>
  </div>;

      
};


export default Breakdown;
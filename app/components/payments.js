import React from "react";
import DataTable from 'react-data-table-component';
import PaymentsRecordsData from '../data/payments_records_data.json'
import { Badge } from 'reactstrap';
import { FaCcAmex, FaCcVisa, FaCcMastercard, FaBold } from 'react-icons/fa';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import { FiEye } from "react-icons/fi";
import {
     Link
  } from "react-router-dom";
  import { IconContext } from "react-icons";

const data = PaymentsRecordsData;
const dataPayments = data.data.payments;

const customStyles = {
    header: {
      style: {
        fontSize: '16px',
        fontFamily: 'Raleway',
      }
    },
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
    
}

const columns = [
  {
    name: '',
    sortable: false,
    cell: row =>  <Link to="/payment_details"><IconContext.Provider value={{ color: "#696969"}}><FiEye/></IconContext.Provider></Link>
  },
  {
    name: 'Date',
    //selector: 'created',
    sortable: true,
    cell: row => <span><Moment format="D MMM YYYY">{row.created}</Moment> <br/> <Moment format="hh:mm a">{row.created}</Moment></span>
  },
  {
    name: 'Payment status',
    //selector: 'status',
    sortable: true,
    cell: row => <div><div>{row.status == 'declined' ? <Badge color="danger">{row.status}</Badge> : (row.status == 'refunded' ? <Badge color="primary">{row.status}</Badge> : (row.status == 'no_charge' ? <Badge color="secondary">{row.status}</Badge> : (row.status == 'partially_refunded' ? <Badge color="warning">{row.status}</Badge> : <Badge color="success">{row.status}</Badge> ) )) } </div><div className="lbl-payment-status">{row.failure}</div></div>,
  },
  {
    name: 'Payment type',
    //selector: 'type',//brand
    sortable: true,
  cell : row => <span><span>{row.type}</span><span>{row.brand == 'visa' ? <IconContext.Provider value={{ color: "#334898", size:'20px', style:{marginLeft:'10px'} }}><FaCcVisa /></IconContext.Provider> :  (row.brand == 'american_express' ? <IconContext.Provider value={{ color: "#1a73d0", size:'20px', style:{marginLeft:'10px'} }}><FaCcAmex /></IconContext.Provider>: null) } </span></span>
  },
  {
    name: 'Customer',
    //selector: 'customer.name',
    sortable: true,
    cell: row => <div><div>{row.customer.name}</div><div className="lbl-payment-email">{row.customer.email}</div></div>,
  },
  {
    name: 'Amount',
    //selector: 'amount',
    sortable: true,
    cell: row => <NumberFormat value={row.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
  },
];
 
const Payments = props => {
  
    return <DataTable
    title="Payments"
    columns={columns}
    data={dataPayments}
    customStyles={customStyles}
  />;
      
};


export default Payments;
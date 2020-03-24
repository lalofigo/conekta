import React from "react";
import DataTable from 'react-data-table-component';

import { Badge } from 'reactstrap';
import { FaCcAmex, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import { FiEye } from "react-icons/fi";
import { FiAlertCircle } from 'react-icons/fi';
import { IconContext } from "react-icons";

import {
     Link
  } from "react-router-dom";
import PaymentsDetailsData from '../data/payments_details.json'

  /*const data = PaymentsDetailsData;
  const dataPayment = data.data.payment;*/
 const dataD = PaymentsDetailsData;
 const dataDetails = dataD.data.payment;
 const Details = [{created: dataDetails.created, 
                  status: dataDetails.status,
                  type: dataDetails.type,
                  brand: dataDetails.brand,
                  amount: dataDetails.amount
                }]

const customStyles = {
    headCells: {
        style: {
            fontSize: '9px',
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
  {name: 'Date',
    //selector: 'created',
    sortable: true,
    cell: row => <span><Moment format="D MMM YYYY">{row.created}</Moment> <br/> <Moment format="hh:mm a">{row.created}</Moment></span>
  },
  {name: 'Status',
    //selector: 'created',
    sortable: true,
    cell: row => <span>{row.status == 'declined' ? <Badge color="danger">{row.status}<FiAlertCircle className='fi-alert-circle'/></Badge> : null } </span>,
  },
  {name: 'Payment method',
    //selector: 'created',
    sortable: true,
    cell : row => <div><span>{row.type}</span><span>{row.brand == 'visa' ? <IconContext.Provider value={{ color: "#334898", size:'20px', style:{marginLeft:'10px'} }}><FaCcVisa /></IconContext.Provider> :  null } </span></div>
  },
  {name: 'Amount',
  //selector: 'created',
  sortable: true,
  cell: row => <NumberFormat value={row.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
},
];
 
const TablePaymentAttemps = props => {
  //console.log(Details.data.payment)
    return <DataTable
    columns={columns}
    data={Details}
    customStyles={customStyles}
  />;

      
};


export default TablePaymentAttemps;
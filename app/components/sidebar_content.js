import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
import MenuData from '../data/menu_data.json'
import { Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import { FaAngleDown, FaThLarge, FaExchangeAlt, FaMoneyBillAlt, FaCode, FaBeer } from 'react-icons/fa';
import * as FontAwesome from "react-icons/fa";

import { IoIosHeart } from "react-icons/io";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const styles = {
  sidebar: {
    width: 256,
    //height: "100%",
    textAlign:"center",
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];
  
  const renderSublinks = (sublinks,name) =>{
    const links = [];
    for (let ind = 0; ind < sublinks.length; ind++) {
      links.push(
        <NavItem>
          <NavLink key={sublinks[ind].id} href={sublinks[ind].url} >{sublinks[ind].name}</NavLink>
        </NavItem>
      );
    }
    return (
      <Collapse toggler={ `#${name}` } isOpen='true'>
      {links}
       </Collapse>
      
    );  
  }
 
  for (let ind = 0; ind < MenuData.menu.length; ind++) {
    links.push(
      <NavItem>
          <Link to="/" id={MenuData.menu[ind].name} key={ind}>
          {React.createElement(FontAwesome[MenuData.menu[ind].icon])} {MenuData.menu[ind].name}<FaAngleDown className="float-right"/>
          </Link>
          {(MenuData.menu[ind].sublinks !== undefined) ? renderSublinks(MenuData.menu[ind].sublinks, MenuData.menu[ind].name)  : null }
      </NavItem>
    );
  }

    
  return (
    <MaterialTitlePanel title="Your Logo" style={style}>
      <div style={styles.content}>
      
        <Nav vertical>
        {links}
        </Nav>
       
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
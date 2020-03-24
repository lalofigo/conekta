import React from 'react';
import Sidebar from "react-sidebar";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/index.css';
import MaterialTitlePanel from "./material_title_panel";
import SidebarContent from "./sidebar_content";
import { FaUserCircle } from 'react-icons/fa';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Transfers  from "./transfers";
import Chargebacks from "./chargebacks";
import Payments  from "./payments";
import PaymentDetails from "./payment_details"


const styles = {
    contentHeaderMenuLink: {
      textDecoration: "none",
      color: "white",
      padding: 8
    },
    content: {
      padding: "16px"
    }
  };
  
  const mql = window.matchMedia(`(min-width: 800px)`);
  
  class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        docked: mql.matches,
        open: false,
        dropdownOpen:false,
      };
  
      this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
      this.toggleOpen = this.toggleOpen.bind(this);
      this.onSetOpen = this.onSetOpen.bind(this);
      this.toogle = this.toogle.bind(this);
    }
  
    componentWillMount() {
      mql.addListener(this.mediaQueryChanged);
    }
  
    componentWillUnmount() {
      mql.removeListener(this.mediaQueryChanged);
    }
  
    onSetOpen(open) {
      this.setState({ open });
    }
  
    mediaQueryChanged() {
      this.setState({
        docked: mql.matches,
        open: false
      });
    }
  
    toggleOpen(ev) {
      this.setState({ open: !this.state.open });
  
      if (ev) {
        ev.preventDefault();
      }
    }
    toogle(ev){
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
        console.log("Entra")
        if (ev) {
            ev.preventDefault();
          }
    }

    

    render() {
      const sidebar = <SidebarContent />;
  
      const contentHeader = (
        <span>
          {!this.state.docked && (
            <a
              onClick={this.toggleOpen}
              href="#"
              style={styles.contentHeaderMenuLink}
            >
              =
            </a>
          )}
          
          
          <FaUserCircle />
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={ this.toogle} className="button-menu">
            <DropdownToggle caret>
            
                    <span class='float-left user-container'>
                        <span class='block text-left lbl-user-name'>User name</span>
                        <span class='block text-left user-name'>Robert Downey Jr</span>
                    </span>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Perfil</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Cerrar Sesion</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>

         

        </span>
      );
  
      const sidebarProps = {
        sidebar,
        docked: this.state.docked,
        open: this.state.open,
        onSetOpen: this.onSetOpen
      };


      return (
        <Router>
        <Sidebar {...sidebarProps}>
          <MaterialTitlePanel title={contentHeader} id="#material-title-panel">
            <div style={styles.content} id="#content">
            <Switch>
                <Route exact path="/">
                    <Payments />
                </Route>
                <Route path="/transfers">
                    <Transfers />
                </Route>
                <Route path="/chargebacks">
                    <Chargebacks />
                </Route>
                <Route path="/payment_details">
                    <PaymentDetails />
                </Route>
            </Switch>
            </div>
          </MaterialTitlePanel>
        </Sidebar>
        </Router>
      );
    }
  }
  
  export default App

  
 

 

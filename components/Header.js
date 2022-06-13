import React, {useState} from "react";
import { Container, Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import NucampLogo from "../app/assets/img/logo.png";

const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand className='ms-5' href="/">
            <img className='float-start' src={NucampLogo} alt="nucamp logo" />
            <h1 className='mt-1' >NuCamp</h1>
          </NavbarBrand>
          <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
          <Collapse isOpen={menuOpen} navbar> 
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink to='/' className="nav-link"><i className='fa fa-home fa-lg' /> Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/directory' className="nav-link"><i className='fa fa-list fa-lg' /> Directory</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/about' className="nav-link"><i className='fa fa-info fa-lg' /> About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/contact' className="nav-link"><i className='fa fa-address-card fa-lg' /> Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

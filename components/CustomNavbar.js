import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from 'next/link'
import Image from 'next/image'
import ahqLogo from '../public/AHQ.png'



const CustomNavbar = () => {
  return (
    <Navbar  sticky="top"  bg="light" expand="lg">
      <Container className='navBarCustom'>
        <Navbar.Brand href="#home"> <Image src={ahqLogo} alt='AHQ' width='34.57px' height='23.7px' /> Albion HQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/builds"> Builds </Nav.Link>
            <Nav.Link href="/crafting"> Crafting </Nav.Link>
            <NavDropdown className='dropdownOptions' title="Gathering" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link href='/mining'>Ore Miner</Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link href='/quarrier'>Quarrier</Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link href='/lumberjack'>Lumberjack</Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link href='/skinner'>Skinner</Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link href='/harvester'>Harvester</Link> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >
               <a style={{color: "#00A7FF"}} href='https://wiki.albiononline.com/wiki/Gathering'  target="_blank">Official Wiki</a> 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

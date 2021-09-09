import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CustomNavbar from './CustomNavbar.js'

const PageLayout = ({ children }) => {
  return (
    <div>
    <CustomNavbar />
     { children }
    </div>
  );
};

export default PageLayout;

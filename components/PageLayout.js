import CustomNavbar from './CustomNavbar.js'
import Footer from './Footer.js'

const PageLayout = ({ children }) => {
  return (
    <div>
    <CustomNavbar />
     { children }
     <Footer />
    </div>
  );
};

export default PageLayout;

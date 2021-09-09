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

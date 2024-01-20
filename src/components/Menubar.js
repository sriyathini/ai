import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation,useNavigate } from 'react-router-dom';
import { IoIosFlower } from "react-icons/io";
function Menubar() {
  const location = useLocation();

  const navigate = useNavigate();
  const handleButtonClick = () =>{
    navigate('/contact');
  };

  return (
   
    <div>
      <Navbar className="navbar" fixed='top' expand="lg" data-bs-theme="dark">
        <Navbar.Brand href="/">
         <IoIosFlower/>spark
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-5' />
        {/* Move the button inside Navbar.Collapse and use Bootstrap classes for positioning */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}>Product</Nav.Link>
            <Nav.Link href="/examples" className={location.pathname === '/about' ? 'active' : ''}>Examples</Nav.Link>
            <Nav.Link href="/pricing" className={location.pathname === '/gallery' ? 'active' : ''}>Pricing</Nav.Link>
            <Nav.Link href="/abotus" className={location.pathname === '/class' ? 'active' : ''}>Aboutus</Nav.Link>
            <button id='Button' className="me-3" onClick={handleButtonClick}>Download</button>
          </Nav>
         
        </Navbar.Collapse>
       

      </Navbar>
    </div>
  );
}

export default Menubar;

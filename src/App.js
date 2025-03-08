import './App.css';
import avocadoLogo from './utils/images/avocado.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='app' style={{ backgroundColor: '#bedab1' }}>
      <Navbar expand='lg' className='fixed-top shadow' style={{ backgroundColor: '#bedab1' }}>
        <Container>
          <Navbar.Brand>
            <span 
              className='navbar-brand text-success d-flex align-items-center cursor-pointer'
              onClick={() => scrollToSection('home')}
            >
              <img src={avocadoLogo} alt="Avocado Logo" height="40" className="logo" />
              <span className='ms-3 lh-1 fw-semibold'>
                Avocado
                <br></br>
                Breakfast & Brunch
              </span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='text-center' id='basic-navbar-nav'>
            <Nav className='justify-content-center w-100'>
              <span 
                className='nav-link text-uppercase text-success text-center fw-semibold cursor-pointer'
                onClick={() => scrollToSection('menu')}
              >
                Meni
              </span>
              <span 
                className='nav-link text-uppercase text-success text-center fw-semibold cursor-pointer'
                onClick={() => scrollToSection('about')}
              >
                O nama
              </span>
              <span 
                className='nav-link text-uppercase text-success text-center fw-semibold cursor-pointer'
                onClick={() => scrollToSection('contact')}
              >
                Kontakt
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Home />
    </div>
  );
}

export default App;
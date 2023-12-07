import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Welcomepage from './components/Welcomepage';
import Contact from './components/Contact';
import ScrollToTopButton from './components/scrollBtn';
import Products from './components/Products';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

function App() {
  return (
    <div >
      <Header />
      {/* <Container className="d-flex justify-content-end">
        <Row>
          <Col xs="auto">
            <p className="mr-3">Showing 1-10 of 100 products Sort by:</p>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#fff", color: "#000", border: "none" }}>
                Price high to low
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Price low to high</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Size</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container> */}




      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;

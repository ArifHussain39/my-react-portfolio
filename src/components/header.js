import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavScrollExample() {
    return (
        <Navbar expand="lg" className="navbar-dark bg-dark" style={{ padding: '20px' }}>
            <Container fluid>
                <Navbar.Brand href="#"><Link style={{ textDecoration: 'none', color: 'white', fontSize: '3rem', marginLeft: '30px' }} to="/"><i className="bi bi-code-slash"></i></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll={false}
                    >
                        <Nav.Link href="#action2" style={{ marginTop: '15px', marginLeft: '10px' }} ><Link style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem' }} to="/projects">Projects</Link></Nav.Link>
                        <Nav.Link href="#action2"><Link style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem' }} to="/contact">
                            <button
                                className="btn"
                                style={{
                                    borderRadius: '50px',
                                    color: '#6E07F3',
                                    border: '3px solid #6E07F3',
                                    padding: '10px 20px',
                                    fontSize: '1.5rem',
        
                                }}
                            >
                                Contact Me
                            </button>
                        </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}

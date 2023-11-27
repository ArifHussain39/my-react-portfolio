import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavScrollExample() {
    return (
        <Navbar expand="lg" className=" navbar-light bg-dark" style={{ padding: '20px' }}>
            <Container fluid>
                <Navbar.Brand href="#"><Link style={{ textDecoration: 'none', color: 'white' }} to="/" ><i className="bi bi-code-slash"></i></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action2"> <Link style={{ textDecoration: 'none', color: 'white' }} to="/projects" >Projects</Link></Nav.Link>
                        <Nav.Link href="#action2"><Link style={{ textDecoration: 'none', color: 'white' }} to="/about" >About</Link></Nav.Link>
                        <Nav.Link href="#action2"><Link style={{ textDecoration: 'none', color: 'white' }} to="/resume" >Resume</Link></Nav.Link>
                        <Nav.Link href="#action2"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" >Contact</Link></Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

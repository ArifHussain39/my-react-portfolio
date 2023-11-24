import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{padding:'20px'}}>
            <Container fluid>
                <Navbar.Brand href="#"><Link style={{ textDecoration: 'none', color: 'black' }} to="/" ><i class="bi bi-code-slash"></i></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action2"> <Link style={{ textDecoration: 'none', color: 'black' }} to="/projects" >Projects</Link></Nav.Link>
                        <NavDropdown style={{ color: 'black' }} title="Reviews " id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3"><Link style={{ textDecoration: 'none', color: 'black' }} to="/buyer-review" >Buyer Reviews</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action5"><Link style={{ textDecoration: 'none', color: 'black' }} to="/seller-review" >Seller Reviews</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2"><Link style={{ textDecoration: 'none', color: 'black' }} to="/contact" >Contact</Link></Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

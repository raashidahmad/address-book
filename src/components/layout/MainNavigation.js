import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

function MainNavigation() {
    return (
        <Navbar bg="primary" variant="light" expand="lg">
            <Navbar.Brand><Link to="/">My Address Book</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    <Link to="/new-address">New Address</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default MainNavigation;
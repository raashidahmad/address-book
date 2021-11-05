import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';

function MainNavigation() {
    const navigate = useNavigate();
    const logout = function() {
        localStorage.clear();
        navigate('/login');
    }
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

            <span className="float-right">
                <Navbar.Collapse>
                    <button className="btn btn-default btn-sm" onClick={logout}>Logout</button>
                </Navbar.Collapse>
            </span>
            
        </Navbar>
    );
}
export default MainNavigation;
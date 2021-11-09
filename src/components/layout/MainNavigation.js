import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useAuthDispatch, useAuthState } from '../../contexts/contexts';
import { logout } from '../../contexts/actions';

function MainNavigation() {
    const dispatch = useAuthDispatch();

    const navigate = useNavigate();
    const logoutUser = function () {
        logout(dispatch);
        localStorage.clear();
        navigate('/login');
    }

    const userData = useAuthState();

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

            {userData && userData.token ?
                <span className="float-right">
                    <Navbar.Collapse>
                        <button className="btn btn-default btn-sm" onClick={logoutUser}>Logout</button>
                    </Navbar.Collapse>
                </span>
                : null}

        </Navbar>
    );
}
export default MainNavigation;
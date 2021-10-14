import React from 'react';
import logo from '../../images/logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 sticky-top ">
                <div className="container">
                    <a className="navbar-brand" href="#/">

                        <img src={logo} alt=""  class="d-inline-block img-fluid align-text-top w-50"/>

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#service">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#exparts">Experts</Nav.Link>

                            {user?.email ? <Nav.Link onClick={logOut} as={HashLink} to="/login">LogOut</Nav.Link> :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                {user?.displayName}
                            </Navbar.Text>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
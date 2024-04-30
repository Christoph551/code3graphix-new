import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const pages = ['Home', 'Products', 'Custom Orders', 'Cart'];

function ResponsiveAppBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [showModal, setShowModal] = useState(false);


    const handleLogout = async () => {
        // Perform logout logic here
        setIsLoggedIn(false);

        const response = await fetch('http://localhost:3001/user/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            setShowModal(true);
        } else {
            alert('Log out unsuccessful. Please try again.');
        }
    };

    useEffect(() => {
        // Check if the user is already authenticated
        const checkAuthentication = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/user', {
                    method: 'GET',
                    credentials: 'include' // Include credentials for session cookie
                });
                if (response.ok) {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
            }
        };

        checkAuthentication();
    }, []);

    function Navigation() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" id="navBar">
                    <Container className='navContainer'>
                        <Navbar className="companyLogo" as={Link} to="/">Code 3 Graphix</Navbar>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className='navbarLinks' id="responsive-navbar-nav">
                            <Nav>
                                {/* Pages navigation */}
                                {pages.map((page, index) => (
                                    <Nav.Link key={index} as={Link} to={page.toLowerCase().replace(/\s+/g, '')}>
                                        {page}
                                    </Nav.Link>
                                ))}
                                {/* Conditional rendering for logout option */}
                                {isLoggedIn ? (
                                    <Nav.Link as={Link} to="/" onClick={handleLogout}>
                                        Logout
                                    </Nav.Link>
                                ) : (
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Logout Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You have successfully logged out.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }

    return <Navigation />;
}

export default ResponsiveAppBar;

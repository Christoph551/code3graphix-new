import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

// Define pages array without duplicates
const pages = ['Home', 'Products', 'Custom Orders', 'Cart'];

function ResponsiveAppBar() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false); 

    const handleLogout = async () => {
        // Perform logout logic here
        setIsLoggedIn(false);

        const response = await fetch('http://localhost:3001/api/user/logout', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Log out unsuccessful. Please try again.');
        }
    };

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
            </div>
        );
    }

    return <Navigation />;
}

export default ResponsiveAppBar;

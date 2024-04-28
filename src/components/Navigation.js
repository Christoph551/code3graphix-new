import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Products', 'Custom Orders', 'Cart'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
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
                                {pages.map((page, index) => (
                                    <Nav.Link key={index} as={Link} to={page.toLowerCase().replace(/\s+/g, '')}>
                                        {page}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                        <Link className="loginBtn" to="/login" >
                            Login
                        </Link>
                    </Container>
                </Navbar>
            </div>
        );
    }

    return <Navigation />;
}

export default ResponsiveAppBar;
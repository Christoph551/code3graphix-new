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
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container className='navContainer'>
                    <Navbar.Brand as={Link} to="/">Code 3 Graphix</Navbar.Brand>
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
                </Container>
            </Navbar>
        );
    }

    return <Navigation />;
}

export default ResponsiveAppBar;
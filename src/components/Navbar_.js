import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button href="/" variant="contained">
                            <Link to="/" style={{ color: 'white' }}>Main</Link>
                        </Button>
                        <Button href="/" variant="contained">
                            <Link to="/Blog" style={{ color: 'white' }}>Blogs</Link>
                        </Button>
                        <Button href="/" variant="contained">
                            <Link to="/Shop" style={{ color: 'white' }}>Shop</Link>
                        </Button>
                        <Button href="/" variant="contained">
                            <Link to="/Fintech" style={{ color: 'white' }}>Fintech</Link>
                        </Button>
                        <Button href="/" variant="contained">
                            <Link to="/Mainshop" style={{ color: 'white' }}>Mainshop</Link>
                        </Button>

                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
      /*  <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Blog">Blogs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>*/
    );
}

export default Navbar;
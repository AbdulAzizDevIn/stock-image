
import { AppBar, Toolbar, Box, IconButton, Typography, Button } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Outlet } from "react-router-dom";

import { useState } from "react";

function Navbar() {

    const [anchorElNav, setAnchorElNav] = useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = ["Login"];

    return (
        <>
            <AppBar
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)", 
                    backdropFilter: "blur(5px)",
                    display: "flex",
                    alignItems: "flex-end",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: 1,
                    width: "auto",
                    height: "67.69px", 
                    top: "39.19px", 
                    left: "32.06px", 
                    right: "30px",
                    borderRadius: " 8.91px", 
                }}
                position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                marginRight: 10,
                                fontSize: 29
                            }}
                        >
                            Homepage
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu

                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem>
                                    <Typography style={{ display: "flex", justifyContent: "space-around" }} textAlign="center" >Login</Typography>
                                </MenuItem>
                                <MenuItem >
                                    <Typography style={{ display: "flex", justifyContent: "space-around" }} textAlign="center" >Create Account</Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Homepage
                        </Typography>
                        <Typography className="big-search">

                        </Typography>

                        <Box style={{ marginRight: "50px", justifyContent: "flex-end" }} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <Button sx={{ my: 2, color: 'white', display: 'block', marginRight:"15px" }}>Login</Button>
                            <Button
                                sx={{
                                    color: 'white',
                                    my: 2,
                                    background: "transparent",
                                    width: "162.98px", // Apply the width style
                                    height: "34.73px", // Apply the height style
                                    borderRadius: "8.91px", // Apply the border-radius style
                                    border: "2.67px solid", // Apply the border style
                                }}
                            >
                                Create Account
                            </Button>
                        </Box>


                    </Toolbar>

                </Container>
            </AppBar>
            <Outlet />
        </>
    );
}
export default Navbar;
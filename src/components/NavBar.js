
import { AppBar, Toolbar, Box, IconButton, Typography, Button } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HistoryIcon from '@mui/icons-material/History';


import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



import { auth, provider } from "../firebaseAuth"
import { signInWithPopup, signOut } from "firebase/auth"

function Navbar() {

    const [anchorElNav, setAnchorElNav] = useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = ["Login"];
    const navigate = useNavigate();



    const [user, setUser] = useState({
        email: "",
        name: "",
        userImg: ""
    });


    const handelLogin = () => {
        signInWithPopup(auth, provider).then((data) => {
            localStorage.setItem("userEmail", data.user.email);
            localStorage.setItem("userName", data.user.displayName);
            localStorage.setItem("userImg", data.user.photoURL);
            localStorage.setItem("user", true);
            window.location.reload();
        })
            .catch((err) => {
                console.log(err);
            })

    }

    const handelLogout = () => {
        signOut(auth)
            .then(() => {
                localStorage.setItem("user", false);
                localStorage.removeItem("userEmail");
                localStorage.removeItem("userName");
                localStorage.removeItem("userImg");
                window.location.reload();
            })
    }
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser === "true") {
            const storedEmail = localStorage.getItem("userEmail");
            const storedName = localStorage.getItem("userName");
            const storedUserImg = localStorage.getItem("userImg");
            setUser({
                email: storedEmail,
                name: storedName,
                userImg: storedUserImg
            });
        }
    }, []);
    let userAuth = localStorage.getItem("user") === "true";
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
                                <MenuItem onClick={() => navigate("/download-history")}>
                                    <Typography style={{ display: "flex", justifyContent: "space-around" }} textAlign="center">Download History</Typography>
                                </MenuItem>
                                {userAuth ? (
                                    <>
                                        <MenuItem onClick={handelLogout}>
                                            <Typography style={{ display: "flex", justifyContent: "space-around" }} textAlign="center">Logout</Typography>
                                        </MenuItem>
                                    </>
                                ) : (

                                    <>
                                        <MenuItem onClick={handelLogin}>
                                            <Typography style={{ display: "flex", justifyContent: "space-around" }} textAlign="center">Create Account</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handelLogin}>
                                            <Typography style={{ display: "flex", justifyContent: "space-around" }} textAlign="center">Login</Typography>
                                        </MenuItem>
                                    </>
                                )}




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
                        <Typography className="avatar" style={{
                            display: "none"
                        }}>
                            {
                                userAuth && (
                                    <>
                                    <Avatar alt="emy Sharp" src={user.userImg} />
                                    <Typography style={{
                                        marginLeft:"10px"
                                    }}>
                                    {user.name}
                                    </Typography> 
                                    </>
                                )
                            }
                        </Typography>

                        <Box style={{ marginRight: "50px", justifyContent: "flex-end", alignItems: "center" }} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                        >
                            <Button
                                onClick={() => navigate("/download-history")}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: "15px",
                                    border: "0.5px solid",
                                }}
                            >
                                Download History <HistoryIcon sx={{ textAlign: "center" }} />
                            </Button>
                            {userAuth === true ? (
                                <>
                                    <Avatar alt="emy Sharp" src={user.userImg} />
                                    <Typography className="user-name" style={{
                                        paddingLeft: "10px",
                                        fontWeight: "bold",
                                        paddingRight: "10px"
                                    }}>
                                        {user.name}
                                    </Typography>
                                    <Button onClick={handelLogout}
                                        sx={{
                                            color: 'red',
                                            my: 2,
                                            background: "transparent",
                                            width: "162.98px",
                                            height: "34.73px",
                                            borderRadius: "8.91px",
                                            border: "2.67px solid",
                                        }}
                                    >Logout</Button>
                                </>

                            ) : (
                                <>

                                    <Button
                                        onClick={handelLogin}
                                        sx={{ my: 2, color: 'white', display: 'block', marginRight: "15px" }}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        onClick={handelLogin}
                                        sx={{
                                            color: 'white',
                                            my: 2,
                                            background: "transparent",
                                            width: "162.98px",
                                            height: "34.73px",
                                            borderRadius: "8.91px",
                                            border: "2.67px solid",
                                        }}
                                    >
                                        Create Account
                                    </Button>
                                </>
                            )}
                        </Box>



                    </Toolbar >

                </Container >
            </AppBar >
            <Outlet />
        </>
    );
}
export default Navbar;
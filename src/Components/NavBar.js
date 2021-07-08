import React from 'react';
import '../ComponentsCss/NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="navbar">
            <nav>
                <img src="logo.png" alt="logo" />
                <form action="">
                    <input type="search" name="" id="" placeholder="Search for products, brands and more" />
                    <button type="submit"><SearchIcon /></button>
                </form>
                <Link to="/signin"><span>
                    <Button variant="contained" color="secondary" href="#">Signin</Button></span></Link>
                <span className="more">
                    <Button color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>More</Button>
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </span>
                <span className="cart"><ShoppingCartIcon color="Secondary" style={{ fontSize: 30 }} />
                    <p>0</p>
                </span>
            </nav>
            <nav className="small">
                <form>
                    <input type="search" name="search" id="search"
                        placeholder="Search for products, brands and more" />
                    <button type="submit"><SearchIcon /></button>
                </form>
            </nav>
        </div>

    )
}

export default NavBar;

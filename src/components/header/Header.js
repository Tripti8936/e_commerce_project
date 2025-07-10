import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Container, Button } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useStyles } from './Header.style';
import { Link } from "react-router-dom";
import imgSrc from '../../assests/WhatsApp Image 2025-02-01 at 7.11.25 PM.png';

const pages = ['Home', 'About Us', 'Offerings','Our Customers', 'Contact'];

const Header = () => {
    const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar} disableGutters>
          <Box >

          <Link to='/'>
          <img src={imgSrc} alt="logo" height={100} width={200}/>

          </Link>
          </Box>
          {/* <Typography variant="h6" className={classes.logo}>
            INFOBELL
          </Typography> */}
          <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
            {/* {pages.map((page) => (
              <Link to='/home'>
              <Typography>
                {page}
              </Typography>
                </Link>
            ))} */}
            <Link className={classes.menu} to='/'><Typography className={classes.menuItem}>Home</Typography></Link>
            <Link className={classes.menu} to='/about'><Typography className={classes.menuItem}>About Us</Typography></Link>
            <Link className={classes.menu} to='/offerings'><Typography className={classes.menuItem}>Offerings</Typography></Link>
            <Link className={classes.menu} to='/customers'><Typography className={classes.menuItem}>Our Customers</Typography></Link>
            <Link className={classes.menu} to='/contact'><Typography className={classes.menuItem}>Contact</Typography></Link>

          </Box>

          {/* <Box>
          <IconButton color="inherit" className={classes.drawerIcon} onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          </Box> */}
        </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <div className={classes.drawer}>
          <List>
            <ListItem button onClick={() => alert("Option 1 clicked")} className={classes.listItem}>
              <ListItemText primary="Option 1" />
            </ListItem>
            <ListItem button onClick={() => alert("Option 2 clicked")} className={classes.listItem}>
              <ListItemText primary="Option 2" />
            </ListItem>
            <ListItem button onClick={() => alert("Option 3 clicked")} className={classes.listItem}>
              <ListItemText primary="Option 3" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );

}

export default Header

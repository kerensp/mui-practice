import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawerResponsive from "./NavListDrawerResponsive";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";


export default function NavbarDrawerResponsive({navLinks}) {

  const [open, setOpen] = useState(false)

  return (
    <> 
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            color="inherit" 
            size="large" 
            onClick={() => setOpen(true)} 
            sx={{display: {xs: "flex", sm: "none"}}} 
            edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>
              News
          </Typography>
          <Box sx={{display: {xs: "none", sm: "flex"}}}>
            {navLinks.map(item => (
              <Button color="inherit" key={item.title} component={NavLink} to={item.path}>
                {item.title}
              </Button>
              ))
            }
          </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer 
        open={open} 
        anchor="left" 
        onClose={() => setOpen(false)}
        sx={{display: {xs: "flex", sm: "none"}}}>
        <NavListDrawerResponsive navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
}
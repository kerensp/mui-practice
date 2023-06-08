import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
  
  
  export default function NavListDrawer ({navLinks, setOpen}) {
    return (
      <Box sx={{ width: 250}}>
        <nav>
          <List>
            {
              navLinks.map(item => (
              <ListItem disablePadding key={item.title}>
                <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
              ))
            }
          </List>
        </nav>
      </Box>    
    );
  }
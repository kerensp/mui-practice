import { Container } from "@mui/material";
import NavbarDrawerResponsive from "./components/navbar/NavbarDrawerResponsive";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HowToRegIcon from "@mui/icons-material/HowToReg";


const navLinks = [
  { title: "Home", path: "/", icon: <InboxIcon /> },
  { title: "Login", path: "/login", icon: <DraftsIcon /> },
  { title: "Register", path: "/register", icon: <HowToRegIcon />},
];


export default function () {
  return ( 
    <>
      <NavbarDrawerResponsive navLinks={navLinks}/>
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
} 
import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

// Components
import Search from "./Search";
import LeftDrawer from "./LeftDrawer";

const Navbar = styled(AppBar)`
  background-color: white;
  display: flex;
  height: 67px;
`;

const Heading = styled(Typography)`
  margin-left: 2%;
  font-weight: 500;
  font-size: 28px;
  color: black;
`;

const ArrowBack = styled(ArrowBackIcon)`
  font-size: 28px;
  
`;

const Header = ({ title, showBackButton }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (title === "Unscheduled Outage") {
      navigate("/unscheduled-outage");
    } else {
      navigate("/scheduled-outage");
    }
    showBackButton = false;
  };

  return (
    <Navbar>
      <Toolbar>
        {showBackButton ? (
          <IconButton  onClick={handleBack}>
            <ArrowBack color="#000000"/>
          </IconButton>
        ) : (
          <LeftDrawer />
        )}
        <Heading>{title}</Heading>
        <Box sx={{ marginLeft: "auto" }}>
          <Search />
        </Box>
      </Toolbar>
    </Navbar>
  );
};

export default Header;

// LeftDrawer.js
import React, { useState } from "react";
import { Drawer, IconButton, List, styled, Button } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../../assets/css/Drawer.css";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const LeftDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const Menu = styled(MenuIcon)`
    font-size: 40px;
    color: #000000;
  `;

  const Wrapper = styled(List)`
    width: 300px;
    padding: 0;
  `;

  const Bullet = styled(CircleIcon)`
    font-size: 13px;
  `;

  const ListItems = styled("li")`
    display: flex;
    width: 100%;
  `;

  function handleClose() {
    setIsDrawerOpen(false);
  }

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <Menu />
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Wrapper>
          <ul className="list">
            <li className="item-1">
              <Link
                style={{
                  flexDirection: "row",
                  display: "flex",
                  gap: 6,
                  textDecoration: "none",
                  color: "#000",
                }}
                to="/"
              >
                <HomeIcon />
                <h3 style={{ fontWeight: 500, marginTop: "6px" }}>Home</h3>
              </Link>
              <div>
                <h3
                  style={{
                    fontWeight: 500,
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={handleClose}
                >
                  <Button
                    startIcon={<ArrowBackIcon />}
                    size="small"
                    color="error"
                  >
                    close
                  </Button>
                </h3>
              </div>
            </li>
            <Button size="small" fullWidth href="#">
              <ListItems className="items">
              
                <p>Manage Feeders</p>
              </ListItems>
            </Button>
            <Button size="small" fullWidth>
              <ListItems className="items">
               
                <p>Pump Energy</p>
              </ListItems>
            </Button>
            <Button size="small" fullWidth href="/scheduled-outage">
              <ListItems className="items">
                
                <p>Scheduled Outage</p>
              </ListItems>
            </Button>
            <Button size="small" fullWidth href="#">
              <ListItems className="items">
               
                <p>Unscheduled Outage</p>
              </ListItems>
            </Button>
         
           
          </ul>
        </Wrapper>
      </Drawer>
    </div>
  );
};

export default LeftDrawer;

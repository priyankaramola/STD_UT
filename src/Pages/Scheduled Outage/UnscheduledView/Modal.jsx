import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Modal = ({ open, onClose }) => {
  return (
    <div>
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        style={{ position: "fixed", top: 50, left: 50 }}
        PaperProps={{
          style: {
            height: "auto",
            width: 200,
            position: "fixed",
            top: 100,
          },
        }}
      >
        <List>
          <ListItem button>
            <div>Item 1</div>
          </ListItem>
          <ListItem button>
            <div>Item 2</div>
          </ListItem>
          <ListItem button>
            <div>Item 3</div>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Modal;

import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Dashboard = () => (
  <div className="w-full">
    <AppBar position="static">
      <Toolbar>
        <IconButton
          aria-label="menu"
          color="inherit"
          edge="start"
          size="large"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
          H & O
        </Typography>
        <Button color="inherit">Admin</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Dashboard;

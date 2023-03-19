import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "../ass/image/logo.png";

import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const data = useContext(DataContext);

  const { pathname } = useLocation();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar style={{ justifyContent: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={{ width: 50, height: 50 }}
            />
            <Typography
              style={{ textAlign: "center", justifyContent: "center" }}
              align="center"
              variant="h4"
              noWrap
              component="h1"
            >
              Noon
            </Typography>
          </Stack>
        </Link>
      </Toolbar>
      <Divider />

      <List>
        {data.map((item) => {
          return (
            <ListItem
              key={item.id}
              disablePadding
              button
              component={Link}
              to={item.path}
              selected={item.path === pathname}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="icon"
                    src={item.image}
                    sx={{ width: 36, height: 36, backgroundColor: "#fff" }}
                  />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}

        <Divider />

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", gap: "10px", padding: "8px" }}
        >
          <Link to="https://www.youtube.com/@noonayn">
            <Avatar
              alt="YouTube"
              sx={{ width: 24, height: 24, backgroundColor: "transparent" }}
            >
              {" "}
              <YouTubeIcon
                sx={{ color: "#757575", "&:hover": { color: "#FF0000" } }}
              />{" "}
            </Avatar>
          </Link>
          <Link to="https://twitter.com/0xnooon">
            <Avatar
              alt="Twitter"
              sx={{ width: 24, height: 24, backgroundColor: "transparent" }}
            >
              {" "}
              <TwitterIcon
                sx={{ color: "#757575", "&:hover": { color: "#00acee" } }}
              />{" "}
            </Avatar>
          </Link>
        </Stack>

        <Typography
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "400",
          }}
          align="center"
          variant="h6"
          noWrap
          component="h1"
        >
          © 2023 Noon
        </Typography>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "rgb(0 0 0 / 80%)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>


        <div className="nav_link">
          <Link to="/">Home</Link>
          <span aria-hidden="true" className="short">/</span>
          <Link to="https://www.noon.wiki/blog" target="_blank" rel="noopener noreferrer">Blog</Link>
          <span aria-hidden="true" className="short">/</span>
          <Link to="/about">About</Link>
        </div>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default React.memo(ResponsiveDrawer);

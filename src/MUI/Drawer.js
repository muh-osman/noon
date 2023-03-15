import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo from "../ass/image/logo.png"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

import Arigap from "../ass/image/AirGap.png"
import AlphaWallet from "../ass/image/alphawallet.png"
import ambire from "../ass/image/ambire.png"
import argent from "../ass/image/argent.png"
import bitcoin from "../ass/image/bitcoin.png"
import brave from "../ass/image/brave.png"
import CoinWallet from "../ass/image/coin.png"
import coinomi from "../ass/image/coinomi.webp"
import electrum from "../ass/image/electrum.webp"
import enkrypt from "../ass/image/enkrypt.jpg"
import frame from "../ass/image/frame.png"
import safe from "../ass/image/safe.png"
import loopring from "../ass/image/loopring.png"
import mewwallet from "../ass/image/mewwallet.png"
import metamask from "../ass/image/metamask.png"
import mycrypto from "../ass/image/mycrypto.png"
import myetherwallet from "../ass/image/myetherwallet.png"
import pillar from "../ass/image/pillar.png"
import rabby from "../ass/image/rabby.png"
import railway from "../ass/image/railway.png"
import rainbow from "../ass/image/rainbow.png"
import samouraiwallet from "../ass/image/samouraiwallet.png"
import sequence from "../ass/image/sequence.svg"
import sparrowwallet from "../ass/image/sparrowwallet.png"
import status from "../ass/image/status.webp"
import taho from "../ass/image/taho.png"
import trustwallet from "../ass/image/trustwallet.webp"
import unstoppable from "../ass/image/unstoppable.png"
import wasabiwallet from "../ass/image/wasabiwallet.jpg"
import web3auth from "../ass/image/web3auth.png"





const drawerWidth = 240;

function ResponsiveDrawer(props) {

  const { pathname } = useLocation();

  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  };

  const drawer = (
    <div>

      <Toolbar style={{ justifyContent: "center"}}>
        <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>

          <Avatar alt="Remy Sharp" src={logo} sx={{ width: 50, height: 50 }}/>
          <Typography style={{ textAlign: 'center', justifyContent: "center", }} align="center" variant="h4" noWrap component="h1">
            Noon
          </Typography>
        </Stack>
      </Toolbar>
        <Divider />

      <List>
        {[
          {
            text: "AirGap",
            icon: Arigap,
            path: "/airgap"
        },
          {
            text: "AlphaWallet",
            icon: AlphaWallet,
            path: "/alphawallet"
        },
          {
            text: "Ambire",
            icon: ambire,
            path: "/ambire"
        },
          {
            text: "argent",
            icon: argent,
            path: "/argent"
        },
          {
            text: "bitcoin",
            icon: bitcoin,
            path: "/bitcoin"
        },
          {
            text: "Brave",
            icon: brave,
            path: "/brave"
        },
          {
            text: "Coin Wallet",
            icon: CoinWallet,
            path: "/coinwallet"
        },
          {
            text: "coinomi",
            icon: coinomi,
            path: "/coinomi"
        },
          {
            text: "Electrum",
            icon: electrum,
            path: "/electrum"
        },
          {
            text: "Enkrypt",
            icon: enkrypt,
            path: "/enkrypt"
        },
          {
            text: "Frame",
            icon: frame,
            path: "/frame"
        },
          {
            text: "Safe",
            icon: safe,
            path: "/safe"
        },
          {
            text: "Loopring",
            icon: loopring,
            path: "/loopring"
        },
          {
            text: "MEWwallet",
            icon: mewwallet,
            path: "/mewwallet"
        },
          {
            text: "MetaMask",
            icon: metamask,
            path: "/metamask"
        },
          {
            text: "MyCrypto",
            icon: mycrypto,
            path: "/mycrypto"
        },
          {
            text: "MyEtherWallet",
            icon: myetherwallet,
            path: "/myetherwallet"
        },
          {
            text: "Pillar",
            icon: pillar,
            path: "/pillar"
        },
          {
            text: "Rabby",
            icon: rabby,
            path: "/rabby"
        },
          {
            text: "Railway",
            icon: railway,
            path: "/railway"
        },
          {
            text: "Rainbow",
            icon: rainbow,
            path: "/rainbow"
        },
          {
            text: "Samourai",
            icon: samouraiwallet,
            path: "/samourai"
        },
          {
            text: "Sequence",
            icon: sequence,
            path: "/sequence"
        },
          {
            text: "Sparrow",
            icon: sparrowwallet,
            path: "/sparrow"
        },
          {
            text: "status",
            icon: status,
            path: "/status"
        },
          {
            text: "Taho",
            icon: taho,
            path: "/taho"
        },
          {
            text: "Trust Wallet",
            icon: trustwallet,
            path: "/trustwallet"
        },
          {
            text: "Unstoppable",
            icon: unstoppable,
            path: "/unstoppable"
        },
          {
            text: "Wasabi Wallet",
            icon: wasabiwallet,
            path: "/wasabiwallet"
        },
          {
            text: "Web3Auth",
            icon: web3auth,
            path: "/web3auth"
        },
      ]
        .map((item, index) => {
          const {text, icon, path} = item
          return(
          <ListItem key={text} disablePadding button component={Link} to={path} selected={path === pathname}>
            <ListItemButton>
              <ListItemIcon>
              <Avatar alt="YouTube" src={icon} sx={{ width: 36, height: 36, backgroundColor: "#fff"}} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        )})}

<Divider />

{/* <ListItem disablePadding button component={Link} to={"/about"} selected={"/about" === pathname}>
  <ListItemButton>
    <ListItemIcon>
      <InfoRoundedIcon />
    </ListItemIcon>
    <ListItemText primary={"About"} />
  </ListItemButton>
</ListItem>

<Divider /> */}

<Stack direction="row" spacing={2} sx={{justifyContent: "center", gap: "10px", padding: "8px"}}>
  <Link to="https://www.youtube.com/@noonayn">
    <Avatar alt="YouTube" sx={{ width: 24, height: 24, backgroundColor: "transparent"}} > <YouTubeIcon sx={{color: "#757575", '&:hover': {color: "#FF0000"}}} /> </Avatar>
  </Link>
  <Link to="https://twitter.com/0xnooon">
    <Avatar alt="Twitter" sx={{ width: 24, height: 24, backgroundColor: "transparent" }} > <TwitterIcon sx={{color: "#757575", '&:hover': {color: "#00acee"}}} /> </Avatar>
  </Link>
</Stack>


<Typography style={{ textAlign: 'center', justifyContent: "center", fontSize:"12px", fontWeight: "400",}} align="center" variant="h6" noWrap component="h1">
    © 2023 Noon
</Typography>

      </List>


      {/* <List sx={{backgroundColor:"#121212", position: "sticky", bottom: 0, left: 0, padding: "0px"}}>
        <Divider />

          <ListItem disablePadding button component={Link} to={"/about"} selected={"/about" === pathname}>
            <ListItemButton>
              <ListItemIcon>
                <InfoRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>

          <Divider />

          <Stack direction="row" spacing={2} sx={{justifyContent: "center", gap: "10px", padding: "8px"}}>
            <Link to="https://www.youtube.com/@noonayn">
              <Avatar alt="YouTube" sx={{ width: 24, height: 24, backgroundColor: "transparent"}} > <YouTubeIcon sx={{color: "#757575", '&:hover': {color: "#FF0000"}}} /> </Avatar>
            </Link>
            <Link to="https://twitter.com/0xnooon">
              <Avatar alt="Twitter" sx={{ width: 24, height: 24, backgroundColor: "transparent" }} > <TwitterIcon sx={{color: "#757575", '&:hover': {color: "#00acee"}}} /> </Avatar>
            </Link>
        </Stack>


          <Typography style={{ textAlign: 'center', justifyContent: "center", fontSize:"12px", fontWeight: "400",}} align="center" variant="h6" noWrap component="h1">
              © 2023 Noon
          </Typography>

      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

        XXXXXX

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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
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

export default ResponsiveDrawer;
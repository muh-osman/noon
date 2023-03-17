import React, { useRef } from "react";
import { Chip, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Grid from '@mui/material/Grid'; // Grid version 1
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Define a custom style for the chips
const chipStyle = {
  margin: '10px',
};

// Define a function that filters items by color
const filterByColor = (items, color) => {
  return items.filter((item) => item[color] === true); // android: true === Android
};

// Define some sample items with color property
const items = [
  { id: 1, name: 'AirGap', path: "airgap", crypto: false, defi: true, hardware: true, hodl: false, nft: false, android: true, chrome: false, firefox: false, ios: true, linux: true, macos: true, website: false, windows: true, image: Arigap,},
  { id: 2, name: 'AlphaWallet', path: "alphawallet", crypto: true, defi: true, hardware: false, hodl: false, nft: true, android: true, chrome: false, firefox: false, ios: true, linux: false, macos: false, website: false, windows: false, image: AlphaWallet, },
  { id: 3, name: 'Ambire', path: "ambire", crypto: true, defi: true, hardware: true, hodl: false, nft: true, android: false, chrome: false, firefox: false, ios: false, linux: false, macos: false, website: true, windows: false, image: ambire, },
  { id: 4, name: 'argent', path: "argent", crypto: true, defi: true, hardware: true, hodl: false, nft: true, android: true, chrome: true, firefox: true, ios: true, linux: false, macos: false, website: false, windows: false, image: argent, },
  { id: 5, name: 'bitcoin', path: "bitcoin", crypto: false, defi: false, hardware: true, hodl: true, nft: false, android: false, chrome: false, firefox: false, ios: false, linux: true, macos: true, website: false, windows: true, image: bitcoin, },
  { id: 6, name: 'Brave', path: "brave", crypto: true, defi: true, hardware: true, hodl: false, nft: true, android: true, chrome: true, firefox: false, ios: true, linux: false, macos: false, website: false, windows: false, image: brave, },
  { id: 7, name: 'Coin Wallet', path: "coinwallet", crypto: true, defi: false, hardware: false, hodl: true, nft: false, android: true, chrome: false, firefox: false, ios: true, linux: true, macos: true, website: false, windows: true, image: CoinWallet, },
  { id: 8, name: 'coinomi', path: "coinomi", crypto: true, defi: true, hardware: true, hodl: false, nft: true, android: true, chrome: false, firefox: false, ios: true, linux: true, macos: true, website: false, windows: true, image: coinomi, },
  { id: 9, name: 'Electrum', path: "electrum", crypto: false, defi: false, hardware: true, hodl: true, nft: false, android: true, chrome: false, firefox: false, ios: false, linux: true, macos: true, website: false, windows: true, image: electrum, },
  { id: 10, name: 'Enkrypt', path: "enkrypt", crypto: true, defi: true, hardware: true, hodl: false, nft: true, android: false, chrome: true, firefox: true, ios: false, linux: false, macos: false, website: false, windows: false, image: enkrypt, },
  { id: 11, name: 'Frame', path: "frame", crypto: false, defi: true, hardware: true, hodl: false, nft: true, android: false, chrome: true, firefox: false, ios: false, linux: true, macos: true, website: false, windows: true, image: frame, },
  { id: 12, name: 'Safe', path: "safe", crypto: true, defi: true, hardware: true, hodl: false, nft: true, android: true, chrome: false, firefox: false, ios: true, linux: true, macos: true, website: false, windows: true, image: safe, },
  { id: 13, name: 'Loopring', path: "loopring", crypto: true, defi: false, hardware: true, hodl: false, nft: true, android: true, chrome: false, firefox: false, ios: true, linux: false, macos: false, website: false, windows: false, image: loopring, },
  { id: 14, name: 'MEWwallet', path: "mewwallet", crypto: true, defi: true, hardware: false, hodl: false, nft: false, android: true, chrome: false, firefox: false, ios: true, linux: false, macos: false, website: false, windows: false, image: mewwallet, },
  { id: 15, name: 'MetaMask', path: "metamask", crypto: true, defi: true, hardware: true, hodl: true, nft: true, android: true, chrome: true, firefox: true, ios: true, linux: false, macos: false, website: false, windows: false, image: metamask, },
  { id: 16, name: 'MyCrypto', path: "mycrypto", crypto: true, defi: false, hardware: true, hodl: true, nft: true, android: true, chrome: false, firefox: false, ios: false, linux: true, macos: true, website: false, windows: true, image: mycrypto, },
  { id: 17, name: 'MyEtherWallet', path: "myetherwallet", crypto: true, defi: true, hardware: true, hodl: true, nft: true, android: true, chrome: true, firefox: false, ios: true, linux: false, macos: false, website: false, windows: false, image: myetherwallet, },
  { id: 18, name: 'Pillar', path: "pillar", crypto: true, defi: true, hardware: false, hodl: true, nft: false, android: true, chrome: false, firefox: false, ios: true, linux: false, macos: false, website: false, windows: false, image: pillar, },
  { id: 19, name: 'Rabby', path: "rabby", crypto: true, defi: true, hardware: false, hodl: false, nft: false, android: false, chrome: true, firefox: false, ios: false, linux: false, macos: false, website: false, windows: false, image: rabby, },
  { id: 20, name: 'Railway', path: "railway", crypto: false, defi: false, hardware: false, hodl: false, nft: false, android: false, chrome: false, firefox: false, ios: false, linux: true, macos: true, website: true, windows: true, image: railway, },
  { id: 21, name: 'Rainbow', path: "rainbow", crypto: true, defi: true, hardware: false, hodl: false, nft: true, android: true, chrome: false, firefox: false, ios: true, linux: false, macos: false, website: false, windows: false, image: rainbow, },
  { id: 22, name: 'Samourai', path: "samourai", crypto: true, defi: false, hardware: false, hodl: false, nft: false, android: true, chrome: false, firefox: false, ios: false, linux: false, macos: false, website: false, windows: false, image: samouraiwallet, },
  { id: 23, name: 'Sequence', path: "sequence", crypto: true, defi: false, hardware: false, hodl: false, nft: false, android: false, chrome: false, firefox: false, ios: false, linux: false, macos: false, website: false, windows: false, image: sequence, },
  { id: 24, name: 'Sparrow', path: "sparrow", crypto: true, defi: false, hardware: false, hodl: false, nft: false, android: false, chrome: false, firefox: false, ios: false, linux: true, macos: true, website: false, windows: true, image: sparrowwallet, },
  { id: 25, name: 'status', path: "status", crypto: true, defi: false, hardware: false, hodl: false, nft: true, android: true, chrome: false, firefox: false, ios: true, linux: false, macos: false, website: false, windows: false, image: status, },
  { id: 26, name: 'Taho', path: "taho", crypto: true, defi: true, hardware: false, hodl: false, nft: true, android: false, chrome: true, firefox: false, ios: false, linux: false, macos: false, website: false, windows: false, image: taho, },
  { id: 27, name: 'Trust Wallet', path: "trustwallet", crypto: true, defi: true, hardware: false, hodl: false, nft: true, android: true, chrome: false, firefox: false, ios: true, linux: false, macos: false, website: false, windows: false, image: trustwallet, },
  { id: 28, name: 'Unstoppable', path: "unstoppable", crypto: true, defi: false, hardware: false, hodl: false, nft: true, android: false, chrome: false, firefox: false, ios: false, linux: false, macos: false, website: false, windows: false, image: unstoppable, },
  { id: 29, name: 'Wasabi Wallet', path: "wasabiwallet", crypto: true, defi: false, hardware: false, hodl: false, nft: false, android: false, chrome: false, firefox: false, ios: false, linux: true, macos: true, website: false, windows: true, image: wasabiwallet, },
  { id: 30, name: 'Web3Auth', path: "web3auth", crypto: false, defi: false, hardware: false, hodl: false, nft: false, android: true, chrome: true, firefox: true, ios: true, linux: false, macos: true, website: false, windows: true, image: web3auth, },
];

// Define a function component that renders chips for filtering
export default function Home() {
     // Use a ref to access the scrollable div
     const scrollRef = useRef(null);

     // Define a function to scroll left or right by a certain amount
     const scroll = (amount) => {
       scrollRef.current.scrollLeft += amount;
     };


  // Use state to store the filtered items
  const [filteredItems, setFilteredItems] = React.useState(items);
  const [chipColors, setChipColors] = React.useState("");

  // Define a handler function that updates the filtered items based on chip click
  const handleChipClick = (event) => {
    var chipColor = event.currentTarget.dataset.color;
    setChipColors(chipColor)
    if (chipColor === 'all') {
      // Show all items if chip color is all
      setFilteredItems(items);
    } else {
      // Filter items by chip color otherwise
      setFilteredItems(filterByColor(items, chipColor));
    }
  };

  return (
    <>
      <div className="filter-container">
       <button id="slideLeft" className="nav-button" onClick={() => scroll(-200)}>
       < ChevronLeftIcon />
       </button>
       <div className="scrollable" ref={scrollRef}>
         <div className="content">
        {/* Render chips for each color */}
        <Chip label="All" onClick={handleChipClick} data-color="all" style={chipStyle} className={chipColors === "all" || filteredItems.length === 30 ? "chip_active" : ""} />

        <Chip label="Buy Crypto" onClick={handleChipClick} data-color="crypto" style={chipStyle} className={chipColors === "crypto" ? "chip_active" : ""} />
        <Chip label="DeFi" onClick={handleChipClick} data-color="defi" style={chipStyle} className={chipColors === "defi" ? "chip_active" : ""} />
        <Chip label="Hardware Wallet" onClick={handleChipClick} data-color="hardware" style={chipStyle} className={chipColors === "hardware" ? "chip_active" : ""} />
        <Chip label="Hodl" onClick={handleChipClick} data-color="hodl" style={chipStyle} className={chipColors === "hodl" ? "chip_active" : ""} />
        <Chip label="NFT" onClick={handleChipClick} data-color="nft" style={chipStyle} className={chipColors === "nft" ? "chip_active" : ""} />
        
        <Divider orientation="vertical" flexItem variant="middle" />

        <Chip label="Android" onClick={handleChipClick} data-color="android" style={chipStyle} className={chipColors === "android" ? "chip_active" : ""} />
        <Chip label="iOS" onClick={handleChipClick} data-color="ios" style={chipStyle} className={chipColors === "ios" ? "chip_active" : ""} />
        <Chip label="Windows" onClick={handleChipClick} data-color="windows" style={chipStyle} className={chipColors === "windows" ? "chip_active" : ""} />
        <Chip label="Linux" onClick={handleChipClick} data-color="linux" style={chipStyle} className={chipColors === "linux" ? "chip_active" : ""} />
        <Chip label="MacOS" onClick={handleChipClick} data-color="macos" style={chipStyle} className={chipColors === "macos" ? "chip_active" : ""} />
        <Chip label="Chrome" onClick={handleChipClick} data-color="chrome" style={chipStyle} className={chipColors === "chrome" ? "chip_active" : ""} />
        <Chip label="Firefox" onClick={handleChipClick} data-color="firefox" style={chipStyle} className={chipColors === "firefox" ? "chip_active" : ""} />
        <Chip label="Website Login" onClick={handleChipClick} data-color="website" style={chipStyle} className={chipColors === "website" ? "chip_active" : ""} />


      </div>
       </div>
       <button id="slideRight" className="nav-button" onClick={() => scroll(200)}>
       < ChevronRightIcon />
       </button>
     </div>

        {/* Render filtered items */}
        <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid container spacing={2}>
          {filteredItems.map((item) => (

         <Grid item lg={3} md={4} sm={6} xs={6} key={item.id} >
            {/* <Item > */}
                <Card>
                <CardActionArea component={Link} to={item.path}>
                  <CardMedia
                    component="img"
                    // height="140"
                    image= {item.image}
                    sx={{aspectRatio: "1 / 1", padding: "0px", maxWidth: "100%", backgroundColor: "#fff"}}
                  />
                  <CardContent>

                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center"}}>
                      {item.name}
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            {/* </Item> */}
         </Grid>

          ))}
          </Grid>
        </Box>
    </>
 )}
import React, { useRef } from "react";
import { Chip, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom';

import { useContext } from "react"
import { DataContext } from "../context/DataProvider"


// Define a custom style for the chips
const chipStyle = {
  margin: '10px',
  borderRadius: "5px",
};

// Define a function that filters items by color
const filterByColor = (items, color) => {
  return items.filter((item) => item[color] === true); // android: true === Android
};

// Define a function component that renders chips for filtering
function Home() {

      const items = useContext(DataContext)

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
      <div dir="rtl" className="hero">
        <div className="hero_text">
          <h2>اختر محفظتك</h2>
          <p>تحتوي المحافظ على الكثير من الميزات لذا اختر محفظتك بناءً على الميزات التي تريدها</p>
          <p>المحفظة الصلبة (الباردة)  أفضل وسيلة لحماية الأصول المشفرة</p>
        </div>
      </div>
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
        <Chip label="Chrome" onClick={handleChipClick} data-color="chrome" style={chipStyle} className={chipColors === "chrome" ? "chip_active" : ""} />
        <Chip label="Firefox" onClick={handleChipClick} data-color="firefox" style={chipStyle} className={chipColors === "firefox" ? "chip_active" : ""} />
        <Chip label="Website Login" onClick={handleChipClick} data-color="website" style={chipStyle} className={chipColors === "website" ? "chip_active" : ""} />
        <Chip label="Windows" onClick={handleChipClick} data-color="windows" style={chipStyle} className={chipColors === "windows" ? "chip_active" : ""} />
        <Chip label="Linux" onClick={handleChipClick} data-color="linux" style={chipStyle} className={chipColors === "linux" ? "chip_active" : ""} />
        <Chip label="MacOS" onClick={handleChipClick} data-color="macos" style={chipStyle} className={chipColors === "macos" ? "chip_active" : ""} />


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
                <Card>
                  <CardActionArea component={Link} to={item.path}>
                    <CardMedia
                      component="img"
                      image= {item.image}
                      sx={{aspectRatio: "1 / 1", padding: "0px", maxWidth: "100%", backgroundColor: "#fff"}}
                    />
                    <CardContent>

                      <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center", margin: 0}}>
                        {item.name}
                      </Typography>

                    </CardContent>
                  </CardActionArea>
              </Card>
         </Grid>

          ))}

          </Grid>

          <div style={{textAlign: "center", fontSize: "14px", marginTop: "24px",}}>
            <p style={{ display: "flex", alignItems: "center", justifyContent:"center",}}>Made with<span style={{display: "flex", alignItems: "center"}}>&nbsp;<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color: "red", fontSize: "14px",}}><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>&nbsp;</span>by&nbsp;<a href="https://github.com/muh-osman" target="_blank" rel="noopener noreferrer">Muh-Osman</a></p>
          </div>
        </Box>
    </>
 )}

export default React.memo(Home);
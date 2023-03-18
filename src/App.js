import * as React from "react";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./Root";
import { Home, Airgap, AlphaWallet, Ambire, Argent, Bitcoin, Brave, CoinWallet, Coinomi, Electrum, Enkrypt, Frame, Safe, Loopring, MEWwallet, MetaMask, MyCrypto, MyEtherWallet, Pillar, Rabby, Railway, Rainbow, Samourai, Sequence, Sparrow, Status, Taho, TrustWallet, Unstoppable, WasabiWallet, Web3Auth, About } from "./pages";
// Material UI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Google Analytics
// import ReactGA from "react-ga4"
// ReactGA.initialize("G-MX82TVH0J7")

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* Pages */}
      <Route index element={<Home />} />
      <Route path="airgap" element={<Airgap />} />
      <Route path="alphawallet" element={<AlphaWallet />} />
      <Route path="ambire" element={<Ambire />} />
      <Route path="argent" element={<Argent />} />
      <Route path="bitcoin" element={<Bitcoin />} />
      <Route path="brave" element={<Brave />} />
      <Route path="coinwallet" element={<CoinWallet />} />
      <Route path="coinomi" element={<Coinomi />} />
      <Route path="electrum" element={<Electrum />} />
      <Route path="enkrypt" element={<Enkrypt />} />
      <Route path="frame" element={<Frame />} />
      <Route path="safe" element={<Safe />} />
      <Route path="loopring" element={<Loopring />} />
      <Route path="mewwallet" element={<MEWwallet />} />
      <Route path="metamask" element={<MetaMask />} />
      <Route path="mycrypto" element={<MyCrypto />} />
      <Route path="myetherwallet" element={<MyEtherWallet />} />
      <Route path="pillar" element={<Pillar />} />
      <Route path="rabby" element={<Rabby />} />
      <Route path="railway" element={<Railway />} />
      <Route path="rainbow" element={<Rainbow />} />
      <Route path="samourai" element={<Samourai />} />
      <Route path="sequence" element={<Sequence />} />
      <Route path="sparrow" element={<Sparrow />} />
      <Route path="status" element={<Status />} />
      <Route path="taho" element={<Taho />} />
      <Route path="trustwallet" element={<TrustWallet />} />
      <Route path="unstoppable" element={<Unstoppable />} />
      <Route path="wasabiwallet" element={<WasabiWallet />} />
      <Route path="web3auth" element={<Web3Auth />} />
      
      <Route path="about" element={<About />} />
    </Route>
  )
);


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default React.memo(App);
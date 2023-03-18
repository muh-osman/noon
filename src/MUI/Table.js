import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

export default function BasicTable(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let navigate = useNavigate();

  function createData(name, protein) {
    return { name, protein };
  }

  const rows = [
    createData("Buy Crypto", props.data.crypto),
    createData("DeFi", props.data.defi),
    createData("Hardware Wallet", props.data.hardware),
    createData("Hodl", props.data.hodl),
    createData("NFT", props.data.nft),
    createData("Android", props.data.android),
    createData("iOS", props.data.ios),
    createData("Windows", props.data.windows),
    createData("Linux", props.data.linux),
    createData("MacOS", props.data.macos),
    createData("Chrome", props.data.chrome),
    createData("Firefox", props.data.firefox),
    createData("Website Login", props.data.website),
  ];

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{ marginBottom: "20px", justifyContent: "space-between" }}
      >
        <Button
          onClick={() => navigate("/")}
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          sx={{ lineHeight: "unset", height: "36px" }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          href={props.data.url}
          target="_blank"
          endIcon={<OpenInNewIcon />}
          sx={{ lineHeight: "unset", height: "36px", flex: 1 }}
        >
          {props.data.name}
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h2>Features</h2>
              </TableCell>
              <TableCell align="right">{/* <h1></h1> */}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {row.protein ? (
                    <ThumbUpAltIcon sx={{ color: "green" }} />
                  ) : (
                    <ThumbDownOffAltIcon sx={{ color: "red" }} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

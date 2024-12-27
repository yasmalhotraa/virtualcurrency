import {
  Container,
  createTheme,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useHistory, useParams } from "react-router";
import { CoinList, SingleCoin } from "../configration/api";
import { CryptoState } from "../Context";
import { numberWithCommas } from "../components/Banner/Carousel";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  row: {
    backgroundColor: "#16171a",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#131111",
    },
    fontFamily: "Montserrat",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "skyblue",
    },
  },
  title: {
    color: "skyblue",
    margin: 18,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  textField: {
    marginBottom: 22,
    width: "100%",
  },
});

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency, symbol } = CryptoState();
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const classes = useStyles();
  const history = useHistory();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const fetchCoin = useCallback(async () => {
    try {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
    } catch (error) {
      console.error("Error fetching coin:", error.message);
    }
  }, [id]);

  const fetchCoins = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching coins:", error.message);
      setLoading(false);
    }
  }, [currency]);

  useEffect(() => {
    fetchCoin();
  }, [fetchCoin]);

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  const filteredCoins = useMemo(() => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  }, [coins, search]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h3" className={classes.title}>
          CryptoCurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          className={classes.textField}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "skyblue" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "skyblue" }}>
                <TableRow>
                  {["Rank", "Coin", "Price", "24h Change", "Market Cap"].map(
                    (head) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "680",
                          fontFamily: "Montserrat",
                        }}
                        key={head}
                        align={head === "Rank" ? "center" : "left"}
                      >
                        {head}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCoins
                  .slice((page - 1) * 30, (page - 1) * 30 + 30)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => history.push(`/coin/${row.id}`)}
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell align="center">
                          {row.market_cap_rank}
                        </TableCell>
                        <TableCell
                          align="left"
                          component="th"
                          scope="row"
                          style={{ display: "flex", gap: 10 }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="left">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            color: profit ? "green" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="left">
                          {symbol} {numberWithCommas(row.market_cap.toFixed(0))}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <Pagination
          count={Math.ceil(filteredCoins.length / 30)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;

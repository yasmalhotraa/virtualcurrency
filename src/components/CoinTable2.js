import {
  Container,
  LinearProgress,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Table, Row, Col } from "reactstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { numberWithCommas } from "./Banner/Carousel";
import { CryptoState } from "../Context";
import { CoinList, SingleCoin } from "../configration/api";
import { useParams } from "react-router";

const CoinTable2 = () => {
  const [loading, setLoading] = useState(false);
  const { currency, symbol } = CryptoState();
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState();
  const { id } = useParams();

  const fetchCoin = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://gnews.io/api/v4/top-headlines?token=633fa8e153883785b56f3ca6b7de2b2b`
      );
      setCoin(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <TableContainer style={{ marginTop: "30px" }}>
      {loading ? (
        <LinearProgress style={{ backgroundColor: "skyblue" }} />
      ) : (
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "skyblue" }}>
            <TableRow>
              {[
                "ATH",
                "ATH_Change_Percentage",
                "ATH_Date",
                "ATL",
                "ATL_Change_Percentage",
                "ATL_Date",
                "Maximum Supply",
              ].map((coin) => (
                <TableCell
                  style={{
                    color: "black",
                    fontWeight: "680",
                    fontFamily: "Bold",
                  }}
                  key={coin}
                >
                  {coin}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{/* Here you can map over the `coin` data */}</TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default CoinTable2;

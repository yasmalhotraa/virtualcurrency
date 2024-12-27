import {
  AppBar,
  Container,
  MenuItem,
  Toolbar,
  Select,
  Typography,
} from "@material-ui/core";
import logo from "./img/logo.png";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../Context";
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "skyblue",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="inherit" position="fixed">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              className={classes.title}
            >
              <img
                style={{
                  mixBlendMode: "multiply",
                  width: "130px",
                  height: "70px",
                }}
                src={logo}
                alt="Logo"
              />
            </Typography>

            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;

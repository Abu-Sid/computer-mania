
import { CircularProgress, Container, Grid, InputBase, LinearProgress, makeStyles, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../App";
import Card from "../Card/Card";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  heading: {
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: "36px",
  },
  searchbox: {
    width: "90%",
    margin: "48px auto",
    [theme.breakpoints.up("md")]: {
      width: "480px",
    },
    
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  searchbar: {
    border: "1px solid #d6d6d6",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Home = () => {
    const classes = useStyles();
  const [orderProduct,setOderProduct]=useContext(ProductContext)
  const [cardData, setCardData] = useState();
  useEffect(() => {
    fetch("https://mighty-gorge-79417.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
        setOderProduct(data);
      });
  }, []);
    return (
        <div style={{ backgroundColor: "#F4F7FC" }}>
      
      <Container className={classes.container}>
        <Typography className={classes.heading} variant="h3" gutterBottom>
          Get Your Computer within your Budget
        </Typography>
        <div className={classes.searchbox}>
        <div className={classes.searchIcon}>
              <SearchIcon />
        </div>
        <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
      </Container>
      <Container>
        <Grid container spacing={3}>
          {cardData ? (
            cardData.map((data) => (
              <Card data={data} key={data._id}></Card>
            ))
          ) : (
            <div className={classes.spinner}>
              <LinearProgress />
              <CircularProgress />
              <LinearProgress color="secondary" />
            </div>
            
          )}
        </Grid>
      </Container>
    </div>
    );
};

export default Home;
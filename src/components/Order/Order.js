import { Card, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../App";
const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
const Order = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])
    console.log("orders",orders);
    useEffect(() => {
        fetch("https://mighty-gorge-79417.herokuapp.com/order?email="+loggedUser.email,{
          method:'GET',
          headers:{
            "Content-Type":"application/json",
          }
        })
        
          .then((res) => res.json())
          .then((data) => setOrders(data))
          
      }, [loggedUser.email]);
    const classes = useStyles();    
    return (
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome {loggedUser.displayName} Your Total Order :{orders.length}
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {orders.map((order) => (
              <Grid item key={order._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={order?.orderData?.imageURL}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {order?.orderData?.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h4">
                      Brand:{order?.orderData?.brand}     
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h4">     
                      Price:{order?.orderData?.price}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h4">
                     Order Time:{new Date(order?.orderTime).toDateString('MM/dd/yyyy')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    );
};

export default Order;
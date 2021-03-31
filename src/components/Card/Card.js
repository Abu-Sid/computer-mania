import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";


const Card = ({data}) => {
  const {_id,name,price,brand,imageURL}=data;
    let color = ["#3f90fc", "#421fcf", "#ffbd3e", "#ff7044"];
  let index = Math.floor(Math.random() * color.length);
  const bgColor = {
    background: color[index],
  };
  // console.log("data",data);
    return (
        <>
      <Grid item xs={12} md={3} sm={6}>
        <Link to={`/checkout/${_id}`}>
          <div className="image">
            <img style={{ width: "100%" }} src={imageURL} alt="baby" />
            <div className="heading" style={bgColor}>
              <p>{name}</p>
              <p>Price:${price} <span className="brand">By:{brand}</span> </p>
              <Button variant="contained" color="primary">Buy Now</Button>
            </div>
          </div>
        </Link>
      </Grid>
    </>
    );
};

export default Card;
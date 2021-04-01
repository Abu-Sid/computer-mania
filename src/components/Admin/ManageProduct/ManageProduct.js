import { Button, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";
import "./ManagerProduct.css";

const useStyles = makeStyles({
  table: {
    minWidth: "60%",
  },
});

const ManageProduct = () => {
    const [rows, setRows] = useState("");
    const history = useHistory();
    const classes = useStyles();
    const [orderProduct,setOrderProduct] = useContext(UserContext);
  const handleDelete = (id) => {
    if (window.confirm("Are You Sure?")){
    fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const newData=orderProduct.filter(event=>event._id!==data.id)
            setOrderProduct(newData)
            alert(data.msg)
            history.push('/manage')
            });
        }  
  };

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);

  

    return (
        <TableContainer align="center" component={Paper}>
            <Typography align="center" variant="h3" gutterBottom>
                 Manage Your Products
            </Typography>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell variant="h3" align="center">Name</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Update</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow key={row._id}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.brand}</TableCell>
                <TableCell align="center">${row.price}</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => handleDelete(row._id)}
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                  ></Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <h1>loading....!</h1>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default ManageProduct;
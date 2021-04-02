import { Button, CircularProgress, LinearProgress, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./ManagerProduct.css";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "60%",
  },
  spinner: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ManageProduct = () => {
    const [rows, setRows] = useState("")
    const classes = useStyles();
    
  const handleDelete = (id) => {
    if (window.confirm("Are You Sure?")){
    fetch(`https://mighty-gorge-79417.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(rows);
            const newData=rows.filter(event=>event._id!==id)
            setRows(newData)
            });
        }  
  };

  useEffect(() => {
    fetch("https://mighty-gorge-79417.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);

  

    return (
        <>
        <Sidebar/>
        <TableContainer align="center" component={Paper}>
            <Typography align="center" variant="h3" gutterBottom>
                 Manage Your Products : {rows.length}
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
            <div className={classes.spinner}>
              <LinearProgress />
              <CircularProgress />
              <LinearProgress color="secondary" />
            </div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    );
};

export default ManageProduct;
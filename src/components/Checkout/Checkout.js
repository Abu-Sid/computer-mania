import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { ProductContext, UserContext } from '../../App';

  
const Checkout = () => {
    const {id}=useParams()
    const [orderProduct]=useContext(ProductContext)
    console.log('checkout',orderProduct);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const checkoutProduct= orderProduct?.find(product=>product._id===id)
    const {name,price}=checkoutProduct
    
    const handleCheckout = data => {
        console.log('form submitted', data)
        const orderDetails={...loggedInUser,orderData:checkoutProduct,orderTime:new Date()}
        fetch('https://mighty-gorge-79417.herokuapp.com/addOrder',{
              method:'POST',
              headers:{ 
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(orderDetails)
          })
          .then(res=>res.json())
          .then(data=>{
            if (data){
              alert('Order Placed successfully, Thank you')
              
            }
          })
  
      };
    //   const bgStyle={ backgroundImage: `linear-gradient(white, white),url(${imageURL})`,backgroundPosition: 'center',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   width: '100vw',
    //   height: '100vh',
    //   backgroundBlendMode: 'saturation',
    //   }
    return (
        <div >
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Total Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                    <TableCell>{name}</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>${price}</TableCell>
                    <TableCell>${price}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button align="right" variant="contained" color="primary" onClick={handleCheckout}>Checkout</Button>
        </div>
    );
};

export default Checkout;
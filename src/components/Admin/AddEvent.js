import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      name: data.name,
      price:data.price,
      brand:data.brand,
      imageURL: imageURL
    };
    const url = `http://localhost:5000/addEvent`;
    console.log(eventData);
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log('server side response'))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '0ebf60e54ff9b3704a6d9cb7fb796b92');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <div>
      <h1>Add Your Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
    
      <input name="name" placeholder="Product Name" ref={register} />
      <br/>
      <input type="number" placeholder="price" name="price" ref={register} />
      <br/>
      <input name="brand" placeholder="brand Name" ref={register} />
      <br/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddEvent;
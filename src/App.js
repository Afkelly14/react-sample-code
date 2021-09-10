import React, { Component, Link } from 'react';
import axios from 'axios';
import Button from './button';
import { render } from '@testing-library/react';

// a83e52f2ee6d464dbd6e8b3e9b9b263e

function IDme() {  
  // const accessToken = window.location.hash.split("&")[0].match(/[^#access_token=]\w+/)[0];
  // const tokenEndpoint = `https://api.id.me/api/public/v3/attributes.json?access_token=${accessToken}`

  // const asyncFetch = async (endpoint) => {
  //   // console.log(endpoint);
  //   try {
  //     const response = await axios(endpoint)
  //     const data = await response.data
  //     console.log(data)
  //     console.log(data.attributes[1].value)
  //     console.log(data.status[0].verified)
  //   } catch (error) {
  //     console.log("Error:", error)
  //   }
  // }

   
  // asyncFetch(tokenEndpoint);

  
 
  return(

        <div>
  
          <Button />

        </div>
   
  


    )//return

}//component





export default IDme;

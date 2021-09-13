import React, { useState } from 'react';
import axios from 'axios';
import Button from './button';
import Results from './results';

function IDme() {  
  const [payload, setPayload] = useState(null);
  const token = window.location.hash.split("&")[0].match(/[^#access_token=]\w+/)
 
  if (token) {
    const accessToken = token[0];
    const tokenEndpoint = `https://api.id.me/api/public/v3/attributes.json?access_token=${accessToken}`
    const asyncFetch = async (endpoint) => {
      try {
        const response = await axios(endpoint)
        const data = await response.data
        setPayload(data)
      } catch (error) {
        console.log("Error:", error)
      }
    }
    asyncFetch(tokenEndpoint);
  }
 
  const view = payload ? <Results  payload={payload}/> : <Button />
  
  return(
        <div>
          {view}
        </div>
    )//return
}//component

export default IDme;

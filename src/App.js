import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./button";
import Results from "./results";

function IDme() {
  const [payload, setPayload] = useState({'attributes':[]});
  const token = window.location.hash.split("&")[0].match(/[^#access_token=]\w+/);
  const fname = payload.attributes.find(element => element.handle = "fname").value

  useEffect(() => {
    if (token) {
      const accessToken = token[0];
      const tokenEndpoint = `https://api.id.me/api/public/v3/attributes.json?access_token=${accessToken}`;
      
    const asyncFetch = async (endpoint) => {
      try {
        const response = await axios(endpoint);
        const data = await response.data;
        setPayload(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    asyncFetch(tokenEndpoint);
  }//if
}, [])//useEffect

  const view = payload ? <Results fname={fname} /> : <Button />;

  return <div>{view}</div>; //return
} //component

export default IDme;

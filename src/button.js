import React from "react";

const errorCodes = {
  'access_denied': 'You denied consent',
}

let error
let displayMessage
let location = window.location.hash !== ''

if(location) {
  error = window.location.hash.split("&")[0].match(/[^#error=]\w+/)[0]
  displayMessage = (
    <span>{errorCodes[error]}</span>
  )
}

function Button() {
     
  return (

    <div className="idmebutton">
       
      {location && displayMessage}
      <a href="https://groups.id.me/?client_id=8ffeb47b23d72aeb90ac446ce7064108&redirect_uri=http://localhost:3000&response_type=token&scopes=military,responder,nurse,hospital_employee">
        <img src="https://developers.id.me/assets/buttons/verify-32b84e457998bb752606ed89415338ec7aec19954ee1d3d4bfa002dd307ad433.svg" />
      </a>
    
    </div>
  );//return
}//Button


export default Button;

import React from "react";

const errorCodes = {
  'access_denied': 'You have denied the consent to release data to the partner. Please verify again.',
  'invalid_request':'The owner of this application is missing a required parameter or it is malformed',
  'invalid_client': 'The owner of this application is using an incorrect Client ID',
  'invalid_redirect_uri': 'Your Redirect URI is incorrect. Please check the values match',
  'unsupported_response_type':'The owner of this application has an unsupported response type. Please check the parameters',
  'invalid_scope': 'The owner of this application has an invalid scope. Please check your policies are enabled and the scope has been updated.'
}

let error
let displayMessage
let location = window.location.hash !== ''

if(location) {
  error = window.location.hash.split("&")[0].match(/[^#error=]\w+/)[0]
  displayMessage = (
    <span className= 'errorMessage'>{errorCodes[error]}</span>
  )
}

function Button() {
     
  return (
  
    <div className="idmebutton">
      <div className='errorMessage'>
      <p><strong>ERROR:</strong> {location && displayMessage} </p>
      </div>
      <a href="https://groups.id.me/?client_id=8ffeb47b23d72aeb90ac446ce7064108&redirect_uri=http://localhost:3000&response_type=token&scopes=military,responder,nurse,hospital_employee">
        <img src="https://developers.id.me/assets/buttons/verify-32b84e457998bb752606ed89415338ec7aec19954ee1d3d4bfa002dd307ad433.svg" />
      </a>
    
    </div>
  );//return
}//Button


export default Button;

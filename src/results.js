import React from "react";

function Results({ fname = "test"}) {
    
  return (
    <div className="idmeresults">
      <p>Hi, {fname}. Thank you for your service!</p>
    </div>
  );
}

export default Results;

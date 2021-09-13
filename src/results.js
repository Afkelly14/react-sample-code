import React from 'react';

function Results({payload})  {

        return (
            
            <div className='idmeresults'>
               <p>Hi, {payload.attributes[1].value}. Thank you for your service!</p>

            </div>

        );
    
}

export default Results;

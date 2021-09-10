Ternary display to show 

if(data.status[0].verified)

<h2>
  <span className="product--title__large">{nameFirst}</span>
  {nameRest.length > 0 && (
    <span className="product--title__small">{nameRest.join(" ")}</span>
  )}
</h2>


const ifVerified = ({(data.status[0].verified)}) => {

    return (
        <p>You're Verified {(data.attributes[1].value)} </p>
    )
}
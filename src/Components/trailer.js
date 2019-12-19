import React from "react";

function Trailer(props) {
  return (
    <div className="trail">
      <iframe className="trailer" src={props.trailer}></iframe>
    </div>
  );
}

export default Trailer;

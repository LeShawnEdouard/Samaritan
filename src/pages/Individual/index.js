import React from "react";
import "./style.css";

function vol(props) {
  return (
    <div className="vol text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default vol;

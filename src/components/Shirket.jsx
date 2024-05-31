import React from "react";
import './Shirket.css'

const Shirket = (props) => {
  return (
    <>
      <div className="card text-bg-dark pb-0 ">
        <img src={props.shekilXususiyyeti} className="sabitHundurluk" alt="" />
        <div className="card-img-overlay">
          <h5 className="card-title">{props.metn}</h5>
          <img src={props.img} className="s-border" alt="" />
          <p className="card-text">{props.paragraf}</p>


          <a href="#" class="btn">{props.a}</a>
        

        </div>
      </div>
    </>
  );
};

export default Shirket;

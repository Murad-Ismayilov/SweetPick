import React from 'react'
import './NEWARRIVAL.css'

const NEWARRIVAL = (props) => {
  return (
    <>
          <div className="col-12 col-md-6 col-lg-12 ">
        <div class="card "/>
          <img src={props.shekil} class="card-img-top" alt="..."/>
            <div class="card-body pb-5">
              <h5 class="brown"> {props.brown}</h5>
              <p class="arial"> {props.arial}</p>
            </div>
      </div>
    </>
  )
}

export default NEWARRIVAL
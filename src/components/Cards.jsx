import React from 'react'
import './Card.css'

const Cards = () => {
  return (
    <div className='py-5 services-box'>
        <div className="container">
            <div className="row">

                <div className="col-12 col-md-6 col-lg-3">
                    <div class="serv-box">
                        <i class="fa fa-plane"></i>
                            <div class="serv-box">
                                <h4 class="card-title">FAST DELIVERY</h4>
                                    <div className="serv-border"></div>
                                        <p class="serv-box"> We possess within us two minds. So far I have written only of the conscious mind. </p>
                            </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div class="serv-box">
                        <i class="fa-solid fa-eye"></i>
                            <div class="serv-box">
                                <h4 class="card-title">Retine Ready</h4>
                                    <div className="serv-border"></div>
                                <p class="serv-box"> We possess within us two minds. So far I have written only of the conscious mind. </p>
                            </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div class="serv-box">
                        <i class="fa-regular fa-comments"></i>
                            <div class="serv-box">
                                <h4 class="card-title">Quality Support</h4>
                                    <div className="serv-border"></div>
                                    <p class="serv-box"> We possess within us two minds. So far I have written only of the conscious mind. </p>

                            </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div class="serv-box">
                        <i class="fa-solid fa-shield-halved"></i>
                            <div class="serv-box">
                                <h4 class="card-title">100% Guarantee</h4>
                                    <div className="serv-border"></div>
                                    <p class="serv-box"> We possess within us two minds. So far I have written only of the conscious mind. </p>

                            </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Cards
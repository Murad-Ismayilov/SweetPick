import React from 'react'
import './CartMehsul.css'

const CartMehsul = () => {
  return (
    <>
    <section class="bloq  text-white py-5">
        <div class="container">
            <div class="row ">
            <div class="card-group ">

                <div class="card text-bg-dark ">
                    <img src="/assets/image/collection1.webp" class="card-img" alt="..."/>
                    <div class="coll-text">
                        <span class="card-title roboto-bold"> Summer Collection</span>
                        <p class="card-text "> For Women </p>
                        <a href=""> Get The Look <i class="fa fa-angle-right"></i></a>
                        </div>
                </div>

                <div class="card text-bg-dark ">
                    <img src="/assets/image/collection2.webp" class="card-img" alt="..."/>
                    <div class="coll-text">
                        <span class="card-title roboto-bold"> Collection 2014 </span>
                        <p class="card-text"> Accessories</p>
                        <a href=""> Get The Look <i class="fa fa-angle-right"></i></a>
                        </div>
                </div>

                <div class="card text-bg-dark">
                    <img src="/assets/image/collection3.webp" class="card-img" alt="..."/>
                    <div class="coll-text">
                        <span class="card-title roboto-bold"> Starts From $150 </span>
                        <p class="card-text"> Men Collection</p>
                        <a href=""> Get The Look <i class="fa fa-angle-right"></i></a>
                        </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CartMehsul
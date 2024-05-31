import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg pb-5 pt-2 ">
        <div className="container-fluid">
            <form className="d-flex" role="search">
                    <input className="form-control ms-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/"> <img src="	https://www.max-themes.net/demos/sweetpick/images/logo.png" alt="" /></Link>
                    </li>
                </ul>
            </div>

            <div className="cart roboto-bold">
                    <a href="" className="cartmain roboto-bold"> Cart / $ 1 199.00 </a>
            </div>

            <div className="card-icon">
                    <img src="/assets/image/cart.webp" alt="" />
            </div>
        </div>

        <div class="container-fluid pt-5">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/HomeTransparent"> HomeTransparent </Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link" to="/SingleProduct"> SingleProduct </Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link" to="/About"> About</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link" to="/Blog"> Blog </Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link" to="/Contact"> Contact </Link>
                </li>


            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
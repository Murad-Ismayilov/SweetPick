import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg pb-5 pt-2">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control ms-2" type="search" placeholder="Search" aria-label="Search" />
          </form>

          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <img src="https://www.max-themes.net/demos/sweetpick/images/logo.png" alt="" className='logo-img'/>
                </Link>
              </li>
            </ul>
          </div>

          <div className="cart roboto-bold">
            <a href="/" className="cartmain roboto-bold"> Cart / $ 1 199.00 </a>
          </div>

          <div className="card-icon">
            <img src="/assets/image/cart.webp" alt="" />
          </div>
        </div>

        <div className="container-fluid pt-5 collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <select className="form-select navbar-toggler" onChange={handleSelectChange}>
              <option value="/">Home</option>
              <option value="/HomeTransparent">HomeTransparent</option>
              <option value="/SingleProduct">SingleProduct</option>
              <option value="/About">About</option>
              <option value="/Blog">Blog</option>
              <option value="/Contact">Contact</option>
            </select>
          </ul>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/HomeTransparent"> HomeTransparent </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SingleProduct"> SingleProduct </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About"> About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog"> Blog </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact"> Contact </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

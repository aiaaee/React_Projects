import React from 'react'
import image from './../../public/Images/Booklist-LeadingBookDiscovery_black_0.png'
function Header() {
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand ms-3" href="#">
        <img src={image} width={80} /> 
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className=" header_navbar collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="#">Books</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Shop</a>
          </li>

        </ul>
        <form className="form-inline me-3 d-flex my-lg-0">
          <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
  </nav>
  )
}

export default Header
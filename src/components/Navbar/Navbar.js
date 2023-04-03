import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import "../../App.css"
const Navbar = () => {
  return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
  <div className="container">
  <Link to="/" className="fs-2 ubuntu navbar-brand" >Rick & Morty <span className="text-primary">WiKi</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <style jsx>
        {`
        button[aria-expanded="false"] > .close{
            display:none;
            }
        button[aria-expanded="true"] > .open{
            display:none;
            }
        }
        `}
       </style>

      <i class="fa-solid fa-bars open fw-bold text-dark" ></i>
      <i class="fa-solid fa-xmark close fw-bold text-dark"></i>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <div className="navbar-nav fs-5">
          <NavLink activeClassName="active" to="/" className="nav-link" >Characters</NavLink>
          <NavLink activeClassName="active" to="/episodes" className="nav-link" >Episodes</NavLink>
          <NavLink activeClassName="active" to="/location" className="nav-link">Location</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
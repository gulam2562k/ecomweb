import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  var navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <>
      {/* <!--PreLoader--> */}
      <div className="loader">
        <div className="loader-inner">
          <div className="circle"></div>
        </div>
      </div>
      {/* <!--PreLoader Ends--> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand ml-5" to="/">GMART</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-5">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop/All/All/All">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="nav mr-5" >
            {
              localStorage.getItem("login") ?
                <li className="nav-item dropdown float-end">
                  <Link className="nav-link dropdown-toggle text-light" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {localStorage.getItem("name")}
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                      localStorage.getItem("role") === "Admin" ?
                        <Link className="dropdown-item" to="/admin">Profile</Link> :
                        <>
                          <Link className="dropdown-item" to="/profile">Profile</Link>
                          <Link className="dropdown-item" to="/cart">Cart</Link>
                          <Link className="dropdown-item" to="/checkout">Checkout</Link>
                        </>
                    }
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={logout}>Logout</button>
                  </div>
                </li> :
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">Login</Link>
                </li>
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  var [email, setEmail] = useState("")
  async function postData(e) {
    e.preventDefault()
    let response = await fetch("/api/newsletter",{
      method:"post",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({email:email})
    })
    response = await response.json()
    alert(response.message)
  }
  return (
    <>
      {/* <!-- footer --> */}
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">About us</h2>
                <p> Welcome to GMART, your ultimate destination for all things tech-savvy and innovative! At GMART, we are passionate about bringing you the latest and greatest in electronics, gadgets, and GMART home solutions. Our mission is to make your life easier, more connected, and a lot more exciting.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">Get in Touch</h2>
                <ul>
                  <li>20 Futa Road, Batla House, New Delhi, India</li>
                  <li><a href="mailto:vishankchauhan@gmail.com">sarwar2562k@gmail.com</a></li>
                  <li><a href="tel:9873848046">8750695763</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">Menu</h2>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/shop/All/All/All">Shop</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer-box subscribe">
                <h2 className="widget-title">Subscribe</h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form onSubmit={postData}>
                  <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  <button type="submit"><i className="fas fa-paper-plane"></i></button>
                </form>
              </div>
              <div className='copyright'></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end footer --> */}
    </>
  )
}

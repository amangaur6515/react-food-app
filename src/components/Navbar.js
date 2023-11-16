import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  

  return (
    <>
        <nav class="navbar navbar-expand-lg " style={{backgroundColor:"#fa2302"}}>
  <a class="navbar-brand" href="#"><img src='https://marketplace.canva.com/EAFf_wSVnww/1/0/1600w/canva-red-illustrated-mascot-chef-free-logo-OF2DyCFvPEM.jpg' width="70px" height="70px" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/about">About <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/contact">Contact <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/contact">Cart <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/instamart">Instamart <span class="sr-only"></span></Link>
      </li>
      {
        (isLoggedIn)? <button onClick={(e)=>setIsLoggedIn(false)}>Logout</button>:<button onClick={(e)=>setIsLoggedIn(true)}>Login</button>
      }
     
    </ul>
    
  </div>
</nav>
    </>
  )
}

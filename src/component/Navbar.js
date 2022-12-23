import React,{useState,useEffect} from 'react'

import { Link } from 'react-router-dom'
import './navbar.css'


import logo from '../component/Images/logomain.png'
import { useNavigate } from 'react-router-dom'

// import Footer from './Footer'

const Navbar = () => {
 
  const navigate = useNavigate()
  // useEffect(()=>{
  //   document.body.style.backgroundColor = color
  // },[color])
  return (
    
    <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" className='nvimg' href="#"><img src={logo} width="100px" alt="..."/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" href="#" className="nav-link text-white" to="/">Home</Link>
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                            <li class="nav-item">
                            <Link to="/Games" class="nav-link" href="#">Games <i class="bi bi-controller"></i></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="Post" class="nav-link" href="#">Post <i class="bi bi-rss"></i></Link>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link"  href="#">More <i class="bi bi-cart3"></i></a>
                            </li>
                            
                        </ul>
                        <form class="d-flex">
                           
                            <button class="btn btn-outline-light"  >Log  In</button>
                        </form>
                        </div>
                    </div>
                    </nav>    

    </div>





  )
}

export default Navbar

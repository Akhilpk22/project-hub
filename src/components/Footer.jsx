import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{width:'100%',height:'400px'}} className=' mt-5 bg-danger d-flex flex-column justify-content-center align-items-center text-white   '>
        <div className=" border-0 footer-div d-flex justify-content-evenly  w-100 flex-wrap border border-white  ">
          <div className="website" style={{width:'400px'}}>
            <h4 style={{color:'black'}}>{' '}
            project-hub</h4>
            <h6>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</h6>
            <h6>Code Licensed Luminar , docs CCBY 3.0</h6>
            <p className='text-secondary'>Currently v1.0.0.</p>
          </div>
          <div className="links d-flex flex-column">
            <h4 style={{color:'black'}}>Links</h4>
            <Link to={'/'} style={{textDecoration:'none'}}>Home</Link>
            <Link to={'/Cart'} style={{textDecoration:'none'}}>Cart</Link>
            <Link to={'/WishLists'} style={{textDecoration:'none'}}>WishList</Link>
          </div>
          <div className="guides d-flex flex-column">
          <h4 style={{color:'black'}}>Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none'}}>React Bootstrap</Link>
            <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{textDecoration:'none'}}>Routing</Link>
          </div>
          <div className="contact">
            <h4 style={{color:'black'}}>Contact Us</h4>
            <div className="sub d-flex">
              <input type="text" className='form-control' placeholder='Enter your Email Id' />
                <button style={{width:'100px'}} className='border rounded-2 ms-2 '>subscribe</button>
            </div>
            <div className="icons fs-4 d-flex justify-content-evenly mt-3">
            <Link to={'https://mail.google.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-envelope"></i></Link>
            <Link to={'https://www.twitter.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></Link>
            <Link to={'https://www.linkedin.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://www.instagram.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></Link>
            <Link to={'https://www.github.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></Link>
            <Link to={'https://www.facebook.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></Link>
    
            </div>
          </div>
        </div>
        <p className=''>Copyright © 2023 Media Player. Built with React.</p>
      </div>
    </>
  )
}

export default Footer
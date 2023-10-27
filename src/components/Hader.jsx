import React from 'react'
import { Link } from 'react-router-dom'

function Hader() {
  return (
    <>
     <div style={{backgroundColor: "#90ee90", width: "100%", height: "13vh",}}>
        <h1 style={{ fontSize: "60px" }} className="fw-bolder ms-5">
             <Link style={{textDecoration:'none',color:'black'}} to={'/'}> Project Hub</Link>
        </h1> 
    </div>

    </>
  )
}

export default Hader
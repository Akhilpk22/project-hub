import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../contexts/TokenAuth'

function Hader({insideDashbord}) {
  const {isAuthorized, setisAuthorized} = useContext(tokenAuthorisationContext)

  const navigate= useNavigate()
  const handleLogout =()=>{
   sessionStorage.removeItem("existingUser")
   sessionStorage.removeItem("token")
   setisAuthorized(false)
   navigate("/")

  }

  return (
    <>
     <div className='d-flex justify-content-between align-items-center ' style={{backgroundColor: "#90ee90", width: "100%", height: "13vh",}}>
        <h1 style={{ fontSize: "60px" }} className="fw-bolder ms-5">
             <Link style={{textDecoration:'none',color:'black'}} to={'/'}> Project Hub</Link>
        </h1>
        {/* inside the  */}
         { insideDashbord &&
          <div className='me-5 d-flex'>
          <button onClick={handleLogout} className='btn bg-body-tertiary border-1  shadow-lg '>
            logout
          </button>
         </div>
        }
    </div>

    </>
  )
}

export default Hader
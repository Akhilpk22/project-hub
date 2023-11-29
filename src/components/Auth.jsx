import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from "../Services/allAPI";
import { useContext } from "react";
import { tokenAuthorisationContext } from "../contexts/TokenAuth";

function Auth({ register }) {

  const {isAuthorized, setisAuthorized} = useContext(tokenAuthorisationContext)

  const navigate =useNavigate()

  const [userData,setUserData] =useState({
    username:"",email:"",password:""
  })
  const isRegisterFrom = register ? true : false;


  // register method 
  const handleRegister= async(e)=>{
    e.preventDefault(); 
    const {username,email,password} = userData
    if(!username || !email || !password){
      toast.info("please fill the from completely!!")
    }else{
      const result = await registerAPI(userData)

      if(result.status===200){
        toast.success(`${result.data.username}  has register successfully!!`)
        setUserData({
          username:"",email:"",password:""
        })
        navigate('/login')
      }else{
        toast.warning(result.response.data)
        console.log(result);
      }
    }
  }

  const handlelogin= async(e)=>{
    e.preventDefault();
    const {email,password} = userData
    if( !email || !password){
      toast.info("please fill the from completely!!")
    }else{
      const result = await loginAPI(userData)

      if(result.status===200){
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        // toast.success(`${result.data.username}  has register successfully!!`)
        setisAuthorized(true)
        setUserData({
          username:"",email:"",password:""
        })
        navigate('/')
      }else{
        toast.warning(result.response.data)
        console.log(result);
      }
    }

  }

  return (
    <>
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center align-items-center ">
        <div className="w-75 container ">
          <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
            <i className="mt-2" class="fa-solid fa-arrow-left"></i>Back to Home
          </Link>
          <div className="card shadow p-5 bg-success">
            <div className="row align-items-center ">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="https://windowsreport.com/wp-content/uploads/2020/04/Login-Error-1200x1200.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center  flex-column">
                  <h1 style={{ fontSize: "40px" }} className="fw-bolder mb-3">
                    Project Hub
                  </h1>
                  <h5 className="mb-4">
                    {isRegisterFrom
                      ? "sign up to your Account"
                      : "sign in to your Account"}
                  </h5>

                  <Form className="text-light  w-100">
                    {isRegisterFrom && (
                      <Form.Group className="mb-3" controlId="formBasiName">
                        <Form.Control type="text" placeholder="Enter UserName"
                         value={userData.username} onChange={e=>{setUserData({...userData,username:e.target.value})}} />
                        
                      </Form.Group>
                    )}
                      <Form.Group className="mb-3" controlId="formBasiEmail">
                        <Form.Control type="email" placeholder="Enter your email "
                        value={userData.email} onChange={e=>{setUserData({...userData,email:e.target.value})}} /> 
                        
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasipassword">
                        <Form.Control type="password" placeholder="Enter UserName"                           
                         value={userData.password} onChange={e=>{setUserData({...userData,password:e.target.value})}} />
                        
                      </Form.Group>

                      {
                        isRegisterFrom?
                        <div>
                        <button onClick={handleRegister} className='btn btn-light mb-2'>Register</button>
                        <p>Already have Account? Click here to <Link to={'/login'}>Login</Link></p>
                        </div>:
                         <div>
                          <button onClick={handlelogin} className='btn btn-light mb-2'>Login</button>
                         <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                     </div>

                      }
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <ToastContainer />
    </>
  );
}

export default Auth;

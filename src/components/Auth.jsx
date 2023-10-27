import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Auth({ register }) {
  const isRegisterFrom = register ? true : false;
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
                        <Form.Control type="text" placeholder="Enter UserName" />
                        
                      </Form.Group>
                    )}
                      <Form.Group className="mb-3" controlId="formBasiEmail">
                        <Form.Control type="email" placeholder="Enter your email " />
                        
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasipassword">
                        <Form.Control type="password" placeholder="Enter UserName" />
                        
                      </Form.Group>

                      {
                        isRegisterFrom?
                        <div>
                        <button className='btn btn-light mb-2'>Register</button>
                        <p>Already have Account? Click here to <Link to={'/login'}>Login</Link></p>
                        </div>:
                         <div>
                          <button className='btn btn-light mb-2'>Login</button>
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
    </>
  );
}

export default Auth;

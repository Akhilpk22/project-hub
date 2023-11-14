import React from "react";
import { Form } from "react-router-dom";

function Myprofile() {
  return (
    <>
      <div className="card mb-3">
        <div className=" d-flex justify-content-around  align-items-center ">
          <div>
            <h1>My Profile</h1>
          </div>
          <div></div>
        </div>
        <div className="d-flex justify-content-center align-items-center  mt-3">
          <img
            className="img-fluid"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuG-1sL9aUGxNGXIL0xLZQ39gV3gCnw7iUg&usqp=CAU"
            alt=""
          />
          
        </div>
        <div>
          <form>
            <div class="mb-3 d-flex  justify-content-center align-items-center mt-5">
              <input
                type="email"
                class="form-control w-75 "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="GitHub"
              />
            </div>
            <div class="mb-3 d-flex  justify-content-center align-items-center mt-2">
              <input
                type="email"
                class="form-control w-75 "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Linkedin"
              />
            </div>

            <div className="d-flex  justify-content-center align-items-center mb-3"><button className="btn w-75  border bg-success  ">Update</button></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Myprofile;

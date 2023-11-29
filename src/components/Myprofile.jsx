import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { BASE_URL } from "../Services/baseUrl";





function Myprofile() {
  const [open, setOpen] = useState(false);

  const [userProfile,setuserProfile] = useState({
    username:"",email:"",password:"",github:"",linkedin:"",profile:"" 
   })
  const [existingImage,setexistingImage]= useState("")
  const [preview, setPreview] = useState("");

   useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("existingUser"))
    if(user.profile){
      
      setuserProfile({...userProfile,username:user.username,email:user.email,password:user.password,profile:"",github:user.github,linkedin:user.linkedin})
      setexistingImage(user.profile)
    }
    else{
      setexistingImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRGEiiYRifQBKnnACuR1EVSKFHznpUKQLiHYuo_a-Ew&s")
    }
   },[])

   useEffect(()=>{
    if(userProfile.profile){
      setPreview(URL.createObjectURL(userProfile.profile))
    }else{
      setPreview("")
    }

   },[userProfile.profile])
  

  
  return (
    <>
     <div className="card shadow p-5">
      <div className="d-flex justify-content-between">
        <h4>MyProfile</h4>
        <Button
          className="btn btn-outline-dark"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <i class="fa-solid fa-chevron-down"></i>
        </Button>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="row justify-content-center mt-3">
            <label className="text-center">
              <input
                style={{ display: "none" }}
                type="file"
                onChange={e=>setuserProfile({...userProfile,profile:e.target.files[0]})}
                />
          
                <img
                  height={"200px"}
                  width={"200px"}
                  className="rounded-circle border"
                  src={preview?preview:`${BASE_URL}/uploads/${existingImage}`}
                  alt="Uploading picture"/>

            </label>

            <div className="mt-3">
              <input
                
                placeholder="Github"
                className="form-control"
                type="text"
                value={userProfile.github}
                onChange={e=>setuserProfile({...userProfile,github:e.target.value})}
              />
            </div>
            <div className="mt-3">
              <input
                
                value={userProfile.linkedin}
                onChange={e=>setuserProfile({...userProfile,linkedin:e.target.value})}
                placeholder="Linkedin"
                className="form-control"
                type="text"
              />
            </div>

            <div className="mt-3 btn">
              <Button  className="btn w-100">Update</Button>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
    </>
  );
}

export default Myprofile;

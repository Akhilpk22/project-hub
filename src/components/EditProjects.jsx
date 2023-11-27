import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BASE_URL } from "../Services/baseUrl";
import { editProjectAPI } from "../Services/allAPI";
import { editProjectResponseContext } from "../contexts/ContextsShares";


function EditProjects({ project }) {

  // context API
  const {editProjectResponse, seteditProjectResponse}= useContext(editProjectResponseContext)


  const [show, setShow] = useState(false);

  const handleClose = () =>{

    setShow(false);
    setprojectDetails({
      id: project._id,
    title: project.title,
    languages:project.languages,
    overview:project.overview ,
    github: project.github,
    website: project.website,
    projectImage: "",

    });
    setpreview("")
  }

  const handleShow = () => setShow(true);

  

  const [projectDetails, setprojectDetails] = useState({
    id: project._id,
    title: project.title,
    languages:project.languages,
    overview:project.overview ,
    github: project.github,
    website: project.website,
    projectImage: ""
  });
  const [preview,setpreview]=useState("")

    useEffect(() => {
    if (projectDetails.projectImage) {
      setpreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);



  const handleUpdate=  async()=>{
    const {id,title,languages,overview,github,website,projectImage}=projectDetails
    if(!title || !languages || !overview || !github || !website){
      alert("please fill the from completely!!!")
    }else{
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("overview", overview);
      reqBody.append("github", github);
      reqBody.append("website", website);
      preview?reqBody.append("projectImage", projectImage):reqBody.append("projectImage",project.projectImage)
      const token = sessionStorage.getItem("token")
      if(preview){
        const reqHeader = {

          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`

        }
        
        // api call

        const result = await editProjectAPI(id,reqBody,reqHeader)
        if(result.status===200){
          handleClose()
          // pass response to  my projects
          seteditProjectResponse(result.data)

        }else{
          console.log(result);
          alert(result.response.data)
        }

      }else{

        const reqHeader = {

          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`

        }
        // api call
        const result = await editProjectAPI(id,reqBody,reqHeader)
        if(result.status===200){
          handleClose()

          // pass response to  my projects
          seteditProjectResponse(result.data)

        }else{
          console.log(result);
          alert(result.response.data)
        }
      }
    }

  }

  return (
    <>
      <button onClick={handleShow} className="btn">
        <i class="fa-solid fa-pen-to-square fa-2x"></i>
      </button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 ">
              <label>
                <input type="file" style={{ display: "none" }}
                 onChange={e=>setprojectDetails({...projectDetails,projectImage:e.target.files[0]})}
                 />
                <img
                  className="img-fluid"
                  src={preview?preview:`${BASE_URL}/Uploads/${project.projectImage}`}
                  alt=""
                />
              </label>
            </div>
            <div className="col-6 ">
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Project Title"
                value={projectDetails.title}
                onChange={e=>setprojectDetails({...projectDetails,title:e.target.value})}

              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Languages Used"
                value={projectDetails.languages}
                onChange={e=>setprojectDetails({...projectDetails,languages:e.target.value})}

              />

              <input
                type="text"
                className="form-control mt-2"
                placeholder="GitHub Link"
                value={projectDetails.github}
                onChange={e=>setprojectDetails({...projectDetails,github:e.target.value})}
              />
              <input
                type="text"
                className="form-control mt-2 "
                placeholder="Website link"
                value={projectDetails.website}
                onChange={e=>setprojectDetails({...projectDetails,website:e.target.value})}

              />

              <input
                type="text"
                className="form-control mt-2 "
                placeholder="Project OverView"
                value={projectDetails.overview}
                onChange={e=>setprojectDetails({...projectDetails,overview:e.target.value})}

              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProjects;

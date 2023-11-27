import React, { useEffect, useState } from "react";
import Hader from "../components/Hader";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { allprojectsAPI } from "../Services/allAPI";

function Projects() {
  const [searchKey,setsearchKey] = useState("")

  const [allprojects,setallprojects] = useState([])
  const getallprojects = async ()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reHeader ={
        "Content-Type":"application/json",
         "Authorization": `Bearer ${token}`
      }
      const result = await allprojectsAPI(searchKey,reHeader)
      if(result.status===200){
        setallprojects(result.data)
      }else{
        console.log(result);

      }
    }
  }
  useEffect(()=>{
    getallprojects()
  },[searchKey])


  return (
    <>
      <div>
        <Hader />
      </div>
      <div style={{ marginTop: "100px" }} className="projects">
        <h1 className="text-center mb-5">All Projects</h1>

        <div className="d-flex justify-content-center align-items-center  w-100">
          <div className="d-flex w-75 border rounded mb-5">
            <input
              type="text"
              className="form-control "
              placeholder="search projects by technology"

              onChange={e=>setsearchKey(e.target.value)}
            />
            <i style={{marginLeft:'-40px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
        
        <Row className="m-3">
        {allprojects?.length > 0
              ? allprojects.map((project) => (
                  <Col sm={12} md={6}lg={4}>
                    <ProjectCard project={project} />
                  </Col>
                ))
              : null}
          {/* {allprojects?.length>0?allprojects?.map(project=>{
             <Col sm={12} md={6} lg={4}>
             <ProjectCard project={project} />
           </Col>
          }):null
           } */}
          
        </Row>
      </div>
    </>
  );
}

export default Projects;

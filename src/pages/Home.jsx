import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import projectphoto from "../images/project-team.png";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { homeProjectAPI } from "../Services/allAPI";

function Home() {
  const [loggedin,setLoggedin] = useState(false)
  const [homeprojects,sethomeprojects] =useState([])

  const getHomeProjects = async()=>{
    const result= await homeProjectAPI()
    if(result.status===200){
      sethomeprojects(result.data)
    }else{
      console.log(result);
      console.log(result.response.data);

    }
  }
  // console.log(homeprojects);

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true)
    }else{
      setLoggedin(false)
    }
    // api call function
    getHomeProjects()
  },[])
  return (
    <>
      {/* landing -section  */}
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#90ee90" }}
        className="container-fluid rounded-2"
      >
        <Row className="align-items-center p-5">
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: "60px" }} className="fw-bolder">
              Project Hub
            </h1>
            <p>
              One stop destination for all software developemnt projects Where
              user can add and manage their projects As well access all projects
              available in our website ... what waiting for !!!!
            </p>

            {
              loggedin?
              <Link to={'/dashbord'} className="btn btn-warning">
              Manage your projects
              <i class="fa-solid fa-right-long fa-beat ms-2"></i>
            </Link>:
            <Link to={'/login'} className="btn btn-warning">
              Start to Explore
              <i class="fa-solid fa-right-long fa-beat ms-2"></i>
            </Link>}

          </Col>
          <Col sm={12} md={6}>
            <img
              style={{ marginTop: "100px" }}
              className="w-75"
              src={projectphoto}
              alt=""
            />
          </Col>
        </Row>
      </div>

      {/* all project */}
      <div className="all-project mt-5">
        <h1 style={{}} className="text-center mb-5">
          All projects
        </h1>
        <marquee scrollAmount={25}>
        <Row>
            {homeprojects?.length > 0
              ? homeprojects.map((project) => (
                  <Col sm={12} md={4}>
                    <ProjectCard project={project} />
                  </Col>
                ))
              : null}
          </Row>
        </marquee>
        <div className="text-center mb-5">
          <Link style={{ textDecoration: "none" }} to={"/project"}>
            View more project
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

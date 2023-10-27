import React from "react";
import { Col, Row } from "react-bootstrap";
import projectphoto from "../images/project-team.png";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

function Home() {
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
            <Link to={'/login'} className="btn btn-warning">
              Start to Explore
              <i class="fa-solid fa-right-long fa-beat ms-2"></i>
            </Link>
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
          <Row className="mb-5  ">
            <Col clas sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>           
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

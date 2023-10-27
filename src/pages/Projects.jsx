import React from "react";
import Hader from "../components/Hader";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

function Projects() {
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
            />
            <i style={{marginLeft:'-40px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
        <Row className="m-3">
          <Col sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Projects;

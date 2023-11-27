import React, { useState } from "react";
import {  Card, Col, Modal, Row } from "react-bootstrap";
import projectcardpic from "../images/project-photo.png";
import { BASE_URL } from "../Services/baseUrl";

function ProjectCard({project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {project&&<Card onClick={handleShow} className="shadow mb-5 btn">
        <Card.Img variant="top" height={"300px"} src={project?`${BASE_URL}/Uploads/${project?.projectImage}`:projectcardpic} />
        <Card.Body>
          <Card.Title>{project?.title}</Card.Title>
        </Card.Body>
      </Card>}

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img
                style={{ height: "200px" ,width:"400px"}}
                className="img-fluid"
                src={project?`${BASE_URL}/Uploads/${project?.projectImage}`:projectcardpic}
                alt="proect-images"
              />
            </Col>
            <Col md={6}>
              <h2>{project.title}</h2>
              <p>
                PROJECT-OVERVIEW:{project.overview}{" "}

              </p>
              <p>Language Use:<span>{project.languages}</span></p>
            </Col>
          </Row>

          <div className="mt-3">
            <a href={project.github} target='_blank' className="me-3 btn"><i class="fa-brands fa-square-git fa-3x" style={{color:'#0c0d0d'}}></i></a>
            <a href={project.website} target='_blank' className="me-3 btn"><i class="fa-solid fa-link fa-3x"></i></a>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;

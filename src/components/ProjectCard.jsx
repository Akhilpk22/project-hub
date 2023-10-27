import React, { useState } from "react";
import {  Card, Col, Modal, Row } from "react-bootstrap";
import projectcardpic from "../images/project-photo.png";

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className="shadow mb-5 btn">
        <Card.Img variant="top" src={projectcardpic} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img
                style={{ height: "200px" }}
                className="img-fluid"
                src={projectcardpic}
                alt="proect-images"
              />
            </Col>
            <Col md={6}>
              <h2>project-title</h2>
              <p>
                PROJECT-OVERVIEW:destination for all software developemnt
                projects Where user can add and manage their projects As well
                access all projects available in our website ...{" "}

              </p>
              <p>Language Use:<span>HTML,CSS,REACT</span></p>
            </Col>
          </Row>

          <div className="mt-3">
            <a href="https://github.com/Akhilpk22/E-commerce-app.git" target='_blank' className="me-3 btn"><i class="fa-brands fa-square-git fa-3x" style={{color:'#0c0d0d'}}></i></a>
            <a href="https://e-commerce-app-woad.vercel.app/" target='_blank' className="me-3 btn"><i class="fa-solid fa-link fa-3x"></i></a>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;

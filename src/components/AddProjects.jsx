import React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



function AddProjects() {
  //   modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          AddProject
        </Button>

        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-6 ">
                
                <label  >
                    <input type="file" style={{display:"none"}} />
                  <img className="img-fluid"
                    src="https://static.thenounproject.com/png/1079715-200.png"
                    alt=""
                  />
                </label>
              </div>
              <div className="col-6 ">
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Project Title"
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Languages Used"
                />

                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="GitHub Link"
                />
                <input
                  type="text"
                  className="form-control mt-2 "
                  placeholder="Website link"
                />

                <input
                  type="text"
                  className="form-control mt-2 "
                  placeholder="Project OverView"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default AddProjects;

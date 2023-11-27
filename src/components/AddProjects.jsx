import React, { useContext, useEffect } from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addprojectsAPI } from "../Services/allAPI";
import { addProjectResponseContext } from "../contexts/ContextsShares";

function AddProjects() {

const{addProjectResponse,setaddProjectResponse}= useContext(addProjectResponseContext)

  //   modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setprojectDetails({
      title: "",
      languages: "",
      overview: "",
      github: "",
      website: "",
      projectImage: "",
    });
    setpreview("");
  };
  const handleShow = () => setShow(true);

  // 1 state
  const [projectDetails, setprojectDetails] = useState({
    title: "",
    languages: "",
    overview: "",
    github: "",
    website: "",
    projectImage: "",
  });
  // must be log in the state name
  // console.log(projectDetails);

  // 2 state images
  const [preview, setpreview] = useState("");
  // find state tokens
  const [token, setToken] = useState("");

  // this useEffect that means objects url in get images
  useEffect(() => {
    if (projectDetails.projectImage) {
      setpreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);

  // find token  useEffect
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  // handle add
  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, languages, overview, projectImage, github, website } =
      projectDetails;
    if (
      !title ||
      !languages ||
      !overview ||
      !projectImage ||
      !github ||
      !website
    ) {
      alert("please fill the from !!!!");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("overview", overview);
      reqBody.append("projectImage", projectImage);
      reqBody.append("github", github);
      reqBody.append("website", website);

      if (token) {
         const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };
        const result = await addprojectsAPI(reqBody,reqHeader);

        if (result.status === 200) {
          console.log(result.data);
          handleClose()
          alert("project add")
          setaddProjectResponse(result.data)

        } else {
          console.log(result);
          console.log(result.response.data);
        }
      }
    }
  };

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
                <label>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      setprojectDetails({
                        ...projectDetails,
                        projectImage: e.target.files[0],
                      })
                    }
                  />
                  <img
                    className="img-fluid"
                    src={
                      preview
                        ? preview
                        : "https://static.thenounproject.com/png/1079715-200.png"
                    }
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
                  onChange={(e) =>
                    setprojectDetails({
                      ...projectDetails,
                      title: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Languages Used"
                  value={projectDetails.languages}
                  onChange={(e) =>
                    setprojectDetails({
                      ...projectDetails,
                      languages: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="GitHub Link"
                  value={projectDetails.github}
                  onChange={(e) =>
                    setprojectDetails({
                      ...projectDetails,
                      github: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-2 "
                  placeholder="Website link"
                  value={projectDetails.website}
                  onChange={(e) =>
                    setprojectDetails({
                      ...projectDetails,
                      website: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  className="form-control mt-2 "
                  placeholder="Project OverView"
                  value={projectDetails.overview}
                  onChange={(e) =>
                    setprojectDetails({
                      ...projectDetails,
                      overview: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default AddProjects;

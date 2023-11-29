import React, { useContext, useEffect, useState } from "react";
import AddProjects from "./AddProjects";
import { deleteprojectAPI, userprojectAPI } from "../Services/allAPI";
import {
  addProjectResponseContext,
  editProjectResponseContext,
} from "../contexts/ContextsShares";
import EditProjects from "./EditProjects";

function MyProject() {
  const { editProjectResponse, seteditProjectResponse } = useContext(
    editProjectResponseContext
  );

  const { addProjectResponse, setaddProjectResponse } = useContext(
    addProjectResponseContext
  );

  const [userprojects, setUserprojects] = useState([]);

  const getUserProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };
      const result = await userprojectAPI(reHeader);
      if (result.status === 200) {
        setUserprojects(result.data);
      } else {
        console.log(result);
      }
    }
  };
  useEffect(() => {
    getUserProjects();
  }, [addProjectResponse, editProjectResponse]);

  //  delete
  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token");


    const reHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };

    const result = await deleteprojectAPI(id,reHeader)
    if(result.status===200){
      // page reload
      getUserProjects();

    }else{
      alert(result.response.data)
    }
  };

  return (
    <>
      <div className=" card shadow p-3 ">
        <div className="d-flex">
          <h2>My Projects</h2>
          <div className="ms-auto">
            <AddProjects />
          </div>
        </div>

        <div className="mt-4">
          {/* collection of user projects */}
          {userprojects?.length > 0 ? (
            userprojects.map((project) => (
              <div className="border d-flex align-items-center rounded p-2 mb-2">
                <h5>{project.title}</h5>
                <div className="icon ms-auto">
                  <EditProjects project={project} />
                  <a href={`${project.github}`} target="_blank" className="btn">
                    <i class="fa-brands fa-github fa-2x"></i>
                  </a>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="btn"
                  >
                    <i class="fa-solid fa-trash fa-2x"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-danger fw-bolder fs-5 mt-3">
              No Project Uploaded Yet!!!
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default MyProject;

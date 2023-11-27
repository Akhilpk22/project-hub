import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

// register
export const registerAPI =async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}
// login
export const loginAPI =async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}
// add projects 
 export const addprojectsAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)

 }
//  home projects 
export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home-projects`,"","")
}

// allproject
export const allprojectsAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all?search=${searchKey}`,"",reqHeader)
}

// user projects 
export const userprojectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-projects`,"",reqHeader)

}
// update user projects
export const editProjectAPI = async (projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/projects/edit/${projectId}`,reqBody,reqHeader)
}

// delete user projects
export const deleteprojectAPI = async(projectId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/projects/remove/${projectId}`,{},reqHeader)
}
import React from 'react'
import AddProjects from './AddProjects'

function MyProject() {
  return (
    <>
      <div className=' card shadow p-3 '>
        <div className='d-flex'>
          <h2>My Projects</h2>
          <div className='ms-auto'><AddProjects/></div>

        </div>
        <div className=' shadow mt-3 rounded-3'>
          {/* collections of user projects */}
          <div className=' border d-flex   align-items-center  p-2'>
              <h4>project file</h4>
              <div className=' icon ms-auto'>
                      <button className='btn'><i class="fa-solid fa-3 fa-pen-to-square"></i></button>
                      <button className='btn'><i class="fa-brands fa-square-git"></i></button>
                      <button className='btn'><i class="fa-solid fa-trash"></i></button>
              </div>

              

          </div>
            
        </div>
        <div className='mt-3'>
            <h4 className='text-danger '>No projects uploaded yet!..</h4>
        </div>
      </div>
    </>
  )
}

export default MyProject
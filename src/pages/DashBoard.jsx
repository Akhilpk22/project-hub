import React from 'react'
import Hader from '../components/Hader';
import { Col, Row } from 'react-bootstrap';
 
import MyProject from '../components/MyProject';

import  MyProfile from '../components/Myprofile'


function DashBoard() {
  return (
    <>
      <Hader insideDashbord/>
      <Row style={{marginTop:'100px'}} className='container-fluid'>
          <Col sm={12} md={8} >
            <h2>Welcome <span style={{color:'red'}}>User</span></h2>
                {/* my project section */}
            <MyProject/>
            
          </Col>
          <Col sm={12} md={4} >
              {/* my profile section */}
              <MyProfile/>
          </Col>
      </Row>
    </>
  )
}

export default DashBoard;
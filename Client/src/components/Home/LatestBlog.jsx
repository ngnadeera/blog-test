import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'


export const LatestBlog = () => {
  return (
    <div>
        <Container fluid>
            <Row className='latestBlog'>
                
                <Col>
                <h4 className='latestBlog-caption'>Latest Blog Posts</h4>
                <p className='latestBlog-sub-caption' style={{marginTop:'-5px'}}>Don't miss out latest Paraqum blogs</p>
                <hr style={{marginBottom:'-10px'}} />
                </Col>
          
            </Row>

        </Container>
    </div>
  )
}

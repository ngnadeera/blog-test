import React from "react";
import { Button } from "@mui/material";
import Logo from "../assets/pq_white.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Footer() {
  return (
    <div className="text-center" style={{ backgroundColor: "black", marginTop:'20px' }}>
      <Container className="p-4">
 
          <form action="">
            <Container fluid>
                <Row  >
                <Col>
                    <p  style={{ color: "white" }}>
                    <strong>Sign up for our newsletter</strong>
                    </p>
                </Col>

                <Col >
                    <input
                    type="email"
                    placeholder="Email address"
                    className="mb-4 form-control"
                    />
                </Col>

                <Col>
                    <Button
                    variant="outlined"
                    sx={{ color: "white", outlineColor: "white" }}
                    >
                    Subscribe
                    </Button>
                </Col>
                </Row>
</Container>
          </form>
 

        <section className="mb-4">
          <Row className="d-flex justify-content-center">
            <Col className="md-5 xs-6">
              <img
                src={Logo}
                alt="logo"
                style={{ width: "100px", marginTop: "2%" }}
              />
            </Col>
            <p className="mb-4 mt-3" style={{ color: "#ffffffe1" }}>
              <q> Paraqum Technologies </q>
            </p>
            <p style={{ color: "#ffffffa9" }}>
            Paraqum Technologies is one of the emerging network product manufacturers in the Asia Pacific region that specializes in network intelligence and control. In addition to our network products we offer a wide range of high-end electronic design solutions for customer specifications. Driven by our passionate team of individuals, we always bring the latest technology into our products.
            </p>
          </Row>
        </section>

        <section>
          <Row>
            <Col
              lg="4"
              md="12"
              className="mb-4 mb-md-0 d-flex flex-column align-items-center"
            >
              <h5 className="text-uppercase mt-4 mb-3" style={{color:'white'}}>Contact Us</h5>
              <ul className="list-unstyled mb-0 d-flex flex-column align-items-start">
                <li className="d-flex align-items-center mb-2">
                  <FaxIcon sx={{ marginRight: "8px" }} />
                  <span style={{ color: "#ffffffa9" }}>
                    Fax: +94 41 2255 565
                  </span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <LocalPhoneIcon sx={{ marginRight: "8px" }} />
                  <span style={{ color: "#ffffffa9" }}>
                    Phone: +94 41 2255 565
                  </span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <EmailIcon sx={{ marginRight: "8px" }} />
                  <span style={{ color: "#ffffffa9" }}>
                    Email: example@example.com
                  </span>
                </li>
              </ul>

              
            </Col>

            <Col
              lg="4"
              md="6"
              className="mb-4 mb-md-0 d-flex flex-column align-items-center d-xs-none"
            >
              <h5 className="text-uppercase mt-4 mb-3" style={{color:'white'}}>About Us</h5>
              <ul className="list-unstyled mb-0 d-flex flex-column align-items-start">
                <li className="d-flex align-items-center mb-2">
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "#ffffffa9" }}
                  >
                    About
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "#ffffffa9" }}
                  >
                    Staff
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "#ffffffa9" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>

            <Col
              lg="4"
              md="6"
              className="mb-4 mb-md-0 d-flex flex-column align-items-center"
            >
              <h5 className="text-uppercase mt-4 mb-3" style={{color:'white'}}>Navigation</h5>
              <ul className="list-unstyled mb-0 d-flex flex-column align-items-start">
                <li className="d-flex align-items-center mb-2">
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "#ffffffa9"}}
                  >
                    About
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "#ffffffa9" }}
                  >
                    Staff
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "#ffffffa9" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </section>
      </Container>

      <div
        className="text-center p-2"
        style={{ backgroundColor: "#292929" }}
      >
        <span style={{color:'#ffffffa9'}}> © 2023 Copyright: </span>
        
        <a style={{textDecoration:"none"}} className="text-white" href="https://paraqum.com/">
          Paraqum.com
        </a>
      </div>
    </div>
     );
    }

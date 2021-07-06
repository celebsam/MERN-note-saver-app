import React from "react";
import "./LandingPage.css";
import { Container, Row, Button } from "react-bootstrap";

const LandingPage = () => {
   return (
      <div
         style={{
            // backgroundImage: `url("./img/pexels-karolina-grabowska-4195499.jpg")`,
            backgroundRepeat: "no-repeat",
         }}
         className="main"
      >
         <Container>
            <Row>
               <div className="intro-text">
                  <div className="text-container">
                     <h1 className="landing-page-heading">
                        Welcome to Note saver
                     </h1>
                     <p>A trusted place for all your notes.</p>
                  </div>
                  <div className="button-container">
                     <a href="/login">
                        <Button size="lg" className="landingButton">
                           Login
                        </Button>
                     </a>
                     <a href="/register">
                        <Button
                           size="lg"
                           className="landingButton"
                           variant="outline-primary"
                        >
                           Register
                        </Button>
                     </a>
                  </div>
               </div>
            </Row>
         </Container>
      </div>
   );
};

export default LandingPage;

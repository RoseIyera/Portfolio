import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Happy.png";
import projImg2 from "../assets/img/lucid.png";
import projImg3 from "../assets/img/level.png";
import projImg4 from "../assets/img/Freecode.png";
import projImg5 from "../assets/img/pac.png";
import TrackVisibility from 'react-on-screen';

export const  Projects = () =>{

    /*Array to call all my projects*/
    const projects = [
        {
          title: "Happy Feast POS & Inventory ",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "LucidView",
          description: "Design & UI Development",
          imgUrl: projImg2,
        },
        {
          title: "Level UP Startup",
          description: "Design",
          imgUrl: projImg3,
        },
        {
          title: "Pacman",
          description: "Development",
          imgUrl: projImg5,
        },
       
      ];

      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p> Here are a few projects that I have worked on during my studies and past internships. I encourage you to check out my guithub too and to contact me for any more information regarding
                      these projects.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <p> Stick around the journey to find out what other projects I end up dabbling in.</p>                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <p> Stick around the journey to find out what other projects I end up dabbling in.</p>                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
}
import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Happy.png";
import projImg2 from "../assets/img/car.png";
import projImg3 from "../assets/img/level.png";
import projImg4 from "../assets/img/Freecode.png";
import projImg5 from "../assets/img/pac.png";
import TrackVisibility from 'react-on-screen';


export const  Projects = () =>{

  

    /*Array to call all my projects*/
    const projects = [
        {
          title: "Happy Feast Website, POS & Inventory",
          description: "Design & Development",
          imgUrl: projImg1,
          linkUrl: "https://www.youtube.com/watch?v=mLOmuH0Pcbo",
        },
        {
          title: "BMW ITHub Supercar Analysis Project",
          description: "Data Analysis",
          imgUrl: projImg2,
          linkUrl: "https://drive.google.com/file/d/14WZlbl5nP4nwy7aGxWPqkaWBMLIC7V-a/view?usp=sharing",
        },
        {
          title: "Level UP Startup",
          description: "Design",
          imgUrl: projImg3,
          linkUrl: "https://www.figma.com/proto/LA1q3i6sGamepjv6rp3iuz/Level-Up-Wireframes?node-id=33%3A1527&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=33%3A1527",
        },
        {
          title: "Pacman",
          description: "Development",
          imgUrl: projImg5,
          linkUrl: "https://github.com/RoseIyera/Rosie-Pacman",
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
                    <h2>Projects & Background </h2>
              
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Certifications</Nav.Link>
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
                        <h5> BCom Informatics & Information systems - University of Pretoria</h5> 
                        <h6>Program Educational Objectives</h6>
                            <p>
                                Informatics graduates have a broad business understanding and a real world perspective to be Information Systems enablers in organizations as they understand the strategic significance of Information Systems.
                                They possess strong analytical and critical thinking skills to be able to apply both traditional and old concepts and skills.
                                They are able to design and implement information technology solutions that enhance organizational performance.
                                They exhibit strong ethical principles and have good interpersonal communication and team skills.
                                They hold skills in basic statistical and mathematical models that can be used for analyzing data.
                                They understands that systems consist of people, hardware, software and data.
                            </p>                       
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <ul>
                        <li><a href="https://freecodecamp.org/certification/BeeRo/front-end-development-libraries" >Front End Development Libraries</a></li>
                        <li><a href="https://freecodecamp.org/certification/BeeRo/responsive-web-design">Responsive Web Design</a></li>
                        <li><a href="https://www.hackerrank.com/certificates/64d629fec8e2">SQL Advanced</a></li>
                        <li><a href="https://freecodecamp.org/certification/BeeRo/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</a></li>
                        <li><a href="https://www.sololearn.com/Certificate/1092-24434076/jpg">Angular+NestJS</a></li>
                        <li><a href="https://www.sololearn.com/certificates/course/en/24434076/1080/landscape/png">C#</a></li>
                  
                    </ul>                       
                    </Tab.Pane>
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
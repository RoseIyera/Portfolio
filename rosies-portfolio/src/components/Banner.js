import { useState, useEffect } from "react";
import {Container,Row,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Banner  =() =>{

    const[loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer"];
    const [index, setIndex] = useState(1);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])

      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }


    return(
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                      {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline" >Welcome to my portfolio</span>
                        <h1>{`Hey there, I am Rose Iyera. `}<span className="wrap">{text}</span></h1>
                        <p>My journey in software development has been fasinating, if anything it reminds me of my favorite poem "The Road not Taken" by Robert Frost .
                          I have a habit of dabbling into directions that even I couldn't predict and so I am very excited to see where the next turn
                          in my journey will lead me. I am currently in the process of spreading my wings in the world of tech.I invite you to stick around
                          for the ride, fasten your seat belts, let's go!
                          </p>
                        <button onClick={() => console.log('connect')}>Let's connect<a href="https://www.linkedin.com/in/rose-iyera-0550681b1/"><ArrowRightCircle size={25}/></a></button>
                        </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={headerImg} alt="Header Img" />
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
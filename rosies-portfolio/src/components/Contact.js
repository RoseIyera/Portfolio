import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// npm i @emailjs/browser
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n6z8dzc",
        "template_toe8nd9",
        form.current,
        "SVRmxUfXztTjKU5WW"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          form.current.reset();

        // Display a success message
        alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          // Display an error message
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  

  return (
    <section className="contact" id="connect">
      <Container>
       <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
            <form ref={form} onSubmit={sendEmail}>

            <Col size={12} sm={6} className="px-1">
            <h2>Get In Touch</h2>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Jhone Doe" />
            </Col>

            <Col size={12} sm={6} className="px-1">
              <label>Email</label>
              <input type="email" name="user_email" />
            </Col>

            <Col size={12} sm={6} className="px-1">
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </Col>
              </form>
              </div>}
            </TrackVisibility>
          </Col>
            </Row>
            </Container>
          </section>

  );
};
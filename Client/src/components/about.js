import React, { useState } from "react";
import "../styles/about.css";
function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="abt">
      <h1 className="abt_title">About us</h1>
      <div className="para_box">
        <div className="para1">
          <p className="para">
            Welcome to Emotunes, where understanding and improving your mood is
            just a chat away! We believe that everyone deserves to feel their
            best, and our mission is to provide you with a supportive space
            where you can explore and enhance your emotional well-being.
            <span className={showMore ? "visible" : "hidden"}>
              Our Mission Our primary mission is to offer a unique and
              personalized experience that helps you analyze your mood and
              provides actionable suggestions to uplift your spirits.We
              understand that life can be challenging at times, and our goal is
              to be there for you, offering guidance and support whenever you
              need it. How We Work Using advanced mood analysis algorithms and
              interactive chat functionalities, our platform engages with you in
              a natural and empathetic manner. Emotunes is your go-to platform
              for personalized emotional support. Our approach prioritizes your
              individual needs and preferences, guaranteeing that our
              suggestions resonate with you. We hold confidentiality in the
              highest regard, ensuring that all your conversations remain
              private, providing a safe space for self-expression. Our
              recommendations are rooted in psychological research and expert
              insights, offering you reliable and effective advice. With a
              user-friendly interface designed for simplicity and accessibility,
              Emotunes is suitable for users of all ages and tech-savviness
              levels. Our team comprises passionate professionals from diverse
              backgrounds, including psychologists, developers, and designers,
              all dedicated to enhancing mental well-being. Join our community
              today and embark on a journey towards better emotional health.
              Whether you're feeling low and need a pick-me-up or simply want to
              understand your emotions better, Emotunes is here to support you
              every step of the way. Thank you for choosing Emotunes as your
              partner in emotional well-being. Together, let's create a
              brighter, happier you!
            </span>
          </p>
        </div>

        <button className="read" onClick={toggleShowMore}>
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
      <div className="cont">
        <h1 className="cont-head">Contact us</h1>
        <div className="elem1"></div>
      </div>
    </div>
  );
}

export default About;

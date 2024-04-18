import React from "react";
import CV from "../../assets/pdf/SpinelliCV.pdf";
import { FaDownload } from "react-icons/fa";
import profile1 from "../../assets/img/profile-1.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about container">
      <div className="about__content grid">
        <div className="about__info">
          <h2 className="about__title">
            Sobre <span>Mi</span>
          </h2>
          <div className="about__description">
            <p>¡Hola! Me llamo Sofia Spinelli, tengo 21 años, </p>
            <p> y vivo en Buenos Aires, Argentina.</p>
            <p>
              Me considero una persona curiosa, responsable y alegre. Me
              apasiona el hecho de crear cosas excelentes con lineas de codigo,
              soy una persona a la cual le gusta estar en constante aprendizaje.
            </p>
          </div>
          <a href={CV} download="" className="btn">
            Descargar CV
            <span>
              <FaDownload />
            </span>
          </a>
        </div>
        <div className="about__img">
          <div className="border-img">
            <img
              src={profile1}
              alt="img__profile2"
              className="about__profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

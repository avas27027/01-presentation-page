import React, { useEffect, useRef } from "react";
import { useInView } from "react-hook-inview";
import { FiLink2 } from "react-icons/fi";

export default function About(props: { view: (node: Element | null) => void }) {
  const [sect, inView] = useInView();

  return (
    <section className="about">
      <div className="about__box">
        <div className="about__box-header">
          <div className="about__box-header pic" ref={sect}>
            <img
              className={inView ? "ani" : ""}
              src="https://media.licdn.com/dms/image/D5603AQH4JmNb912onw/profile-displayphoto-shrink_800_800/0/1665026354764?e=1678924800&v=beta&t=QEKDL7dPkHpeV8-Zgkam_5ZTaEqIp7TWul7qz105LFY"
              alt="Fotografia"
            />
            <div className={inView ? "ani" : ""} ref={props.view}>
              <h2>Alvaro Sotelo Vila</h2>
            </div>
          </div>
        </div>
        <div className="about__box-content">
          <h3>Acerca de mi:</h3>
          <input className="state" type="checkbox" name="show" id="show" />
          <p>
            Soy una persona <u>organizada</u> con una alta capacidad de <u>compromiso</u>,&nbsp;
            <u>decisión</u> y entusiasmo por el <u>trabajo en equipo</u>. <br /> Culminé mis estudios
            de <b>Ingeniería de Sistemas</b> con grado de bachiller en la <b>Universidad
            de Lima</b>.&nbsp;
            <span>
              <br /><br />
              Actualmente me encuentro tramitando la publicación de un artículo
              científico como requisito para el título. <br /><br />
              Poseo un buen manejo de <u>relaciones interpersonales</u> y una gran&nbsp;
              pasión por la programación, lo que me motiva a investigar en
              varias áreas de mi carrera.
              <br /><br /> Además, puedo resolver problemas bajo presión con &nbsp;
              <u>soluciones creativas</u>. &nbsp;
            </span>
            <label htmlFor="show"></label>
          </p>

          <div className="about__box-content-link">
            <a href="https://drive.google.com/file/d/16hqHAtW4nxiPoIR0zx9GKOfQjtYzGmf4/view?usp=drivesdk">
              {" "}
              <FiLink2 />
              &nbsp;CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

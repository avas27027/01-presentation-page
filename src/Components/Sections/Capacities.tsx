import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { useInView } from "react-hook-inview";

export default function Capacities(props:{view: (node: Element | null) => void}) {
  const [sect, inView] = useInView();

  const ar = [
    { nombre: "SQL", porcentaje: "90%" },
    { nombre: "PL/SQL", porcentaje: "90%" },
    { nombre: "JavaScript", porcentaje: "70%" },
    { nombre: "Python", porcentaje: "50%" },
    { nombre: "Java", porcentaje: "50%" },
    { nombre: "R", porcentaje: "50%" },
    { nombre: "Kotlin", porcentaje: "50%" },
  ];
  return (
    <section className="capacities">
      <div className="capacities-box" ref={props.view}>
        <h2 >Lenguajes de programación</h2>
        <div className="lenguajes" ref={sect}>
          {ar.map((c, index) => {
            if (index < Math.round(ar.length)) {
              return (
                <div
                  key={`bar${index}`}
                  className="bar"
                  style={{ marginLeft: `${index}%` }}
                >
                  <h3>{c.nombre}</h3>
                  <div className={`bar-back ${inView ? "ani" : ""}`}>
                    <div className="bar-tags">
                      <p>
                        B<span>asico</span>
                      </p>
                      <p>
                        M<span>edio</span>
                      </p>
                      <p>
                        A<span>vanzado</span>
                      </p>
                    </div>
                    <div className={`bar-fill ${inView ? "ani" : ""}`}>
                      <div
                        style={{
                          width: c.porcentaje,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

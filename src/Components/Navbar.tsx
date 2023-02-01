import React, { useState, useEffect } from "react";

export default function Navbar(props: { views: Array<boolean> }) {
  const [swipe, setSwipe] = useState(false);

  const secciones = [
    { nombre: "Acerca de Mí", quartile: "75%", classname: ".about" },
    { nombre: "Lenguajes", quartile: "50%", classname: ".capacities" },
    { nombre: "Certificaciones", quartile: "25%", classname: ".certifies" },
    //{ nombre: "Trabajos", quartile: "70%", classname: "" },
    { nombre: "Contacto", quartile: "10%", classname: ".contactos" },
  ];
  return (
    <div className="navbar">
      <div
        className={"navbar-space button "}
        onMouseOver={() => setSwipe(!swipe)}
        onMouseLeave={() => setSwipe(false)}
        data-active="true"
      >
        <div className="navbar-moon">
          <div
            className="navbar-moon fill"
            style={{ "--i": `${swipe ? "-100" : "0"}%` } as React.CSSProperties}
          ></div>
          <span
            style={
              {
                left: "60%",
                top: "50%",
                "--s": "30%",
              } as React.CSSProperties
            }
          ></span>
          <span
            style={
              {
                left: "10%",
                top: "10%",
                "--s": "20%",
              } as React.CSSProperties
            }
          ></span>
          <span
            style={
              {
                left: "20%",
                top: "80%",
                "--s": "13%",
              } as React.CSSProperties
            }
          ></span>
          <span
            style={
              {
                left: "80%",
                top: "20%",
                "--s": "20%",
              } as React.CSSProperties
            }
          ></span>
          <span
            style={
              {
                left: "40%",
                top: "40%",
                "--s": "10%",
              } as React.CSSProperties
            }
          ></span>
        </div>
      </div>
      <div data-active={swipe} className={"navbar-link__group "}>
        {secciones.map((s, index) => {
          return (
            <div
              key={`s-${index}`}
              onClick={() => {
                try {
                  document
                    .querySelector(s.classname)
                    ?.scrollIntoView({ behavior: "smooth" });
                } catch (e) {
                  console.log(e);
                }
              }}
              className="navbar-space"
              data-active={props.views[index]}
            >
              <div className={"navbar-title "}>
                <h2>{s.nombre}</h2>
              </div>
              <div className="navbar-moon">
                <div
                  className="navbar-moon fill"
                  style={{ "--i": s.quartile } as React.CSSProperties}
                ></div>
                <span
                  style={
                    {
                      left: "60%",
                      top: "50%",
                      "--s": "30%",
                    } as React.CSSProperties
                  }
                ></span>
                <span
                  style={
                    {
                      left: "10%",
                      top: "10%",
                      "--s": "20%",
                    } as React.CSSProperties
                  }
                ></span>
                <span
                  style={
                    {
                      left: "20%",
                      top: "80%",
                      "--s": "13%",
                    } as React.CSSProperties
                  }
                ></span>
                <span
                  style={
                    {
                      left: "80%",
                      top: "20%",
                      "--s": "20%",
                    } as React.CSSProperties
                  }
                ></span>
                <span
                  style={
                    {
                      left: "40%",
                      top: "40%",
                      "--s": "10%",
                    } as React.CSSProperties
                  }
                ></span>
              </div>
              <div
                className={`ship ${props.views[index] ? "ani" : ""}`}
                style={{
                  top: `${index + 1}0%`,
                }}
              >
                <div className="ship-capsule">
                  <div className="ship-fly"></div>
                  <div className="ship-body"></div>
                  <span></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

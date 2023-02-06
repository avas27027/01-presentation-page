import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-hook-inview";

export default function Certifies(props: {
  view: (node: Element | null) => void;
}) {
  /*
  const card = useRef<Array<HTMLDivElement>>([]);
  ref={(el) => (card.current[index] = el!)}*/
  const [sect, inView] = useInView();
  /*const [roll, setRoll] = useState(true);
  useEffect(() => {
    if (inView) {
      setRoll(true);
    } else {
      setRoll(false);
    }
  }, [inView]);

  /*const classToogle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle("roll");
  };*/

  const arCert = [
    { titulo: "Docker Essentials:", texto: "A Developer Introduction" },
    { titulo: "Data Science Foundations:", texto: "Level 1" },
    {
      titulo: "Getting started with Microservices",
      texto: "with Istio and IBM Cloud Kubernetes Service",
    },
    { titulo: "IBM Cloud Kubernetes Service", texto: "" },
    { titulo: "Text Analytics", texto: "Level 1 (V2)" },
    {
      titulo: "Watson Discovery Service Foundations",
      texto: "A Developer Introduction",
    },
    { titulo: "Watson Studio Essentials", texto: "" },
    { titulo: "Watson Visual Recognition", texto: "" },
    { titulo: "Enterprise Design Thinking Practitioner", texto: "" },
    { titulo: "IBM Garage Methodology Explorer", texto: "" },
    { titulo: "IBM New Collar Professional Skills", texto: "" },
    { titulo: "The IBM Way", texto: "" },
    {
      titulo: "DAT280x: ",
      texto: "Essential Math for Machine Learning: R Edition",
    },
  ];

  return (
    <section className="certifies">
      <div className="certifies-box">
        <h2>Certificaciones</h2>
        <div className="titulos" ref={props.view}>
          <div className="titulos-cards" ref={sect}>
            {arCert.map((c, index) => {
              return (
                <div key={`cert-${index}`} className={`card__titulos`}>
                  <h4>
                    {c.titulo} <br />
                  </h4>
                  <p>{c.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

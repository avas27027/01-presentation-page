import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/Ai";
import { BsPhone } from "react-icons/Bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
export default function Contactos(props: {
  view: (node: Element | null) => void;
}) {
  const ar = [
    "/alvaro-sotelo-vila-7a4942a1",
    "https://github.com/avas27027/",
    "+51 969541788",
    "alvaro_10_12@hotmail.com",
  ];
  const [swipe, setSwipe] = useState(true);
  const [prev, setPrev] = useState(0);
  const [post, setPost] = useState(0);
  const clickSwipe = (t: number) => {
    setPrev(post);
    setPost(t);
  };
  return (
    <section className="contactos">
      <div className="contactos box" ref={props.view}>
        <div className="contactos-center">
          <h2 className={`contactos-center-title ${swipe ? "prev" : "post"}`}>
            {swipe ? ar[prev] : ar[post]}
          </h2>
          <h2 className={`contactos-center-title ${swipe ? "post" : "prev"}`}>
            {swipe ? ar[post] : ar[prev]}
          </h2>
        </div>
        <a href="https://www.linkedin.com/in/alvaro-sotelo-vila-7a4942a1">
          <div
            onMouseEnter={() => {
              clickSwipe(0);
              setSwipe(!swipe);
            }}
            className="contactos-card"
            data-active={post === 0 ? true : false}
          >
            <p>
              <AiFillLinkedin />
            </p>
            <h2>Linkedin</h2>
            {[...Array(20)].map((c, index) => {
              return (
                <span
                  style={{
                    animationDelay: `${1 - index * 0.08}s`,
                    scale: `${0.015 * index + 0.7}`,
                    opacity: `${0.05 * index}`,
                  }}
                />
              );
            })}
          </div>
        </a>
        <a href="https://github.com/avas27027/">
          <div
            className="contactos-card"
            onMouseEnter={() => {
              clickSwipe(1);
              setSwipe(!swipe);
            }}
            data-active={post === 1 ? true : false}
          >
            <p>
              <AiFillGithub />
            </p>
            <h2>Github</h2>
            {[...Array(20)].map((c, index) => {
              return (
                <span
                  style={{
                    animationDelay: `${1 - index * 0.08}s`,
                    scale: `${0.015 * index + 0.7}`,
                    opacity: `${0.05 * index}`,
                  }}
                />
              );
            })}
          </div>
        </a>
        <div
          className="contactos-card"
          onMouseEnter={() => {
            clickSwipe(2);
            setSwipe(!swipe);
          }}
          data-active={post === 2 ? true : false}
        >
          <p>
            <BsPhone />
          </p>
          <h2>Celular</h2>
          {[...Array(20)].map((c, index) => {
            return (
              <span
                style={{
                  animationDelay: `${1 - index * 0.08}s`,
                  scale: `${0.015 * index + 0.7}`,
                  opacity: `${0.05 * index}`,
                }}
              />
            );
          })}
        </div>
        <div
          className="contactos-card"
          onMouseEnter={() => {
            clickSwipe(3);
            setSwipe(!swipe);
          }}
          data-active={post === 3 ? true : false}
        >
          <p>
            <MdOutlineAlternateEmail />
          </p>
          <h2>Correo</h2>
          {[...Array(20)].map((c, index) => {
            return (
              <span
                style={{
                  animationDelay: `${1 - index * 0.08}s`,
                  scale: `${0.015 * index + 0.7}`,
                  opacity: `${0.05 * index}`,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

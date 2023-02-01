import React, { useEffect, useRef, useState } from "react";
import About from "./Components/Sections/About";
import Capacities from "./Components/Sections/Capacities";
import Certifies from "./Components/Sections/Certifies";
import Navbar from "./Components/Navbar";
import Ufo from "./Components/Ufo";
import Cosmos from "./Components/Cosmos";
import Contactos from "./Components/Sections/Contactos";
import { useInView } from "react-hook-inview";

export default function App() {
  const [sect1, inView1] = useInView();
  const [sect2, inView2] = useInView();
  const [sect3, inView3] = useInView();
  const [sect4, inView4] = useInView();
  const ar = [inView1, inView2, inView3, inView4];

  return (
    <div className="landing background">
      <Cosmos></Cosmos>
      <Ufo ar={ar}></Ufo>
      <div className="landing sections">
        <Navbar views={ar}></Navbar>
        <About view={sect1}></About>
        <Capacities view={sect2}></Capacities>
        <Certifies view={sect3}></Certifies>
        <Contactos view={sect4}></Contactos>
      </div>
    </div>
  );
}

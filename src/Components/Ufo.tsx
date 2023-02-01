import React, { useEffect, useState } from "react";

export default function Ufo(props: { ar: Array<boolean> }) {
  const [gView, setGView] = useState(0);
  const [ufoAni, setufoAni] = useState("");
  var t = setTimeout(() => {}, 0);
  const ray = document.querySelectorAll(".ufo-ray-circle");

  const classToogleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle("aniClick");
    ray.forEach((i) => {
      i.classList.toggle("ani");
    });
  };
  useEffect(() => {
    let nView = props.ar.findIndex((e) => e == true);
    let start = "";
    clearTimeout(t);
    if (gView != nView) {
      setGView(nView);
      switch (nView) {
        case 0:
          start = "aniV1start";
          break;
        case 1:
          start = "aniV2start";
          break;
        case 2:
          start = "aniV3start";
          break;
        default:
          break;
      }
      setufoAni("aniVEnd");
      t = setTimeout(() => {
        setufoAni(start);
        ray.forEach((i) => {
          i.classList.toggle("ani");
        });
      }, 1000);
    }
  }, [props.ar]);

  return (
    <div className={"ufo " + ufoAni}>
      <div
        onClick={(e) => {
          classToogleClick(e);
        }}
        className="ufo-plate"
      >
        <div className="ufo-capsule"></div>
        <div className="ufo-base"></div>
        <div className="ufo-body">
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div style={{ animationDelay: "1s" }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="ufo-ray">
          {[...Array(4)].map((i, index) => {
            return (
              <span
                key={`r-${index}`}
                className="ufo-ray-circle"
                style={
                  {
                    width: `${4 + index}vw`,
                    left: `${5.5 - index / 2}vw`,
                    top: `${10 + index * 2}vw`,
                    "--v": `${index + 1 * 1.5}s`,
                  } as React.CSSProperties
                }
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

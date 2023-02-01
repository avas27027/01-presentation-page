import React from 'react'

export default function Cosmos() {
  return (
    <div className="cosmos">
        {[...Array(18)].map((c, index) => {
          return (
            <span
              key={`star-${index}`}
              style={
                {
                  left: `${
                    (index + 1) * 5 + Math.floor(Math.random() * 16) - 8
                  }vw`,
                  "--i": `${Math.random() * 5 + 1}s`,
                  top: `${Math.floor(Math.random() * 190) + 10}vh`,
                } as React.CSSProperties
              }
              className="cosmos-star"
            ></span>
          );
        })}
        {[...Array(5)].map((c, index) => {
          return (
            <span
              key={"s" + index}
              className="cosmos-comet"
              style={
                {
                  "--w": `${
                    index * 10 + 50 + Math.floor(Math.random() * 10 - 5)
                  }vw`,
                  "--h": `${index * 10 + Math.floor(Math.random() * 10 - 5)}vh`,
                  animationDelay: `${Math.random() * 5}s`,
                } as React.CSSProperties
              }
            ></span>
          );
        })}
      </div>
  )
}

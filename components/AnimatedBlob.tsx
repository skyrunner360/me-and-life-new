import KUTE from "kute.js";
import { useEffect } from "react";
const AnimatedBlob = () => {
  useEffect(() => {
    let tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []);
  return (
    <>
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(425.9696671241037 329.46484581742646)">
          <path
            id="blob1"
            d="M152.1 -156.1C196.8 -107.5 232.4 -53.7 231.7 -0.7C231 52.3 194 104.7 149.3 129.7C104.7 154.7 52.3 152.3 -4 156.3C-60.3 160.3 -120.7 170.7 -170.7 145.7C-220.7 120.7 -260.3 60.3 -254.9 5.4C-249.5 -49.5 -199 -99 -149 -147.7C-99 -196.3 -49.5 -244.2 2.1 -246.3C53.7 -248.4 107.5 -204.8 152.1 -156.1"
            fill="#BB004B"
          ></path>
        </g>

        <g transform="translate(481.815233638333 269.41186125122954)">
          <path
            id="blob2"
            style={{ visibility: "hidden" }}
            d="M142.2 -153.2C181.2 -103.2 207.6 -51.6 216.3 8.7C225.1 69.1 216.1 138.1 177.1 172.5C138.1 206.8 69.1 206.4 14 192.4C-41 178.3 -82 150.7 -107 116.4C-132 82 -141 41 -153.9 -12.8C-166.7 -66.7 -183.4 -133.4 -158.4 -183.4C-133.4 -233.4 -66.7 -266.7 -7.5 -259.2C51.6 -251.6 103.2 -203.2 142.2 -153.2"
            fill="#BB004B"
          ></path>
        </g>
      </svg>
    </>
  );
};
export default AnimatedBlob;

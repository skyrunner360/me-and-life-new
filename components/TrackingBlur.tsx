// @ts-nocheck
import { useEffect } from "react";

const TrackingBlur = () => {
  const followMouse = () => {
    const blob = document.getElementById("blob");
    document.body.onpointermove = (ev) => {
      const { clientX, clientY } = ev;
      blob?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  };
  useEffect(() => {
    followMouse();
  }, []);

  return (
    <>
      <div id="blob"></div>
      <div id="blur"></div>
    </>
  );
};
export default TrackingBlur;

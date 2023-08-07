// @ts-nocheck
import { useEffect } from "react";

const TrackingBlur = () => {
  const pointerMove = (ev) => {
    const { clientX, clientY } = ev;
    const blob = window?.document?.getElementById("blob");
    blob?.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };
  useEffect(() => {
    window?.document?.body?.addEventListener("pointermove", pointerMove);
    return () => {
      window?.document?.body?.removeEventListener("pointermove", pointerMove);
    };
  }, []);

  return (
    <>
      <div id="blob"></div>
      <div id="blur"></div>
    </>
  );
};
export default TrackingBlur;

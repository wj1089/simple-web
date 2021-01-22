import { useState, useEffect } from "react";

const UseDetect = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = e => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      // window.addEventListener("click", onClick);
      document.getElementById("mySidenav", onClick).style.width = "250px";
    }

    return () => {
      // window.removeEventListener("click", onClick);
      document.getElementById("mySidenav", onClick).style.width = "0";
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

export default UseDetect;

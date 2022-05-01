import React, { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const updateWindowWidth = () => {
    typeof window !== "undefined" && setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    typeof window !== "undefined" && setWindowWidth(window.innerWidth);
    typeof window !== "undefined" &&
      window.addEventListener("resize", updateWindowWidth);
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", () => {});
    };
  }, [windowWidth]);

  return windowWidth;
};

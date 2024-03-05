import React, { useEffect } from "react";
import { FadeLoader } from "react-spinners";

const LoadingSpinner = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="w-screen top-0 left-0 h-screen bg-white absolute flex justify-center items-center">
      <FadeLoader color="#FFB40C" />
    </div>
  );
};

export default LoadingSpinner;

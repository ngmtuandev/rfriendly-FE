import React from "react";
import { Spin } from "antd";

const ButtonBase = ({ text, handleButton, isLoading }: TButton) => {
  return (
    <button
      onClick={handleButton}
      className="flex w-full h-[2.5rem] justify-center items-center my-5 rounded-md bg-color-yellow-main px-3 py-1.5 text-sm font-semibold border border-white leading-6 text-white shadow-sm hover:bg-opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {isLoading ? <Spin size="small" style={{ color: "white" }} /> : text}
    </button>
  );
};

export default ButtonBase;

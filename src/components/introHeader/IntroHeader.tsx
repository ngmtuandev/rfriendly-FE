import React from "react";

const IntroHeader = ({ title }: { title: string }) => {
  return (
    <div className="my-10">
      <div className="flex items-center">
        <div>
          <span className="uppercase text-[1rem] font-bold text-color-yellow-main">
            R
          </span>
        </div>
        <div>
          <span className="uppercase text-[1rem] font-bold text-gray-800">
            Friendly
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-[2.5rem] uppercase font-semibold text-gray-800">
          {title}
        </h2>
      </div>
      <div>
        <div className="w-[10%] h-[0.6rem] bg-color-yellow-main"></div>
      </div>
    </div>
  );
};

export default IntroHeader;

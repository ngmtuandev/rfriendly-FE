import React from "react";
import Image from "next/image";
import logo from "../../assets/logo/logo.png";
import { icons } from "@/utils/icons";

const Header = () => {
  const { IoIosPhonePortrait, IoMdTime, MdOutlineEmail } = icons;

  return (
    <div className="flex w-[100%] text-gray-600 h-auto px-main items-center gap-32 border-b-[1px]">
      <div>
        <Image src={logo} alt="Mô tả hình ảnh" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center gap-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <IoIosPhonePortrait size={24} color="#FFB40C"></IoIosPhonePortrait>
            <span className="font-semibold">HOTLINE</span>
          </div>
          <div>
            <span>+84363073476</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <IoMdTime size={24} color="#FFB40C"></IoMdTime>
            <span className="font-semibold">GIỜ LÀM VIỆC</span>
          </div>
          <div>
            <span>07:30 - 23:00</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <MdOutlineEmail size={24} color="#FFB40C"></MdOutlineEmail>
            <span className="font-semibold">EMAIL</span>
          </div>
          <div>
            <span>rfiendly@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

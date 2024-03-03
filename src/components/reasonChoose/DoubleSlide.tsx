import React from "react";
import DoubleSlideItem from "./DoubleSlideItem";
import image_room1 from "../../assets/room/room1.jpeg";
import image_room2 from "../../assets/room/room2.jpeg";
import Image from "next/image";

const DoubleSlide = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-[50%]">
        <div className="flex flex-col my-4">
          <div>
            <h3 className="font-bold my-2 text-[20px]">
              Đáp ứng mọi nhu cầu của bạn
            </h3>
          </div>
          <div>
            <span className="text-gray-500">
              Tới chuyến bay lưu trú, đến điểm tham quan bạn có thể tìm chọn mọi
              sản phẩm
            </span>
          </div>
        </div>
        <div className="flex flex-col my-4">
          <div>
            <h3 className="font-bold my-2 text-[20px]">
              Đáp ứng mọi nhu cầu của bạn
            </h3>
          </div>
          <div>
            <span className="text-gray-500">
              Tới chuyến bay lưu trú, đến điểm tham quan bạn có thể tìm chọn mọi
              sản phẩm
            </span>
          </div>
        </div>
        <div className="flex flex-col my-4">
          <div>
            <h3 className="font-bold my-2 text-[20px]">
              Đáp ứng mọi nhu cầu của bạn
            </h3>
          </div>
          <div>
            <span className="text-gray-500">
              Tới chuyến bay lưu trú, đến điểm tham quan bạn có thể tìm chọn mọi
              sản phẩm
            </span>
          </div>
        </div>
      </div>
      <div className="px-main">
        <div>
          <div className="w-[300px] relative z-1 h-[450px]">
            <div className="w-[350px] top-0 left-0 z-1 h-[450px] bg-color-yellow-main">
              <Image
                src={image_room1}
                alt="room_thumbnail_beautiful"
                className="w-full h-full object-cover"
              ></Image>
            </div>
            <div className="w-[400px] h-[250px] shadow-lg absolute top-28 -left-48 bg-yellow-300">
              <Image
                src={image_room2}
                alt="room_thumbnail_beautiful"
                className="w-full h-full object-cover"
              ></Image>
            </div>
            <DoubleSlideItem mgTop={-30} mgLeft={28}></DoubleSlideItem>
            <DoubleSlideItem mgTop={40} mgLeft={-100}></DoubleSlideItem>
            <DoubleSlideItem
              mgBotton={"bottom-0 -mb-6"}
              mgTop={80}
              mgLeft={30}
            ></DoubleSlideItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleSlide;

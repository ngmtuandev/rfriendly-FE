import React from "react";
import Image from "next/image";
import logo from "../../assets/logo/logo.png";
import formatNumberToPrice from "@/helpers/formatNumberToPrice";
const RoomItem = (room: { room: TRoom }) => {
  const imageUrl =
    typeof room?.room?.images[0] === "string" ? room?.room?.images[0] : logo;

  return (
    <div className="flex shadow-sm flex-col min-h-[32rem] items-center justify-between pb-[1rem] overflow-hidden border-gray-300 rounded-md border-[1px]">
      <div className="mt-3 flex flex-col justify-between items-center ">
        <h3 className="uppercase text-gray-400 font-semibold text-[20px]">
          {room?.room?.district}
        </h3>
        <p className="text-gray-400">{room?.room?.title}</p>
        <p className="font-semibold uppercase text-color-yellow-main text-[22px]">
          {formatNumberToPrice(+room?.room?.price)} VNĐ / tháng
        </p>
      </div>
      <div>
        <Image src={imageUrl} alt="Mô tả hình ảnh" width={300} height={300} />
      </div>
      <div className="flex justify-center items-center gap-6 border-t-[1px] border-gray-300 w-full">
        {room?.room?.facilities?.map((item, index) => {
          return (
            <div
              className="p-[8px] flex flex-col justify-center items-center"
              key={index}
            >
              <div>
                <p className="text-gray-500 font-semibold">{`${
                  item?.nameFacility
                } (${item?.new ? "Mới" : "Cũ"})`}</p>
              </div>
              <div>
                <p className="text-gray-500">
                  {formatNumberToPrice(+item?.surcharge)} VNĐ
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomItem;

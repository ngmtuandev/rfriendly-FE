import React from "react";
import Image from "next/image";
import logo from "../../assets/logo/logo.png";
import formatNumberToPrice from "@/helpers/formatNumberToPrice";
import facilitiesRender from "@/helpers/facilitiesRender";
import Link from "next/link";
import generateSlug from "@/helpers/generateSlug";
const RoomItem = (room: { room: TRoom }) => {
  const imageUrl =
    typeof room?.room?.images[0] === "string" ? room?.room?.images[0] : logo;

  return (
    <Link
      href={`/${generateSlug(room?.room?.title)}` + `/${room?.room?.id}`}
      className="flex shadow-sm flex-col min-h-[32rem] items-center justify-between pb-[1rem] overflow-hidden border-gray-300 rounded-md border-[1px]"
    >
      <div className="mt-3 flex flex-col justify-between items-center h-[25%]">
        <h3 className="uppercase text-gray-400 font-semibold text-[20px]">
          {room?.room?.district}
        </h3>
        <p className="text-gray-400 px-[12px]">{room?.room?.title}</p>
        <p className="font-semibold uppercase text-color-yellow-main text-[22px]">
          {formatNumberToPrice(+room?.room?.price)} VNĐ / tháng
        </p>
      </div>
      <div className="h-[50%] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt="Mô tả hình ảnh"
          className="object-cover"
          width={350}
          height={300}
        />
      </div>
      <div className="flex h-[25%] overflow-hidden justify-center items-center gap-6 border-t-[1px] border-gray-300 w-full">
        {room?.room?.facilities?.map((item, index) => {
          return (
            <div
              className="pt-[12px] flex justify-center gap-1 items-center"
              key={index}
            >
              <div>{facilitiesRender(item?.nameFacility)}</div>
              <div>
                <p className="text-gray-500 mt-1">
                  {formatNumberToPrice(+item?.surcharge)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export default RoomItem;

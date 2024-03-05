"use client";
import React, { useCallback, useState } from "react";
import { icons } from "@/utils/icons";
import { ModelBase } from "../../components";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ButtonBase from "../button/Button";
import { doGetRoomByCondition } from "@/store/slices/roomSlice";
import { useAppSelector } from "@/hooks/reduxHook";
import formatNumberToPrice from "@/helpers/formatNumberToPrice";
import { useAppDispatch } from "@/hooks/reduxHook";
const FindRoom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelCurrent, setModelCurrent] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const dispatch = useAppDispatch();

  const district = searchParams.get("quan");
  const minPrice = searchParams.get("tu");
  const maxPrice = searchParams.get("den");
  const person = searchParams.get("so-nguoi");

  const { isLoading } = useAppSelector((state) => state.room);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const { GiPriceTag, MdOutlineKeyboardArrowRight, MdLocationOn, FaPerson } =
    icons;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleFindRoomByCondition = async () => {
    const queryParams: TFindRoom = {
      minPrice: parseInt(minPrice!),
      maxPrice: parseInt(maxPrice!),
      numberPerson: parseInt(person!),
      district: district ? district : "",
    };

    dispatch(doGetRoomByCondition(queryParams));
  };

  return (
    <div className="w-[100%] px-main my-8">
      <ModelBase
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modelCurrent={modelCurrent}
      ></ModelBase>
      <div className="w-[100%] p-[8px] bg-color-yellow-main h-[4rem] rounded-xl flex justify-between items-center gap-4">
        <div className="w-[24%] flex gap-4 items-center px-[1rem] justify-between bg-white h-full rounded-xl">
          <div className="flex justify-center items-center gap-2">
            <div>
              <GiPriceTag size={24} color="gray"></GiPriceTag>
            </div>
            <div>
              <span>
                {minPrice && maxPrice
                  ? `${formatNumberToPrice(
                      parseInt(minPrice)
                    )} - ${formatNumberToPrice(parseInt(maxPrice))}`
                  : "Chọn giá"}
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              setModelCurrent("price");
              showModal();
            }}
            className="cursor-pointer"
          >
            <MdOutlineKeyboardArrowRight
              size={24}
            ></MdOutlineKeyboardArrowRight>
          </div>
        </div>
        <div className="w-[24%] overflow-hidden flex gap-4 items-center px-[1rem] justify-between bg-white h-full rounded-xl">
          <div className="flex justify-center items-center gap-2">
            <div>
              <MdLocationOn color="gray" size={24}></MdLocationOn>
            </div>
            <div>
              <input
                onChange={(e) => {
                  router.push(
                    pathname + "?" + createQueryString("quan", e.target.value)
                  );
                }}
                defaultValue={district ? district : ""}
                placeholder="Nhập quận"
                className="outline-none text-gray-400"
              ></input>
            </div>
          </div>
          <div>
            <MdOutlineKeyboardArrowRight
              size={24}
            ></MdOutlineKeyboardArrowRight>
          </div>
        </div>
        <div className="w-[24%] flex overflow-hidden gap-4 items-center px-[1rem] justify-between bg-white h-full rounded-xl">
          <div className="flex justify-center items-center gap-2">
            <div>
              <FaPerson color="gray" size={24}></FaPerson>
            </div>
            <div>
              <input
                onChange={(e) => {
                  router.push(
                    pathname +
                      "?" +
                      createQueryString("so-nguoi", e.target.value)
                  );
                }}
                placeholder="Nhập số người ở"
                defaultValue={person! && person}
                className="outline-none text-gray-400"
                type="number"
              ></input>
            </div>
          </div>
        </div>
        <div className="w-[24%] flex gap-4 items-center px-[1rem] justify-between h-full rounded-xl">
          <ButtonBase
            text="Tìm phòng"
            isLoading={isLoading}
            handleButton={handleFindRoomByCondition}
          ></ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default FindRoom;

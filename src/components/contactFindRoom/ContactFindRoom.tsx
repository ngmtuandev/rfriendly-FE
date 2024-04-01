import React, { ChangeEvent, useEffect, useState } from "react";
import IntroHeader from "../introHeader/IntroHeader";
import thumbnail from "../../assets/banner/thumbnail.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { doSendContactFindRoom } from "@/store/slices/contactFindRoomSlice";
import { message } from "antd";

const ContactFindRoom = () => {
  const [infoContact, setInfoContact] = useState<TContactFindRoom>({
    userName: "",
    phone: "",
    district: "",
    rangePrice: 0,
    timeStart: "",
    descriptions: "",
  });

  const { contactData, isLoading } = useAppSelector((state) => state.contact);

  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useAppDispatch();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    setInfoContact({
      ...infoContact,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    if (contactData !== null) {
      messageApi.open({
        type: "success",
        content: "Bạn đã liên hệ thành công !!!",
      });
    }
  }, [contactData]);

  const handleSubmitContact = () => {
    dispatch(doSendContactFindRoom(infoContact));
  };

  return (
    <div className="px-main">
      {contextHolder}
      <IntroHeader title="Liên hệ nếu bạn đang tìm phòng"></IntroHeader>
      <div className="w-[100%] flex gap-10 justify-between">
        <div className="w-[50%]">
          <Image src={thumbnail} alt="thumbnail_phong_tro"></Image>
        </div>
        <div className="w-[50%]">
          <form>
            <div className="w-[100%] my-4 border-[1px] border-color-yellow-main h-[3.5rem] flex flex-col rounded-lg px-[0.7rem] pt-[4px] overflow-hidden bg-gray-100">
              <label className="text-[14px] text-gray-500">
                Tên người liên hệ
              </label>
              <input
                value={infoContact.userName}
                onChange={(e) => handleInputChange(e, "userName")}
                className="bg-gray-100 text-gray-500 text-[16px] outline-none mb-2"
                type="text"
              />
            </div>
            <div className="w-[100%] my-4 border-[1px] border-color-yellow-main h-[3.5rem] flex flex-col rounded-lg px-[0.7rem] pt-[4px] overflow-hidden bg-gray-100">
              <label className="text-[14px] text-gray-500">Số điện thoại</label>
              <input
                value={infoContact.phone}
                onChange={(e) => handleInputChange(e, "phone")}
                className="bg-gray-100 text-gray-500 text-[16px] outline-none mb-2"
                type="number"
              />
            </div>
            <div className="w-[100%] my-4 border-[1px] border-color-yellow-main h-[3.5rem] flex flex-col rounded-lg px-[0.7rem] pt-[4px] overflow-hidden bg-gray-100">
              <label className="text-[14px] text-gray-500">
                {`Khu vực (quận/ huyện)`}
              </label>
              <input
                value={infoContact.district}
                onChange={(e) => handleInputChange(e, "district")}
                className="bg-gray-100 text-gray-500 text-[16px] outline-none mb-2"
                type="text"
              />
            </div>
            <div className="w-[100%] my-4 border-[1px] border-color-yellow-main h-[3.5rem] flex flex-col rounded-lg px-[0.7rem] pt-[4px] overflow-hidden bg-gray-100">
              <label className="text-[14px] text-gray-500">
                Tầm giá mong muốn
              </label>
              <input
                onChange={(e) => handleInputChange(e, "rangePrice")}
                value={infoContact.rangePrice}
                className="bg-gray-100 text-gray-500 text-[16px] outline-none mb-2"
                type="number"
              />
            </div>
            <div className="w-[100%] my-4 border-[1px] border-color-yellow-main h-[3.5rem] flex flex-col rounded-lg px-[0.7rem] pt-[4px] overflow-hidden bg-gray-100">
              <label className="text-[14px] text-gray-500">
                Thời gian vào ở
              </label>
              <input
                onChange={(e) => handleInputChange(e, "timeStart")}
                value={infoContact.timeStart}
                className="bg-gray-100 text-gray-500 text-[16px] outline-none mb-2"
                type="text"
              />
            </div>
            <div className="w-[100%] my-4 border-[1px] border-color-yellow-main h-[3.5rem] flex flex-col rounded-lg px-[0.7rem] pt-[4px] overflow-hidden bg-gray-100">
              <label className="text-[14px] text-gray-500">Mô tả thêm</label>
              <input
                onChange={(e) => handleInputChange(e, "descriptions")}
                value={infoContact.descriptions}
                className="bg-gray-100 text-gray-500 text-[16px] outline-none mb-2"
                type="text"
              />
            </div>
            <div
              onClick={handleSubmitContact}
              className="w-[100%] my-4 h-[3.5rem] flex  transition-all flex-col cursor-pointer hover:bg-opacity-80 justify-center items-center text-white rounded-lg px-[0.7rem] pt-[4px] overflow-hidden bg-color-yellow-main"
            >
              {isLoading ? "..." : "Liên Hệ"}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFindRoom;

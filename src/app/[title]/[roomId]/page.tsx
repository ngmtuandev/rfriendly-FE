"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { doGetDetailRoom } from "@/store/slices/detailRoomSlice";
import { Header } from "@/components";
import logo from "@/assets/logo/logo.png";
import "./index.css";
import { Carousel, Modal } from "antd";
import { useGetTypeImages } from "@/hooks/image/useGetListTypeImage";
import { doGetImagesRoomByType } from "@/store/slices/imageRoomSlice";
import { icons } from "@/utils/icons";
import formatNumberToPrice from "@/helpers/formatNumberToPrice";
import facilitiesRender from "@/helpers/facilitiesRender";
import ListRoom from "@/components/room/ListRoom";
import moment from "moment";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

const DetailRoom = ({
  params,
}: {
  params: { roomId: string; title: string };
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { roomId } = params;
  const dispatch = useAppDispatch();
  const { MdLocationOn } = icons;
  const { isLoading: isLoadingGetDetail, room } = useAppSelector(
    (state) => state.detailRoom
  );
  const { isLoading: isLoadingImageRoom, images } = useAppSelector(
    (state) => state.imageRoom
  );

  const [listImageCurrent, setListImageCurrent] = useState(
    room && room?.images
  );

  const { isLoading: isLoadingTypeImage, typeImages } = useGetTypeImages();

  const showModal = () => {
    setIsModalOpen(true);
  };

  console.log("listImageCurrent : ", listImageCurrent);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    (async () => {
      await dispatch(doGetDetailRoom(roomId));
      setListImageCurrent(room?.images);
    })();
  }, []);

  const onChange = (currentSlide: number) => {
    // console.log(currentSlide);
  };

  const handleGetImageByType = (data: { id: string; name: string }) => {
    dispatch(doGetImagesRoomByType({ roomId, typeImageId: data?.id }));
  };

  useEffect(() => {
    setListImageCurrent(images);
  }, [images]);

  console.log("room : ", room);

  return (
    <div>
      {isLoadingGetDetail || isLoadingImageRoom || isLoadingTypeImage && <LoadingSpinner />}
      <Modal
        title="Hình ảnh phòng"
        open={isModalOpen}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
        width={1000}
        className="-mt-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <div
            onClick={() => setListImageCurrent(room?.images)}
            className="min-w-10 px-[8px] py-[4px] shadow-md bg-color-yellow-main text-white rounded-md 
                cursor-pointer lowercase text-[12px] hover:bg-opacity-80 flex justify-center items-center"
          >
            <span>Tất cả</span>
          </div>
          {typeImages &&
            typeImages?.map((item: any, index: any) => {
              return (
                <div
                  onClick={() => handleGetImageByType(item)}
                  className="min-w-10 px-[8px] py-[4px] shadow-md bg-color-yellow-main text-white rounded-md 
                cursor-pointer text-[12px] lowercase hover:bg-opacity-80 flex justify-center items-center"
                  key={index}
                >
                  <span>{item?.name}</span>
                </div>
              );
            })}
        </div>
        <Carousel
          className="bg-gray-700 bg-opacity-25 rounded-lg"
          afterChange={onChange}
        >
          {room?.images &&
            listImageCurrent?.map((item: any, index: number) => {
              return (
                <div className="h-[32rem]" key={index}>
                  <img
                    src={item}
                    className={`w-full h-full object-cover rounded-lg`}
                  ></img>
                </div>
              );
            })}
        </Carousel>
      </Modal>
      <Header></Header>
      <div className="px-[200px] mt-6">
        <div>
          <h3 className="font-bold text-gray-800 text-[1.5rem]">
            {room?.title}
          </h3>
        </div>
        <div className="flex items-center">
          <MdLocationOn size={20} color="gray"></MdLocationOn>
          <span className="text-gray-600 text-[14px] mt-1">
            {room?.location}
          </span>
        </div>
        <div className="mb-4">
          <p className="text-[2.5rem] font-bold text-color-yellow-main">
            {formatNumberToPrice(room?.price)} VNĐ
          </p>
          <p className="text-gray-600 text-[14px]">{`Tình trạng: ${room?.statusRoom === 'EMPTY' ? 'phòng trống' : room?.statusRoom === 'DEPOSIT' ? 'đã cọc' : 'đã thuê'}`}</p>
        </div>
      </div>
      <div className="px-[200px] flex justify-between gap-8 h-[30rem] items-center">
        <div className="w-[60%] h-full overflow-hidden">
          <img
            src={room?.images ? room?.images[0] : logo}
            alt="thumbnail_room"
            className="object-cover w-full h-full rounded-lg"
          ></img>
        </div>
        <div className="w-[40%] h-full grid grid-cols-2 grid-rows-3 gap-4">
          {Array.from(Array(6).keys()).map((item, index) => {
            const isLastImage = item + 1 === 6;

            return (
              <div
                className={`relative w-full h-full ${
                  isLastImage && "relative"
                }`}
                key={index}
              >
                {room?.images && room?.images[item] && (
                  <>
                    <img
                      src={room?.images?.[item]}
                      className={`w-full h-full object-cover rounded-lg`}
                    ></img>
                    {isLastImage && (
                      <div
                        onClick={showModal}
                        className="absolute top-0 cursor-pointer left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                      >
                        <p className="text-white">Xem thêm</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 px-[200px] mt-4">
        <div className="w-[45%] flex flex-col gap-4">
          <div className="w-full border-[1px] border-color-yellow-main rounded-lg p-[8px] ">
            <div className="w-[100%] flex justify-between items-center">
              <span className="font-semibold">Giới thiệu phòng</span>
              <span className="font-semibold text-color-yellow-main cursor-pointer">
                Xem thêm
              </span>
            </div>
            <div className="w-[100%] text-gray-700">{room?.description}</div>
          </div>
          <div className="w-full border-[1px] border-color-yellow-main rounded-lg p-[8px] ">
            <div className="w-[100%] flex justify-between items-center">
              <span className="font-semibold">Tiện ích chính</span>
            </div>
            <div className="w-[100%] grid grid-cols-2 text-gray-700">
              {room &&
                room?.facilities?.map((item: any, index: number) => {
                  return (
                    <div
                      className="flex justify-center flex-col my-4"
                      key={index}
                    >
                      <div className="flex gap-2">
                        {facilitiesRender(item?.nameFacility)}
                        <span>{item?.nameFacility}</span>
                      </div>
                      <div>
                        <span className="text-color-yellow-main font-medium text-[14px]">
                          {item?.surcharge > 0
                            ? `Phụ thụ : ${formatNumberToPrice(
                                item?.surcharge
                              )} VNĐ`
                            : "Không phụ thu"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[14px]">{`Tình trạng: ${
                          item?.new ? "Mới" : "Cũ"
                        }`}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="w-[55%] text-gray-500 p-[8px] rounded-lg border-[1px] border-color-yellow-main">
          <div>
            <span className="font-semibold text-color-yellow-main">Thông tin về phòng</span>
          </div>
          <div>
            <p className="font-medium text-gray-500">- Loại phòng</p>
            <p>{room?.typeRoom?.name}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">- Tiện ích</p>
            <p>{room?.convenientNearArea?.name} cách {room?.convenientNearArea?.distance} km</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">- Số lượng người ở</p>
            <p>Tối đa {room?.numberPerson} người</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">- Tiền cọc</p>
            <p>{formatNumberToPrice(room?.stakeMoney)} VNĐ (Cọc giữ phòng)</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">- Hợp đồng thuê</p>
            <p>{room?.leaseTerm} tháng</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">- Khuyến mãi</p>
            <p>{room?.coupon ? `Giảm ${room?.coupon?.percentCoupon}% (từ ${moment(room?.coupon?.dayStart).format("DD/MM/YYYY")} đến ${moment(room?.coupon?.dayEnd).format("DD/MM/YYYY")})` : `Không có chương trình cho phòng này`}</p>
          </div>
        </div>
      </div>
      <div className="px-[100px]">
        <ListRoom></ListRoom>
      </div>
    </div>
  );
};

export default DetailRoom;

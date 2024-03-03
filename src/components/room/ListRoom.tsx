import React, { useState } from "react";
import RoomItem from "./RoomItem";
import { useAppSelector } from "@/hooks/reduxHook";
import Pagination from "@/hooks/Pagination";
import { useGetListRooms } from "@/hooks/room/useGetListRooms";
import IntroHeader from "../introHeader/IntroHeader";
const ListRoom = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { rooms } = useAppSelector((state) => state.room);
  const { rooms: roomAll, isLoading } = useGetListRooms({
    currentPage,
    size: 5,
  });

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-main">
      <div>
        <IntroHeader title={"Phòng của chúng tôi"}></IntroHeader>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-10">
        {rooms?.length! > 0
          ? rooms &&
            rooms?.map((item, index) => {
              return (
                <div key={index}>
                  <RoomItem room={item}></RoomItem>
                </div>
              );
            })
          : roomAll &&
            roomAll?.data?.map((item: TRoom, index: number) => {
              return (
                <div key={index}>
                  <RoomItem room={item}></RoomItem>
                </div>
              );
            })}
      </div>
      {rooms?.length === 0 && roomAll && (
        <div className="w-[100%]">
          <Pagination
            onChangePage={handleChangePage}
            currentPage={currentPage}
            totalPage={roomAll?.totalPages}
          ></Pagination>
        </div>
      )}
    </div>
  );
};

export default ListRoom;

import React from "react";
import RoomItem from "./RoomItem";
import { useAppSelector } from "@/hooks/reduxHook";
const ListRoom = (listRoom: { listRoom: TRoom[] }) => {
  const { rooms } = useAppSelector((state) => state.room);
  return (
    <div className="grid grid-cols-4 gap-4 px-main">
      {rooms?.length! > 0
        ? rooms &&
          rooms?.map((item, index) => {
            return (
              <div key={index}>
                <RoomItem room={item}></RoomItem>
              </div>
            );
          })
        : listRoom &&
          listRoom?.listRoom?.map((item: TRoom, index: number) => {
            return (
              <div key={index}>
                <RoomItem room={item}></RoomItem>
              </div>
            );
          })}
    </div>
  );
};

export default ListRoom;

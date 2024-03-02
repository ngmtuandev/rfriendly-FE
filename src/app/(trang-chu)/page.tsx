"use client";
import React from "react";
import { Header, FindRoom } from "@/components";
import { useGetListRooms } from "@/hooks/room/useGetListRooms";
import ListRoom from "@/components/room/ListRoom";
const HomePage = () => {
  const { rooms, isLoading } = useGetListRooms();
  return (
    <div className="w-full h-full">
      <Header />
      <FindRoom />
      <ListRoom listRoom={rooms?.data} />
    </div>
  );
};

export default HomePage;

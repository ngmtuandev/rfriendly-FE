"use client";
import React from "react";
import { Header, FindRoom } from "@/components";
import ListRoom from "@/components/room/ListRoom";
import ReasonChoose from "@/components/reasonChoose/ReasonChoose";
import ContactFindRoom from "@/components/contactFindRoom/ContactFindRoom";
const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <FindRoom />
      <ListRoom />
      <ContactFindRoom />
      <ReasonChoose />
    </div>
  );
};

export default HomePage;

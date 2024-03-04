import React from "react";
import { icons } from "@/utils/icons";
const {
  FaFan,
  TbToolsKitchen3,
  GiRiceCooker,
  CgSmartHomeRefrigerator,
  PiBooksDuotone,
  TbAirConditioning,
  MdTableRestaurant,
} = icons;
const facilitiesRender = (nameFacility: string) => {
  switch (nameFacility) {
    case "Quạt điện":
      return <FaFan color="gray" size={18}></FaFan>;

    case "Nồi cơm":
      return <GiRiceCooker color="gray" size={22}></GiRiceCooker>;

    case "Tủ lạnh":
      return <CgSmartHomeRefrigerator color="gray" size={20}></CgSmartHomeRefrigerator>;

    case "Điều hòa":
      return <TbAirConditioning color="gray" size={20}></TbAirConditioning>;

    case "Bàn học":
      return <MdTableRestaurant color="gray" size={20}></MdTableRestaurant>;

    case "Kệ sách":
      return <PiBooksDuotone color="gray" size={20}></PiBooksDuotone>;

    case "Đồ dùng ăn uống":
      return <TbToolsKitchen3 color="gray" size={20}></TbToolsKitchen3>;

    default:
      return null;
  }
};

export default facilitiesRender;

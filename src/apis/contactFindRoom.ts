import axiosClientApi from "@/lib/axios-client";

export const contactFindRoomApi = async (dataContact: TContactFindRoom) => {
  const rs = await axiosClientApi.post(
    `/public/contact-find-room/create-contact-find-room`,
    dataContact
  );

  return rs?.data;
};

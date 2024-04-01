import roomReducer from "./roomSlice";
import contactFindRoomReducer from "./contactFindRoomSlice";
import detailRoomReducer from "./detailRoomSlice";
import imagesRoomReducer from "./imageRoomSlice";

export default {
  room: roomReducer,
  contact: contactFindRoomReducer,
  detailRoom: detailRoomReducer,
  imageRoom: imagesRoomReducer
};

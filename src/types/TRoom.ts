type ConvenientNearArea = {
  id: string;
  distance: number;
  name: string;
  delete: boolean;
};

type Coupon = {
  id: string;
  dayStart: string;
  dayEnd: string;
  percentCoupon: number;
  delete: boolean;
};

type Facility = {
  id: string;
  nameFacility: string;
  surcharge: number;
  new: boolean;
  delete: boolean;
};

type RoomImage = {
  url: string;
};

type TypeRoom = {
  id: string;
  name: string;
  description: string;
  delete: boolean;
};

type TRoom = {
  convenientNearArea?: ConvenientNearArea;
  coupon?: Coupon;
  description: string;
  district: string;
  facilities: Facility[];
  id: string;
  images: RoomImage[];
  leaseTerm: number;
  location: string;
  numberPerson: number;
  price: number;
  responseTime: number;
  stakeMoney: number;
  statusRoom: string;
  title: string;
  typeRoom: TypeRoom;
};

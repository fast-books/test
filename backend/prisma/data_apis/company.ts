import { state } from "@prisma/client";

const company=[
  {
    id: 1,
    name: "Vedanta Classes",
    address: "Bhagalpur",
    state: state.BIHAR_10,
    pincode: "812002",
    email: "nishantsah@gmail.com",
    mobile: "9472612333",
    country: "India",
    gstID: "URP",
    gstType: "URP"
  },
  {
    id: 2,
    name: "Machinery And Parts",
    address: "Bhagalpur",
    state: state.BIHAR_10,
    pincode: "812002",
    email: "nishantsah@gmail.com",
    mobile: "9431213582",
    country: "India",
    gstID: "10AAFHP2278G1ZF",
    gstType: "Regular"
  },
]
export default company;
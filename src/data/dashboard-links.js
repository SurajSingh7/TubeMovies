import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Add To Favorite",
    path: "/dashboard/add-to-favorite",
       type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscHistory",
  },
  {
    id: 3,
    name: "Network Stream",
    path: "/dashboard/network-stream",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscMortarBoard",
  },
  {
    id: 4,
    name: "Network Stream",
    path: "/dashboard/network-stream",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 5,
    name: "Add To Favorite",
    path: "/dashboard/add-to-favorite",
       type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 6,
    name: "Add Movie",
    path: "/dashboard/add-movie",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
];

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
    icon: "VscHistory",
  },
  {
    id: 3,
    name: "Network Stream",
    path: "/dashboard/network-stream",
    icon: "VscMortarBoard",
  },
  {
    id: 4,
    name: "Add Movie",
    path: "/dashboard/add-movie",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
];

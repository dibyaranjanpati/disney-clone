import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, settoggle] = useState(true);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className=" flex items-center justify-between p-5">
      <div className="flex  gap-8 items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[80px] 
          md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item, i) => (
            <HeaderItem name={item.name} Icon={item.icon} key={i} />
          ))}
        </div>
        <div className=" flex md:hidden gap-5">
          {menu.map(
            (item, i) =>
              i < 3 && <HeaderItem name={""} Icon={item.icon} key={i} />
          )}
          <div className="md:hidden" onClick={() => settoggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className=" absolute mt-3 bg-[#121212] 
              border-[1px] border-gray-700 p-3 px-5 py-4"
              >
                {menu.map(
                  (item, i) =>
                    i > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} key={i} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[55px] rounded-full "
        alt="ima"
      />
    </div>
  );
};

export default Header;

//fixed top-2 left-0

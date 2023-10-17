import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="text-white flex items-center text-[18px] gap-2  font-semibold cursor-pointer hover:underline underline-offset-8 mb-3">
      {" "}
      <Icon /> <h2>{name}</h2>
    </div>
  );
};

export default HeaderItem;

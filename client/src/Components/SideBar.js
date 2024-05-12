import React from "react";
import { useNavigate } from "react-router-dom";
import { sideBarComponentsMenu } from "../Config/SideBar";
import { DividerComponent } from "./PrimeReactReusable";

const SideBar = () => {
  const navigate = useNavigate();

  const groupedMenuItems = {};
  sideBarComponentsMenu.forEach((menu) => {
    if (!groupedMenuItems[menu.group]) {
      groupedMenuItems[menu.group] = [];
    }
    groupedMenuItems[menu.group].push(menu);
  });

  const renderSidebar = () => {
    return Object.entries(groupedMenuItems).map(([group, menus], index) => (
      <div key={group}>
        {index !== 0 && <DividerComponent type="solid" />}
        {menus.map((menu) => (
          <div
            key={menu.urlPath}
            className="my-2 py-2 pl-2 cursor-pointer border-round-left border-round-3xl border-1 border-solid border-transparent hover:border-blue-300 hover:bg-blue-300 hover:text-0"
            onClick={() => navigate(menu.urlPath)}
          >
            <i className={`px-4 pi ${menu.iconClassName}`}></i>
            {menu.text}
          </div>
        ))}
      </div>
    ));
  };

  return <div className="max-h-screen overflow-auto">{renderSidebar()}</div>;
};

export default SideBar;

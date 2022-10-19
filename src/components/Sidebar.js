import React from "react";
import { useGlobalContext } from "../context";
import { data } from "./data";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-0" : null
      } bg-black pt-20 translate-x-[-100%] phone:visible tablet:hidden z-20  fixed  w-full h-full`}
    >
      <div className="text-center">
        {data.map((item, index) => {
          const { name, icon } = item;
          return (
            <article
              key={index}
              className="w-1/2 mx-auto flex justify-between items-center my-10"
              onClick={() => setIsSidebarOpen(false)}
            >
              <button className="w-10">{icon}</button>
              <p>{name}</p>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;

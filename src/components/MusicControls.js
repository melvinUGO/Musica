import React from "react";
import { FaPlayCircle, FaBackward, FaForward } from "react-icons/fa";

const MusicControls = () => {
  return (
    <section className="fixed bottom-0 left-0 w-[100%] h-20 ">
      <div className=" absolute bottom-0 left-0 w-[100%] bg-[#ffffff52] blur-[15px] h-[100%]"></div>
      <div className="fixed bottom-0 left-0 w-[100%] flex items-center bg-[#1D21234D] z-10 justify-between p-5 border-1">
        <div className="flex gap-3 ">
          <img src="\images\Rectangle 26.png" alt="" className="w-11" />
          <div>
            <h3>Seasons in</h3>
            <p>James</p>
          </div>
        </div>
        <div className="flex gap-3 text-2xl ">
          <FaPlayCircle className="text-[#FACD66] " />
          <FaForward />
        </div>
      </div>
    </section>
  );
};

export default MusicControls;

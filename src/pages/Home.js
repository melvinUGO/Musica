import React from "react";
import { FaBars, FaSearch, FaRegHeart } from "react-icons/fa";
import { useGlobalContext } from "../context";

import MusicControls from "../components/MusicControls";

const Home = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <section className="p-2 phone:pb-10 text-[#FFFFFF] overflow-hidden">
      {/* mobile view navbar */}
      <div className="phone:visible tablet:hidden p-3 py-8 flex justify-between">
        <div className="flex">
          <button
            className="text-[2rem]"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>
          <div className="flex px-5">
            <img src="\images\logo2.png" alt="logo" />
            <img src="/images/logo.png" alt="logo" />
          </div>
        </div>
        <button className="text-[1.5rem]">
          <FaSearch />
        </button>
      </div>
      <section>
        {/* currated playlist section */}
        <article className="w-[100%] h-[503px] rounded-[20px] bg-[#609EAF] p-3 flex flex-col justify-between">
          <p>Curated playlist</p>
          <div>
            <h1 className="text-[2rem]">R & B Hits</h1>
            <p className="font-light">
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </p>
            <div className="flex justify-between items-center py-5 ">
              <div className="flex relative pr-10 z-0">
                <img
                  src="\images\Ellipse 2.png"
                  alt="image"
                  className="absolute left-0"
                />
                <img
                  src="\images\Ellipse 3.png"
                  alt="image"
                  className="absolute left-5"
                />
                <img
                  src="\images\Ellipse 4.png"
                  alt="image"
                  className="absolute left-10"
                />
                <img
                  src="\images\Ellipse 5.png"
                  alt="image"
                  className="absolute left-15"
                />
                <img src="\images\Ellipse 6.png" alt="image" />
              </div>

              <div className="flex gap-3">
                <img src="\images\Vector.png" alt="" />
                <p>33K Likes</p>
              </div>
            </div>
          </div>
        </article>
        {/* top charts section */}
        <article className="my-7 p-2  ">
          <h3 className="py-3">Top charts</h3>
          <div className="overflow-x-auto over">
            <div className="w-[700px] phone:flex">
              <div className=" bg-[#1A1E1F] rounded-[20px] w-[600px] m-2">
                <div className="flex justify-between p-1">
                  <img src="\images\Rectangle 17.png" alt="" />
                  <FaRegHeart />
                </div>
                <p>Golden age of 80s</p>
                <p>sean swadder</p>
                <p className="py-3">2:34:45</p>
              </div>
              <div className=" bg-[#1A1E1F] rounded-[20px] w-[600px] m-2">
                <div className="flex justify-between  p-1">
                  <img src="\images\Rectangle 17 (1).png" alt="" />
                  <FaRegHeart />
                </div>
                <p>Golden age of 80s</p>
                <p>sean swadder</p>
                <p className="py-3">2:34:45</p>
              </div>
              <div className=" bg-[#1A1E1F] rounded-[20px] w-[600px] m-2">
                <div className="flex justify-between ">
                  <img src="\images\Rectangle 17 (2).png" alt="" />
                  <FaRegHeart />
                </div>
                <p>Golden age of 80s</p>
                <p>sean swadder</p>
                <p className="py-3">2:34:45</p>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* new releases */}
      <section>
        <h3>New releases.</h3>
        <div className="overflow-x-auto">
          <div className="phone:flex gap-5 py-5">
            <img src="\images\Rectangle 14.png" alt="" />
            <img src="\images\Rectangle 14 (1).png" alt="" />
            <img src="\images\Rectangle 14 (2).png" alt="" />
            <img src="\images\Rectangle 14 (3).png" alt="" />
            <img src="\images\Rectangle 14 (4).png" alt="" />
            <img src="\images\Rectangle 14 (5).png " alt="" />
          </div>
        </div>
      </section>
      <MusicControls />
    </section>
  );
};

export default Home;

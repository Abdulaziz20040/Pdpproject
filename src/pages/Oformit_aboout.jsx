import React from "react";
import img2 from "./artigiani.png";
import img3 from "./artigiani 1.png";

function Oformit_Aboout() {
  return (
    <div className="relative w-full mb-32 h-[805px]">
      {/* Background Image */}
      <img src={img2} alt="" className="w-full h-full object-cover" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <img
          src={img3}
          alt="Logo"
          className="mb-4 w-[450px] h-auto object-contain"
        />
        <p className="mb-4 text-lg font-thin max-w-[700px]">
          Изделия премиального качества из самых лучших материалов, ориентируясь
          на традиции итальянских производителей.
        </p>
        <button className="px-6 py-5 text-[20px] font-thin text-white border-b-[1px]">
          Cмотреть КОЛЛЕКЦИЮ
        </button>
      </div>
    </div>
  );
}

export default Oformit_Aboout;

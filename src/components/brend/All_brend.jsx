import React from "react";
import brend1 from "../../img/brend/image1.png";
import brend2 from "../../img/brend/image2.png";
import brend3 from "../../img/brend/image3.png";
import brend4 from "../../img/brend/image4.png";
import brend5 from "../../img/brend/image5.png";
import brend6 from "../../img/brend/image6.png";
import { Link } from "react-router-dom";

function All_brend() {
  return (
    <div className=" mt-14 p-5">
      <div className="flex justify-center items-center gap-4 mt-4">
        <img className="w-[170px] cursor-pointer" src={brend1} alt="brand1" />
        <span className="mx-2 text-3xl text-stone-300">|</span>
        <img className="w-[170px] cursor-pointer" src={brend2} alt="brand2" />
        <span className="mx-2 text-3xl text-stone-300">|</span>
        <img className="w-[170px] cursor-pointer" src={brend3} alt="brand3" />
        <span className="mx-2 text-3xl text-stone-300">|</span>
        <img className="w-[170px] cursor-pointer" src={brend4} alt="brand4" />
        <span className="mx-2 text-3xl text-stone-300">|</span>
        <img className="w-[140px] cursor-pointer" src={brend5} alt="brand5" />
        <span className="mx-2 text-3xl text-stone-300">|</span>
        <img className="w-[170px] cursor-pointer" src={brend6} alt="brand6" />
      </div>
    </div>
  );
}

export default All_brend;

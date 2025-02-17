import React from "react";
import brend1 from "../../img/brend/image1.png";
import brend2 from "../../img/brend/image2.png";
import brend3 from "../../img/brend/image3.png";
import brend4 from "../../img/brend/image4.png";
import brend5 from "../../img/brend/image5.png";
import brend6 from "../../img/brend/image6.png";
import { Link } from "react-router-dom";

function Brend() {
  return (
    <div className=" mt-10  p-5">
      <h1 className=" text-center text-[40px] font-[300] text-[#333333]">
        ТОП-БРЕНДЫ
      </h1>
      <div className="flex justify-center items-center gap-4 mt-4">
        <img className="w-[170px]" src={brend1} alt="brand1" />
        <span className="mx-2 text-3xl text-stone-300">|</span>
        <img className="w-[170px]" src={brend2} alt="brand2" />
        <span className="mx-2 text-3xl text-stone-300">|</span>
        <img className="w-[170px]" src={brend3} alt="brand3" />
        <span className="mx-2 text-3xl text-stone-300">|</span>
        <img className="w-[170px]" src={brend4} alt="brand4" />
        <span className="mx-2 text-3xl text-stone-300">|</span>
        <img className="w-[140px]" src={brend5} alt="brand5" />
        <span className="mx-2 text-3xl text-stone-300">|</span>
        <img className="w-[170px]" src={brend6} alt="brand6" />
      </div>
      <Link to="/allbrend">
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          <p>ВСЕ БРЕНДЫ</p>
          <hr className="w-[200px] border-stone-500" />
        </div>
      </Link>
    </div>
  );
}

export default Brend;

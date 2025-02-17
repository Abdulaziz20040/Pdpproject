import axios from "axios";
import React, { useEffect, useState } from "react";
import img1 from "./Group 202.png";
import { Link } from "react-router-dom";

function Slider2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://715c33c88529aa9a.mokky.dev/intefra")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="w-full mb-32 mt-10">
        <div className="flex justify-center items-center">
          {data.slice(0, 1).map((item) => (
            <div className="relative w-full h-[600px]" key={item.id}>
              <img
                src={item.img[0]}
                alt=""
                className="w-full h-[600px] object-cover filter brightness-50"
              />
              <div className="absolute top-5 left-[60%] text-white px-4 py-2 rounded">
                <button className="rounded-[35px] text-[20px] font-thin p-3 px-[50px] border-[1px] border-[#FFFFFF] ">
                  Парфюм
                </button>
              </div>
              <div className="absolute bottom-5 left-[40%] text-end text-white px-4 py-2 rounded">
                <p className="mb-2 text-[30px] font-thin leading-[45px]">
                  Maison
                </p>
                <p className="text-[30px] font-thin leading-[45px]">
                  Francis Kurkdjian
                </p>
                <p className="text-[30px] font-thin leading-[45px]">
                  Baccarat Rouge 540
                </p>
                <Link to={`/detailsNovinki/${item.id}`}>
                  <button className="border-b-[1px] border-white text-white px-4 py-2">
                    Смотреть
                  </button>
                </Link>
              </div>
            </div>
          ))}
          {data.slice(1, 2).map((item) => (
            <div className="relative w-full h-[600px]" key={item.id}>
              <img
                src={item.img[1]}
                alt=""
                className="w-full h-[600px] object-cover filter brightness-50"
              />
              <div className="absolute top-5 left-5  text-black px-4 py-2">
                <button className="rounded-[35px] text-[20px] font-thin p-3 px-8 border-[1px] border-[#333333] ">
                  Запах месяца
                </button>
              </div>
              <div className="absolute bottom-5 left-[75px] text-white px-4 py-2 rounded">
                <p className="mb-2 text-[30px] font-thin leading-[45px]">
                  Dr.Vranjes <br /> Rosso Nibile
                </p>
                <Link to={`/detailsNovinki/${item.id}`}>
                  <button className="border-b-[1px] border-white text-white px-4 py-2">
                    Смотреть
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <img className="w-[90%] h-[230px] object-cover" src={img1} alt="" />
      </div>
    </>
  );
}

export default Slider2;

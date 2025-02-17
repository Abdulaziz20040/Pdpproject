import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function All_skidki() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://715c33c88529aa9a.mokky.dev/intefra")
      .then((response) => {
        const filterproduct = response.data.filter(
          (item) => item.scidka === true
        );
        setItems(filterproduct);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full bg-white py-8">
      <h2 className="text-start text-[#E53030] text-[25px] font-[300] mb-2">
        ВСЕ СКИДКИ
      </h2>

      <div className="relative flex items-center justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-8">
          {items.length > 0 &&
            items.map((item, index) => (
              <div
                key={index}
                className=" w-[270px] h-[376px] relative hover:shadow-lg hover:duration-300 hover:-translate-y-2 rounded-xl"
              >
                <button className=" absolute right-0 top-0 w-[58px] h-[58px] rounded-full bg-[#E53030] text-white">
                  {item.scidka === true ? <span>{item.skidca}</span> : null}
                </button>
                <Link to={`/detailsNovinki/${item.id}`}>
                  <img
                    src={item.img[0]}
                    alt={item.name}
                    className="rounded-lg h-[300px] object-cover mb-2 w-full"
                  />
                </Link>
                <p className="text-sm font-semibold text-center">{item.name}</p>
                <div className=" flex items-center justify-center gap-6 mt-1">
                  <p className="text-[14px] font-[600] text-center line-through text-[#969696]">
                    {item.oldPrice}
                  </p>
                  <p className="text-[14px] font-[700]  text-center text-[#E53030]">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default All_skidki;

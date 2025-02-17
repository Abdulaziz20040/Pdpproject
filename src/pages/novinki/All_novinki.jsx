import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function Novinki() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://715c33c88529aa9a.mokky.dev/intefra")
      .then((response) => {
        // Filter items where scidka is true
        const filterproduct = response.data.filter(
          (item) => item.novinki === true
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
    <div className="w-full bg-white py-8 mt-4">
      <h2 className="text-start text-[#333333] text-[25px] font-[300] mb-2">
        ВСЕ НОВИНКИ
      </h2>
      <div className="relative flex items-center justify-center">
        {/* Slider Items */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-8">
          {items.length > 0 &&
            items.map((item, index) => (
              <div
                key={index}
                className=" w-[240px] h-[376px] hover:shadow-lg hover:duration-300 hover:-translate-y-2 rounded-xl"
              >
                <Link to={`/detailsNovinki/${item.id}`}>
                  <img
                    src={item.img[0]}
                    alt={item.name}
                    className="rounded-lg h-[300px] object-cover mb-2 w-full"
                  />
                </Link>
                <p className="text-sm font-semibold text-center">{item.name}</p>
                <p className="text-sm text-center text-gray-500">
                  {item.brand}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Novinki;

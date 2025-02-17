import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function ReletedPost() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://715c33c88529aa9a.mokky.dev/intefra")
      .then((response) => {
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
    <div className="w-full bg-white py-8">
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-2 text-2xl text-gray-500 hover:text-black"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {items.length > 0 &&
            items.slice(currentIndex, currentIndex + 4).map((item, index) => (
              <div
                key={index}
                className=" w-[270px] h-[376px] hover:shadow-lg hover:duration-300 hover:-translate-y-2 rounded-xl"
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

        <button
          className="absolute right-2 text-2xl text-gray-500 hover:text-black"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ReletedPost;

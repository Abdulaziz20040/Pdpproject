import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FooterDelery from "../../components/FooterDelery";
import { useProduct } from "../../context/BasketContext";
import { toast } from "react-toastify";

function Koleksiya_Details() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const { addToFavorite, favorite, deleteFromFavorite } = useProduct();

  const handleFavorite = (item) => {
    if (!selectedSize) {
      toast.error("Олчамни танланг!");
    } else {
      const isInFavorites = favorite.some((fav) => fav.id === item.id);

      if (isInFavorites) {
        deleteFromFavorite(item.id);
        toast.success("Удалено из корзины");
      } else {
        addToFavorite(item, selectedSize);
        toast.success("Товар добавлен в корзину");
      }
    }
  };

  useEffect(() => {
    fetch(`https://715c33c88529aa9a.mokky.dev/intefra/${id}`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("API error:", error));
  }, [id]);

  if (!data) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!data.img || data.img.length === 0) {
    return <div className="text-center mt-10">No images available.</div>;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.img.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + data.img.length) % data.img.length
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-12 mb-[90px]">
        <div className=" relative">
          <img
            src={data.img[currentIndex]}
            alt={data.name || "Product image"}
            className="w-[500px] h-[670px] object-cover rounded-lg"
          />

          <button
            onClick={handlePrev}
            className="absolute top-[42%] left-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-[42%] right-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-6 mt-4">
            {data.img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                  currentIndex === index ? "border-2 border-black" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="">
          <h2 className=" text-[40px] text-[#333333] font-[300] mb-4">
            ОБРАЗ В ДЕТАЛЯХ
            <hr className=" mt-3" />
          </h2>

          <div className=" flex items-center gap-10">
            <img
              className="w-[74px] h-[104px] object-cover rounded-lg"
              src={data.img[3]}
            />
            <div>
              <h2 className="text-[16px] font-[500] max-w-[246px] text-[#333333] mb-4">
                {data.desc || "Product Name"}
              </h2>
              <div className="flex justify-center gap-3 items-center mt-5 mb-3">
                {data.size.map((sizeObj, index) => (
                  <div
                    key={index}
                    className={`border-[1px] border-[#D9D9D9] p-2 py-1 w-[50px] rounded-lg text-center cursor-pointer ${
                      selectedSize === sizeObj ? "bg-black text-white" : ""
                    }`}
                    onClick={() => setSelectedSize(sizeObj)}
                  >
                    <span>{Object.values(sizeObj)[0]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mb-4 gap-10">
              <span className="text-gray-400 line-through">
                {data.oldPrice || ""}
              </span>
              <span className="text-xl text-red-600 font-bold">
                {data.price || "Price not available"}
              </span>
            </div>
            <button
              className="w-40 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
              onClick={() => handleFavorite(data)}
            >
              {favorite.some((item) => item.id === data.id && selectedSize)
                ? "Убрать из корзины"
                : "КУПИТЬ"}
            </button>
          </div>
          <hr className=" mt-5 mb-5" />
        </div>
      </div>

      <FooterDelery />
    </div>
  );
}

export default Koleksiya_Details;

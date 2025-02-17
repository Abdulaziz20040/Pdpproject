import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "./imgs/image13.png";
import img2 from "./imgs/image42.png";
import FooterDelery from "../../components/FooterDelery";
import { useProduct } from "../../context/BasketContext";
import { toast } from "react-toastify";
import Novinki from "./Novinki";
import ReletedPost from "../ReletedPost";

function Novinki_details() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedSize, setSelectedSize] = useState(
    localStorage.getItem("selectedSize")
  );

  useEffect(() => {
    localStorage.setItem("selectedSize", selectedSize);
    console.log(`Selected size: ${selectedSize} at Novinki_details component`);
  }, [selectedSize]);

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

  const handleSizeChange = (size) => {
    setSelectedSize(size);
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
    <div className="container mx-auto p-4 mb-32">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="relative">
          <img
            src={data.img[currentIndex]}
            alt={data.name || "Product image"}
            className="w-[510px] h-[700px] object-cover rounded-lg"
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
                className={`w-20 h-20 rounded-lg cursor-pointer object-cover ${
                  currentIndex === index ? "border-2 border-black" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <p className="text-[32px] font-thin mb-1 tracking-wider">
            {data.description}
          </p>
          <p className="text-[35px] text-[#333333] font-bold mb-4">
            {data.name || "Product Name"}
          </p>
          <p className="text-sm font-thin text-gray-500 mb-4">
            Brand: {data.desc}
          </p>
          <div className="flex items-center justify-start gap-5 mb-4">
            <span className="text-gray-400 line-through">{data.oldPrice}</span>
            <span className="text-xl text-red-600 font-bold">{data.price}</span>
          </div>

          <div className="flex items-center justify-start gap-5 mb-8">
            {data.size &&
              Object.values(data.size).map((key, index) => (
                <div key={index}>
                  <button
                    className={`px-9 py-2 border rounded-sm ${
                      selectedSize === Object.values(key)[0]
                        ? "border-[#190404] text-[#190404]"
                        : "border-[#D9D9D9]"
                    }`}
                    onClick={() => handleSizeChange(Object.values(key)[0])}
                  >
                    {Object.values(key)[0]}
                  </button>
                </div>
              ))}
          </div>
          <div className="flex justify-start gap-5">
            <button
              className="w-48 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
              onClick={() => handleFavorite(data)}
            >
              {favorite.some((item) => item.id === data.id && selectedSize)
                ? "Убрать из корзины"
                : "в корзину"}
            </button>
            <Link to={"/oformirovat"}>
              <button className="w-48 bg-black text-white px-6 rounded-md py-2 hover:bg-gray-800">
                быстрый заказ
              </button>
            </Link>
          </div>
          <div className="border-t-[1px] border-[#D9D9D9] mt-11 pt-10">
            <div>
              <h3 className="font-normal text-[#414141]">
                Куртка-бомбер из замшевого ширлинга Texture, который имеет
                бархатистый и матовый вид с наружной стороны. Пушистая и теплая
                внутренняя сторона обеспечивает должную защиту для холодного
                сезона.{" "}
              </h3>
              <p className="text-[#414141] mt-3 mb-5 font-medium">
                Данная модель большемерит на размер.
              </p>
              <div className="mt-5">
                <p className="">
                  <span className="font-bold">Материал:</span>
                  <span className="text-[#414141]">100% дубленая кожа</span>
                </p>
                <p className="mt-3">
                  <span className="font-bold">Подкладка:</span>
                  <span className="text-[#414141]">100% овчина</span>
                </p>
                <p className="mt-3">
                  <span className="font-bold">Производитель:</span>
                  <span className="text-[#414141]">Италия</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-start gap-4 mt-11 border-t-[1px] pt-10">
            <div className="border-[1px] w-[20pc] h-[130px] p-2 flex justify-center items-center border-[#D9D9D9] text-center">
              <img src={img1} className="w-[100%] object-cover" alt="" />
            </div>
            <div className="flex justify-start w-[65pc] gap-4 h-[130px] bg-[#F9F9F9]">
              <img src={img2} alt="" />
              <div className="p-4">
                <p className="text-[#000000] font-semibold mb-1">
                  Товар в наличии
                </p>
                <p className="text-[#E53030] mb-1">www.artigiani.boutique</p>
                <p className="text-[#414141]">
                  Санкт-Петербург, Большой проспект ПС 13
                </p>
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-5 mt-14 underline text-[#333333] font-normal">
            <Link to={"/allkoleksiya"}>
              <p className="cursor-pointer">Смотреть КОЛЛЕКЦИЯ</p>
            </Link>
            <Link to={"/allbrend"}>
              <p className="cursor-pointer">Смотреть все товары бренда</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="text-center">
          <p className="text-[#333333] font-thin text-[35px]">
            С ЭТИМ ТОВАРОМ ПОКУПАЮТ
          </p>
        </div>
        <div className="flex justify-center gap-3">
          {/* cards */}
          <ReletedPost />
        </div>
        <FooterDelery />
      </div>
    </div>
  );
}

export default Novinki_details;

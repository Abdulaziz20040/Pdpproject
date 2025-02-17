import React from "react";
import { IoMdClose } from "react-icons/io";
import { useProduct } from "../context/BasketContext";
import Cdek from "./oformirovat/img/Vector.png";
import { Link } from "react-router-dom";
import FooterDelery from "./FooterDelery";
import { toast } from "react-toastify";

function Korzinka() {
  const { favorite, deleteFromFavorite } = useProduct();

  const handleDelete = (item) => {
    deleteFromFavorite(item.id);
    toast.success("Маҳсулот ўчирилди");
  };
  const size = localStorage.getItem("selectedSize");
  return (
    <>
      <div className="flex justify-between w-full gap-10 p-6 mb-10">
        <div className="w-3/4">
          {favorite.length === 0 ? (
            <div>Hozircha mahsulotlar yo'q</div>
          ) : (
            favorite.map((item) => (
              <div className="border-t py-4 flex justify-between items-center gap-16 mt-10">
                <Link to={`/detailsNovinki/${item.id}`} key={item.id}>
                  <img src={item.img[0]} alt={item.name} className="w-20" />
                </Link>
                <div className="flex-1 px-4">
                  <h3 className="text-gray-800 text-lg">{item.name}</h3>
                  <p className="text-gray-500 mt-2">Размер : {size}</p>
                </div>
                <p className="text-black font-semibold">{item.price}</p>
                <p className="text-red-500">{item.skidca}</p>
                <p className="text-gray-500 line-through">{item.oldPrice}</p>
                <button
                  onClick={() => handleDelete(item)}
                  className="ml-4 text-gray-500 hover:text-red-500"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
            ))
          )}
        </div>
        <div className="bg-[#D9D9D9] p-6 rounded-lg w-[360px] h-[400px] mt-4">
          <h2 className="text-xl font-semibold mb-4">ВАШ ЗАКАЗ</h2>
          <div className="space-y-4">
            {favorite.slice(0, 1).map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="flex justify-between">
                  <span>Сумма заказа</span>
                  <span>{item.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Сумма скидки</span>
                  <span>{item.skidca}</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold text-lg">
                  <span>ИТОГО</span>
                  <span>{item.oldPrice}</span>
                </div>
              </div>
            ))}

            <div className="flex items-center space-x-4 border-t pt-4">
              <img src={Cdek} alt="CDEK" className="w-[120px] h-[32px]" />
              <div>
                <h2 className="text-[12px] font-[500] w-[171px]">
                  Бесплатная доставка в случае покупки товара
                </h2>
                <p className="text-[#969696] text-[12px] font-[400]">
                  Доставка в случае отказа 1 500 руб.
                </p>
              </div>
            </div>

            <Link to={favorite.length > 0 ? "/oformirovat" : "#"}>
              <button
                className={`w-full h-[47px] mt-4 bg-[#190404] text-white py-2 rounded-lg font-medium ${
                  favorite.length === 0 ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={favorite.length === 0}
              >
                оформить заказ
              </button>
            </Link>
          </div>
        </div>
      </div>
      <FooterDelery />
    </>
  );
}

export default Korzinka;

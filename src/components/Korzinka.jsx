import React from "react";
import { IoMdClose } from "react-icons/io";
import { useProduct } from "../context/BasketContext";
import Cdek from "./oformirovat/img/Vector.png";
function Korzinka() {
  const { favorite, deleteFromFavorite } = useProduct();

  const handleDelete = (item) => {
    deleteFromFavorite(item.id);
  };

  const totalOriginalPrice = favorite.reduce(
    (sum, item) => sum + item.originalPrice,
    0
  );
  const totalDiscount = favorite.reduce(
    (sum, item) => sum + (item.originalPrice - item.price),
    0
  );
  const totalPrice = totalOriginalPrice - totalDiscount;

  return (
    <div className="flex justify-between w-full gap-10 p-6">
      <div className="w-3/4">
        {favorite.length === 0 ? (
          <div>Hozircha mahsulotlar yo'q</div>
        ) : (
          favorite.map((item) => (
            <div
              key={item.id}
              className="border-t py-4 flex justify-between items-center gap-16 mt-10"
            >
              <img src={item.img[0]} alt={item.name} className="w-20" />
              <div className="flex-1 px-4">
                <h3 className="text-gray-800 text-lg">{item.name}</h3>
                <p className="text-gray-500 mt-2">Размер: 43</p>
              </div>
              <p className="text-black font-semibold">{item.price} р</p>
              <p className="text-red-500">-{item.skidca} р</p>
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
      <div className="bg-[#D9D9D9] p-6 rounded-lg  w-[360px] h-[600px] mt-4">
        <h2 className="text-xl font-semibold mb-4">ВАШ ЗАКАЗ</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div>
                <p className="font-medium">Ботинки из телячьей кожи</p>
                <p className="text-sm text-gray-600">Brunello Cucinelli</p>
                <p className="text-sm text-gray-600">Размер: 43</p>
              </div>
            </div>
            <p className="font-medium">23 000 р</p>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div>
                <p className="font-medium">Ботинки из телячьей кожи</p>
                <p className="text-sm text-gray-600">Brunello Cucinelli</p>
                <p className="text-sm text-gray-600">Размер: 43</p>
              </div>
            </div>
            <p className="font-medium">23 000 р</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Сумма заказа</span>
              <span>46 000 р</span>
            </div>
            <div className="flex justify-between">
              <span>Сумма скидки</span>
              <span>-20 000 р</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>К ОПЛАТЕ</span>
              <span>23 000 р</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 border-t pt-4">
            <img src={Cdek} alt="CDEK" className="w-[120px] h-[32px] " />
            <p className="text-sm text-gray-600">
              Оплата осуществляется курьеру СДЭК картой или наличными.
            </p>
          </div>

          <button className="w-full h-[47px] bg-[#190404] text-white py-2 rounded-lg font-medium">
            ПОДТВЕРДИТЬ ЗАКАЗ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Korzinka;

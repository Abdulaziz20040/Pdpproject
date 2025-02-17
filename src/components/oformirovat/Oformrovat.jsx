import React from "react";
import Cdek from "./img/Vector.png";
import FooterDelery from "../FooterDelery";

const Oformrovat = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center py-10">
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          {/* Payment Details Section */}
          <div className="bg-white p-6 rounded-lg  flex-1">
            <h2 className="text-xl font-semibold mb-4">ДЕТАЛИ ОПЛАТЫ</h2>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Имя *"
                  className="w-full border outline-none border-gray-300 rounded-lg p-2"
                />
                <input
                  type="text"
                  placeholder="Фамилия *"
                  className="w-full border outline-none border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className=" flex items-start justify-between">
                <div>
                  <p className="text-gray-700 font-medium mb-3">
                    ВЫБЕРИТЕ СПОСОБ ПОЛУЧЕНИЯ ЗАКАЗА:
                  </p>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="delivery"
                        className="mr-2 outline-none"
                      />
                      Доставка на дом
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="delivery"
                        className="mr-2 outline-none"
                      />
                      Пункт выдачи СДЭК
                    </label>
                  </div>
                </div>
                <div>
                  <h2 className=" text-[16px] font-[600] mb-3">
                    Страна/регион
                  </h2>
                  <p>Россия</p>
                </div>
              </div>

              <h1 className=" pt-5 text-[16px] font-[600]">Адрес</h1>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Город *"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Номер дома и название улицы *"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Телефон *"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none"
                />
              </div>

              <h1 className="text-[16px] font-[600] pt-4">
                Примечание к заказу
              </h1>

              <textarea
                placeholder="ПРИМЕЧАНИЕ К ЗАКАЗУ"
                className="w-full border border-gray-300 rounded-lg p-2 h-24 outline-none"
              ></textarea>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-[#D9D9D9] p-6 rounded-lg  w-[419px] h-[550px]">
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
      </div>
      <FooterDelery />
    </>
  );
};

export default Oformrovat;

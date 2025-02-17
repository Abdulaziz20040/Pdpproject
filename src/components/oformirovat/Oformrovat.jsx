import React, { useState } from "react";
import Cdek from "./img/Vector.png";
import FooterDelery from "../FooterDelery";
import { useProduct } from "../../context/BasketContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Oformrovat = () => {
  const { favorite, deleteFromFavorite } = useProduct();
  const size = localStorage.getItem("selectedSize");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    email: "",
    phone: "",
    notes: "",
    deliveryMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, city, street, email, phone, deliveryMethod } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !city ||
      !street ||
      !email ||
      !phone ||
      !deliveryMethod
    ) {
      toast.info("Пожалуйста, заполните все поля и выберите способ доставки.");
      return;
    }

    localStorage.setItem("orderData", JSON.stringify(formData));
    toast.success("Ваш заказ успешно оформлен!");
    deleteFromFavorite(favorite[0].id);
    localStorage.removeItem("selectedSize");
    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen flex justify-center py-10">
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          <div className="bg-white p-6 rounded-lg flex-1">
            <h2 className="text-xl font-semibold mb-4">ДЕТАЛИ ОПЛАТЫ</h2>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Имя *"
                  className="w-full border outline-none border-gray-300 rounded-lg p-2"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Фамилия *"
                  className="w-full border outline-none border-gray-300 rounded-lg p-2"
                />
              </div>

              <div>
                <p className="text-gray-700 font-medium mb-3">
                  ВЫБЕРИТЕ СПОСОБ ПОЛУЧЕНИЯ ЗАКАЗА:
                </p>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="home"
                      checked={formData.deliveryMethod === "home"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Доставка на дом
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="cdek"
                      checked={formData.deliveryMethod === "cdek"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Пункт выдачи СДЭК
                  </label>
                </div>
              </div>

              <h1 className="pt-5 text-[16px] font-[600]">Адрес</h1>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Город *"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Номер дома и название улицы *"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Телефон *"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none"
                />
              </div>

              <h1 className="text-[16px] font-[600] pt-4">
                Примечание к заказу
              </h1>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="ПРИМЕЧАНИЕ К ЗАКАЗУ"
                className="w-full border border-gray-300 rounded-lg p-2 h-24 outline-none"
              ></textarea>
            </form>
          </div>

          <div className="bg-[#D9D9D9] p-6 rounded-lg  w-[419px] h-[550px]">
            <h2 className="text-xl font-semibold mb-4">ВАШ ЗАКАЗ</h2>
            {favorite.slice(0, 1).map((item) => {
              return (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.img[0]}
                        alt="Product"
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.breend}</p>
                        <p className="text-sm text-gray-600">Размер : {size}</p>
                      </div>
                    </div>
                    <p className="font-medium">23 000 р</p>
                  </div>
                </div>
              );
            })}
            <div className="space-y-2">
              <div className="flex justify-between mt-2">
                <span>Сумма заказа</span>
                <span>46 000 р</span>
              </div>
              <div className="flex justify-between">
                <span>Сумма скидки</span>
                <span>-20 000 р</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4">
                <span>К ОПЛАТЕ</span>
                <span>23 000 р</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-t pt-5">
              <img src={Cdek} alt="CDEK" className="w-[120px] h-[32px] " />
              <p className="text-sm text-gray-600">
                Оплата осуществляется курьеру СДЭК картой или наличными.
              </p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full h-[47px] mt-10 bg-[#190404] text-white py-2 rounded-lg font-medium"
            >
              ПОДТВЕРДИТЬ ЗАКАЗ
            </button>
          </div>
        </div>
      </div>
      <FooterDelery />
    </>
  );
};

export default Oformrovat;

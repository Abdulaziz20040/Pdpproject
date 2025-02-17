import React, { useEffect, useState } from "react";
import FooterDelery from "./FooterDelery";

function Dostavka() {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const storedOrderData = JSON.parse(localStorage.getItem("orderData"));
    if (storedOrderData) {
      setOrderData(storedOrderData);
    }
  }, []);

  const handleCloseCard = () => {
    localStorage.removeItem("orderData");
    setOrderData(null);
  };

  if (!orderData) {
    return (
      <div className="text-center text-lg font-medium">
        Ҳозирча даставка мавжуд эмас
      </div>
    );
  }

  return (
    <>
      <div className="w-[500px] p-6 bg-white shadow-xl rounded-lg mb-20 mt-2 cursor-pointer relative">
        <button
          onClick={handleCloseCard}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-600"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-start mb-6">
          Буюртма Ма'lumotлари
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <strong className="text-lg text-gray-700">Буюртмачи:</strong>
            <span className="text-lg text-gray-900">
              {orderData.firstName} {orderData.lastName}
            </span>
          </div>
          <div className="flex justify-between">
            <strong className="text-lg text-gray-700">Шаҳар:</strong>
            <span className="text-lg text-gray-900">{orderData.city}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-lg text-gray-700">Телефон:</strong>
            <span className="text-lg text-gray-900">{orderData.phone}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-lg text-gray-700">Электрон почта:</strong>
            <span className="text-lg text-gray-900">{orderData.email}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-lg text-gray-700">Кўчаси:</strong>
            <span className="text-lg text-gray-900">{orderData.street}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-lg text-gray-700">
              Йетказиб бериш усули:
            </strong>
            <span className="text-lg text-gray-900">
              {orderData.deliveryMethod}
            </span>
          </div>
          <div className="flex justify-between">
            <strong className="text-lg text-gray-700">Эслатмалар:</strong>
            <span className="text-lg text-gray-900">{orderData.notes}</span>
          </div>
        </div>
      </div>
      <FooterDelery />
    </>
  );
}

export default Dostavka;

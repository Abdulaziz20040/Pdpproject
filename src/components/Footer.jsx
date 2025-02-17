import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-red-500 p-6 text-black text-sm">
      <div className=" mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold">INTEFRA</h2>
          <p className="mt-2">
            INTEFRA – российская платформа, на которой объединены ведущие
            итальянские бренды одежды, обуви и аксессуаров.
          </p>
          <p className="mt-2 text-gray-500">
            INTEFRA.RU - с 2012 года - 100% оригинальные товары
          </p>
        </div>
        <div className="md:w-1/3 grid grid-cols-2 gap-4 mt-4 md:mt-0">
          <ul className="space-y-2">
            <li className="hover:cursor-pointer">Обувь</li>
            <li className="hover:cursor-pointer">Джинсы и брюки</li>
            <li className="hover:cursor-pointer">Верхняя одежда</li>
            <li className="hover:cursor-pointer">Спортивные костюмы</li>
            <li className="hover:cursor-pointer">Пиджаки и костюмы</li>
            <li className="hover:cursor-pointer">Свитера, поло, джемперы</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:cursor-pointer">Футболки и поло</li>
            <li className="hover:cursor-pointer">Сумки</li>
            <li className="hover:cursor-pointer">Ремни</li>
            <li className="hover:cursor-pointer">Аксессуары</li>
            <li className="hover:cursor-pointer">Бренды</li>
          </ul>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <h3 className="font-semibold">Офис в России</h3>
          <p>Москва, Кутузовский пр. 2</p>
          <p>Санкт-Петербург, Большой проспект П.С. 13</p>
          <h3 className="font-semibold mt-4">Офис в Италии</h3>
          <p>Milano, Via Manzoni 23</p>
          <div className="flex space-x-4 mt-4">
            <span className="hover:cursor-pointer">🔍</span>
            <span className="hover:cursor-pointer">📷</span>
            <span className="hover:cursor-pointer">✈️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

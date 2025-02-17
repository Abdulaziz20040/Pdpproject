import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import dostavka from "../img/dostavka.png";
import korzina from "../img/korzinka.png";
import Bars from "../img/bars.png";
import { useProduct } from "../context/BasketContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const { favorite } = useProduct();

  useEffect(() => {
    // Fetch brand categories from the API
    fetch("https://715c33c88529aa9a.mokky.dev/intefra")
      .then((response) => response.json())
      .then((data) => setBrands(data || []))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  const handleBrandClick = (brand) => {
    // Tanlangan brendni URL orqali o’tkazamiz
    navigate(`/filter-brend?brand=${encodeURIComponent(brand.breend)}`);
    setIsMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between gap-10 bg-white mt-4 relative">
      <div className="flex items-center gap-4">
        <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img className="w-[1.875rem]" src={Bars} alt="Menu" />
        </button>
        <Link to="/">
          <h1 className="text-2xl font-bold ml-4">INTEFRA</h1>
        </Link>
      </div>
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Поиск по продукции"
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/dostavka">
          <div className="flex items-center flex-col">
            <img className="w-[1.875rem]" src={dostavka} alt="Доставка" />
            <span className="ml-2 text-[14px]">Доставка</span>
          </div>
        </Link>
        <Link to="/korzina">
          <div className="relative flex items-center flex-col">
            {favorite.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {favorite.length}
              </span>
            )}
            <img className="w-[1.875rem]" src={korzina} alt="Корзина" />
            <span className="ml-2 text-[14px]">Корзина</span>
          </div>
        </Link>
      </div>

      {/* Modal/Menu for Brands */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((brand, index) => (
            <div
              style={{
                backgroundImage: `url(${brand.brenIMg})`,
                backgroundSize: "cover",
                backgroundPosition: "start",
                height: "120px",
              }}
              key={index}
              className="flex flex-col relative justify-end items-center border p-2 rounded-lg hover:shadow-md cursor-pointer text-white"
              onClick={() => handleBrandClick(brand)}
            >
              <span className="text-center absolute left-4 top-10 text-sm font-medium bg-black bg-opacity-50 p-1 rounded">
                {brand.breend}
              </span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;

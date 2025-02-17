import React, { useState, useEffect, useRef } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBrands, setFilteredBrands] = useState([]);

  const searchRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    fetch("https://715c33c88529aa9a.mokky.dev/intefra")
      .then((response) => response.json())
      .then((data) => setBrands(data || []))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = brands.filter((brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBrands(results);
    } else {
      setFilteredBrands([]);
    }
  }, [searchTerm, brands]);

  const handleClickOutside = (e) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(e.target) &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      setSearchTerm("");
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleBrandClick = (brand) => {
    navigate(`/filter-brend?brand=${encodeURIComponent(brand.breend)}`);
    setSearchTerm("");
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
      <div className="flex-1 mx-4" ref={searchRef}>
        <input
          type="text"
          placeholder="Поиск по продукции"
          className="w-full p-2 border rounded-lg outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredBrands.length > 0 && (
          <div className="max-h-48 overflow-y-auto w-[950px] border-t mt-2 bg-white absolute shadow-lg rounded-lg">
            {filteredBrands.map((brand) => (
              <Link key={brand.id} to={`/detailsNovinki/${brand.id}`}>
                <div
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleBrandClick(brand)}
                >
                  <img
                    src={brand.img[0]}
                    alt={brand.name}
                    className="w-10 h-10 mr-2"
                  />
                  <span>{brand.name}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/BasketContext";

function All_brend() {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const { favorite } = useProduct();

  useEffect(() => {
    fetch("https://715c33c88529aa9a.mokky.dev/intefra")
      .then((response) => response.json())
      .then((data) => setBrands(data || []))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  const handleBrandClick = (brand) => {
    navigate(`/filter-brend?brand=${encodeURIComponent(brand.breend)}`);
    setIsMenuOpen(false);
  };
  return (
    <div>
      <div className="w-full rounded-lg p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
    </div>
  );
}

export default All_brend;

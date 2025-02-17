import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function FilterBrend() {
  const [brandProducts, setBrandProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const brandName = params.get("brand");

    if (brandName) {
      // Tanlangan brend bo’yicha mahsulotlarni yuklash
      fetch(`https://715c33c88529aa9a.mokky.dev/intefra?breend=${brandName}`)
        .then((response) => response.json())
        .then((data) => setBrandProducts(data)) // Faqat mahsulotlar ro'yxatini o'qiymiz
        .catch((error) =>
          console.error("Error fetching brand products:", error)
        );
    }
  }, [location]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Tanlangan Brend: {new URLSearchParams(location.search).get("brand")}
      </h1>
      {brandProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3">
          {brandProducts.map((product) => (
            <Link to={`/details/${product.id}`}>
              <div
                key={product.id}
                className="rounded-lg hover:shadow-lg hover:duration-300 hover:-translate-y-2 w-[320px] h-[578px] overflow-hidden flex flex-col items-center"
              >
                {product.img && product.img.length > 0 ? (
                  <img
                    src={product.img[0]}
                    alt={product.name}
                    className="w-full h-[400px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                <div className="p-6 text-center">
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <p className="text-sm text-gray-600">{product.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Ma'lumot yuklanmoqda yoki hech qanday mahsulot yo'q...</p>
      )}
    </div>
  );
}

export default FilterBrend;

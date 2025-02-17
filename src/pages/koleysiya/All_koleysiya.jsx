import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Kolleksiya() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gender, setGender] = useState("");
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("popularity");
  const [brands, setBrands] = useState([]);
  const [genders, setGenders] = useState(["male", "female"]); // Gender options

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://715c33c88529aa9a.mokky.dev/intefra"
        );
        const items = response.data;
        setData(items);
        setFilteredData(items);

        // Extract unique brands
        const uniqueBrands = [...new Set(items.map((item) => item.breend))];
        setBrands(uniqueBrands);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = data;

    // Apply gender filter
    if (gender) {
      filtered = filtered.filter((item) =>
        gender === "male" ? item.male : item.female
      );
    }

    // Apply brand filter
    if (brand) filtered = filtered.filter((item) => item.breend === brand);

    // Apply sorting
    if (sort === "popularity") {
      filtered.sort((a, b) => b.popularity - a.popularity); // Example popularity sorting
    } else if (sort === "priceAsc") {
      filtered.sort(
        (a, b) =>
          parseFloat(a.price.replace(/\D/g, "")) -
          parseFloat(b.price.replace(/\D/g, ""))
      ); // Sort by price ascending
    } else if (sort === "priceDesc") {
      filtered.sort(
        (a, b) =>
          parseFloat(b.price.replace(/\D/g, "")) -
          parseFloat(a.price.replace(/\D/g, ""))
      ); // Sort by price descending
    }

    setFilteredData(filtered);
  }, [gender, brand, sort, data]);

  if (loading) {
    return (
      <div className="text-center text-xl font-bold mt-20">Yuklanmoqda...</div>
    );
  }

  return (
    <div className="bg-white py-12">
      <h1 className="text-[50px] font-[300] text-center mb-12">КОЛЛЕКЦИЯ</h1>

      {/* Filters Section */}
      <div className=" flex flex-col justify-center items-center">
        <div className="flex items-center justify-center mb-10 space-x-4">
          <select
            className="border rounded-lg p-2"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Пол</option>
            {genders.map((g) => (
              <option key={g} value={g}>
                {g === "male" ? "Мужской" : "Женский"}
              </option>
            ))}
          </select>

          <select
            className="border rounded-lg p-2"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Бренд</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <select
          className="border rounded-lg p-2 -mt-4 mb-10"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="popularity">Сортировать по популярности</option>
          <option value="priceAsc">Сортировать по цене (возрастанию)</option>
          <option value="priceDesc">Сортировать по цене (убыванию)</option>
        </select>
      </div>
      {/* Collection Grid */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 container gap-10 mx-auto px-6">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Link to={`/details/${item.id}`} key={item.id}>
                <div className="rounded-lg hover:shadow-lg hover:duration-300 hover:-translate-y-2 w-[350px] h-[578px] overflow-hidden flex flex-col items-center">
                  {item.img && item.img.length > 0 ? (
                    <img
                      src={item.img[0]}
                      alt={item.name}
                      className="w-full h-[500px] object-cover"
                    />
                  ) : (
                    <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image Available</span>
                    </div>
                  )}
                  <div className="p-6 text-center">
                    <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center text-gray-500">
              Нет товаров по вашему запросу
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Kolleksiya;

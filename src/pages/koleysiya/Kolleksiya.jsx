import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Kolleksiya() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://715c33c88529aa9a.mokky.dev/intefra"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-xl font-bold mt-20">Yuklanmoqda...</div>
    );
  }

  return (
    <div className="bg-white py-12">
      <h1 className="text-[50px] font-[300] text-center mb-12 mt-10">
        КОЛЛЕКЦИЯ
      </h1>
      <div className=" flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 container gap-10 mx-auto px-6">
          {data &&
            data.length > 0 &&
            data.slice(0, 3).map((item) => (
              <Link to={`/details/${item.id}`}>
                <div
                  key={item.id}
                  className="rounded-lg hover:shadow-lg hover:duration-300 hover:-translate-y-2 w-[350px] h-[578px] overflow-hidden flex flex-col items-center"
                >
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
            ))}
        </div>
      </div>

      <Link to="/allkoleksiya">
        <div className="flex flex-col justify-center items-center gap-4 mt-20">
          <p>СМОТРЕТЬ ВСЕ</p>
          <hr className="w-[200px] border-stone-500" />
        </div>
      </Link>
    </div>
  );
}

export default Kolleksiya;

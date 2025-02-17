import axios from "axios";
import React, { useEffect, useState } from "react";
import Ctegory from "../../components/category/Ctegory";

import { Link, useLocation } from "react-router-dom";
import FooterDelery from "../../components/FooterDelery";

function Obuvie() {
  const [data, setData] = useState([]);
  const [active, seInactive] = useState(false);
  // apachi
  useEffect(() => {
    axios
      .get("https://715c33c88529aa9a.mokky.dev/intefra")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleActive = () => {
    seInactive(!active);
  };
  const location = useLocation();
  const maleData = location.state?.maleData || [];
  const femaleData = location.state?.femaleData || [];

  return (
    <>
      <div className="container mx-auto mb-10">
        <div className="text-center mt-12">
          <h4 className="text-[50px] font-thin">ОБУВЬ</h4>
          <p className="16px font-light">
            Мы собрали шикарную коллекцию итальянских марок обуви от самых
            ведущих производителей:
          </p>
        </div>
        <div className="mb-[10px]">
          <ul className="flex justify-center flex-wrap gap-6 mt-4 text-[16px] text-[#333333] items-center w-full">
            {!active
              ? data.slice(0, 9).map((item) => (
                  <li className="border-r-2 pr-2" key={item.id}>
                    {item.breend}
                  </li>
                ))
              : data.map((item) => (
                  <li className="border-r-2 pr-2" key={item.id}>
                    {item.breend}
                  </li>
                ))}
            <li className="cursor-pointer" onClick={handleActive}>
              и другие… ee
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-3 mb-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data.slice(0, 5).map((item) => (
            <div className="bg-[#FBFBFB] p-5 w-full h-auto " key={item.id}>
              <Link to={`/detailsNovinki/${item.id}`}>
                <img
                  src={item.img[0]}
                  alt=""
                  className="w-[180px] h-[183px] object-cover"
                />
              </Link>
              <div className="mt-3 text-center">
                <h3 className="text-sm font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-start gap-20 mb-28">
        <div className="bg-[#FFFFFF] shadow-xl p-4 w-[360px] h-[1264px]">
          <Ctegory data={data} />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between gap-3 items-center">
              <h2 className="text-gray-300">Цены</h2>
              <h3>по возрастанию</h3>
              <h3 className="text-gray-300">по убыванию</h3>
            </div>
            <div>
              <select
                name="categ"
                className="bg-white w-48 border-b-[1px] border-black pb-3 outline-none"
              >
                <option value="New">New</option>
                <option value="Popular">Popular</option>
                <option value="Price_up">Price up</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-20 items-center lg:grid-cols-3 mt-14">
            {maleData && maleData.length > 0 ? (
              maleData.map((item) => (
                <div
                  className="hover:shadow-lg w-[300px] h-[400px] relative duration-300"
                  key={item.id}
                >
                  {/* Skidka */}
                  {item.scidka && (
                    <span className="bg-[#E53030] w-16 h-16 rounded-full text-center flex items-center justify-center text-white absolute top-4 left-56">
                      {item.skidca}
                    </span>
                  )}
                  {/* Rasm */}
                  <div className="flex justify-center items-start mb-5">
                    <Link to={`/detailsNovinki/${item.id}`}>
                      <img
                        src="https://s3-alpha-sig.figma.com/img/867f/8b08/6af58525fcfd386597a20f553db38923?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DK-6oS9lFkJQ9ExMJk13h2fpo~tNwlSyX66GZiNQ-Zg80h7PZTC3EuJF07LOL3~XFAN54SuBiKRdFGAJA0fbOyhhAX-2e212FYBtGWqMwt~5AMTtTf0T-iec37YFKJoLC5egCOniSqr1NBQgpqy0REWKOeDuKUolvSTjGrAQVklMvaUBiQED~~hK8eVZCAEmANoyGWxMq7JXSaaM-tgRSZhhb7FACj~-Bx5ICXRUo0l4nCiATHx269weqPfXlPf-c1DLQgGTdwZeOHBPsMgLEn48Y3oCOliVq-ZGvbke8y~GvDwZKUAZXPAhKk95UPuG789Glr0OVrDxVjdEXN-2Xg__"
                        className="w-[250px] h-[200px] object-cover"
                        alt=""
                      />
                    </Link>
                  </div>
                  {/* Matn */}
                  <div className="text-center mx-auto">
                    <h3 className="font-Montserrat leading-6 font-light">
                      <span className="block">
                        {item.desc.slice(0, Math.ceil(item.desc.length / 2.1))}
                      </span>
                      <span className="block mt-2">
                        {item.desc.slice(Math.ceil(item.desc.length / 2.2))}
                      </span>
                    </h3>

                    <h4 className="font-bold mt-2">{item.name}</h4>
                  </div>
                  {/* Narx */}
                  <div className="flex justify-center gap-4 text-center text-[#333333] font-bold pb-10">
                    {item.scidka && (
                      <p className="text-[#969696] line-through">
                        {item.oldPrice}
                      </p>
                    )}
                    {item.scidka ? (
                      <p className="text-red-500">{item.price}</p>
                    ) : (
                      <p>{item.price}</p>
                    )}
                  </div>
                </div>
              ))
            ) : femaleData && femaleData.length > 0 ? (
              femaleData.map((item) => (
                <div
                  className="hover:shadow-lg w-[300px] h-[430px] relative"
                  key={item.id}
                >
                  {/* Skidka */}
                  {item.scidka && (
                    <span className="bg-[#E53030] w-16 h-16 rounded-full text-center flex items-center justify-center text-white absolute top-4 left-56">
                      {item.skidca}
                    </span>
                  )}
                  {/* Rasm */}
                  <div className="flex justify-center items-start mb-5">
                    <Link to={`/detailsNovinki/${item.id}`}>
                      <img
                        src={item.img[0]}
                        className="w-[250px] h-[200px] object-cover"
                        alt=""
                      />
                    </Link>
                  </div>
                  {/* Matn */}
                  <div className="text-center mx-auto">
                    <h3 className="font-Montserrat leading-6 font-light">
                      <span className="block">
                        {item.desc.slice(0, Math.ceil(item.desc.length / 2.1))}
                      </span>
                      <span className="block mt-2">
                        {item.desc.slice(Math.ceil(item.desc.length / 2.2))}
                      </span>
                    </h3>

                    <h4 className="font-bold mt-2">{item.name}</h4>
                  </div>
                  <div className="flex justify-center gap-5 items-center mt-5 mb-3">
                    {item.size.map((sizeObj, index) => (
                      <div
                        key={index}
                        className="border-[1px] border-[#D9D9D9] p-2 w-[50px] rounded-lg text-center"
                      >
                        <span>{Object.values(sizeObj)[0]}</span>
                      </div>
                    ))}
                  </div>
                  {/* Narx */}
                  <div className="flex justify-center gap-4 text-center text-[#333333] font-bold pb-10">
                    {item.scidka && (
                      <p className="text-[#969696] line-through">
                        {item.oldPrice}
                      </p>
                    )}
                    {item.scidka ? (
                      <p className="text-red-500">{item.price}</p>
                    ) : (
                      <p>{item.price}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No data available</p>
            )}
          </div>
        </div>
      </div>
      <FooterDelery />
    </>
  );
}

export default Obuvie;

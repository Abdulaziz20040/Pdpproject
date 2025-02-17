import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

function Category({ data }) {
  const [showoff, setShowOff] = useState(true);
  const [showon, setShowOn] = useState(false);

  const showBrend = () => {
    setShowOff(!showoff);
  };

  // dsd

  const showColor = () => {
    setShowOn(!showon);
  };
  return (
    <div>
      <div className="p-2">
        <div className="p-2">
          <h3 className="text-[20px] font-bold text-[#333333]">Категории</h3>
        </div>
        <div className="border-b-[1px] border-[#D9D9D9] p-4 pb-5">
          <div className="border-[#D9D9D9] pb-5">
            <div className="flex justify-between items-center mb-3">
              <p className="font-extralight">Все</p>
              <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                6
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-extralight">Ботинки</p>
              <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                6
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-extralight">Кроссовки и кеды</p>
              <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                6
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-extralight">Обувь с мехом</p>
              <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                6
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-extralight">Open-walk</p>
              <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                6
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-extralight">Скидки до -70%</p>
              <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                6
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-extralight">Летняя обуви</p>
              <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                6
              </button>
            </div>
          </div>
        </div>
        <div className="border-b-[1px]">
          <div className="flex justify-between items-center mt-5 p-2 pb-5">
            <div>
              <p className="font-medium text-[17px]">Бренд</p>
            </div>
            <div>
              <button className="border-none w-6" onClick={showBrend}>
                <FaChevronDown style={{ color: "#969696", fontWeight: 100 }} />
              </button>
            </div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: showoff ? "auto" : 0, opacity: showoff ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // Yopilish va ko'rsatilish sekinlashtirildi
            className="overflow-hidden"
          >
            {showoff && (
              <div className="p-2 font-thin">
                {data.slice(0, 5).map((item) => (
                  <div className="flex justify-between items-center mb-3">
                    <p>{item.breend}</p>
                    <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                      {item.breend.length}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
        <div className="border-b-[1px]">
          <div className="flex justify-between items-center mt-5 p-2 pb-5">
            <div>
              <p className="font-medium text-[17px]">Цвет</p>
            </div>
            <div>
              <button className="border-none w-6" onClick={showColor}>
                <FaChevronDown style={{ color: "#969696", fontWeight: 100 }} />
              </button>
            </div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: showon ? "auto" : 0, opacity: showon ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // Yopilish va ko'rsatilish sekinlashtirildi
            className="overflow-hidden"
          >
            {showon && (
              <div className="p-2 font-thin">
                <div className="flex justify-between items-center mb-3">
                  <p>бежевый</p>
                  <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                    6
                  </button>
                </div>
                {/*  */}
                <div className="flex justify-between items-center mb-3">
                  <p>белый</p>
                  <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                    6
                  </button>
                </div>
                {/*  */}
                <div className="flex justify-between items-center mb-3">
                  <p>бордовый</p>
                  <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                    6
                  </button>
                </div>
                {/*  */}
                <div className="flex justify-between items-center mb-3">
                  <p>голубой</p>
                  <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                    6
                  </button>
                </div>
                {/*  */}
                <div className="flex justify-between items-center mb-3">
                  <p>зеленый</p>
                  <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                    6
                  </button>
                </div>
                {/*  */}
                <div className="flex justify-between items-center mb-3">
                  <p>коричневый</p>
                  <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                    6
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Category;

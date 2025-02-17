import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

function Category({ data }) {
  const [showoff, setShowOff] = useState(true);
  const [showon, setShowOn] = useState(false);

  const showBrend = () => {
    setShowOff(!showoff);
  };

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
                {data.length}
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-extralight">НОВИНКИ</p>
              <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                {data.filter((item) => item.novinki === true).length}
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-extralight">КОЛЛЕКЦИЯ</p>
              <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                {data.filter((item) => item.koleksya === true).length}
              </button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-extralight">СКИДКИ</p>
              <button className="border-[1px] w-11 p-1 rounded-lg border-[#D9D9D9] hover:border-black">
                {data.filter((item) => item.scidka === true).length}
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
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
      </div>
    </div>
  );
}

export default Category;

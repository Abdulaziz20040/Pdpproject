import img1 from "../pages/obuv/imgs/image4.png";
import img2 from "../pages/obuv/imgs/image5.png";
import img3 from "../pages/obuv/imgs/Group.png";
import img4 from "../pages/obuv/imgs/image6.png";

function FooterDelery() {
  return (
    <div className="flex justify-between items-center border-[#D9D9D9] mb-28 h-56 border-b-[1px] border-t-[1px]">
      <div className="border-r-[1px] w-72 h-56 flex justify-center items-center flex-col border-[#D9D9D9] border-l-[1px] text-center ">
        <div className="flex justify-center items-center">
          <img src={img1} alt="" />
        </div>
        <p className="mt-4">Работаем c 2012 года</p>
      </div>
      <div className="border-r-[1px] w-72 h-56 flex justify-center items-center flex-col border-[#D9D9D9] text-center">
        <div className="flex justify-center items-center">
          <img src={img2} alt="" />
        </div>
        <p className="mt-4">100% оригинальные вещи</p>
      </div>
      <div className="border-r-[1px] w-72 h-56 flex justify-center items-center flex-col border-[#D9D9D9] text-center">
        <div className="flex justify-center items-center">
          <img src={img4} alt="" />
        </div>
        <p className="mt-4">Доставка по России</p>
      </div>
      <div className="border-r-[1px] w-72 h-56 flex justify-center items-center flex-col text-center">
        <div className="flex justify-center items-center">
          <img src={img3} alt="" />
        </div>
        <p className="mt-4">Есть услуга “Примерки”</p>
      </div>
    </div>
  );
}

export default FooterDelery;

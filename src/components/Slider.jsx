import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://715c33c88529aa9a.mokky.dev/intefra")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleNavigateMujskoy = () => {
    const maleData = data.filter((item) => item.male === true);
    if (maleData.length > 0) {
      navigate("/obuv", { state: { maleData } });
    } else {
      console.log("No male data available.");
    }
  };

  const handleNavigateJenskiy = () => {
    const femaleData = data.filter((item) => item.female === true);
    if (femaleData.length > 0) {
      navigate("/obuv", { state: { femaleData } });
    } else {
      console.log("No male data available.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <div
          className="w-[960px] h-[505px] bg-cover bg-[20%] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/6281/e045/650357b20d2eb5dd027516bfb8efca12?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q8coav0nueMwM2R0GPMBTgSvXdtKxJVqv7z3AeVdR8fX9xZeSnm1HenL5~wbienqSWP4POxjEm9wEfKtSjoqDfadHZrWIfyXD5CHfOreuQ5X0KQXhrvwQQyN99IAEFDMNX4gZJeeoU8GlbqqeVG9wsMZ-pJS9gWn88b6NR~Vta9swt1~dFZcB3Jg5qgzph05WUF3Ha9OiglDznh0MwRw4ZkXUn2NsLHy8Rqpx16yqhf-CXk2yAT~q8h7EErQFQx7kBUcmHQSh5UW6JHh7sHFy0X29YVFc3B3BjlOgOWHB8VTUL6YGz6rgh4yMFoR2v2jRWqxdqUT8v~3fELCvvdXMA__')",
          }}
        >
          <button className=" border-b-2" onClick={handleNavigateMujskoy}>
            <h1 className="text-[72px] text-white font-[300]">МУЖСКОЕ</h1>
          </button>
        </div>
        <div
          className="w-[960px] h-[505px] bg-cover bg-[20%] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/e7d6/c02a/e2c4c97c2e6d5e650dfcd0e608ce0b77?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bff-~MD2YyWGNytk2F9ht0e9TQE6yJmDRZrm1PHcGMCJAYA5DrsuLqi2BXAR6N4kbWNYEUTRUqqhUhigiqQMqflyVofuuZQmVgnpFnSJFkSsmoBYetg2ZhMANkpJIYRvYeI~Fw6aBx2Pu1y1kaHc6bFNpLGBoL7ekaYLiCfoSd6e76m0dIisoRd4Y8NQHpyYTxsvkOyA2hFovELkevNgraLUMZuAv902W0H~2GCOhZ97Spfa7KHTYBVN0bvv2RBZd5z6rWK5zUphZ8BExeYi4mYXYaUjxRvTx6Z845K3iR39jHIHcdjy4WICzFG4WyKDqUH7UvKrP7fBKb21N0MlAw__')",
          }}
        >
          <button className=" border-b-2" onClick={handleNavigateJenskiy}>
            <h1 className="text-[72px] text-white font-[300]">ЖЕНСКОЕ</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

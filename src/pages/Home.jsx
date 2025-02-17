import React from "react";
import Slider from "../components/Slider";
import Brend from "../components/brend/Brend";
import Slider2 from "../components/Slider2";
import Novinki from "./novinki/Novinki";
import Kolleksiya from "./Koleysiya/Kolleksiya";
import Skidki from "./skidki/Skidki";
import FooterDelery from "../components/FooterDelery";
import Oformit_Aboout from "./Oformit_aboout";

function Home() {
  return (
    <div>
      <Slider />
      <Brend />
      <Kolleksiya />
      <Novinki />
      <Slider2 />
      <Skidki />
      <Oformit_Aboout />
      <FooterDelery />
    </div>
  );
}

export default Home;

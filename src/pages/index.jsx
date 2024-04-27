import "../app/globals.css";
import Carrossel from "@/components/carrossel";
import Banner from "@/components/banner";
import SobreNos from "@/components/sobreNos";
import Destaques from "@/components/destaques";
import Footer from "@/components/footer";

import { Icon } from "@iconify/react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex overflow-x-hidden font-[montserrat] flex-col bg-[#FFF6F3]">
      <Banner></Banner>
      <Carrossel></Carrossel>
      <Destaques></Destaques>
      <SobreNos></SobreNos>
      <Footer></Footer>
    </div>
  );
}

import "../app/globals.css";

import logo from "../../public/logo.png";
import doginho from "../../public/doginho.png";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

import Image from "next/image";

export default function Sobrenos() {
  return (
    <div className="flex overflow-x-hidden font-[montserrat] flex-col bg-[#FFF6F3]">
      <div className="flex overflow-x-hidden flex-col  w-[100vw] h-[100vh] items-center bg-[url('../../public/background.png')] bg-cover border-[rgba(241,188,163,1)] border-b-3 border-dashed ">
        <Header></Header>
        <div className="flex flex-col items-center justify-center w-full h-[100%]">
          <Image src={doginho} alt="image" />
          <h1 className="font-satisfy text-5xl text-[#F39E4A] font-normal tracking-wide max-[860px]:text-3xl">
            Em desenvolvimento...
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

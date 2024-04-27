import "../app/globals.css";

import logo from "../../public/logo.png";
import doginho from "../../public/doginho.png";

import Footer from "@/components/footer";
import Link from "next/link";

import Image from "next/image";

export default function Sobrenos() {
  return (
    <div className="flex overflow-x-hidden font-[montserrat] flex-col bg-[#FFF6F3]">
      <div className="flex overflow-x-hidden flex-col  w-[100vw] h-[100vh] items-center bg-[url('../../public/background.png')] bg-cover border-[rgba(241,188,163,1)] border-b-3 border-dashed ">
        <div className="flex items-center self-start py-[2rem] px-[6rem] justify-between w-[100vw] max-[860px]:px-[2rem] ">
          <Link href="/">
            <Image
              src={logo}
              className="w-[10rem] max-[850px]:w-[8rem] max-[480px]:mb-[5rem]"
              alt="image"
            />
          </Link>
          <div className="flex flex-row gap-5 max-[850px]:hidden ">
            <Link href="/">
              <button className="w-[100%] bg-[#f29e4b] text-1xl font-medium px-8 py-2  text-slate-50 rounded-[10px]">
                Home
              </button>
            </Link>
            <Link href="/catalogo">
              <button className="w-[100%] bg-[#b47043] text-1xl font-medium px-8 py-2  text-slate-50 rounded-[10px] ">
                Catalogo
              </button>
            </Link>
            <Link href="/sobrenos">
              <button className="w-[100%] bg-[#7b4826] text-1xl font-medium px-8 py-2  text-slate-50 rounded-[10px] ">
                Sobre nós
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <Image src={doginho} alt="image" />
          <h1 className="font-satisfy text-5xl text-[#F39E4A] font-normal tracking-wide">
            Em desenvolvimento...
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

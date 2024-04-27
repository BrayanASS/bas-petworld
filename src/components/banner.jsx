import "../app/globals.css";

import logo from "../../public/logo.png";
import bannerImg1 from "../../public/bannerImg1.png";
import bannerImg2 from "../../public/bannerImg2.png";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex overflow-x-hidden flex-col  w-[100vw] h-[100vh] items-center bg-[url('../../public/background.png')] bg-cover border-[rgba(241,188,163,1)] border-b-3 border-dashed ">
      <div className="flex items-center self-start py-[2rem] px-[6rem] justify-between w-[100vw] max-[860px]:px-[2rem] max-[860px]:mb-[2rem]">
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

      <div className="flex flex-row items-center  w-full">
        <div className="flex flex-row items-center w-full gap-[5rem] justify-center max-[1160px]:gap-[1rem] max-[860px]:flex-col max-[860px]:gap-[3rem] max-[860px]:px-[2rem]">
          <div>
            <h1 className="font-satisfy text-5xl text-[#F39E4A] font-normal tracking-wide max-[1060px]:text-4xl max-[480px]:text-3xl">
              Escolha o Melhor para o seu{" "}
            </h1>
            <h1 className=" text-6xl text-[#725D48] font-extrabold tracking-wide max-[1060px]:text-5xl max-[480px]:text-4xl">
              Melhor Amigo
            </h1>
            <Link href="/catalogo">
              <button className="mt-[3rem] bg-[#C57753] text-1xl font-medium px-8 py-3  text-slate-50 rounded-full shadow-[0px_7px_0px_0px_rgba(241,188,163,1)] z-2 max-[1060px]:mt-[1rem] max-[480px]:px-5 max-[480px]:py-2 max-[480px]:mt-[2rem]">
                Nossos produtos
              </button>
            </Link>
          </div>
          <Image
            src={bannerImg1}
            className="w-[30rem] max-[1060px]:w-[25rem] max-[480px]:w-[18rem]"
            alt="image"
          />
        </div>
      </div>
      <div className="flex w-screen justify-center h-auto z-0 max-[860px]:hidden">
        <Image
          src={bannerImg2}
          className="absolute bottom-0 w-[50%] "
          alt="image"
        />
      </div>
    </div>
  );
}

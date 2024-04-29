import "../app/globals.css";

import logo from "../../public/logo.png";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center self-start py-[0.5rem] px-[6rem] justify-between w-[100vw] max-[860px]:px-[2rem] max-[860px]:mb-[2rem] fixed bg-[#fffcf9] z-10 shadow-md ">
      <Link href="/">
        <Image
          src={logo}
          className="w-[10rem] max-[850px]:w-[8rem]"
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
  );
}

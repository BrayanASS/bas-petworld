import "../app/globals.css";
import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import logo2 from "../../public/logo2.png";

export default function Footer() {
  return (
    <div className="w-[100vw] flex items-center justify-center mt-[4rem] px-[10rem] bg-[#c57753] py-8 max-[1000px]:px-[0rem] max-[1000px]:justify-between max-[600px]:px-[0rem] ">
      <div className="flex items-center self-start py-[2rem] px-[6rem] justify-between max-[600px]:justify-center w-[100vw] ">
        <Link href="/">
          <Image
            src={logo2}
            className="w-[10rem] max-[600px]:w-[7rem]"
            alt="image"
          />
        </Link>
        <div className="flex flex-col gap-5 max-[600px]:hidden max-[600px]:w-0">
          <Link href="/">
            <button className="w-[100%] bg-transparent text-1xl font-medium  text-slate-50 rounded-[10px] text-end">
              Home
            </button>
          </Link>
          <Link href="/catalogo">
            <button className="w-[100%] bg-transparent text-1xl font-medium  text-slate-50 rounded-[10px] text-end">
              Catálogo
            </button>
          </Link>
          <Link href="/sobrenos">
            <button className="w-[100%] bg-transparent text-1xl font-medium  text-slate-50 rounded-[10px] text-end">
              Sobre Nós
            </button>
          </Link>
          <Link href="/admin">
            <button className="w-[100%] bg-transparent text-1xl font-medium  text-slate-50 rounded-[10px] text-end">
              Página Administrativa
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

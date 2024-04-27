import "../app/globals.css";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

import produto1 from "../../public/produto1.png";

import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

import { database, app } from "../services/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default function Destaques() {
  const [produtos, setProdutos] = useState([]);
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const produtosRef = ref(db, "produto");

    onValue(produtosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const produtosArray = Object.values(data);
        setProdutos(produtosArray);

        // Filtrar apenas os produtos em destaque
        const destaquesArray = produtosArray.filter(
          (produto) => produto.onDestac
        );
        setDestaques(destaquesArray);
      }
    });
  }, []);

  return (
    <div className="w-[100vw] flex flex-col items-center justify-center mt-[4rem]">
      <div className="flex flex-row items-center self-start  pl-[13rem] max-[1000px]:pl-[2rem] ">
        <Icon
          icon="ph:star-fill"
          className="text-7xl text-[#C57753] max-[420px]:text-5xl"
        />
        <h1 className="text-4xl font-bold px-8 py-10  text-slate-700 max-[420px]:px-4">
          Destaques
        </h1>
      </div>
      <div className="grid grid-cols-4 max-[1280px]:grid-cols-3 max-[1000px]:mx-[2rem] max-[890px]:grid-cols-2 max-[585px]:grid-cols-1 gap-5 justify-center mx-[6rem] py-5">
        {destaques.map((produto) => {
          return (
            <div
              key={produto.id}
              className="bg-white flex flex-col items-center justify-around text-start p-7 gap-2 rounded-[15px] w-[16rem]"
            >
              <Image
                className="w-[10rem] min-h-[12rem] bg-contain bg-center "
                alt="Imagem invalida"
                src={produto.src}
                width={2250}
                height={1390}
                layout="responsive"
                priority
              />
              <hr className="h-[2px] w-[100%]  bg-[#C4C4C4]  my-5" />
              <p className="w-[12rem] text-[#929292] font-normal self-start line-clamp-3 max-h-[5rem] ">
                {produto.nome}
              </p>
              <div className="flex flex-row self-start gap-2">
                <p className="text-[#F1BCA3] font-semibold text-1xl">R$</p>
                <h2 className="text-[#BB977D] font-semibold text-4xl break-all">
                  {produto.valor}
                </h2>
              </div>
              <a
                className="w-[100%] mt-[1rem] bg-[#F1BCA3] text-1xl text-center font-medium px-8 py-2 text-slate-50 rounded-[10px]"
                href={`https://api.whatsapp.com/send/?phone=5564992410618&text=Ol%C3%A1%2C+Tudo+bem%3F+Tenho+interesse+no+produto:+${produto.nome}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Encomendar
              </a>
            </div>
          );
        })}
      </div>
      <Link href="/catalogo">
        <button className="mt-[3rem] bg-[#C57753] text-1xl font-medium px-12 py-3  text-slate-50 rounded-full shadow-[0px_7px_0px_0px_rgba(241,188,163,1)] z-2">
          Catálogo
        </button>
      </Link>
    </div>
  );
}

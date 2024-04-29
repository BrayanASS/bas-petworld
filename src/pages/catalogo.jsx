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
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredProdutos, setFilteredProdutos] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const produtosRef = ref(db, "produto");

    onValue(produtosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const produtosArray = Object.values(data);
        setProdutos(produtosArray);
        setFilteredProdutos(produtosArray); // Inicialmente, exibir todos os produtos
      }
    });
  }, []);

  // Função para filtrar os produtos com base no texto de pesquisa
  const filterProdutos = () => {
    const filtered = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProdutos(filtered);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      filterProdutos();
    }
  };

  return (
    <div className="flex overflow-x-hidden flex-col  w-[100vw] h-[100vh] items-center bg-[#faf1ee] bg-cover border-[rgba(241,188,163,1)] border-b-3 border-dashed font-[montserrat] ">
      <Header></Header>
      <div className="flex flex-col w-[100%] mt-[8rem]">
        <div className="flex  my-5  w-[100%] max-[600px]:px-[1rem]  justify-center">
          <input
            type="text"
            className="w-[30%] max-[800px]:w-[70%] max-[600px]:w-[80%] flex rounded-lg p-3 px-4 text-slate-400"
            placeholder="Nome do produto"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="bg-[#f29e4b] text-white font-semibold py-2 px-4 ml-2 rounded-lg flex flex-row items-center gap-1"
            onClick={filterProdutos}
          >
            <Icon icon="ic:baseline-search" />
          </button>
        </div>
        <div className="grid  grid-cols-5 justify-items-center gap-5 justify-center  py-5 w-[100%] px-[4rem] min-[2300px]:grid-cols-7  max-[1460px]:grid-cols-4 max-[1220px]:grid-cols-3 max-[960px]:grid-cols-2 max-[570px]:grid-cols-1">
          {filteredProdutos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white flex flex-col items-center justify-around text-start p-7 gap-2 rounded-[15px] w-[16rem] max-[960px]:self-center"
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

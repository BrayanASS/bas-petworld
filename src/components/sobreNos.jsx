import "../app/globals.css";

import sobreNosImg from "../../public/sobreNosImg.png";

import Image from "next/image";
import { Icon } from "@iconify/react";

export default function SobreNos() {
  return (
    <div className="w-[100vw] flex items-center justify-center mt-[6rem] px-[10rem] bg-white py-8 max-[1000px]:px-[2rem] max-[760px]:px-[3rem] max-[760px]:flex-col max-[760px]:gap-[5rem]">
      <div className="w-[50%] max-[760px]:w-[100%]">
        <div className="flex flex-row items-center">
          <Icon
            icon="ph:seal-question-fill"
            className="text-7xl text-[#C57753] max-[420px]:text-5xl"
          />
          <h1 className="text-4xl font-bold px-8 py-10  text-slate-700 max-[420px]:px-4">
            Sobre nós
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <p className="w-[80%] max-[1150px]:w-[90%] max-[760px]:w-[100%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            mollitia odio hic aliquid commodi ut quae aperiam deserunt ullam!
            Laboriosam reprehenderit ipsa consequuntur ea dolorum quisquam,
            dolorem dicta rerum aliquam!
          </p>
          <p className="w-[80%] max-[1150px]:w-[90%] max-[760px]:w-[100%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            mollitia odio hic aliquid commodi ut quae aperiam deserunt ullam!
            Laboriosam reprehenderit ipsa consequuntur ea dolorum quisquam,
            dolorem dicta rerum aliquam!
          </p>
        </div>
        <button className="mt-[3rem] bg-[#C57753] text-1xl font-medium px-8 py-3  text-slate-50 rounded-full shadow-[0px_7px_0px_0px_rgba(241,188,163,1)]">
          Saiba mais
        </button>
      </div>
      <Image
        src={sobreNosImg}
        className="w-[27rem] max-[1100px]:w-[20rem] max-[760px]:w-[80%] max-[500px]:w-[20rem]"
      />
    </div>
  );
}

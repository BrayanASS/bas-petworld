import "../app/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icon } from "@iconify/react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true); // Estado de carregamento inicial

  const notifyError = () => toast("Credenciais incorretas!");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard");
      } else {
        setLoading(false); // Define o estado de carregamento como falso quando o usuário não está autenticado
      }
    });

    // Limpa o observador de mudanças de autenticação quando o componente é desmontado
    return () => unsubscribe();
  }, []);

  const handleLogin = (ev) => {
    ev.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuário autenticado com sucesso
        router.push("/dashboard");
      })
      .catch((error) => {
        notifyError();
        console.log(error);
      });
  };

  if (loading) {
    return null; // Não renderiza nada enquanto o estado de carregamento é verdadeiro
  }

  return (
    <div className="flex overflow-x-hidden flex-col  w-[100vw] h-[100vh] items-center bg-[#faf1ee] bg-cover border-[rgba(241,188,163,1)] border-b-3 border-dashed font-[montserrat] ">
      <ToastContainer position="bottom-right" />
      <div className="flex items-center self-start py-[2rem] px-[6rem] justify-between w-[100vw] max-[860px]:px-[2rem] max-[860px]:mb-[2rem]">
        <Link href="/">
          <Image
            src={logo}
            className="w-[10rem] max-[850px]:w-[8rem] max-[480px]:mb-[5rem]"
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
      <form onSubmit={handleLogin}>
        <div className="flex flex-col my-5 w-full justify-center gap-5">
          <div className="flex flex-row items-center self-center">
            <Icon
              icon="eos-icons:admin"
              className="text-7xl text-[#C57753] max-[700px]:text-5xl"
            />
            <h1 className="text-3xl font-bold px-4 py-5  text-slate-700 max-[700px]:text-2xl">
              Acesso administrativo
            </h1>
          </div>
          <input
            className="w-[25rem] flex rounded-lg p-3 px-4 text-slate-400 self-center max-[480px]:w-[90%]"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            className="w-[25rem]  flex rounded-lg p-3 px-4 text-slate-400 self-center max-[480px]:w-[90%]"
            placeholder="Senha"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className=" w-[25rem] bg-[#f29e4b] text-white  justify-center self-center font-semibold py-2 px-4 rounded-lg flex flex-row items-center gap-1 max-[480px]:w-[90%]">
            <Icon icon="solar:login-2-linear" />
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

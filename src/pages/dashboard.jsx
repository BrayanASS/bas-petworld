import "../app/globals.css";
import { useState, useEffect } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../services/firebase";

import { onAuthStateChanged, signOut } from "firebase/auth";

import { Icon } from "@iconify/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { database } from "../services/firebase";
import {
  getDatabase,
  ref,
  onValue,
  set,
  remove,
  update,
} from "firebase/database";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Dashboard() {
  const db = getDatabase();
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [src, setSrc] = useState("");
  const [onDestac, setOnDestac] = useState(false);
  const [editingNome, setEditingNome] = useState("");
  const [editingValor, setEditingValor] = useState("");
  const [editingSrc, setEditingSrc] = useState("");
  const [editingOnDestac, setEditingOnDestac] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        router.push("/admin");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const produtosRef = ref(db, "produto");

    onValue(produtosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const produtosArray = Object.values(data);
        setProdutos(produtosArray);
      }
    });
  }, []);

  const handleAdd = (ev) => {
    ev.preventDefault();

    const novoProduto = {
      id: produtos.length,
      nome: nome,
      valor: valor,
      src: src,
      onDestac: onDestac,
    };

    const novosProdutos = [...produtos, novoProduto];
    set(ref(db, "produto"), novosProdutos);
    setNome("");
    setValor("");
    setSrc("");
    setOnDestac(false);
  };

  const handleDelete = (id) => {
    const produtoRef = ref(db, `produto/${id}`);
    remove(produtoRef);
  };

  const handleEdit = (produto) => {
    const produtoRef = ref(db, `produto/${produto.id}`);
    const id = produto.id;
    remove(produtoRef);

    const produtoEditado = {
      ...produto,
      id: id,
      nome: editingNome,
      valor: editingValor,
      src: editingSrc,
      onDestac: editingOnDestac,
    };

    update(produtoRef, produtoEditado);

    setEditingNome("");
    setEditingValor("");
    setEditingSrc("");
    setEditingOnDestac(false);
  };

  const handleOut = () => {
    signOut(auth).then(() => {
      router.push("/admin");
    });
  };

  if (loading) {
    return null;
  }

  return (
    <div className="flex overflow-x-hidden flex-col w-[100vw] h-[100vh] items-center bg-[#faf1ee] bg-cover border-[rgba(241,188,163,1)] border-b-3 border-dashed font-[montserrat] ">
      <div className="flex items-center self-start py-[0.5rem] px-[6rem] justify-between w-[100vw] max-[860px]:px-[2rem] max-[860px]:mb-[2rem] fixed bg-[#fffcf9] z-10 shadow-md ">
        <Link href="/">
          <Image src={logo} className="w-[10rem]" alt="image" />
        </Link>
        <div className="flex flex-row gap-5 items-center max-[850px]:hidden">
          <Link href="/">
            <button className=" bg-[#f29e4b] text-1xl font-medium px-8 py-2  text-slate-50 rounded-[10px]">
              Home
            </button>
          </Link>
          <Link href="/catalogo">
            <button className=" bg-[#b47043] text-1xl font-medium px-8 py-2  text-slate-50 rounded-[10px] ">
              Catalogo
            </button>
          </Link>
          <Link href="/sobrenos">
            <button className=" bg-[#7b4826] text-1xl font-medium px-8 py-2  text-slate-50 rounded-[10px] ">
              Sobre nós
            </button>
          </Link>
          <button
            onClick={handleOut}
            className=" bg-[#b47043] text-1xl font-medium px-4 py-4 text-slate-50 rounded-full "
          >
            <Icon icon="ri:logout-box-line" />
          </button>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex gap-2 self-end px-6 py-6 mx-[6rem] mt-[8rem] mb-6">
            <Icon icon="material-symbols:add" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar produto</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nome" className="text-right">
                Nome:
              </Label>
              <Input
                id="nome"
                value={nome}
                className="col-span-3"
                onChange={(ev) => setNome(ev.target.value)}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="valor" className="text-right">
                Valor do produto:
              </Label>
              <Input
                id="valor"
                value={valor}
                className="col-span-3"
                onChange={(ev) => setValor(ev.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="src" className="text-right">
                Link da imagem:
              </Label>
              <Input
                id="src"
                value={src}
                className="col-span-3"
                onChange={(ev) => setSrc(ev.target.value)}
              />
            </div>
            <div className="flex  items-center gap-4">
              <Label htmlFor="inDestac" className="text-right">
                Em destaque?
              </Label>
              <input
                id="inDestac"
                type="checkbox"
                className="flex rounded-lg p-3 px-4 text-slate-400 self-start col-span-3 bg-slate-200 w-[2rem]"
                checked={onDestac}
                onChange={() => setOnDestac(!onDestac)}
              />
            </div>
            <DialogFooter>
              <button
                className="w-[100%] bg-[#b47043] text-1xl font-medium px-8 py-2 text-slate-50 rounded-[10px] mt-5"
                onClick={handleAdd}
              >
                Adicionar produto
              </button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex flex-col px-[6rem] w-[100vw] max-[500px]:px-[1rem]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead className="text-right">Em destaque</TableHead>
              <TableHead className="text-right">Imagem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {produtos.map((produto) => {
              return (
                <TableRow key={produto.id}>
                  <TableCell className="text-base font-bold text-gray-700">
                    {produto.id}
                  </TableCell>
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{produto.valor}</TableCell>
                  <TableCell className="text-right">
                    {produto.onDestac.toString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <a
                      href={produto.src}
                      className="text-blue-500 underline decoration-solid"
                      target="_blank"
                    >
                      {produto.src}
                    </a>
                  </TableCell>

                  <TableCell className="text-right">
                    <Dialog>
                      <div className="flex align-middle gap-3 justify-end">
                        <DialogTrigger>
                          <Icon
                            icon="material-symbols:settings-rounded"
                            className="cursor-pointer text-2xl"
                          />
                        </DialogTrigger>
                        <Icon
                          icon="bi:trash"
                          className="cursor-pointer text-2xl"
                          onClick={() => handleDelete(produto.id)}
                        />
                      </div>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Editar produto</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Nome:
                            </Label>
                            <Input
                              id="name"
                              value={editingNome}
                              className="col-span-3"
                              onChange={(ev) => setEditingNome(ev.target.value)}
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="value" className="text-right">
                              Valor:
                            </Label>
                            <Input
                              id="value"
                              value={editingValor}
                              className="col-span-3"
                              onChange={(ev) =>
                                setEditingValor(ev.target.value)
                              }
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="src" className="text-right">
                              Link da imagem:
                            </Label>
                            <Input
                              id="src"
                              value={editingSrc}
                              className="col-span-3"
                              onChange={(ev) => setEditingSrc(ev.target.value)}
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="editDestac" className="text-right">
                              Em destaque:
                            </Label>
                            <input
                              id="editDestac"
                              type="checkbox"
                              className="flex items-center rounded-lg p-3 px-4 text-slate-400 self-start col-span-3 bg-slate-200 w-5 "
                              checked={editingOnDestac}
                              onChange={() =>
                                setEditingOnDestac(!editingOnDestac)
                              }
                            />
                          </div>
                          <DialogFooter>
                            <Button
                              onClick={() => handleEdit(produto)}
                              className="w-[100%] bg-[#b47043] text-1xl font-medium px-8 py-2 text-slate-50 rounded-[10px] mt-5"
                            >
                              Salvar Alterações
                            </Button>
                          </DialogFooter>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <Footer></Footer>
    </div>
  );
}

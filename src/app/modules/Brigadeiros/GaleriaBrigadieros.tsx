import Image from "next/image";
import Titulos from "../Titulo";



export default function Galeria() {
    const brigadeiro = [
        "/img/brigadeiro1.jpeg",
        "/img/brigadeiro2.jpeg",
        "/img/brigadeiro3.jpeg",
        "/img/brigadeiro4.jpeg",
        "/img/brigadeiro5.jpeg",
        "/img/brigadeiro6.jpeg",
        "/img/brigadeiro7.jpeg",
        "/img/brigadeiro8.jpeg",
        "/img/brigadeiro9.jpeg"
      ];


  return (
    <article className="border-dashed md:border-4 border-fuchsia-400 md:p-4 p-2 rounded-md my-4 flex  flex-col">
      <Titulos titulo="Galeria Brigadeiro" />
      <div className=" h-1/4 md:gap-6 gap-2 grid grid-cols-2 md:grid-cols-3 md:m-auto">
        
        {brigadeiro.map((brigadeiro) => (
          <Image key={brigadeiro}
            className="m-4 hover:scale-125 rounded-lg group-hover:opacity-75 duration-700 ease-in-out"
            src={brigadeiro}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        ))}
      </div>
    </article>
  );
}
import Image from "next/image";
import Titulos from "../Titulo";

export default function Galeria() {


      const bolos = [
        "/img/bolo1.jpeg",
        "/img/bolo2.jpeg",
        "/img/bolo3.jpeg",
        "/img/bolo4.jpeg",
        "/img/bolo5.jpeg",
        "/img/bolo6.jpeg",
        "/img/bolo7.jpeg",
        "/img/bolo8.jpeg",
        "/img/bolo9.jpeg",
      ];
  return (
    <article className="border-dashed md:border-4 border-fuchsia-400 md:p-4 p-2 rounded-md my-4 flex flex-col ">
      <Titulos titulo="Galeria Bolos" />
      <div className="h-1/4 md:gap-6 gap-2 grid grid-cols-2 md:grid-cols-3 md:m-auto">

        {bolos.map((bolo) => (
          <Image key={bolo}
            className="m-4 hover:scale-125 rounded-md group-hover:opacity-75 duration-700 ease-in-out"
            src={bolo}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        ))}
      </div>
    </article>
  );
}
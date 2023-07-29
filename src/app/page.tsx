
import Tamanhos from "./modules/Bolos/Tamanhos";
import Bolos from "./modules/Bolos/Bolos";
import BolosEspeciais from "./modules/Bolos/BoloEspeciais";
import BolosNobres from "./modules/Bolos/BolosNobres";
import Decoracoes from "./modules/Bolos/Decoracoes";
import Titulos from "./modules/Titulo";
import Brigadeiros from "./modules/Brigadeiros/Brigadeiros";
import BrigadeirosNobres from "./modules/Brigadeiros/BrigadeirosNobres";
import Informacoes from "./modules/Informacoes";
import GaleriaBolos from "./modules/Bolos/GaleriaBolos";
import GaleriaBrigadeiros from "./modules/Brigadeiros/GaleriaBrigadieros";
import Image from "next/image";




export default function Home() {
  return (
    <div className="border-solid border-4 border-fuchsia-400 m-4 mt-56 p-4 rounded-md">
      <div className="border-dashed border-4 border-fuchsia-400 p-4 rounded-md ">
        <main>
          <header className="flex justify-center">
          <Image 
            className=" rounded-full md:-mt-72 -mt-40"
            src="/img/kg-logo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />

          </header>
          <section>
            <Titulos titulo="Bolos Recheados" />
            <Tamanhos />
            <Bolos />
            <BolosEspeciais />
            <BolosNobres />
            <Decoracoes />
            <GaleriaBolos />
          </section>
          <section>
            <Titulos titulo="Brigadeiros" />

            <Brigadeiros />
            <BrigadeirosNobres />
            <GaleriaBrigadeiros />
          </section>
          <Informacoes />
        </main>
      </div>
    </div>
  );
}

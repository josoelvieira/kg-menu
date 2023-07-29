import SubTitulos from "../SubTitulo"

export default function Tamanhos() {
    return (
      <article className="border-dashed border-4 border-fuchsia-400 p-4 rounded-md my-4">
        <SubTitulos titulo="Tamanho dos bolos" />
        <p className=" my-4 text-center">
          Primeiro voce escolhe o tamanho que melhor ira te atender! Obs:
          Recomendados cerca de 80 a 100g de bolo por convidado
        </p>
        
  
        <ul className="grid grid-cols-1 md:grid-cols-3">
          <li className="flex text-center justify-center p-4">
            <div className="rounded-full bg-fuchsia-400 h-16 w-16 p-4">10 cm</div>
  
            <p className="font-bold">Mini</p>
            <ul>
              <li>Peso: 800kg</li>
              <li>Serve ate 4 pessoas</li>
            </ul>
          </li>
          <li className="flex text-center justify-center p-4">
            <div className="rounded-full bg-fuchsia-400 h-20 w-20 p-4">15 cm</div>
  
            <p className="font-bold">Tamanho P</p>
            <ul>
              <li>Peso: 1,100kg</li>
              <li>Serve ate 10 pessoas</li>
            </ul>
          </li>
          <li className="flex text-center justify-center p-4">
            <div className="rounded-full bg-fuchsia-400 h-24 w-24 p-4">20 cm</div>
  
            <p className="font-bold">Tamanho M</p>
            <ul>
              <li>Peso: 2,200kg</li>
              <li>Serve ate 20 pessoas</li>
            </ul>
          </li>
          <li className="flex text-center justify-center p-4">
            <div className="rounded-full bg-fuchsia-400 h-28 w-28 p-4">25 cm</div>
  
            <p className="font-bold">Tamanho G</p>
            <ul>
              <li>Peso: 3,300kg</li>
              <li>Serve ate 30 pessoas</li>
            </ul>
          </li>
          <li className="flex text-center justify-center p-4">
            <div className="rounded-full bg-fuchsia-400 h-32 w-32 p-4">28 cm</div>
  
            <p className="font-bold">Tamanho GG</p>
            <ul>
              <li>Peso: 4,200kg</li>
              <li>Serve ate 40 pessoas</li>
            </ul>
          </li>
          <li className="flex text-center justify-center p-4">
            <div className="rounded-full bg-fuchsia-400 h-36 w-36 p-4">30 cm</div>
  
            <p className="font-bold">Gigante</p>
            <ul>
              <li>Peso: 5,500kg</li>
              <li>Serve ate 50 pessoas</li>
            </ul>
          </li>
        </ul>
      </article>
    );
  }
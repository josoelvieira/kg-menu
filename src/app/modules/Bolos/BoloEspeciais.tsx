import SubTitulos from "../SubTitulo";

export default function BolosEspeciais() {
    const bolos: any = [
      "Abacaxi com coco",
      "Brigadeiro com morango",
      "Dois amores com morango",
      "morango com suspiro",
      "Ninho com morango ou uva",
      "Ninho com brigadeiro de nutella",
      "Prestigio com coco fresco",
      "4 leites com abacaxi, morango ou uva",
    ];
    const valores: any = [
      "Mini - R$ 75",
      "P - R$ 75",
      "M - R$ 75",
      "G - R$ 75",
      "GG - R$ 75",
      "Gigante - R$ 75",
    ];
    return (
      <article id="especiais" className="border-dashed border-4 border-fuchsia-400 p-4 rounded-md my-4">
        <SubTitulos titulo="Sabores especiais" />
        <p>
          Todos os sabores com cobertura em chantininho, voce pode escolher ebtre
          as massas: branca, chocolate, ou mista!
        </p>
  
        <ul className="list-disc p-4 font-semibold">
          {bolos.map((bolo: string) => (
            <li key={bolo}>{bolo}</li>
          ))}
        </ul>
  
        <h3 className="font-bold my-4">Valores</h3>
        <ul className="font-semibold p-4">
          
        {valores.map((valor: any) => <li className="odd:bg-fuchsia-200 even:bg-white" key={valor}>{valor}</li>)}
        </ul>
      </article>
    );
  }
  
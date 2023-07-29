import SubTitulos from "../SubTitulo";

export default function BrigadeirosNobres() {
    const brigadeirosNobres: any = [
      " Bicho de pe com perolas",
      "Flor:bicho de pe, dois amores ou ninho",
      "Morango com chocolate",
      "Ninho com morango",
      "Ninho com nutela",
      "surpresa de uva",
      "Suspiro com morango",
    ];
    const valores: any = [
      "25UN - R$ 40",
      "50UN - R$ 80",
      "100UN - R$ 120"
    ]
  
    return (
      <article className="border-dashed border-4 border-fuchsia-400 p-4 rounded-md my-4">
        <SubTitulos titulo="Sabores nobres" />
        <p>Na caixa ate 5 sabores</p>
        <ul className="list-disc p-4 grid grid-cols-2 font-semibold">
          {brigadeirosNobres.map((brigadeiro: any) => (
            <li key={brigadeiro}>{brigadeiro}</li>
          ))}
        </ul>
  
        <h3 className="font-bold my-4">Valores</h3>
        <ul className="p-4">
          {valores.map((valor: any) =>  <li className="odd:bg-fuchsia-200 even:bg-white" key={valor}>{valor}</li>)}
        </ul>
      </article>
    );
  }
  
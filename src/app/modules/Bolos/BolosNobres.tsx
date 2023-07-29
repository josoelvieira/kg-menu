import SubTitulos from "../SubTitulo";

export default function BolosNobres() {
  const bolos: any = [
    "Ferrero Rocher",
    "Kinder Bueno",
    "Ninho com nutella",
    "Ninho com nutella e morango",
    "Ninho com brigadeiro de nutella",
    "4 leites com geleia de frutas vermelhas",
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
    <article
      id="nobres"
      className="border-dashed border-4 border-fuchsia-400 p-4 rounded-md my-4">
      <SubTitulos titulo="Sabores Nobres" />

      <p>
        Todos os sabores com cobertura em chantininho, voce pode escolher ebtre
        as massas: branca, chocolate, ou mista!
      </p>

      <ul className="list-disc p-4 font-semibold">
        {bolos.map((bolo: any) => (
          <li key={bolo}>{bolo}</li>
        ))}
      </ul>

      <h3 className="font-bold my-4">Valores</h3>
      <ul className="font-semibold p-4">
        {valores.map((valor: any) => (
          <li className="odd:bg-fuchsia-200 even:bg-white" key={valor}>
            {valor}
          </li>
        ))}
      </ul>
    </article>
  );
}

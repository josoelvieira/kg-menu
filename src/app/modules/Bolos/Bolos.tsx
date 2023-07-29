import SubTitulos from "../SubTitulo";

export default function Bolos() {
  const bolos: any = [
    "Beijinho",
    "Bicho de pe(brigadeiro de nesquik)",
    "Brigadeiro",
    "Doce de leite",
    "Dois amores",
    "Ninho",
    "Pacoca",
    "4 leites",
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
      id="tradicionais"
      className="border-dashed border-4 border-fuchsia-400 p-4 rounded-md"
    >
      <div>
        <SubTitulos titulo="Sabores tradicionais" />
        <p>
          Todos os sabores com cobertura em chantininho, voce pode escolher
          entre as massas: branca, chocolate, ou mista!
        </p>

        <ul className="list-disc p-4 font-semibold">
          {bolos.map((bolo: any) => (
            <li key={bolo}>{bolo}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Valores</h3>
        <ul className="font-semibold p-4">
          {valores.map((valor: any) => (
            <li className="odd:bg-fuchsia-200 even:bg-white" key={valor}>
              {valor}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

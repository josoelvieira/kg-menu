import SubTitulos from "../SubTitulo";

export default function BolosDecoracoes() {

    const decoracoes: any = [
      "Topos com nome e idade: R$20",
  "Topos personalizados: R$20",
  "Papel de arroz: R$20",
  "Glitter metade do bolo: R$20",
  "Glitter bolo inteiro: R$20",
  "Brigadeiros unidades: R$20",
  "Flores naturais: R$20",
  "kikat: R$20",
  "Estrutura bolo de andar: R$20",
  "cobertura de brigadeiro com granulado ou amendoin: R$20"
    ]
    return (
      <article id="decoracoes" className="border-dashed border-4 border-fuchsia-400 p-4 rounded-md">
        <SubTitulos titulo="Decoracoes de bolo" />
        <p>
          Para um bolo mais personalizado, chegou a de escolher a decoracao. Caso
          nao conheca meu trabalho te convido a conhecer minha pagina no Instagram
          @kgconfeitaria! Obs: Se ja tem alguma ideia ou inspiracao(fotos) no
          envie para orcamento! Se a inda nao tem, me conte das coisas que gosta
          como cores, hobby, trabalho, esporte ...!
        </p>
        <ul className="font-semibold mt-4 p-4 list-disc">
          {decoracoes.map((decoracao: any) => <li className="odd:bg-fuchsia-200 even:bg-white" key={decoracao}>{decoracao}</li>)}
        </ul>
      </article>
    );
  }
  
export default function Informacoes() {
    return (
        <>
        <section className="p-4 border-dashed border-4 border-fuchsia-400 rounded-md ">
              <h2 className="text-4xl font-bold my-8 text-center font-serif">
                Como encomendar
              </h2>
              <ul className="p-4 list-disc">
                <li>
                  Encomendas sao feitas apenas pelo whatsapp(41)99999-9999
                </li>
                <li>
                  Pedidos com no minimo 5 dias de antecedencia, e confirmados
                  apos o pagamento de 50% ou o valor total.
                </li>
                <li>Trabalhamos com produtos frescos e da melhor qualidade</li>
                <li className="font-bold">
                  Nao trabalhamos com entrega. Apenas retirada no nosso espaco
                  com horario agedando.
                </li>
                <h3 className="text-2xl text-center p-4 font-bold font-serif">
                  Formas de pagamento
                </h3>
                <ul className="list-disc p-4">
                  <li>Pix</li>
                  <li>Tranferencia bancaria</li>
                  <li>
                    Credito e debito (taxas da maquininha por conta do comprador)
                  </li>
                </ul>
              </ul>
            </section>

            <section id="contato" className=" grid grid-cols-1 md:grid-cols-2 border-dashed border-4 border-fuchsia-400 p-4 rounded-md my-4">
              <div>
                <h2 className="text-4xl font-bold text-center p-4 font-serif">
                  Contato
                </h2>
                <p>Endereço: Rua Principal, 123, Centro, São Paulo-SP</p>
                <p>Telefone: (11) 9999-9999</p>
                <p>E-mail: contato@confeitariabolosebrigadeiros.com.br</p>
              </div>
              <div>
                <h2 className="text-4xl text-center p-4 font-bold font-serif">
                  Horarios de atendimento
                </h2>
                <ul className="list-disc p-4">
                  <li>Segunda a sexta das 9:00 as 19:00</li>
                  <li>Sabados 9:00 as 18:00</li>
                  <li>Domingos e feriados somente com horario marcado</li>
                </ul>
              </div>
            </section>
            <footer className="text-center p-20">
              <p>
                Copyright &copy;{" "}
                <span className="font-bold">KG Confeitaria</span> 2023
              </p>
            </footer>
            </>
    )
}
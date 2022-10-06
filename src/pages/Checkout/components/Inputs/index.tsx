import { MapPin } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../../../context/CoffeeContext";
import { FormContainerStyled, HeaderFormStyled } from "./styles";

interface dataImputProps {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
  }

export function Inputs() {
  const { dataItemCard, setDataInputFunc } = useContext(CoffeeContext);

    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');



    useEffect(() => {
      const data = () => {
        const dataInput = {
          cep: cep,
          rua: rua,
          numero: numero,
          complemento: complemento,
          bairro: bairro,
          cidade: cidade,
          uf: uf,
      }

        setDataInputFunc([dataInput])
      }

      data()
    }, [cep, rua, numero, complemento, bairro, cidade, uf])

    return (
        <FormContainerStyled>
            <HeaderFormStyled>
              <MapPin color="#C47F17" weight="fill" size={22} />
              <section>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </section>
            </HeaderFormStyled>

            <form>
              <input
                onChange={(e: any) => setCep(e.target.value)}
                type="number"
                placeholder="CEP"
              />
              <input
                id="rua"
                type="text"
                placeholder="Rua"
                onChange={(e: any) => setRua(e.target.value)}
              />

              <div id="numeroEComplemento">
                <input type="number" id="numero" placeholder="Número" onChange={(e: any) => setNumero(e.target.value)}/>
                <input type="text" id="complemento" placeholder="Complemento" onChange={(e: any) => setComplemento(e.target.value)}/>
              </div>

              <div id="bairoCidadeUf">
                <input type="text" id="bairro" placeholder="Bairro" onChange={(e: any) => setBairro(e.target.value)}/>
                <input type="text" id="cidade" placeholder="Cidade" onChange={(e: any) => setCidade(e.target.value)}/>
                <input type="text" id="uf" placeholder="UF" onChange={(e: any) => setUf(e.target.value)}/>
              </div>
            </form>
          </FormContainerStyled>
    )
}
import { MapPin } from "phosphor-react";
import { useContext, useState } from "react";
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
  const { dataItemCard, amountItenCard } = useContext(CoffeeContext);
  const [data, setData] = useState<dataImputProps[]>([]);


    function handleAddItenCard(data: any) {

        const tempCoffee = [...dataItemCard];
      
        tempCoffee[data.id].itemAmount = tempCoffee[data.id].itemAmount + 1
        const arrayItemSelectInCard = tempCoffee[data.id] = tempCoffee[data.id]
      
        const operador = amountItenCard + 1
      
        if (data.itemAmount <= 1) {
            console.log("1")
        }
      
        }
      
        function handleCreateNewCycle(event: any) {
          event.preventDefault();
      
          const inputData = {
            cep: event.target.cep.value,
            rua: event.target.rua.value,
            numero: event.target.numero.value,
            complemento: event.target.complemento.value,
            bairro: event.target.bairro.value,
            cidade: event.target.cidade.value,
            uf: event.target.uf.value,
          };
      
          setData([...data, inputData]);
        }
      

    return (
        <FormContainerStyled>
            <HeaderFormStyled>
              <MapPin color="#C47F17" weight="fill" size={22} />
              <section>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </section>
            </HeaderFormStyled>

            <form onSubmit={handleCreateNewCycle}>
              <input
                onChange={handleCreateNewCycle}
                id="cep"
                type="number"
                placeholder="CEP"
              />
              <input
                onChange={handleCreateNewCycle}
                id="rua"
                type="text"
                placeholder="Rua"
              />

              <div id="numeroEComplemento">
                <input type="number" id="numero" placeholder="Número" />
                <input type="text" id="complemento" placeholder="Complemento" />
              </div>

              <div id="bairoCidadeUf">
                <input type="text" id="bairro" placeholder="Bairro" />
                <input type="text" id="cidade" placeholder="Cidade" />
                <input type="text" id="uf" placeholder="UF" />
              </div>
            </form>
          </FormContainerStyled>
    )
}
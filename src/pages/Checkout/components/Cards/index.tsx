import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonRemoveAdd } from "../../../../Components/ButtonRemoveAdd";
import { CoffeeContext } from "../../../../context/CoffeeContext";
import {
  DivideStyled,
  EntregaStyled,
  ListCardContainerStyled,
  ListCardContentStyled,
  ListCardStyled,
  TotalContainer,
  TotalGeralStyled,
  TotalItemStyled,
} from "./styles";

export function ListCard() {
  const { dataItemCard, amountItenCard, freteAmount, setSomaTotalItemCardFunc, somaTotalItemCard, dataInput } = useContext(CoffeeContext);
  console.log(dataInput)
  const [totalAmount, setAmount] = useState(0);

  const [totalItemAmount, setItemAmount] = useState(0);

  const [totalValue, setTotalValue] = useState(0);


  //Soma a quantidade de item e  somar com a quantidade de valores
  useEffect(() => {
    const Soma = () => {
      const getDataItemAmountEAmont = dataItemCard.map((data) => {
        return {
          ItemAmount: data.itemAmount,
          Amount: data.amount,
        };
      });

      const getItemAmount = getDataItemAmountEAmont.map((data) => {
        return data.ItemAmount;
      });

      const resAmount = getDataItemAmountEAmont.map((data) => {
        return Number(data.Amount);
      });

      let totalItemAmount = 0;
      for (let i = 0; i <= getItemAmount.length; i++) {
        if (getItemAmount[i]) {
          totalItemAmount += getItemAmount[i];
        }

        setAmount(totalItemAmount);
      }

      let totalAmount = 0;
      for (let i = 0; i <= resAmount.length; i++) {
        if (resAmount[i]) {
          totalAmount += resAmount[i];
        }

        setSomaTotalItemCardFunc(totalAmount);
      }
    };
    Soma();

    const total = totalAmount * totalItemAmount
    setTotalValue(total)
  }, [totalAmount, totalItemAmount, dataItemCard, amountItenCard, totalValue]);

  return (
    <ListCardContainerStyled>
      {dataItemCard.map((data) => (
        <>
          <ListCardContentStyled>
            <img src={data.image} alt="" />

            <ListCardStyled>
              <p>{data.name}</p>

              <ButtonRemoveAdd
                coffee={data}
                coffeeItem={data.itemAmount}
                isIcon={true}
                idItem={data.id}
              />
            </ListCardStyled>

            <span>R$ {data.amount}</span>
          </ListCardContentStyled>

          <DivideStyled />
        </>
      ))}

      <TotalContainer>
        <TotalItemStyled>
          <p>Total de Itens</p>
          <span>R${somaTotalItemCard}</span>
        </TotalItemStyled>

        <EntregaStyled>
          <p>Entrega</p>
          <span>R$ {freteAmount}</span>
        </EntregaStyled>

        <TotalGeralStyled>
          <p>Total</p>
          <span>R$ {somaTotalItemCard + freteAmount}</span>
        </TotalGeralStyled>
      </TotalContainer>

      <NavLink to="/checkout/success" title="">
        <button type="button" disabled={dataInput[0].cep === '' ? true : false }>
            confirmar pedido
        </button>
      </NavLink>
    </ListCardContainerStyled>
  );
}

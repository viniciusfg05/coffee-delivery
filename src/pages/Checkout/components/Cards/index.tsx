const number = 2 + 2 

console.log(number)








































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

  console.log(dataItemCard)

  const [totalAmount, setAmount] = useState(0);

  const [totalItemAmount, setItemAmount] = useState(0);

  const [totalValue, setTotalValue] = useState(0);
  const [totalGeral, setTotalGeral] = useState('');

  const real = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const frete = real.format(freteAmount)
  const totalCurrency = real.format(somaTotalItemCard)


  const validaçãoButton = dataItemCard.map((data => {
    return data.method ? true : false;
  }))


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

      }

      let totalAmount = 0;
      for (let i = 0; i <= resAmount.length; i++) {
        if (resAmount[i]) {
          totalAmount += resAmount[i];
        }

      }

      let real = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      const total = totalAmount * totalItemAmount
      const totalToFixed = total.toFixed(1);
      const totalGeral = real.format(Number(totalToFixed) + freteAmount)


      setSomaTotalItemCardFunc(Number(totalToFixed));
      setTotalValue(Number(totalToFixed))
      setTotalGeral(totalGeral)
    };
    Soma();

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
          <span>{totalCurrency}</span>
        </TotalItemStyled>

        <EntregaStyled>
          <p>Entrega</p>
          <span>{frete}</span>
        </EntregaStyled>

        <TotalGeralStyled>
          <p>Total</p>
          <span>{totalGeral}</span>
        </TotalGeralStyled>
      </TotalContainer>

      <NavLink to="/checkout/success" title="">
        <button type="button" >
          confirmar pedido
        </button>
      </NavLink>
    </ListCardContainerStyled>
  );
}

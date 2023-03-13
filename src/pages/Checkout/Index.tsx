import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { ListCard } from "./components/Cards";
import { Inputs } from "./components/Inputs";
import { Payment } from "./components/Payment";
import {
  MainContainerStyled,
  NoItemCardStyled,
} from "./styles";



export function Checkout() {
  const { dataItemCard, amountItenCard } = useContext(CoffeeContext);




  if (dataItemCard.length > 0) {
    return (
      <>
        <MainContainerStyled>
          <section>
            <Inputs />
            <Payment /> 
          </section>
          
          <ListCard />

        </MainContainerStyled>
      </>
    );
  } else {
    return (
      <>
        <MainContainerStyled>
          
          <section>
            <Inputs />
            <Payment /> 
          </section>

          <NoItemCardStyled>No momento você não tem item no carrinho</NoItemCardStyled>

        </MainContainerStyled>
      </>
    );
  }
}

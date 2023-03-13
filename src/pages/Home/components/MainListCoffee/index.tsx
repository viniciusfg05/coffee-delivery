import { useContext } from "react";
import { ButtonRemoveAdd } from "../../../../Components/ButtonRemoveAdd";
import { CoffeeContext } from "../../../../context/CoffeeContext";
import { ContainerCoffeeStyled, ListCoffeeContainerStyled, ListCoffeeContenteStyled } from "./styles";

export interface CoffeeProps {
  id: number,
  image: string,
  name: string,
  description: string,
  amount: string
  itemAmount: number,
}


export function MainListCoffee() {
  const { coffeeData } = useContext(CoffeeContext)



  return (
    <ContainerCoffeeStyled>

      <h1>Nossos cafés</h1>
      <ListCoffeeContainerStyled>

        {coffeeData.map(coffee => (
          <ListCoffeeContenteStyled key={coffee.id}>
            <header>
              <img src={coffee.image} alt="Café expresso tradicional" />
              <span>Tradicional</span>
            </header>

            <section>
              <p>{coffee.name}</p>
              <span>{coffee.description}</span>
            </section>

            <footer>
              <aside>
                <span>R$</span>
                <p>{coffee.amount}</p>
              </aside>


              <ButtonRemoveAdd coffee={coffee} coffeeItem={coffee.itemAmount} isIcon={false} />

            </footer >
          </ListCoffeeContenteStyled>
        ))}
      </ListCoffeeContainerStyled>
    </ContainerCoffeeStyled>

  )
}
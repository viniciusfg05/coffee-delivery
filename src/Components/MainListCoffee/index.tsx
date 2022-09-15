import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { ButtonAddeRemoveContentStyled, ContainerCoffeeStyled, ListCoffeeContainerStyled, ListCoffeeContenteStyled } from "./styles";
import { api } from "../../services/api";
import { CoffeeContext } from "../../context/CoffeeContext";

interface CoffeeProps {
  id: number,
  image: string,
  name: string,
  description: string,
  amount: string
  itemAmount: number,
}


export function MainListCoffee() {
  const {ola} = useContext<any>(CoffeeContext)

  console.log(ola)

  const [ coffeeData, setCoffee ] = useState<CoffeeProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      await api.get('coffees') //rota possivelmente criariamos no futuro
      .then(response => setCoffee(response.data.coffees)) //console .log nos dados
    }

    fetchData()

  }, [])

  async function handleAddItenCard(coffee: CoffeeProps) {
    // const findIdIten = coffeeData.find(find => find.id === coffee.id);
    const coffeeIndex = coffeeData.findIndex((task) => {
      return task.id == coffee.id;
    });
    
    const tempCoffee = [...coffeeData];

    tempCoffee[coffeeIndex].itemAmount = tempCoffee[coffeeIndex].itemAmount + 1

    setCoffee(tempCoffee)
  }

  async function handleRemoveItenCard(coffee: CoffeeProps) {
    
    // const findIdIten = coffeeData.find(find => find.id === coffee.id);
    const coffeeIndex = coffeeData.findIndex((task) => {
      return task.id == coffee.id;
    });
    
    const tempCoffee = [...coffeeData];
    
    if(coffee.itemAmount > 0) {
      tempCoffee[coffeeIndex].itemAmount = tempCoffee[coffeeIndex].itemAmount - 1
    }

    setCoffee(tempCoffee)
  }

  return (
    <ContainerCoffeeStyled>
        <h1>Nossos cafés</h1>

        <ListCoffeeContainerStyled>
        
        { coffeeData.map(coffee => (
          <ListCoffeeContenteStyled>
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

            <ButtonAddeRemoveContentStyled>

              <button 
                type="button"
                // onClick={() => {handleAddItenCard(coffee)}}
              >
                <Minus size={16} onClick={() => handleRemoveItenCard(coffee)} color={'#8047F8'} />
                <p>{coffee.itemAmount}</p>
                <Plus size={16} onClick={() => handleAddItenCard(coffee)} color={'#8047F8'} />
              </button>

              <i>
                <ShoppingCart weight="fill" color={'White'}/>
              </i>
            </ButtonAddeRemoveContentStyled>

            </footer>
          </ListCoffeeContenteStyled>
        )) }
      </ListCoffeeContainerStyled>
    </ContainerCoffeeStyled>

  )
}
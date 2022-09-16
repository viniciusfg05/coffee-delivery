import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { ButtonAddeRemoveContentStyled, ContainerCoffeeStyled, ListCoffeeContainerStyled, ListCoffeeContenteStyled } from "./styles";
import { api } from "../../services/api";
import { CoffeeContext } from "../../context/CoffeeContext";

export interface CoffeeProps {
  id: number,
  image: string,
  name: string,
  description: string,
  amount: string
  itemAmount: number,
}


export function MainListCoffee() {
  const { coffeeData, setCoffee, setAmountItemCardFunc, amountItenCard } = useContext(CoffeeContext)

  const [ dataItemCard, setDataItemCard ] = useState<any[]>([])
  // console.log(dataItemCard)

  function data(coffee: CoffeeProps) {
    const coffeeIndex = coffeeData.findIndex((task) => {
      return task.id == coffee.id;
    });

    coffeeData[coffeeIndex].itemAmount = coffeeData[coffeeIndex].itemAmount - 1

    const res = coffeeData.map(data => {
      return data
    })

    

    const resItem = coffeeData.map(data => {
      return console.log(<p>{data.itemAmount}</p>) 

    })
    
    const item = coffeeData[coffeeIndex].itemAmount = coffeeData[coffeeIndex].itemAmount + 1
    // console.log(resItem)
    
    const dataCoffe: any = {
      ...coffee,
      itemAmount: 999
    }
    
    console.log(coffee.itemAmount)
    
    res[coffeeIndex].itemAmount < 1 && setDataItemCard([dataCoffe ,...dataItemCard])
    // console.log(res[0].id)
  }

  // console.log(dataItemCard)

  async function handleAddItenCard(coffee: CoffeeProps) {
    data(coffee)

    const coffeeIndex = coffeeData.findIndex((task) => {
      return task.id == coffee.id;
    });

    const tempCoffee = [...coffeeData];
    
    tempCoffee[coffeeIndex].itemAmount = tempCoffee[coffeeIndex].itemAmount + 1
    
    const operador = amountItenCard + 1
    
    
    setAmountItemCardFunc(operador)
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

    const operador = amountItenCard - 1

    if(amountItenCard > 0) {
      setAmountItemCardFunc(operador)
    }

    // console.log(coffee)

    setCoffee(tempCoffee)
  }

  return (
    <ContainerCoffeeStyled>
        <h1>Nossos cafés</h1>

        <ListCoffeeContainerStyled>
        
        { coffeeData.map(coffee => (
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

            <ButtonAddeRemoveContentStyled>

              <button 
                type="button"
                // onClick={() => {handleAddItenCard(coffee)}}
              >
                <Minus size={16} onClick={() => handleRemoveItenCard(coffee)} color={'#8047F8'} />
                <p>{coffee.itemAmount}</p>
                <Plus size={16} onClick={(() => handleAddItenCard(coffee) )} color={'#8047F8'} />
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
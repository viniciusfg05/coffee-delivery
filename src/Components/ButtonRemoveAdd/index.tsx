import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react";
import { useContext } from "react";
import { useRoutes, BrowserRouter, useParams, NavLink } from "react-router-dom";
import { CoffeeContext } from "../../context/CoffeeContext";
import { ButtonAddeRemoveContentStyled, ButtonContainerStyled } from "./styles";

export interface CoffeeProps {
  id: number;
  image: string;
  name: string;
  description: string;
  amount: string;
  itemAmount: number;
}

interface props {
  coffee?: any;
  coffeeItem?: any;
  isIcon?: any;
  idItem?: any;
}

export function ButtonRemoveAdd({ coffee, coffeeItem, isIcon, idItem }: props) {
  const {
    coffeeData,
    setCoffee,
    setAmountItemCardFunc,
    setNewDataItemSelectionsAdd,
    setNewDataItemSelectionsRemove,
    amountItenCard,
    dataItemCard,
    setDataItemCardFunc,
    freteAmount
  } = useContext(CoffeeContext);

  async function handleAddItenCard(coffee: CoffeeProps) {
    const coffeeIndex = coffeeData.findIndex((task) => {
      return task.id == coffee.id;
    });

    const tempCoffee = [...coffeeData];

    tempCoffee[coffeeIndex].itemAmount = tempCoffee[coffeeIndex].itemAmount + 1;
    const arrayItemSelectInCard = (tempCoffee[coffeeIndex] =
      tempCoffee[coffeeIndex]);

    const operador = amountItenCard + 1;

    if (coffee.itemAmount <= 1) {
      setNewDataItemSelectionsAdd(arrayItemSelectInCard);
    }

    setAmountItemCardFunc(operador);
    setCoffee(tempCoffee);
  }

  async function handleRemoveItenCard(coffee: CoffeeProps) {
    const results = dataItemCard.filter((item) => item.id !== coffee.id);


    const coffeeIndex = coffeeData.findIndex((task) => {
      return task.id == coffee.id;
    });

    const tempCoffee = [...coffeeData];

    if (coffee.itemAmount > 0) {
      tempCoffee[coffeeIndex].itemAmount =
        tempCoffee[coffeeIndex].itemAmount - 1;
    }

    let operador = amountItenCard - 1;

    const idItem = tempCoffee[coffeeIndex].id;
    
    // Somar a quantidade de item se maior que 0
    if (amountItenCard > 0) {
      setAmountItemCardFunc(operador);
    } 
  
    // Deleta item se a quantidade for menor 1 
    if (coffee.itemAmount < 1 ) {
      setDataItemCardFunc(results)
    }
    
  }

  function handleRemoveItem(idItem?: number) {
    const results = dataItemCard.filter((item) => item.id !== idItem);

    const tempCoffee = [...coffeeData];

    const coffeeIndex = coffeeData.findIndex((task) => {
      return task.id == coffee.id;
    });

    if (coffee.itemAmount > 0) {
      tempCoffee[coffeeIndex].itemAmount = 0
    }

    let operador = 0;

    setAmountItemCardFunc(operador);

    setCoffee(tempCoffee);

    setDataItemCardFunc(results);
  }

  return (
    <>
      <ButtonAddeRemoveContentStyled>
        <button type="button">
          <Minus
            size={16}
            onClick={() => handleRemoveItenCard(coffee)}
            color={"#8047F8"}
          />
          <p>{coffeeItem}</p>
          <Plus
            size={16}
            onClick={() => handleAddItenCard(coffee)}
            color={"#8047F8"}
          />
        </button>

        {isIcon === false ? (
          <i>
            <NavLink to="/checkout" title="">
              <ShoppingCart weight="fill" color={"White"} />
            </NavLink>  
          </i>
        ) : (
          <span onClick={() => handleRemoveItem(idItem)}>
            <i>
              <Trash size={16} color={"#8047F8"} />
            </i>
            Remover
          </span>
        )}
      </ButtonAddeRemoveContentStyled>
    </>
  );
}

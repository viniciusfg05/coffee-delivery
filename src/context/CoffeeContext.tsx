import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface CoffeeProps {
  id: number,
  image: string,
  name: string,
  description: string,
  amount: string
  itemAmount: number,
}

interface CoffeePropsTypes {
  coffeeData: CoffeeProps[]
  amountItenCard: number;
  setCoffee: (tempCoffee: CoffeeProps[]) => void;
  setAmountItemCardFunc: (operador: number) => void
}

interface CoffeProviderProps {
  children: ReactNode; // qualquer html valido
}

export const CoffeeContext = createContext({} as CoffeePropsTypes);

export function CoffeeContextProvider({children}: CoffeProviderProps) {

  const [ amountItenCard, setAmountItemCard ] = useState(0)
  const [ coffeeData, setCoffeeData ] = useState<CoffeeProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      await api.get('coffees') //rota possivelmente criariamos no futuro
      .then(response => setCoffeeData(response.data.coffees)) //console .log nos dados
    }

    fetchData()

  }, [])

  function setCoffee(tempCoffee: CoffeeProps[]) {
    setCoffeeData(tempCoffee)
  }

  function setAmountItemCardFunc(operador: number) {
    setAmountItemCard(operador)
  }

  return (
    <CoffeeContext.Provider value={{coffeeData, setCoffee, setAmountItemCardFunc, amountItenCard}}>
      {children}
    </CoffeeContext.Provider>
  )
}
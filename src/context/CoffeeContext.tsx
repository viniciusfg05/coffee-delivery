import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface CoffeeProps {
  id: number;
  image: string;
  name: string;
  description: string;
  amount: string;
  itemAmount: number;
}

interface dataCoffeeMapProps {
  coffee: CoffeeProps[];
  coffeeItem: number;
}

interface CoffeePropsTypes {
  coffeeData: CoffeeProps[];
  amountItenCard: number;
  dataItemCard: CoffeeProps[];
  freteAmount: number;
  setCoffee: (tempCoffee: CoffeeProps[]) => void;
  setAmountItemCardFunc: (operador: number) => void;
  setNewDataItemSelectionsAdd: (dataItemCard: CoffeeProps) => void;
  setNewDataItemSelectionsRemove: (idItem: number) => void;
  setDataItemCardFunc: (results: CoffeeProps[]) => void;
  setSomaTotalItemCardFunc: (totalAmount: number) => void;
  somaTotalItemCard: number;
  dataCoffeeMap: { coffee: CoffeeProps; coffeeItem: number }[];
}

interface CoffeProviderProps {
  children: ReactNode; // qualquer html valido
}

export const CoffeeContext = createContext({} as CoffeePropsTypes);

export function CoffeeContextProvider({ children }: CoffeProviderProps) {

  const [amountItenCard, setAmountItemCard] = useState(0);

  const [freteAmount , setFreteAmount] = useState(3.90);

  const [ somaTotalItemCard, setSomaTotalItemCard] = useState(0);

  const [coffeeData, setCoffeeData] = useState<CoffeeProps[]>([]);

  const [dataItemCard, setDataItemCard] = useState<CoffeeProps[]>([]);

  const dataCoffeeMap = coffeeData.map((data) => {
    return {
      coffee: data,
      coffeeItem: data.itemAmount,
    };
  });

  console.log(dataCoffeeMap);

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get("coffees") //rota possivelmente criariamos no futuro
        .then((response) => setCoffeeData(response.data.coffees)); //console .log nos dados
    };

    fetchData();
  }, []);

  function setCoffee(tempCoffee: CoffeeProps[]) {
    setCoffeeData(tempCoffee);
  }

  function setAmountItemCardFunc(operador: number) {
    setAmountItemCard(operador);
    // dataItemCard &&  setAmountItemCard(0)
  }

  function setNewDataItemSelectionsAdd(arrayItemSelectInCard: CoffeeProps) {
    // Add intem ao array de intem no card
    setCoffeeData((state) => [...state, arrayItemSelectInCard]);
    setDataItemCard((state) => [...state, arrayItemSelectInCard]);
  }

  function setNewDataItemSelectionsRemove(idItem: number) {
    // remove intem ao array de intem no card
    const results = dataItemCard.filter((item) => item.id === idItem);
    setCoffeeData(results);
    setDataItemCard(results);
  }

  function setDataItemCardFunc(results: any) {
    setDataItemCard(results);
  }

  function setSomaTotalItemCardFunc(totalAmount: number) {
    setSomaTotalItemCard(totalAmount)
  }


  return (
    <CoffeeContext.Provider
      value={{
        coffeeData,
        setCoffee,
        setAmountItemCardFunc,
        amountItenCard,
        dataItemCard,
        setNewDataItemSelectionsAdd,
        setNewDataItemSelectionsRemove,
        dataCoffeeMap,
        setDataItemCardFunc,
        freteAmount,
        setSomaTotalItemCardFunc,
        somaTotalItemCard
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}

import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface CoffeeProps {
  id: number;
  image: string;
  name: string;
  description: string;
  amount: string;
  itemAmount: number;
  method?: string;
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
  setNewDataItemSelectionsAdd: (arrayItemSelectInCard: CoffeeProps) => void;
  setNewDataItemSelectionsRemove: (idItem: number) => void;
  setDataItemCardFunc: (results: CoffeeProps[]) => void;
  setSomaTotalItemCardFunc: (totalAmount: number) => void;
  setAddMethodPayFunc: (method: string) => void;
  setDataInputFunc: (dataInput: dataImputProps[]) => void;
  somaTotalItemCard: number;
  dataCoffeeMap: { coffee: CoffeeProps; coffeeItem: number }[];
  dataInput: dataImputProps[]
}

interface CoffeProviderProps {
  children: ReactNode; // qualquer html valido
}

interface dataImputProps {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export const CoffeeContext = createContext({} as CoffeePropsTypes);

export function CoffeeContextProvider({ children }: CoffeProviderProps) {

  const [amountItenCard, setAmountItemCard] = useState(0);

  const [ freteAmount , setFreteAmount] = useState(3.90);

  const [ somaTotalItemCard, setSomaTotalItemCard ] = useState(0);

  const [coffeeData, setCoffeeData] = useState<CoffeeProps[]>([]);

  const [dataItemCard, setDataItemCard] = useState<CoffeeProps[]>([]);

  const [ dataInput, setDataInput ] = useState<dataImputProps[]>([]);

  const dataCoffeeMap = coffeeData.map((data) => {
    return {
      coffee: data,
      coffeeItem: data.itemAmount,
    };
  });

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

  async function setNewDataItemSelectionsAdd(arrayItemSelectInCard: CoffeeProps) {
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

  function setAddMethodPayFunc(method: string) {
    const methodPay = dataItemCard.map(dataItemCard => {
      return {
          ...dataItemCard,
          method: method
      }
    })
    
    setDataItemCard(methodPay);
  }

  function setDataInputFunc(dataInput: dataImputProps[]) {
    setDataInput(dataInput)
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
        somaTotalItemCard,
        setAddMethodPayFunc,
        setDataInputFunc,
        dataInput
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}

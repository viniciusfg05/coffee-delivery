import { Box, HStack, useRadioGroup } from "@chakra-ui/react";
import { Bank, CreditCard, CurrencyDollarSimple, Money } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../context/CoffeeContext";
import { ButtonPayment } from "./components/ButtonPayment";
import { HeaderFormStyled, PaymentCointainerStyled } from "./styles";


export function Payment() {
  const { dataItemCard, setAddMethodPayFunc } = useContext(CoffeeContext);

  const [activeSelectButton, setActiveSelectButton] = useState<any>('')

  function handleCardCredit(method: any) {
    setAddMethodPayFunc(method)
    
  }

  const options = ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Cartão de Crédito',
    onChange: console.log,
  })

  const group = getRootProps()



  return (
    <PaymentCointainerStyled>
      <HeaderFormStyled>
        <CurrencyDollarSimple color="#8047F8" weight="fill" size={22} />
        <section>
          <p>Pagamento</p>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        </section>

      </HeaderFormStyled>

      <section>
        <HStack {...group}  className="container-button">
          {options.map((method) => {
            const radio = getRadioProps({ method })
            return (
              <Box as="button" onClick={() => handleCardCredit(method)}>

                <ButtonPayment key={method} {...radio}>
                  {method}
                </ButtonPayment>
              </Box>
            )
          })}
        </HStack>
      </section>
    </PaymentCointainerStyled>


  )
}

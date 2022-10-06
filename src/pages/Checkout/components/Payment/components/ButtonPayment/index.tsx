// export function ButtonPayment() {
//     return (

import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"
import { Bank, CreditCard, Money } from "phosphor-react"


export function ButtonPayment(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label' display='flex' justifyContent="space-around" w="100%" >
        <input {...input} />

        <Box
            {...checkbox}
            cursor='pointer'
            bg="#E6E5E5"
            borderWidth='1px'
            borderRadius="0.2rem"

            _checked={{
                bg: '#8047F8',
                color: '#574F4D',
                borderWidth: '1px'
                
            }}
            _focus={{
                bg: '#EBE5F9',
                borderColor: '#8047F8',
            }}
            w="11.125rem"
            h="3.187rem"
            fontSize={14}
            display='flex'
            align-items="center"
            justifyContent='center'
            gap="0.7rem"
            padding='1rem 0.1rem 1rem 0.1rem'
        >

            {props.children === 'Cartão de Crédito' && <CreditCard color="#8047F8" size={22}/> }
            {props.children === 'Cartão de Débito' && <Bank color="#8047F8" size={22}/> }
            {props.children === 'Dinheiro' && <Money color="#8047F8" size={22}/> }
            {props.children}
        </Box>

      </Box>
    )
  }
  

  
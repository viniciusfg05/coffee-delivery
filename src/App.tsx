import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from './Router'
import { api } from './services/api'
// import { makeServer } from './services/mirage'
import { GlobalStyles } from './Styles/Global'
import { defaultTheme } from './Styles/Theme/Default'
import './services/mirage/index.ts'
import { CoffeeContextProvider } from './context/CoffeeContext'
import { ChakraProvider } from '@chakra-ui/react'

interface CoffeeProps {
  id: number,
  Image: string,
  name: string,
  description: string,
  amount: number
}


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ChakraProvider>
        <BrowserRouter>
          <CoffeeContextProvider>
            <RouterProvider />
          </CoffeeContextProvider>
        
        </BrowserRouter>
        
        <GlobalStyles />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default App

import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from './Router'
import { api } from './services/api'
// import { makeServer } from './services/mirage'
import { GlobalStyles } from './Styles/Global'
import { defaultTheme } from './Styles/Theme/Default'
import './services/mirage/index.ts'

 

function App() {

  useEffect(() => {
    api.get('coffees') //rota possivelmente criariamos no futuro
    .then(response => console.log(response.data)) //console .log nos dados
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <RouterProvider />
      
      </BrowserRouter>
      
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

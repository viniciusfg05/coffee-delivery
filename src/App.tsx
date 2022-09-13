import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from './Router'
import { makeServer } from './services/mirage'
import { GlobalStyles } from './Styles/Global'
import { defaultTheme } from './Styles/Theme/Default'

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}


function App() {
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

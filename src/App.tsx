import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from './Router'
import { GlobalStyles } from './Styles/Global'
import { defaultTheme } from './Styles/Theme/Default'

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

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from './Router'
import { defaultTheme } from './Styles/Theme/Default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <RouterProvider />
        
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

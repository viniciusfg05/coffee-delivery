import logo from  '../../assets/logoCoffee.svg'
import { MapPin, ShoppingCart   } from 'phosphor-react'
import { HeaderContainerStyled, ToolbarContainerStyled } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { CoffeeProps } from '../MainListCoffee'

const style = { background: "red",  }

export function Header() {
  const { amountItenCard, coffeeData } = useContext(CoffeeContext)


  return (
    <HeaderContainerStyled>
      <nav>
        <img src={logo} alt="" />

          <ToolbarContainerStyled >
            <section>
              <MapPin  color-='#EBE5F9' weight="fill" size={22}/>
              <span>Brasília, DF</span>
            </section>

            <button
              type='button'
              >
              <ShoppingCart color='#C47F17' weight="fill" size={22} />
              <p>{amountItenCard}</p>
            </button>
          </ToolbarContainerStyled>

      </nav>
    </HeaderContainerStyled>
  )
} 
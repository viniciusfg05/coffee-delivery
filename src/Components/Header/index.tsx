import logo from  '../../assets/logoCoffee.svg'
import { MapPin, ShoppingCart   } from 'phosphor-react'
import { HeaderContainerStyled, ToolbarContainerStyled } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { NavLink } from 'react-router-dom'

const style = { background: "red",  }

export function Header() {
  const { amountItenCard, dataItemCard } = useContext(CoffeeContext)
  

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
              <NavLink to="/checkout" title="">
                <ShoppingCart color='#C47F17' weight="fill" size={22} />
              </NavLink>  
              <p>{amountItenCard}</p>
            </button>
          </ToolbarContainerStyled>

      </nav>
    </HeaderContainerStyled>
  )
} 
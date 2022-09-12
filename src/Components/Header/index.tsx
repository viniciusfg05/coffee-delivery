import logo from  '../../assets/logoCoffee.svg'
import { MapPin, ShoppingCart   } from 'phosphor-react'
import { HeaderContainerStyled, ToolbarContainerStyled } from './styles'

const style = { background: "red",  }

export function Header() {
  return (
    <HeaderContainerStyled>
      <nav>
        <img src={logo} alt="" />

        <ToolbarContainerStyled >
          <section>
            <MapPin  color-='#EBE5F9' weight="fill" size={22}/>
            <span>Brasília, DF</span>
          </section>

          <section>
            <ShoppingCart color='#C47F17' weight="fill" size={22} />
          </section>
        </ToolbarContainerStyled>
      </nav>
    </HeaderContainerStyled>
  )
} 
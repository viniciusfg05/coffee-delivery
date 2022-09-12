import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import cofferBanner from '../../assets/cofferBanner.svg'
import background from '../../assets/background.svg'
import { LiContentStyled, MainContainerStyled } from "./styles";

export function Home() {
  return (
    
    <MainContainerStyled>
      <section>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <ul>
          <li>
            <LiContentStyled propsColor='yellowDark'>
              <ShoppingCart size={14} weight="fill" color='white' />  
            </LiContentStyled>
            <span>Compra simples e segura</span>
          </li>
          <li>
            <LiContentStyled propsColor='yellow' >
              <Timer size={14} weight="fill" color='white'/>
            </LiContentStyled>
            <span>Entrega rápida e rastreada</span>
          </li>
          <li>
            <LiContentStyled propsColor='gray'>
              <Package size={14} weight="fill" color='white'/>
            </LiContentStyled>
            <span>Embalagem mantém o café intacto</span>
          </li>
          <li>
            <LiContentStyled propsColor='purplueDark'>
              <Coffee size={14} weight="fill" color='white'/>
            </LiContentStyled>
            <span>O café chega fresquinho até você</span>
          </li>
        </ul>
      </section>

      <img src={cofferBanner} alt="Copo branco com a tampa e faixa de estampa preta com a logo do site e alguns graõs de café e café moído como backgroud" />
    </MainContainerStyled>
  )
}
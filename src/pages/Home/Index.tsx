import background from '../../assets/background.svg'
import { BackgroudImageStyled } from "./styles";
// import { Intro } from './components/Intro';
import { Intro } from './components/Intro';
import { MainListCoffee } from './components/MainListCoffee';
import { ButtonPayment } from '../Checkout/components/Payment/components/ButtonPayment';




export function Home() {
  return (
    <>
      <BackgroudImageStyled style={{backgroundImage: `url(${background})`} }  />
      
      <Intro />
      <MainListCoffee />
    </>
    
  )
}
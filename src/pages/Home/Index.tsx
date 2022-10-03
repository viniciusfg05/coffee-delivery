import background from '../../assets/background.svg'
import { BackgroudImageStyled } from "./styles";
// import { Intro } from './components/Intro';
import { Intro } from './components/Intro';
import { MainListCoffee } from './components/MainListCoffee';




export function Home() {


  return (
    <>
      <BackgroudImageStyled style={{backgroundImage: `url(${background})`} }  />
      <Intro />
      <MainListCoffee />
    </>
    
  )
}
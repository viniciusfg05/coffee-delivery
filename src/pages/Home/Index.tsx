import background from '../../assets/background.svg'
import { BackgroudImageStyled } from "./styles";
import { Intro } from "../../Components/Intro";
import { MainListCoffee } from "../../Components/MainListCoffee";




export function Home() {


  return (
    <>
      <BackgroudImageStyled style={{backgroundImage: `url(${background})`} }  />
      <Intro />
      <MainListCoffee />
    </>
    
  )
}
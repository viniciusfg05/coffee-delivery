import { Coffee, Minus, NumberOne, Package, Plus, ShoppingCart, Timer } from "phosphor-react";
import cofferBanner from '../../assets/cofferBanner.svg'
import background from '../../assets/background.svg'
import expressTradicional from '../../assets/expressTradicional.svg'
import { BackgroudImageStyled, ButtonAddeRemoveContentStyled, ButtonAddeRemoveItemStyled, ContainerCoffeeStyled, LiContentStyled, ListCoffeeContainerStyled, ListCoffeeContenteStyled, MainContainerStyled } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface CoffeeProps {
  id: number,
  image: string,
  name: string,
  description: string,
  amount: string
}



export function Home() {
  const [ cooffee, setCoffee ] = useState<CoffeeProps[]>([])

  try {
  } catch (error) {
    console.log(error)
  }


  
  console.log(cooffee)
  useEffect(() => {
    const fetchData = async () => {
      await api.get('coffees') //rota possivelmente criariamos no futuro
      .then(response => setCoffee(response.data.coffees)) //console .log nos dados
    }

    fetchData()

  }, [])

  return (
    <>
      <BackgroudImageStyled style={{backgroundImage: `url(${background})`} }  />
      <MainContainerStyled >

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

        <section>
          <img src={cofferBanner} alt="Copo branco com a tampa e faixa de estampa preta com   a logo do site e alguns graõs de café e café moído como backgroud" />
        </section>
      </MainContainerStyled>

      <ContainerCoffeeStyled>
        <h1>Nossos cafés</h1>

        <ListCoffeeContainerStyled>
        

        { cooffee.map(coffee => (

        
        <ListCoffeeContenteStyled>
          <header>
            <img src={coffee.image} alt="Café expresso tradicional" />
            <span>Tradicional</span>
          </header>

          <section>
            <p>{coffee.name}</p>
            <span>{coffee.description}</span>
          </section>

          <footer>
            <aside>
              <span>R$</span>
              <p>{coffee.amount}</p>
            </aside>

          <ButtonAddeRemoveContentStyled>
            
            <button>
              <Minus size={16} color={'#8047F8'} />
              <NumberOne size={16} />
              <Plus size={16} color={'#8047F8'} />

            </button>

            <i>
              <ShoppingCart weight="fill" color={'White'}/>
            </i>
          </ButtonAddeRemoveContentStyled>

          </footer>



        </ListCoffeeContenteStyled>
        )) }



      </ListCoffeeContainerStyled>

      </ContainerCoffeeStyled>


    </>
    
  )
}
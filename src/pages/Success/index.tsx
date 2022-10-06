import { Clock, MapPin, Money } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import illustration from '../../assets/Illustration.svg'
import { CotainerSyled, InfosPedidoStyled, MainCotentStyled } from "./styles";
import { LiContentStyled } from "../Home/components/Intro/styles";

export function Success() {
    const { dataInput, dataItemCard, freteAmount, setSomaTotalItemCardFunc, somaTotalItemCard } = useContext(CoffeeContext);

    console.log(dataInput)
    return (
        <CotainerSyled>
            <div>
                <header>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </header>

                <MainCotentStyled>
                    <InfosPedidoStyled>
                        <ul>
                            <li>
                                <LiContentStyled propsColor='purplueDark'>
                                    <MapPin size={14} weight="fill" color='white' />
                                </LiContentStyled>
                                <span>{`Entrega na ${dataInput[0].rua}, ${dataInput[0].numero}, ${dataInput[0].bairro} - ${dataInput[0].cidade} ${dataInput[0].uf}`}</span>
                            </li>
                            <li>
                                <LiContentStyled propsColor='yellow' >
                                    <Clock size={14} weight="fill" color='white' />
                                </LiContentStyled>
                                <span>Previsão de entrega 20 min - 30 min </span>
                            </li>
                            <li>
                                <LiContentStyled propsColor='yellowDark'>
                                    <Money size={14} weight="fill" color='white' />
                                </LiContentStyled>
                                <span>{`Pagamento na entrega ${dataItemCard[0].method}`}</span>
                            </li>
                        </ul>
                    </InfosPedidoStyled>

                    <section>

                        <img src={illustration} alt="" />
                    </section>
                </MainCotentStyled>
            </div>
        </CotainerSyled>
    )
}
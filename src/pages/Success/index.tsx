import { Clock, MapPin, Money } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import illustration from '../../assets/Illustration.svg'
import { CotainerSyled, InfosPedidoStyled, MainCotentStyled } from "./styles";
import { LiContentStyled } from "../Home/components/Intro/styles";

export function Success() {
    const { dataInput, method, freteAmount, setSomaTotalItemCardFunc, somaTotalItemCard } = useContext(CoffeeContext);

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
                                <span>{`Entrega na ${dataInput?.endereco}, ${dataInput?.numero}, ${dataInput?.bairro} - ${dataInput?.cidade} ${dataInput?.uf}`}</span>
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
                                <span>{`Pagamento na entrega ${method}`}</span>
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
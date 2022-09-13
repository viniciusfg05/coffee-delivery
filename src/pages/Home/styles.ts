import styled from 'styled-components'
import background from '../../assets/background.svg'

export const MainContainerStyled = styled.main`
    max-width: 70rem;
    /* height: 22.5rem; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    gap: 4.81rem;
    margin-top: 5.875rem;

    section {

        h1 {
            font-size: 2.75rem;
            font-family: 'Baloo 2', sans-serif;
            line-height: 3.87rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.25rem;
            margin-bottom: 4.125rem;
        }

        ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;
            font-size: 1rem;
            gap: 1.25rem;
            list-style-type: none;

            li {
                display: flex;
                align-items: center;
                gap: 0.875rem
            }
        }


    }

    section:last-child{
        margin: 0;
        display: flex;
        width: 29.75rem;


        img {
            flex: 1;
            display: flex;
            justify-content: end;
    }
    }
`

const PROPS_COLORS = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    gray: 'base-text',
    purplueDark: 'purple-dark',

} as const
  
interface PropsColor {
  propsColor?: keyof typeof PROPS_COLORS;
}

export const LiContentStyled = styled.i<PropsColor>`
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme[PROPS_COLORS[props.propsColor]]};;
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const BackgroudImageStyled = styled.div`
    width: 90rem;
    height: 34rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 6.50rem;
    bottom: 0;
    margin: 0 auto;
`

export const ContainerCoffeeStyled = styled.div`
    display: flex;
    flex-direction: column;
    
    
    h1 {
        max-width: 70rem;

        display: flex;
        justify-content: flex-start;
        margin: 8.75rem auto 3.75rem auto;
        width: 100%;
    }
`

export const ListCoffeeContainerStyled = styled.div`
    max-width: 70rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

`

export const ListCoffeeContenteStyled = styled.div`
    width: 16rem;
    height: 19.375rem;
    border-top-right-radius: 36px;
    background: ${(props) => props.theme['base-card']};

    header {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        img {
        width: 7.5rem;
        height: 7.5rem;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.25rem;

        p {
            font-family: 'Baloo 2', sans-serif;
            font-weight: 700;
            font-size: 1.25rem;
        }

        span {
            font-size: 0.875rem;
            color: ${(props) => props.theme['base-label']};
            text-align: center;
        }
    }

    footer {
        padding: 1.25rem;
        display: flex;
        justify-content: space-between;

        aside {
            display: flex;
            gap: 0.5rem;
            align-items: center;

            span {
                font-size: 0.875rem;
                font-family: 'Roboto', sans-serif;
            }
            p {
                font-family: 'Baloo 2', sans-serif;
                font-weight: 700;
                font-size: 1.5rem;
            }
        }
    }
`

export const ButtonAddeRemoveContentStyled = styled.div`
    display: flex;
    gap: 0.5rem;

    button {
        border: none;
        background: ${(props) => props.theme['base-button']};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        width: 4.5rem;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        font-size: 1rem;
        align-items: center;
        border-radius: 5px;
    }
    
    i {
        background: ${(props) => props.theme['purple']};
        display: flex;
        width: 2.375rem;
        height: 2.375rem;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
    }

`

export const ButtonAddeRemoveItemStyled = styled.div`


    button {
        border: none;
        background-color: transparent;
    }
`
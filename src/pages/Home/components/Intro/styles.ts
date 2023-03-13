import styled from "styled-components";

export const MainContainerStyled = styled.main`
    max-width: 70rem;
    width: 70rem;
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
        }
    }

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        margin-top: 1.875rem;
        width: 100vw;
        margin: 0 2rem;
        
        section {
            width: 100vw;

            h1 {
                font-size: 1.75rem;
                line-height: 2.5rem;
            }

            ul {
                width: 100vw;
                display: grid;
                grid-template-columns: 1fr;
            }

            p {
                margin-bottom: 1.125rem;
            }
        }
        
        section:last-child{

            img {
                display: none;
            }
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
  propsColor: keyof typeof PROPS_COLORS;
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
export const TextStyled = styled.div`

    @media (max-width: 760px) {
        width: 100vw;
        width: 2rem;
        height: 2rem;
    }

`
import styled from "styled-components";

export const CotainerSyled = styled.div`
     width: 70rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
        flex-direction: column;
        width: 100%;
    }

    header {
        h1 {
            font-size: 2rem;
            color: ${(props) => props.theme['yellow-dark']};
            font-weight: 700;
        }

        p {
            font-size: 1.25rem;
            color: ${(props) => props.theme['base-subtitle']};
        }
    }
`
export const MainCotentStyled = styled.div`
    display: flex;
    width: 70rem;
    justify-content: space-between;
    align-items: end;

    @media(max-width: 768px) {
        flex-direction: column;
        width: 100%
    }
`

export const InfosPedidoStyled = styled.div`

    position: relative;
    border: double 3px transparent;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #8047F8, #DBAC2C);
    background-origin: border-box;
    background-clip: content-box, border-box;
    height: 18.31rem;
    margin-top: 2.5rem;

    width: 50%;

    ul {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        list-style-type: none;
        padding: 3rem;
        gap: 2rem;
        
        li {
            height: 2.62rem;
            display: flex;
            gap: 0.5rem;

            span {
                font-size: 1rem;
            }
        }

    }

    @media(max-width: 768px) {
        width: 100%;
    }
`


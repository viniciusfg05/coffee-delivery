import styled from "styled-components"

export const ContainerCoffeeStyled = styled.div`
    display: flex;
    flex-direction: column;
    
    
    h1 {
        max-width: 70rem;

        display: flex;
        justify-content: flex-start;
        margin: 8.75rem auto 3.75rem auto;
        width: 100%;
        color: ${(props) => props.theme['base-subtitle']};
        font-family: 'Baloo 2', sans-serif;
    }
`

export const ListCoffeeContainerStyled = styled.div`
    max-width: 70rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

    @media (max-width: 360px) {
        grid-template-columns: 1fr;

    }

`

export const ListCoffeeContenteStyled = styled.div`
    width: 16rem;
    height: 19.375rem;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    background: ${(props) => props.theme['base-card']};

    header {
        display: flex;
        flex-direction: column;
        margin-top: -1.25rem;
        justify-content: center;
        align-items: center;

        img {
        width: 7.5rem;
        height: 7.5rem;
        }

        span {
            margin-top: 1rem;
            font-size: 0.625rem;
            padding: 0.25rem 0.5rem;
            background: ${(props) => props.theme['yellow-light']};
            color: ${(props) => props.theme['yellow-dark']};
            border-radius: 10px;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
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
        padding: 0 1.25rem;
        display: flex;
        justify-content: space-between;
        margin-top: 0.8125rem;

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
                color: ${(props) => props.theme['base-text']};

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
        cursor: pointer;

        
    }
    
    i {
        background: ${(props) => props.theme['purple-dark']};
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
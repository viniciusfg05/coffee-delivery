import styled from "styled-components"

export const ListCardStyled = styled.header`
    display: flex;
    flex-direction: column;
    width: 10.68rem;
`
export const ListCardContainerStyled = styled.div`
    display: flex;
    flex-direction: column;

    a button {
        width: 100%;
        background: ${(props) => props.theme['yellow']};
        margin-top: 1.5rem;
        border-radius: 0.3rem;
        font-size: 0.875rem;
        color: ${(props) => props.theme['white']};
        font-weight: 700;
        height: 2.875rem;

        :disabled {
            background: ${(props) => props.theme['yellow-dark']};
            cursor: not-allowed;

        }
    }

    h1 {
        font-size: 5rem;
        width: 5rem;
    }

    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;

    @media(max-width: 768px) {
        padding: 1rem;
    }

`

export const ListCardContentStyled = styled.div`
    display: flex;
    width: 23rem;


    img {
        width: 4rem;
        margin-right: 1.25rem;
    }

    > span {
        font-size: 1rem;
        font-weight: 700;
        margin-left: auto;
    }

    p {
        font-size: 1rem;
    }
    
    @media(max-width: 768px) {
        > span {
        margin-left: 0.5rem;
        font-size: 1.125rem;
    }
    }
`

export const DivideStyled = styled.div`
    width: 100%;
    border-bottom: 1px ${(props) => props.theme['base-button']} solid;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
`

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: auto;

    p {
        font-size: 0.875rem;
        display: flex;
        
    }

    span {
        font-size: 1rem;
    }
`

export const TotalItemStyled = styled.div`
    display: flex;
    justify-content: space-between;

`

export const EntregaStyled = styled.div`
    display: flex;
    justify-content: space-between;

`

export const TotalGeralStyled = styled.div`
    display: flex;
    justify-content: space-between;
    
    p, span {
        font-size: 1.5rem;
        font-weight: 700;
    } 
`

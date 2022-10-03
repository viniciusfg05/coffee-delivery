import styled from "styled-components";

export const MainContainerStyled = styled.main`
    max-width: 70rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    

`

export const ButtonsActionsStyled = styled.div`
    display: flex;
    justify-content: space-between;

    button {
    border: none;
    background: ${(props) => props.theme['base-button']};
    font-family: 'Roboto', sans-serif;
    height: 2rem;
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

`
export const NoItemCardStyled = styled.p`
    margin: 0 auto;
    /* width: 15rem; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    height: 100%;
    color: ${(props) => props.theme['base-text']};

    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    width: 100%;

`



import styled from 'styled-components'

export const HeaderContainerStyled = styled.header`
    width: 90rem;
    height: 6.50rem;
    margin: 0 auto;
    

    nav {
        width: 70rem;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
`

export const ToolbarContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    section:first-child {
        background: ${(props) => props.theme['purple-light']};
        width: 8.937rem;
        height: 2.375rem;
        font-size: 0.875rem;
        align-items: center;
        display: flex;
        padding: 0.5rem;
        gap: 4px;
        color: ${(props) => props.theme['purple-dark']};
        border-radius: 5px;
    }
    
    button {
        background: ${(props) => props.theme['yellow-light']};
        width: 2.375rem;
        height: 2.375rem;
        align-items: center;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        p {
            background: ${(props) => props.theme['yellow-dark']};
            color: ${(props) => props.theme['white']};
            width: 1.25rem;
            height: 1.25rem;
            font-size: 0.75rem;
            display: flex;
            justify-content: center;
            border-radius: 50%;
            position: absolute;
            align-items: center;
            text-align: center;
            font-family: 'Roboto' sans-serif;
            font-weight: 700;
            margin-top: -2.2rem;
            margin-right: -2rem;
        }
    }
`

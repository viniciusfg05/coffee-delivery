import styled from 'styled-components'

export const HeaderContainerStyled = styled.header`
    width: 100vw;
    height: 6.50rem;
    margin: 0 auto;
    

    nav {
        max-width: 70rem;
        min-width: 20rem;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
        height: 100%;

        img {
            max-width: 5.3125rem;
            min-width: 4rem;
            margin-left: 1rem;
        }
    }
    
    @media(max-width: 768px) {
        /* padding: 0 0.5rem; */

        nav {
        }
    }
`

export const ToolbarContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-right: 1rem;

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

    @media(max-width: 768px) {
        padding: 0;
        
        section:first-child {
            font-size: 0.75rem;
            width: 5rem;
            padding: 0.2rem;
            height: 1.8rem;

            svg {
                width: 1rem;
            }
        }

        button {
            font-size: 0.75rem;
            width: 2rem;
            padding: 0.2rem;
            height: 1.8rem;
            width: 1.8rem;


            svg {
                width: 1rem;
            }
        }
    }
`

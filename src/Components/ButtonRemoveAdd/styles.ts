import styled from "styled-components";

export const ButtonContainerStyled = styled.div`
    
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

    
    > i a {
        background: ${(props) => props.theme['purple-dark']};
        display: flex;
        width: 2.375rem;
        height: 2.375rem;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
    }

    span {
        background: ${(props) => props.theme['base-button']};
        display: flex;
        width: 5.867rem; 
        height: 2rem;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-style: normal;
        cursor: pointer;
        transition: 0.3s;

        i {
            margin-right: 0.5rem;
            align-items: center;
            display: flex;
            justify-content: center;
        }

        :hover {
            background: ${(props) => props.theme['base-hover']};
        }
    }

`
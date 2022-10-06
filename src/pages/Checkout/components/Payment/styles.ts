import styled from "styled-components";

export const PaymentCointainerStyled = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme['base-card']};
    height: 13.125rem;
    padding: 2.5rem;

    > section {
        display: flex;
        justify-content: space-between;

        button {


            p {
                font-size: 0.7rem;
            }

            /* :hover {
                background-color: ${(props) => props.theme['base-hover']};
            } */
        }

    }
`

export const HeaderFormStyled = styled.div`
    font-size: 0.875rem;
    display: flex;
    color: ${(props) => props.theme['base-text']};

    margin-bottom: 2rem;
    
    
    section {
        margin-left: 0.70rem;
        align-items: center;


        button [aria-checked="true"] {
            background: ${(props) => props.theme['purple-light']};

        }

        p {
            font-size: 1rem;
            color: ${(props) => props.theme['base-subtitle']};
        }
    }
`

const PROPS_COLORS = {
    selectButton: 'purple-light',
    noSelectButton: 'base-button'
} as const
  
interface PropsColor {
  propsColor?: keyof typeof PROPS_COLORS;
}

// export const ButtonPaymentStyled = styled.button<PropsColor>`
//     width: 12rem;
//     height: 3.187rem;
//     display: flex;
//     align-items: center;
//     padding: 1rem;
//     gap: 0.7rem;
//     justify-content: center;
//     border: none;
//     font-size: 1rem;

//     label {
//         display: flex;
//         gap: 0.7rem;
//         align-items: center;
//     }
// `

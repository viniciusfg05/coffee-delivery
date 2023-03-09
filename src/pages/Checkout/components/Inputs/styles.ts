import styled from "styled-components"

export const FormContainerStyled = styled.form`
    background-color: ${(props) => props.theme['base-card']};   
    width: 40rem;
    padding: 2.5rem;
    border-radius: 10px;
    height: 24.5rem;
    box-sizing: border-box;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input {
            border: 1px solid ${(props) => props.theme['base-button']};
            background-color: ${(props) => props.theme['base-input']};
            /* height: 2.625rem; */
            border-radius: 5px;
            font-size: 0.875rem;
            padding: 0.75rem;



            ::placeholder {

            }
        }

        #cep {
            width: 12.5rem;
             
        }

        #rua {
            width: 35rem;
        }

        #numeroEComplemento {
            display: flex;
            justify-content: space-between;

            #numero {
                width: 12.5rem;
            }

            #complemento {
                width: 21.75rem;
            }
        }

        #bairoCidadeUf {
            width: 100%;
            display: flex;
            justify-content: space-between;

            #bairro {
                width: 12.5rem;
            }

            #cidade {
                width: 17.25rem;
            }

            #uf {
                width: 2.25rem;
                padding: 0.5rem;
            }
        }
`
export const HeaderFormStyled = styled.header`
    font-size: 0.875rem;
    display: flex;
    color: ${(props) => props.theme['base-text']};

    margin-bottom: 2rem;
    
    section {
        margin-left: 0.70rem;
    }
`
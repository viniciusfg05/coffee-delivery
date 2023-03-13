import styled from "styled-components";

export const FormContainerStyled = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  width: 40rem;
  min-width: 20rem;
  padding: 2.5rem;
  border-radius: 10px;
  height: auto;
  box-sizing: border-box;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
  }
  input {
    border: 1px solid ${(props) => props.theme["base-button"]};
    background-color: ${(props) => props.theme["base-input"]};
    /* height: 2.625rem; */
    border-radius: 5px;
    font-size: 0.875rem;
    padding: 0.75rem;
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

  @media(max-width: 768px) {
        width: 100%;


        #numeroEComplemento {
            width: 100%;
            display: grid ;
            grid-template-columns: 20% 70%;
            gap: 1rem;

            #complemento {
                width: 100%;
            }
        }

        #bairoCidadeUf {
            width: 100%;
            display: grid ;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;

            #bairro {
                width: 100%;
            }

            #cidade {
                width: 100%;
            }
        }
    }
`;
export const HeaderFormStyled = styled.header`
  font-size: 1rem;
  display: flex;
  color: ${(props) => props.theme["base-text"]};

  margin-bottom: 2rem;

  section {
    margin-left: 0.7rem;
  }
`;

export const ButtonStyled = styled.button`
  width: 8rem;
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["base-text"]};
  font-size: 1.125rem;
  padding: 0.5rem;
  border-radius: 8px;
  margin-left: auto;
  margin-top: 1rem;
`;

export const ConteinerError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormError = styled.span`
  color: red;
  font-size: 0.75rem;
`;

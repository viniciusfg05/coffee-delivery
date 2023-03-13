import styled from 'styled-components'
import background from '../../assets/background.svg'

export const BackgroudImageStyled = styled.div`
    width: 100vw;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 6.50rem;
    bottom: 0;
    margin: 0 auto;
    z-index: -999;
    border-radius: 16px;
    opacity: 0.4;

    @media (max-width: 768px) {
        width: 100vw;
        max-width: 270px;
        display: none;
    }   
`


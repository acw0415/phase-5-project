import styled from 'styled-components'
import theme from "./theme"

const ButtonStyle = styled.div`

background-color: ${theme.buttonColor};
padding: 5px 10px;
border-radius: 5px;
margin: 5px;

&:hover, &:active {
    background-color: ${theme.buttonHover};
    cursor: pointer;
}
   
`

export default ButtonStyle
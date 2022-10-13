import styled from 'styled-components'
import theme from "./theme"

const FavoritesStyle = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-content: stretch;
align-items: center;
width: 1000px;
box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
padding-top: 30px;
padding-bottom: 20px;
border-radius: 8px;
background-color: ${theme.linkHover};
   
`

export default FavoritesStyle
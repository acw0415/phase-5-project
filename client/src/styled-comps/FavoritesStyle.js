import styled from 'styled-components'
import theme from "./theme"

const FavoritesStyle = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: stretch;
align-items: center;
width: 300px;
box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
padding-top: 30px;
padding-bottom: 20px;
border-radius: 8px;
background-color: ${theme.linkHover};
   
`

export default FavoritesStyle
import styled from 'styled-components'
import theme from "./theme"

export const TileStyle = styled.div`
    text-align: center;
    
    align-items: center;
    justify-content: center;
    background: ${theme.tileBackground};
    border-radius: 20px;
    padding: 20px 10px 20px;
    margin: 10px;
    max-width: 250px;
    flex: 1;
    height: auto;
`
export const TileContainer = styled.div`
display: flex;
flex-direction: row;
max-width: 100vw;
flex-wrap: wrap;
justify-content: center;
`

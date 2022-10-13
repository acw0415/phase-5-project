import styled from 'styled-components'
import theme from "./theme"

export const TileStyle = styled.div`
    text-align: center;
    
    align-items: center;
    justify-content: space-between;
    background: ${theme.tileBackground};
    border-radius: 20px;
    padding: 20px 10px 20px;
    margin: 10px;
    max-width: 250px;
    flex: 1;
    height: auto;
    min-width: 200px;
    display: flex;
    flex-direction: column;
`
export const TileContainer = styled.div`
display: flex;
flex-direction: row;
max-width: 100vw;
flex-wrap: wrap;
justify-content: center;
max-width: 1000px;
margin: auto;
`

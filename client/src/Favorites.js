import React, { useState } from "react";
import FavoritesStyle from "./styled-comps/FavoritesStyle";
import { TileStyle, TileContainer } from "./styled-comps/TileStyle";
import { H1, H2, H3 } from "./styled-comps/Typography"
import styled from "styled-components";
import theme from "./styled-comps/theme";

const FavoritesCenter = styled.div`

display: flex;
justify-content: space-evenly;
   
    
`
const FavoritesLi = styled.li`
background-color: ${theme.secondaryButton};
border-radius: 5px;
padding: 5px;
margin: 5px;
color: ${theme.darkFont};
`

const NotesInput = styled.input`
display: flex;
`

function Favorites({ favData, setFavData }) {

    // fetch(`/favorites`)
    //   .then(r => r.json())
    //   .then(r => setData(r))
    //   .catch(err => console.error(err))
    

    function deleteItem(id) {
        console.log(favData)
        const newList = favData.filter((item) => item.id !== id);
    
        setFavData(newList)
        console.log(newList)
    }




    return (
        <FavoritesCenter>
            <FavoritesStyle>
                <H1>Favorites</H1>
                <br />
                    <ul>
                        {favData.map(dat => {
                            return (
                                <FavoritesLi key={dat.id}>
                                    <NotesInput placeholder="Notes:"></NotesInput>
                                    {dat.name}
                                    <br/>
                                    Current Lowest Price: {dat.price}
                                    <br/>
                                    <button onClick={() => {deleteItem(dat.id)}}>Delete</button>
                                </FavoritesLi>
                            )
                        })}
                    </ul>
            </FavoritesStyle>
        </FavoritesCenter>
    )
}

export default Favorites
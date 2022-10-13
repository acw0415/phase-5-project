import React, { useState, useEffect } from "react";
import FavoritesStyle from "./styled-comps/FavoritesStyle";
import { TileStyle, TileContainer } from "./styled-comps/TileStyle";
import { H1, P, H3 } from "./styled-comps/Typography"
import styled from "styled-components";
import theme from "./styled-comps/theme";
import ButtonStyle from "./styled-comps/ButtonStyle";

const FavoritesCenter = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: space-between;
   
    
`
const FavoritesLi = styled.li`
background-color: ${theme.secondaryButton};
border-radius: 5px;
padding: 5px;
margin: 5px;
color: ${theme.darkFont};
list-style: none;
width: 190px;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`


function Favorites({ currentUser }) {

    const [favorites, setFavorites] = useState([])




    useEffect(() => {
        fetch(`/favorites/${currentUser.id}`)
            .then(r => r.json())
            .then(r => setFavorites(r))
            .catch(err => console.error(err))
    }, [])




    const deleteItem = (id) => {
        fetch('/favorites', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id })
        })
        setFavorites(prev => prev.filter(o => o.id !== id))
    }



    return (

        <FavoritesStyle>
            <H1>Favorites</H1>
            <FavoritesCenter>
                    {favorites.map((dat, index) => {

                        return (
                            <FavoritesLi key={index}>
                              
                                <H1>{dat.name}</H1>
              
                                <P>Current Lowest Price: {dat.currentLowestPrice}</P>
          
                                <ButtonStyle onClick={() => { deleteItem(dat.id) }}><H3>Delete</H3></ButtonStyle>
                            </FavoritesLi>
                        )
                    })}
            </FavoritesCenter>
        </FavoritesStyle>

    )
}

export default Favorites
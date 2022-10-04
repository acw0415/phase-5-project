import React, {useState} from "react";
import FavoritesStyle from "./styled-comps/FavoritesStyle";
import TileStyle from "./styled-comps/TileStyle";
import {H1} from "./styled-comps/Typography"
import styled from "styled-components";

const FavoritesCenter = styled.div`

display: flex;
justify-content: space-evenly;
   
    
`

function Favorites({favData}){



    return(
        <FavoritesCenter>
            <FavoritesStyle>
                <H1>Favorites</H1>
                <br/>
                <li>
                    {/* <TileContainer>
                    {favData.map((dat) => (

                        <TileStyle key={dat.id} onClick={() => console.log("test")}>
                            <H2> {dat.name} </H2>
                            <P>{dat.id} </P>
                            <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" alt="placeholder" width="200" height="200" ></img>
                            <H3> Lowest Price: {dat.currentLowestPrice} </H3>
                        </TileStyle>
                    ))}
                    </TileContainer> */}
                    Content
                </li>
            </FavoritesStyle>
        </FavoritesCenter>
    )
}

export default Favorites
import React, {useState} from "react";
import FavoritesStyle from "./styled-comps/FavoritesStyle";
import TileStyle from "./styled-comps/TileStyle";

function Favorites(){

    // const [faves, setFaves] = useState({
    //     "favoriteGameIds": [
    //        2, 4
    //     ]
    //   })



    return(
        <FavoritesStyle>
            Favorites
            <br/>
            <li>content</li>
        </FavoritesStyle>
    )
}

export default Favorites
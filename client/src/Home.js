import React from "react";
import BackgroundStyle from "./styled-comps/BackgroundStyle";
import { TileStyle, TileContainer } from "./styled-comps/TileStyle";
import { H1, H2, H3, P } from "./styled-comps/Typography"




function Home({ data }) {




    return (

        <div>
            <H1>💰Price💲Check💰</H1>
            {data.length === 0 ? <H1>Loading</H1> :
                <TileContainer>
                    {data.map((dat) => (

                        <TileStyle key={dat.id} onClick={() => console.log("test")}>
                            <H2> {dat.name} </H2>
                            <P>{dat.id} </P>
                            <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" alt="placeholder" width="200" height="200" ></img>
                            <H3> Lowest Price: {dat.currentLowestPrice} </H3>
                        </TileStyle>
                    ))}
                </TileContainer>}
        </div>


    )
}

export default Home;
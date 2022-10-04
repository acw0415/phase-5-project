import React, { useState } from "react";
import BackgroundStyle from "./styled-comps/BackgroundStyle";
import { TileStyle, TileContainer } from "./styled-comps/TileStyle";
import { H1, H2, H3, P } from "./styled-comps/Typography"
import { ThreeCircles } from  'react-loader-spinner'
import styled from "styled-components";


<ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>


  const HomeCenter = styled.div`

display: flex;
justify-content: space-evenly;
   
    
`

function Home({ data = [], setFavData }) {



  

    return (

        <div>
            <HomeCenter><H1>💰Price💲Check💰</H1></HomeCenter>
            <br/>
            <br/>
            <br/>
            {data.length === 0 ? <HomeCenter><ThreeCircles/></HomeCenter> :
                <TileContainer>
                    {data.map((dat) => (

                        <TileStyle key={dat.id} /*onClick={console.log([dat.name, dat.currentLowestPrice])}*/>
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
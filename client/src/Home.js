import React, { useState } from "react";
import BackgroundStyle from "./styled-comps/BackgroundStyle";
import { TileStyle, TileContainer } from "./styled-comps/TileStyle";
import { H1, H2, H3, P } from "./styled-comps/Typography"
import { ThreeCircles } from 'react-loader-spinner'
import styled from "styled-components";
import ButtonStyle from "./styled-comps/ButtonStyle";


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

function Home({ data = []}) {
    const handleFav = ( name, currentLowestPrice) => {       

        fetch("/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, currentLowestPrice}),
        }).then((res) => {res.json()})
    }




    return (

        <div>
            <HomeCenter><H1>💰Price💲Check💰</H1></HomeCenter>
            <br />
            <br />
            <br />
            {data.length === 0 ? <HomeCenter><ThreeCircles /></HomeCenter> :
                <TileContainer>
                    {data.map((dat, index) => (

                        <TileStyle key={index} >
                            {console.log(index)}
                            <H2> {dat.name} </H2>
                            <P>{dat.id} </P>
                            <H3> Lowest Price: {dat.currentLowestPrice} </H3>
                            <ButtonStyle onClick={() => {handleFav( dat.name, dat.currentLowestPrice)}}><H3>Add to Favorites</H3></ButtonStyle>
                        </TileStyle>
                    ))}
                </TileContainer>}
        </div>


    )
}

export default Home;
import React, { useState, useEffect } from "react";
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

function Favorites({  currentUser }) {

    const [note, setNote] = useState('')
    const [backFav, setBackFav] = useState([])




    useEffect(() => {
        fetch(`/favorites/${currentUser.id}`)
            .then(r => r.json())
            .then(r => setBackFav(r))
            .catch(err => console.error(err))
    }, [])




    const deleteItem = (id) => {
        // console.log(favData, "index id")
        // const newList = favData.filter((item) => item.id !== id);
        // setFavData(newList)
        fetch('/favorites', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(id)
        })
            .then(res => { res.json() })
    }



    const handleNote = e => {
        setNote(e.target.value)
        //             useEffect(() => {  
        //         fetch("/favorites", {
        //         method: "PATCH",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(note),
        //     })
        //     .then((res) => {res.json()})
        // },[])
    }


    return (
        <FavoritesCenter>
            <FavoritesStyle>
                <H1>Favorites</H1>
                <br />
                <ul>
                    {backFav.map((dat, index) => {
                        return (
                            <FavoritesLi key={index}>
                                {/* <form key={index}>
                                    <NotesInput type="text" id="note" name="note" placeholder="Notes:" onChange={handleNote} ></NotesInput><button>Add Note</button>

                                </form>

                                {note} */}
                                <br />
                                {dat.name}
                                <br />
                                Current Lowest Price: {dat.currentLowestPrice}
                                <br />
                                <button onClick={() => { deleteItem(index) }}>Delete</button>
                            </FavoritesLi>
                        )
                    })}
                </ul>
            </FavoritesStyle>
        </FavoritesCenter>
    )
}

export default Favorites
import React, { useState, useEffect } from 'react';
import Home from './Home';
import NavBar from './Navbar';
import Favorites from './Favorites';
import About from './About';
import Profile from './Profile';
import AppBackgroundStyle from './styled-comps/AppBackgroudStyle';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [data, setData] = useState({
    "amount": 10,
    "games": [],
    "presentedGames": [],
    "totalAmountFound": 48
  })



  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '32031538e6mshc7db306a60d2ca8p115933jsnb5ab8b1cd875',
  //       'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
  //     }
  //   };

  function searchGames(searchString) {

    fetch(`/games/${searchString}`)
      .then(r => r.json())
      .then(r => setData(r))
      .catch(err => console.error(err));

  }
  useEffect(() => { searchGames("nick") }, []);

  return (
    // <AppBackgroundStyle>

    //   <NavBar/>

    // <Favorites/>


    // </AppBackgroundStyle>
    <AppBackgroundStyle>
      <Router>
        <NavBar searchGames={searchGames} />
        <Routes>
          {/* <Route path="/game">
            <Game />
          </Route> */}
          <Route path="/profile" element={<Profile />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<Home data={data.games} />}>
          </Route>
        </Routes>
      </Router>
    </AppBackgroundStyle>
  );
}

export default App;

import React,{ useState, useEffect } from 'react';
import Home from './Home';
import NavBar from './Navbar';
import Favorites from './Favorites';
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
    "games": [
      {
        "availability": "OnlineOnly",
        "currency": "USD",
        "currentLowestPrice": 18.09,
        "id": "minecraft",
        "name": "Minecraft",
        "releaseDate": "2009-05-17",
        "stores": [
          {
            "price": 18.09,
            "seller": "CDKeys.com",
            "url": "https://www.cdkeys.com/minecraft-pc-cd-key"
          },
          {
            "price": 18.78,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-java-edition"
          },
          {
            "price": 19.37,
            "seller": "Punktid",
            "url": "https://punktid.com/minecraft-gift-code"
          },
          {
            "price": 19.77,
            "seller": "Eneba",
            "url": "https://www.eneba.com/other-minecraft-java-edition-official-website-key-united-states-2"
          },
          {
            "price": 19.9,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/5329/minecraft-global-cd-key"
          },
          {
            "price": 19.9,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/5329/minecraft-global-cd-key"
          },
          {
            "price": 20.05,
            "seller": "Eneba",
            "url": "https://www.eneba.com/other-minecraft-official-website-key-global"
          },
          {
            "price": 20.32,
            "seller": "G2A",
            "url": "https://www.g2a.com/minecraft-java-edition-minecraft-key-global-i10000068122012"
          },
          {
            "price": 20.34,
            "seller": "Yuplay",
            "url": "https://www.yuplay.com/product/minecraft/"
          },
          {
            "price": 20.44,
            "seller": "MMOGA",
            "url": "https://www.mmoga.com/Game-Keys/Minecraft.html"
          },
          {
            "price": 21.64,
            "seller": "K4G.com",
            "url": "https://k4g.com/product/minecraft-minecraft-global-cd-key-269E0B00"
          },
          {
            "price": 22.43,
            "seller": "Wyrel.com",
            "url": "https://wyrel.com/en/buy-cheap-minecraft-pc-56042"
          },
          {
            "price": 22.52,
            "seller": "HRK Game",
            "url": "https://www.hrkgame.com/en/randomkeyshop/set_currency/"
          },
          {
            "price": 23.21,
            "seller": "Wyrel.com",
            "url": "https://wyrel.com/en/buy-cheap-minecraft-pc-56042"
          },
          {
            "price": 25.4,
            "seller": "Eneba",
            "url": "https://www.eneba.com/other-minecraft-java-bedrock-edition-official-website-key-global"
          },
          {
            "price": 26.81,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-java-bedrock-edition-xbox-pc-global-xboxwindows-en-bedrock"
          },
          {
            "price": 26.95,
            "seller": "Minecraft.net",
            "url": "https://www.minecraft.net/store/minecraft-java-edition"
          },
          {
            "price": 27.47,
            "seller": "Eneba",
            "url": "https://www.eneba.com/other-minecraft-java-bedrock-edition-official-website-key-united-states"
          },
          {
            "price": 29.99,
            "seller": "Newegg",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 29.99,
            "seller": "Microsoft Store",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 29.99,
            "seller": "Amazon.com",
            "url": "https://www.amazon.com/gp/product/B09ZY21PM4"
          },
          {
            "price": 30.09,
            "seller": "Wyrel.com",
            "url": "https://wyrel.com/en/buy-cheap-minecraft-pc-56042"
          },
          {
            "price": 31.1,
            "seller": "G2A",
            "url": "https://www.g2a.com/minecraft-java-bedrock-edition-pc-microsoft-store-key-global-i10000326476001"
          }
        ],
        "type": "game"
      },
      {
        "availability": "OnlineOnly",
        "currency": "USD",
        "currentLowestPrice": 15.01,
        "id": "minecraft-dungeons",
        "name": "Minecraft Dungeons",
        "releaseDate": "2021-09-22",
        "stores": [
          {
            "price": 15.01,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-dungeons-pc"
          },
          {
            "price": 15.75,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/73944/minecraft-dungeons-windows-10-cd-key"
          },
          {
            "price": 15.75,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/73944/minecraft-dungeons-windows-10-cd-key"
          },
          {
            "price": 16.13,
            "seller": "Eneba",
            "url": "https://www.eneba.com/other-minecraft-dungeons-windows-10-store-key-global"
          },
          {
            "price": 16.13,
            "seller": "Eneba",
            "url": "https://www.eneba.com/other-minecraft-dungeons-windows-10-store-key-united-states"
          },
          {
            "price": 16.84,
            "seller": "G2A",
            "url": "https://www.g2a.com/minecraft-dungeons-pc-microsoft-key-global-i10000190194008"
          },
          {
            "price": 18.81,
            "seller": "HRK Game",
            "url": "https://www.hrkgame.com/en/randomkeyshop/set_currency/"
          },
          {
            "price": 19.99,
            "seller": "Amazon.com",
            "url": "https://www.amazon.com/gp/product/B08893GH86"
          },
          {
            "price": 19.99,
            "seller": "Microsoft Store",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 19.99,
            "seller": "Steam",
            "url": "https://store.steampowered.com/app/1672970/"
          },
          {
            "price": 20.79,
            "seller": "CDKeys.com",
            "url": "https://www.cdkeys.com/minecraft-dungeons-windows-10-pc"
          },
          {
            "price": 22.45,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/96978/minecraft-dungeons-steam-altergift"
          },
          {
            "price": 22.45,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/96978/minecraft-dungeons-steam-altergift"
          },
          {
            "price": 22.56,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-dungeons-steam-gift"
          },
          {
            "price": 23.32,
            "seller": "G2A",
            "url": "https://www.g2a.com/minecraft-dungeons-pc-steam-gift-global-i10000190194021"
          },
          {
            "price": 23.35,
            "seller": "Wyrel.com",
            "url": "https://wyrel.com/en/buy-cheap-minecraft-dungeons-pc-39120"
          },
          {
            "price": 23.91,
            "seller": "HRK Game",
            "url": "https://www.hrkgame.com/en/randomkeyshop/set_currency/"
          },
          {
            "price": 29.68,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/123306/minecraft-dungeons-ultimate-edition-windows-10-cd-key"
          },
          {
            "price": 29.68,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/123306/minecraft-dungeons-ultimate-edition-windows-10-cd-key"
          },
          {
            "price": 31,
            "seller": "Instant Gaming",
            "url": "https://www.instant-gaming.com/en/9398-/"
          },
          {
            "price": 35.83,
            "seller": "Eneba",
            "url": "https://www.eneba.com/windows-store-minecraft-dungeons-ultimate-edition-windows-10-store-key-global"
          },
          {
            "price": 39.99,
            "seller": "Newegg",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 39.99,
            "seller": "Steam",
            "url": "https://store.steampowered.com/sub/620265/"
          },
          {
            "price": 39.99,
            "seller": "Microsoft Store",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 42.78,
            "seller": "Wyrel.com",
            "url": "https://wyrel.com/en/buy-cheap-minecraft-dungeons-pc-39120"
          },
          {
            "price": 43.9,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/96982/minecraft-dungeons-ultimate-edition-steam-altergift"
          },
          {
            "price": 43.9,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/96982/minecraft-dungeons-ultimate-edition-steam-altergift"
          },
          {
            "price": 44.56,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-dungeons-ultimate-edition-steam-gift"
          },
          {
            "price": 46.46,
            "seller": "G2A",
            "url": "https://www.g2a.com/minecraft-dungeons-ultimate-edition-pc-steam-gift-global-i10000190194027"
          },
          {
            "price": 2031.71,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/73945/minecraft-dungeons-hero-edition-windows-10-cd-key"
          },
          {
            "price": 2031.71,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/73945/minecraft-dungeons-hero-edition-windows-10-cd-key"
          }
        ],
        "type": "game"
      },
      {
        "availability": "OnlineOnly",
        "currency": "USD",
        "currentLowestPrice": 19.12,
        "id": "minecraft-windows-10-edition",
        "name": "Minecraft - Windows 10 Edition",
        "releaseDate": "2015-07-14",
        "stores": [
          {
            "price": 19.12,
            "seller": "Eneba",
            "url": "https://www.eneba.com/windows-store-minecraft-windows-10-edition-windows-10-store-key-united-states"
          },
          {
            "price": 20.22,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-starter-collection-pc-xbox-one"
          },
          {
            "price": 22.6,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-windows-10-edition"
          },
          {
            "price": 22.9,
            "seller": "Eneba",
            "url": "https://www.eneba.com/xbox-minecraft-windows-10-edition-xbox-live-global-key"
          },
          {
            "price": 25.4,
            "seller": "Eneba",
            "url": "https://www.eneba.com/other-minecraft-java-bedrock-edition-official-website-key-global"
          },
          {
            "price": 26.81,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-java-bedrock-edition-xbox-pc-global-xboxwindows-en-bedrock"
          },
          {
            "price": 27.47,
            "seller": "Eneba",
            "url": "https://www.eneba.com/other-minecraft-java-bedrock-edition-official-website-key-united-states"
          },
          {
            "price": 27.6,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/33207/minecraft-windows-10-edition-cd-key"
          },
          {
            "price": 27.6,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/33207/minecraft-windows-10-edition-cd-key"
          },
          {
            "price": 29.83,
            "seller": "Eneba",
            "url": "https://www.eneba.com/windows-store-minecraft-starter-collection-windows-10-store-key-global"
          },
          {
            "price": 29.99,
            "seller": "Green Man Gaming",
            "url": "https://greenmangaming.sjv.io/c/1406679/1281797/15105"
          },
          {
            "price": 29.99,
            "seller": "Newegg",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 29.99,
            "seller": "Microsoft Store",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 29.99,
            "seller": "Amazon.com",
            "url": "https://www.amazon.com/gp/product/B09ZY21PM4"
          },
          {
            "price": 30.78,
            "seller": "Wyrel.com",
            "url": "https://wyrel.com/en/buy-cheap-minecraft-pc-56042"
          },
          {
            "price": 31.1,
            "seller": "G2A",
            "url": "https://www.g2a.com/minecraft-java-bedrock-edition-pc-microsoft-store-key-global-i10000326476001"
          }
        ],
        "type": "game"
      },
      {
        "availability": "OnlineOnly",
        "currency": "USD",
        "currentLowestPrice": 25.4,
        "id": "minecraft-java-and-bedrock-edition",
        "name": "Minecraft Java & Bedrock Edition",
        "releaseDate": "2022-06-07",
        "stores": [
          {
            "price": 25.4,
            "seller": "Eneba",
            "url": "https://www.eneba.com/other-minecraft-java-bedrock-edition-official-website-key-global"
          },
          {
            "price": 26.81,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-java-bedrock-edition-xbox-pc-global-xboxwindows-en-bedrock"
          },
          {
            "price": 27.47,
            "seller": "Eneba",
            "url": "https://www.eneba.com/other-minecraft-java-bedrock-edition-official-website-key-united-states"
          },
          {
            "price": 29.99,
            "seller": "Newegg",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 29.99,
            "seller": "Microsoft Store",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 29.99,
            "seller": "Amazon.com",
            "url": "https://www.amazon.com/gp/product/B09ZY21PM4"
          },
          {
            "price": 31.1,
            "seller": "G2A",
            "url": "https://www.g2a.com/minecraft-java-bedrock-edition-pc-microsoft-store-key-global-i10000326476001"
          }
        ],
        "type": "pack"
      },
      {
        "availability": "OnlineOnly",
        "currency": "USD",
        "currentLowestPrice": 29.68,
        "id": "minecraft-dungeons-ultimate-edition",
        "name": "Minecraft Dungeons Ultimate Edition",
        "releaseDate": "2021-09-22",
        "stores": [
          {
            "price": 29.68,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/123306/minecraft-dungeons-ultimate-edition-windows-10-cd-key"
          },
          {
            "price": 29.68,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/123306/minecraft-dungeons-ultimate-edition-windows-10-cd-key"
          },
          {
            "price": 31,
            "seller": "Instant Gaming",
            "url": "https://www.instant-gaming.com/en/9398-/"
          },
          {
            "price": 35.83,
            "seller": "Eneba",
            "url": "https://www.eneba.com/windows-store-minecraft-dungeons-ultimate-edition-windows-10-store-key-global"
          },
          {
            "price": 39.99,
            "seller": "Newegg",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 39.99,
            "seller": "Steam",
            "url": "https://store.steampowered.com/sub/620265/"
          },
          {
            "price": 39.99,
            "seller": "Microsoft Store",
            "url": "https://click.linksynergy.com/deeplink"
          },
          {
            "price": 42.78,
            "seller": "Wyrel.com",
            "url": "https://wyrel.com/en/buy-cheap-minecraft-dungeons-pc-39120"
          },
          {
            "price": 43.9,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/96982/minecraft-dungeons-ultimate-edition-steam-altergift"
          },
          {
            "price": 43.9,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/96982/minecraft-dungeons-ultimate-edition-steam-altergift"
          },
          {
            "price": 44.56,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-dungeons-ultimate-edition-steam-gift"
          },
          {
            "price": 46.46,
            "seller": "G2A",
            "url": "https://www.g2a.com/minecraft-dungeons-ultimate-edition-pc-steam-gift-global-i10000190194027"
          }
        ],
        "type": "pack"
      },
      {
        "availability": "OnlineOnly",
        "currency": "USD",
        "currentLowestPrice": 29.83,
        "id": "minecraft-for-windows-10-starter-collection",
        "name": "Minecraft - Windows 10 Starter Collection",
        "releaseDate": "2018-10-09",
        "stores": [
          {
            "price": 29.83,
            "seller": "Eneba",
            "url": "https://www.eneba.com/windows-store-minecraft-starter-collection-windows-10-store-key-global"
          },
          {
            "price": 29.99,
            "seller": "Green Man Gaming",
            "url": "https://greenmangaming.sjv.io/c/1406679/1281797/15105"
          }
        ],
        "type": "pack"
      },
      {
        "id": "minecraft-legends",
        "stores": [],
        "type": "game"
      },
      {
        "availability": "OnlineOnly",
        "currency": "USD",
        "currentLowestPrice": 14.99,
        "id": "minecraft-story-mode-adventure-pass",
        "name": "Minecraft: Story Mode - Adventure Pass",
        "releaseDate": "2016-06-07",
        "stores": [
          {
            "price": 14.99,
            "seller": "Amazon.com",
            "url": "https://www.amazon.com/gp/product/B0713TWG14"
          },
          {
            "price": 23.03,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/27760/minecraft-story-mode-adventure-pass-dlc-steam-cd-key"
          },
          {
            "price": 23.03,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/27760/minecraft-story-mode-adventure-pass-dlc-steam-cd-key"
          },
          {
            "price": 25,
            "seller": "Eneba",
            "url": "https://www.eneba.com/steam-minecraft-story-mode-adventure-pass-dlc-steam-key-global"
          },
          {
            "price": 25.99,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-story-mode-adventure-pass"
          },
          {
            "price": 28.96,
            "seller": "HRK Game",
            "url": "https://www.hrkgame.com/en/randomkeyshop/set_currency/"
          },
          {
            "price": 30.69,
            "seller": "CDKeys.com",
            "url": "https://www.cdkeys.com/minecraft-story-mode-adventure-pass-pc-dlc-steam"
          },
          {
            "price": 32.15,
            "seller": "G2A",
            "url": "https://www.g2a.com/minecraft-story-mode-adventure-pass-steam-key-global-i10000017647002"
          }
        ],
        "type": "dlc"
      },
      {
        "id": "minecraft-mod-maker",
        "stores": [],
        "type": "application"
      },
      {
        "availability": "OnlineOnly",
        "currency": "USD",
        "currentLowestPrice": 24.99,
        "id": "minecraft-story-mode-a-telltale-games-series",
        "name": "Minecraft: Story Mode - A Telltale Games Series",
        "releaseDate": "2015-10-13",
        "stores": [
          {
            "price": 24.99,
            "seller": "Amazon.com",
            "url": "https://www.amazon.com/gp/product/B0170TUPVC"
          },
          {
            "price": 24.99,
            "seller": "Amazon.com",
            "url": "https://www.amazon.com/gp/product/B07DVTSDQ7"
          },
          {
            "price": 26.19,
            "seller": "Kinguin",
            "url": "https://www.kinguin.net/category/29708/minecraft-story-mode-a-telltale-games-series-steam-cd-key"
          },
          {
            "price": 26.19,
            "seller": "G2Play",
            "url": "https://www.g2play.net/category/29708/minecraft-story-mode-a-telltale-games-series-steam-cd-key"
          },
          {
            "price": 27.4,
            "seller": "GAMIVO",
            "url": "https://www.gamivo.com/product/minecraft-story-mode-a-telltale-games-series"
          },
          {
            "price": 32.91,
            "seller": "Eneba",
            "url": "https://www.eneba.com/steam-minecraft-story-mode-a-telltale-games-series-steam-key-global"
          },
          {
            "price": 33.2,
            "seller": "HRK Game",
            "url": "https://www.hrkgame.com/en/randomkeyshop/set_currency/"
          },
          {
            "price": 34.13,
            "seller": "G2A",
            "url": "https://www.g2a.com/minecraft-story-mode-a-telltale-games-series-steam-key-global-i10000006599012"
          }
        ],
        "type": "game"
      }
    ],
    "totalAmountFound": 48
  })


  
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '32031538e6mshc7db306a60d2ca8p115933jsnb5ab8b1cd875',
//       'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
//     }
//   };
//   useEffect(() => {
//   fetch('https://game-prices.p.rapidapi.com/games?title=minecraft&region=us&offset=0&limit=10', options)
//     .then(r => r.json())
//     .then(r => setData(r))
//     .catch(err => console.error(err));
// }, []);

  

  return (
    // <AppBackgroundStyle>

    //   <NavBar/>

      // <Favorites/>

      
    // </AppBackgroundStyle>
<AppBackgroundStyle>
    <Router>
        <NavBar/>
        <Routes>
          {/* <Route path="/game">
            <Game />
          </Route> */}
          <Route path="/" element={<Home data={data}/>}>
          </Route>
        </Routes>
    </Router>
    </AppBackgroundStyle>
  );
}

export default App;

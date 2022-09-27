import React, {useState} from 'react'
import styled from 'styled-components';
import theme from './styled-comps/theme';

const SearchBarStyle = styled.input`


   
    
`


const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");
  

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

// if (searchInput.length > 0) {
//     games.filter((game) => {
//     return game.name.match(searchInput);
// });
// }

return (

<div>
<SearchBarStyle
   type="search"
   placeholder="Search"
   onChange={handleChange}
   value={searchInput} />


{/* {games.map((game, index) => {

<div>
  <tr>
    <td>{game.name}</td>
  </tr>
</div>

})} */}

</div>
)};

export default SearchBar;
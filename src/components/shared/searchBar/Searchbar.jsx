import './searchBar.css'
import { useContext } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import SearchContext from '../../../context/search/SearchContext';
function Searchbar({placeholder}) {
  const style = { fontSize: "1.6rem" };

  const {getSearch, searchValue} = useContext(SearchContext)

  return (
    <div className='search_bar'>

  <div className="input_group">
    <input 
    className='search_bar_input'
    onChange={getSearch}
    value={searchValue}
    type="text" placeholder= {placeholder}  />
    <button className="btn">
      <AiOutlineSearch style={style}/>
    </button>
  </div>
    </div>

  )
}

export default Searchbar
import { SearchBarStyled } from "../style";
const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a Flowers name"
    />
  );
};

export default SearchBar;

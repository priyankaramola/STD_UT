import React from "react";
import { styled, IconButton, InputBase, Box } from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as Icon } from "../../assets/icons/Elipse 5.svg";

const SearchContainer = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 2rem;
  padding: 2px;
  margin-left: auto;
  border:1px solid lightgray;
`;

const SearchInput = styled(InputBase)`
  flex: 1;
  padding: 3px;
`;

const SearchComponent = styled(SearchIcon)`
  font-size: 22px;
`;

const SearchImage = styled(Icon)`
  border-radius: 50%;
  margin-right: 6px;
`;

const Search = () => {
  return (
    <SearchContainer>
      <IconButton aria-label="search">
        <SearchComponent />
      </IconButton>
      <SearchInput placeholder="Search…" />
      <SearchImage />
    </SearchContainer>
  );
};

export default Search;

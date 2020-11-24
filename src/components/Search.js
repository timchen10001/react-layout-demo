import "../styles/Search.css";

import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducers/reducer";

function Search({ inputTerm = "", hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState(undefined);
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log(input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    if (history.location.pathname === '/') history.push(`/search`);
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon onClick={search} />
        <input onKeyPress={e => {if (e.key === 'Enter') search(e)}}
          value={input === undefined ? inputTerm : input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>  
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google 搜尋
          </Button>
          <Button variant="outlined">
            <strong>Cloned by 陳宜庭</strong>
          </Button>
        </div>
      ) : (
        <div className="hide__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google 搜尋
          </Button>
          <Button variant="outlined">
            <strong>Cloned by 陳宜庭</strong>
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;

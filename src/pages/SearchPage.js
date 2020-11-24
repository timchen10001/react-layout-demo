import "../styles/SearchPage.css";

import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
import Response from "../response";
import Search from "../components/Search";

import React from "react";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ImageIcon from "@material-ui/icons/Image";
import RoomIcon from "@material-ui/icons/Room";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // Live Google customsearch API call (cost limited....)
  const { data } = useGoogleSearch(term);
  // const data = Response;

  const history = useHistory();
  const goBack = () => {
    history.push('/');
  };

  //   console.log("called by the SearchPage >>> ", data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__headerLogo"
            src="https://seeklogo.net/wp-content/uploads/2015/09/Google_2015_logo1.svg"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search inputTerm={term} hideButtons />

          <form className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <Button type="submit" onClick={goBack} className="searchPage__option">
                <SearchIcon />
                <Link to='/'>全部</Link>
              </Button>
              <Button type='submit' onClick={goBack} className="searchPage__option">
                <ReceiptIcon />
                <Link to="/">新聞</Link>
              </Button>
              <Button className="searchPage__option">
                <ImageIcon />
                <Link to="/">圖片</Link>
              </Button>
              <Button className="searchPage__option">
                <RoomIcon />
                <Link to="/">地圖</Link>
              </Button>
              <Button className="searchPage__option">
                <YouTubeIcon />
                <Link to="/">影片</Link>
              </Button>
              <Button className="searchPage__option">
                <MoreVertIcon />
                <Link to="/">更多</Link>
              </Button>
            </div>
            <div className="searchPage__optionsRight">
              <Button className="searchPage__option">
                <Link to="/">設定</Link>
              </Button>
              <Button className="searchPage__option">
                <Link to="/">工具</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                <img
                  className="searchPage__resultImage"
                  src={
                    item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src
                  }
                  alt=""
                />
                {item.displayLink} ▽
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;

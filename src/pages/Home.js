import "../styles/Home.css";

import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Search from "../components/Search";
import Footer from "../components/Footer";
import outerURL from "../outerURL";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <a href={outerURL.about} alt="">
            關於 Google
          </a>
          <a href={outerURL.store} alt="">
            Google 商店
          </a>
        </div>
        <div className="home__headerRight">
          <Link to="">Gmail</Link>
          <Link to="">圖片</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__header__mobile">
        <div className="home__header__mobileLeft">
          <div className="home__header__mobile__item">
            <MenuIcon />
          </div>
          <div className="home__header__mobile__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
          </div>
          <div className="home__header__mobile__item">
            <a href={ outerURL.about } alt=''>全部</a>
          </div>
          <div className="home__header__mobile__item">
            <Link to='/'>圖片</Link>
          </div>
        </div>
        <div className="home__header__mobileRight">
          <div className="home__header__mobile__item">
            <AppsIcon />
          </div>
          <div className="home__header__mobile__item">
            <Avatar />
          </div>
        </div>
      </div>
      <div className="home__body">
        <img
          className="home__bodyImage"
          src="https://cdn.worldvectorlogo.com/logos/google-2015.svg"
          alt=""
        />
        <div className="home__bodyInput">
          <Search />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

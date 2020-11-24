import React from 'react';
import '../styles/Footer.css';
import outerURL from '../outerURL';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__item'>
                <h4>台灣 Copyright © 2020 Google TW</h4>
                <h5>本專案為開發者 Tim Chen 因教育學習用途參考而創作，不得用於商業營利行為</h5>
            </div>
            <div className='footer__item'>
                <div className='footer__itemLeft'>
                    <a href={ outerURL.advertise } alt=''>廣告</a>
                    <a href={ outerURL.business } alt=''>商業</a>
                    <a href={ outerURL.howsearchworks } alt=''>搜尋服務的運作方式</a>
                </div>
                <div className='footer__itemRight'>
                    <a href={ outerURL.privacy } alt=''>隱私權</a>
                    <a href={ outerURL.terms } alt=''>服務條款</a>
                    <a>設定</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;

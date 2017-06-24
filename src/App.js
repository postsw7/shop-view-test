import React, { Component } from 'react';
import './App.css';
import ShopItemList from './components/ShopItemList';
import shopItems from './data/shopItemMockData';

class App extends Component {

  onClickTitle = (e) => {
    if (e.target.className.includes('-o')) {
      e.target.classList.remove('fa-check-circle-o');
      e.target.classList.add('fa-check-circle');
    } else {
      e.target.classList.remove('fa-check-circle');
      e.target.classList.add('fa-check-circle-o');
    }
  }

  onClickNav = (e) => {
    let navList = document.getElementsByTagName('LI');
    Array.prototype.forEach.call(navList, navItem => {
      if (navItem.className.includes('select-nav')) {
        navItem.classList.remove('select-nav');
      }
    })
    e.target.classList.add('select-nav');
  }

  render () {
    return (
      <div>
        <header>
          <div className="container">
            <div className="title">
              <h1 lang="ko">바이슬림</h1>
              <span className="fa fa-check-circle-o fa-lg" aria-hidden="true" onClick={(e) => { this.onClickTitle(e); }}></span>
            </div>
            <nav>
              <ul lang="ko" onClick={(e) => { this.onClickNav(e); }}>
                <li className="select-nav">신상품</li>
                <li>인기순</li>
                <li>저가순</li>
              </ul>
              <div className="search-item">
                <span className="fa fa-search" aria-hidden="true"></span>
                <input type="text" placeholder="상품검색"></input>
              </div>
            </nav>
          </div>
        </header>
        <main>
          <div className="container">
            <ShopItemList itemList={shopItems.items}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ShopItemList from './components/ShopItemList';
import shopItems from './data/shopItemMockData';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="title">
              <h1 lang="ko">바이슬림</h1>
              <span className="fa fa-check-circle-o fa-lg" aria-hidden="true"></span>
            </div>
            <nav>
              <ul lang="ko">
                <li>신상품</li>
                <li>인기순</li>
                <li>저가순</li>
              </ul>
              <div className="search-item">
                <span className="fa fa-search" aria-hidden="true"></span>
                상품검색
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

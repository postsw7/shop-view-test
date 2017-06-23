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
              <h2 lang="ko">바이슬림</h2>
            </div>
            <nav>
              <ul lang="ko">
                <li>신상품</li>
                <li>인기순</li>
                <li>저가순</li>
              </ul>
              <div lang="ko" className="search-item">
                상품검색
              </div>
            </nav>
          </div>
        </header>
        <main>
          <ShopItemList itemList={shopItems.items}/>
        </main>
      </div>
    );
  }
}

export default App;

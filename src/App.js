import React, { Component } from 'react';
import './App.css';
import ShopItemList from './components/ShopItemList';
import shopItems from './data/shopItemMockData';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: shopItems.items
    }

  }

  onClickTitle (e) {
    if (e.target.className.includes('-o')) {
      e.target.classList.remove('fa-check-circle-o');
      e.target.classList.add('fa-check-circle');
    } else {
      e.target.classList.remove('fa-check-circle');
      e.target.classList.add('fa-check-circle-o');
    }
  }

  onClickNav (e) {
    let navList = e.currentTarget.children;
    Array.prototype.forEach.call(navList, navItem => {
      if (navItem.className.includes('select-nav')) {
        navItem.classList.remove('select-nav');
      }
    })
    e.target.classList.add('select-nav');
    if (e.target.innerHTML === '인기순') {

      let items = shopItems.items.slice();
      this.setState({
        items: items.sort((prev, item) => {
          return item.purchase - prev.purchase;
        })
      })
    } else if (e.target.innerHTML === '저가순') {
      let items = shopItems.items.slice();
      this.setState({
        items: items.sort((prev, item) => {
          return +prev.price.split(',').join('') - +item.price.split(',').join('');
        })
      })
    } else if (e.target.innerHTML === '신상품') {
      let items = shopItems.items.slice();
      this.setState({
        items: items.sort((prev, item) => {
          return prev.id - item.id;
        })
      })
    }
  }

  handleEnterSearch (e) {
    if (e.key === 'Enter') {
      this.setState({
        items: shopItems.items.filter(item => {
          return item.title.includes(e.target.value);
        })
      });
    }
  }

  handleClickSearch (e) {
    let value = e.target.nextElementSibling.value;
    this.setState({
      items: shopItems.items.filter(item => {
        return item.title.includes(value);
      })
    });
  }

  render () {
    return (
      <div>
        <header>
          <div className="container">
            <div className="title">
              <h1>바이슬림</h1>
              <span className="fa fa-check-circle-o fa-lg" aria-hidden="true" onClick={this.onClickTitle.bind(this)}></span>
            </div>
            <nav>
              <ul onClick={this.onClickNav.bind(this)}>
                <li className="select-nav">신상품</li>
                <li>인기순</li>
                <li>저가순</li>
              </ul>
              <div className="search-item">
                <span className="fa fa-search" aria-hidden="true" onClick={this.handleClickSearch.bind(this)}></span>
                <input type="text" placeholder="상품검색" onKeyPress={this.handleEnterSearch.bind(this)}></input>
              </div>
            </nav>
          </div>
        </header>
        <main>
          <div className="container">
            <ShopItemList itemList={this.state.items} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;

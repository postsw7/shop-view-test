import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
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
    let filterText = e.target.textContent;
    this.props.handleSortItems(filterText);
  }

  handleEnterSearch (e) {
    if (e.key === 'Enter') {
      let searchResult = e.target.value;
      e.target.value = '';
      this.props.handleSearchItems(searchResult);
    }
  }

  handleClickSearch (e) {
    let searchResult = e.target.nextElementSibling.value;
    e.target.nextElementSibling.value = '';
    this.props.handleSearchItems(searchResult);
  }

  render() {
    return (
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
              <li>찜목록</li>
            </ul>
            <div className="search-item">
              <span className="fa fa-search" aria-hidden="true" onClick={this.handleClickSearch.bind(this)}></span>
              <input type="text" placeholder="상품검색" onKeyPress={this.handleEnterSearch.bind(this)}></input>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

Header.displayName = 'Header';

// Uncomment properties you need
// Header.propTypes = {};
// Header.defaultProps = {};

export default Header;

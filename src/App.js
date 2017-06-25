import React, { Component } from 'react';
import Header from './components/Header';
import ShopItemList from './components/ShopItemList';
import { items } from './data/shopItemMockData';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: items,
      sortFilter: '',
      searchFilter: '',
      searchValue: ''
    }

  }

  handleItems (filterOption, filterText, searchResult) {
    console.log(searchResult);
    if (filterOption === 'sortItem') {
      this.setState({
        sortFilter: filterText,
        searchFilter: '',
        searchValue: ''
      })
    } else if (filterOption === 'searchItem') {
      this.setState({
        searchFilter: filterText,
        searchValue: searchResult,
        sortFilter: ''
      })
    }
  }

  render () {
    return (
      <div>
        <Header handleItems={this.handleItems.bind(this)} />
        <main>
          <div className="container">
            <ShopItemList
              itemList={this.state.items}
              sortFilter={this.state.sortFilter}
              searchFilter={this.state.searchFilter}
              searchValue={this.state.searchValue}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;

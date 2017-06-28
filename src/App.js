import React, { Component } from 'react';
import Header from './components/Header';
import ShopItemList from './components/ShopItemList';
import Modal from './components/Modal';
import { items } from './data/shopItemMockData';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: items,
      sortFilter: '',
      searchValue: '',
      showModal: false,
      itemId: 0,
      isEditing: false,
      editItems: []
    }

  }

  handleEditItem (editStatus) {
    this.setState({
      isEditing: editStatus
    });
  }

  handleSelectedEditItem (id) {
    if (this.state.editItems.indexOf(id) === -1) {
      this.setState({
        editItems: this.state.editItems.concat(id)
      });
    }
  }

  handleSortItems (filterText) {
    this.setState({
      sortFilter: filterText,
      searchValue: ''
    });
  }

  handleSearchItems (searchResult) {
    this.setState({
      searchValue: searchResult,
      sortFilter: ''
    })
  }

  handleClickItem (id) {
    if (!this.state.isEditing) {
      this.setState({
        itemId: id,
        showModal: true
      });
    }
  }

  handleCloseModal () {
    this.setState({
      showModal: false
    });
  }

  handleClickPin (id, isPinned) {
    if (isPinned) {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === id) {
            item.isPinned = true;
          }
          return item;
        })
      });
    } else {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === id) {
            item.isPinned = false;
          }
          return item;
        })
      });
    }
  }

  render () {
    const selectedItem = () => {
      if (this.state.showModal) {
        let itemSelected = this.state.items.filter(item => {
          return (item.id === this.state.itemId);
        });
        return itemSelected[0];
      }
    };

    return (
      <div>
        <Header
          handleSortItems={this.handleSortItems.bind(this)}
          handleSearchItems={this.handleSearchItems.bind(this)}
          handleEditItem={this.handleEditItem.bind(this)}
        />
        <main>
          <div className="container">
            <ShopItemList
              itemList={this.state.items}
              sortFilter={this.state.sortFilter}
              searchValue={this.state.searchValue}
              handleClickItem={this.handleClickItem.bind(this)}
              handleClickPin={this.handleClickPin.bind(this)}
              isEditing={this.state.isEditing}
              handleSelectedEditItem={this.handleSelectedEditItem.bind(this)}
            />
            {
              !this.state.isEditing && this.state.showModal ?
                <Modal
                  item={selectedItem()}
                  handleCloseModal={this.handleCloseModal.bind(this)}
                />
                : null
            }
          </div>
        </main>
      </div>
    );
  }
}

App.displayName = 'App';

export default App;

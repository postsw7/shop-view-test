import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ShopItemList.css';
import ShopItemEntry from './ShopItemEntry';

class ShopItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.itemList
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sortFilter === '인기순') {
      let itemList = this.props.itemList.slice();
      this.setState({
        items: itemList.sort((prev, item) => {
          return item.purchase - prev.purchase;
        })
      })
    } else if (nextProps.sortFilter === '저가순') {
      let itemList = this.props.itemList.slice();
      this.setState({
        items: itemList.sort((prev, item) => {
          return +prev.price.split(',').join('') - +item.price.split(',').join('');
        })
      })
    } else if (nextProps.sortFilter === '신상품') {
      let itemList = this.props.itemList.slice();
      this.setState({
        items: itemList.sort((prev, item) => {
          return prev.id - item.id;
        })
      })
    } else if (nextProps.sortFilter === '찜목록') {
      let itemList = this.props.itemList.slice();
      this.setState({
        items: itemList.filter(item => {
          return item.isPinned;
        })
      });
    } else if (nextProps.searchValue) {
      let itemList = this.props.itemList.slice();
      this.setState({
        items: itemList.filter(item => {
          return item.title.includes(nextProps.searchValue);
        })
      });
    }
  }

  findAncestor (el, classname) {
    do {
      el = el.parentElement;
    } while (el && !el.classList.contains(classname));
    return el;
  }

  onClickEntry (e) {
    if (e.target !== e.currentTarget && !e.target.className.includes('pin') && !this.findAncestor(e.target, 'item-pin')) {
      let itemId = +this.findAncestor(e.target, 'item-entry').dataset.id;
      this.props.handleClickItem(itemId);
    } else if (e.target.className === 'lookpin-payment') {
      let itemId = +this.findAncestor(e.target, 'item-entry').dataset.id;
      this.props.handleClickItem(itemId);
    }
  }

  render() {
    return (
      <div className="item-list" onClick={this.onClickEntry.bind(this)}>
        {this.state.items.map((item, i) =>
          <ShopItemEntry item={item} key={i} handleClickPin={this.props.handleClickPin}/>
        )}
      </div>
    );
  }
}

ShopItemList.displayName = 'ShopItemList';

ShopItemList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortFilter: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleClickItem: PropTypes.func.isRequired,
  handleClickPin: PropTypes.func.isRequired
};

export default ShopItemList;

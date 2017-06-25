import React, { Component } from 'react';
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
    console.log('NEXTPROPS:::', nextProps);
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
    } else if (nextProps.searchFilter === 'enter') {
      console.log('전달!!',nextProps.searchValue)
      let itemList = this.props.itemList.slice();
      this.setState({
        items: itemList.filter(item => {
          return item.title.includes(nextProps.searchValue);
        })
      });
    } else if (nextProps.searchFilter === 'click') {
      let itemList = this.props.itemList.slice();
      this.setState({
        items: itemList.filter(item => {
          return item.title.includes(nextProps.searchValue);
        })
      });
    }
  }

  render() {
    return (
      <div className="shopitemlist-component">
        {this.state.items.map((item, i) =>
          <ShopItemEntry item={item} key={i}/>
        )}
      </div>
    );
  }
}

ShopItemList.displayName = 'ShopItemList';

// Uncomment properties you need
// ShopItemList.propTypes = {};
// ShopItemList.defaultProps = {};

export default ShopItemList;

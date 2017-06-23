import React, { Component } from 'react';
import '../styles/ShopItemList.css';
import ShopItemEntry from './ShopItemEntry';

class ShopItemList extends Component {
  render() {
    return (
      <div className="shopitemlist-component">
        {this.props.itemList.map((item, i) =>
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

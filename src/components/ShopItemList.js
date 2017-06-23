import React, { Component } from 'react';
import '../styles/ShopItemList.css';
import ShopItemEntry from './ShopItemEntry';

class ShopItemList extends Component {
  render() {
    return (
      <div className="shopitemlist-component">
        This is Shop List
        <ShopItemEntry />
      </div>
    );
  }
}

ShopItemList.displayName = 'ShopItemList';

// Uncomment properties you need
// ShopItemList.propTypes = {};
// ShopItemList.defaultProps = {};

export default ShopItemList;

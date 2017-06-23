import React, { Component } from 'react';
import '../styles/ShopItemEntry.css';

class ShopItemEntry extends Component {
  render() {
    return (
      <div className="shopitementry-component">
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

ShopItemEntry.displayName = 'ShopItemEntry';

// Uncomment properties you need
// ShopItemEntry.propTypes = {};
// ShopItemEntry.defaultProps = {};

export default ShopItemEntry;

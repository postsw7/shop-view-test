import React, { Component } from 'react';
import '../styles/ShopItemEntry.css';

class ShopItemEntry extends Component {
  render() {
    return (
      <div className="shopitementry-component">
        <img className= "item-picture" src={this.props.item.image} alt="no image"/>
        <p className="item-title" lang="ko">
          {this.props.item.title}
        </p>
        <p className="item-price" lang="ko">
          {this.props.item.price}원
        </p>
        <div className="item-pin">
          <span className="fa fa-thumb-tack fa-lg" aria-hidden="true"></span>
          핀하기
        </div>
      </div>
    );
  }
}

ShopItemEntry.displayName = 'ShopItemEntry';

// Uncomment properties you need
// ShopItemEntry.propTypes = {};
// ShopItemEntry.defaultProps = {};

export default ShopItemEntry;

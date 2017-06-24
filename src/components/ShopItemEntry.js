import React, { Component } from 'react';
import '../styles/ShopItemEntry.css';
import paymentImage from '../images/lookpinPay.png';

class ShopItemEntry extends Component {
  render() {
    return (
      <div className="item-entry">
        <img className= "item-picture" src={this.props.item.image} alt="no image"/>
        <img className="lookpin-payment" src={paymentImage} alt="룩핀 결제"/>
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

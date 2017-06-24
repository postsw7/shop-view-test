import React, { Component } from 'react';
import '../styles/ShopItemEntry.css';
import paymentImage from '../images/lookpinPay.png';

class ShopItemEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPinned: false
    }
  }

  onClickPin = (e) => {
    let target = e.target;
    if (e.target.className.includes('fa')) {
      target = e.target.parentElement;
    }
    if (!this.state.isPinned) {
      target.classList.add('item-pinned');
    } else {
      target.classList.remove('item-pinned');
    }
    this.setState((prevState) => ({
      isPinned: !prevState.isPinned
    }));
  }

  render() {
    return (
      <div className="item-entry">
        <img className= "item-picture" src={this.props.item.image} alt="룩핀 아이템"/>
        <img className="lookpin-payment" src={paymentImage} alt="룩핀 결제"/>
        <p className="item-title" lang="ko">
          {this.props.item.title}
        </p>
        <p className="item-price" lang="ko">
          {this.props.item.price}원
        </p>
        <div className="item-pin" onClick={(e) => {
          this.onClickPin(e);
        }}>
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

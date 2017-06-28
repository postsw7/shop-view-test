import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ShopItemEntry.css';
import paymentImage from '../images/lookpinPay.png';

class ShopItemEntry extends Component {

  onClickPin (e) {
    let el = e.target;
    if (el.className.includes('fa')) {
      el = e.target.parentElement;
    }
    if (!this.props.item.isPinned) {
      this.props.handleClickPin(this.props.item.id, true);
    } else {
      this.props.handleClickPin(this.props.item.id, false);
    }
  }

  render() {
    return (
      <div className={!this.props.isEditing ? 'item-entry' : 'item-entry item-rattle'} data-id={this.props.item.id}>
        <img className= "item-picture" src={this.props.item.image} alt="룩핀 아이템"/>
        <img className="lookpin-payment" src={paymentImage} alt="룩핀 결제"/>
        <p className="item-title">
          {this.props.item.title}
        </p>
        <p className="item-price">
          {this.props.item.price}원
        </p>
        <div className={this.props.item.isPinned ? 'item-pin item-pinned' : 'item-pin'} onClick={this.onClickPin.bind(this)}>
          <span className="fa fa-thumb-tack fa-lg" aria-hidden="true"></span>
          핀하기
        </div>
      </div>
    );
  }
}

ShopItemEntry.displayName = 'ShopItemEntry';

ShopItemEntry.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    purchase: PropTypes.number,
    date: PropTypes.string,
    isPinned: PropTypes.bool
  }).isRequired,
  handleClickPin: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default ShopItemEntry;

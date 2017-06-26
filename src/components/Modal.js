import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

class Modal extends Component {
  handleClose (e) {
    if (e.currentTarget === e.target) {
      this.props.handleCloseModal();
    }
  }

  render () {
    return (
      <div className="modal" ref={ref => { this.modal = ref; }} onClick={this.handleClose.bind(this)}>
        <div className="modal-content">
          <div className={this.props.item.isPinned ? 'modal-header modal-pinned' : 'modal-header'}>
            <h2>{this.props.item.title}</h2>
            <span className="close" onClick={this.handleClose.bind(this)}>&times;</span>
          </div>
          <div className="modal-body">
            <img className="modal-item-image" src={this.props.item.image} alt="선택된 아이템 사진"/><br />
            <div className="modal-item-details">
              <span className="detail-head">가격 :</span> <span className="detail-content">{this.props.item.price}원</span><br />
              <span className="detail-head">판매수량 :</span> <span className="detail-content">{this.props.item.purchase}</span><br />
              <span className="detail-head">입고날짜 :</span> <span className="detail-content">{this.props.item.date}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    purchase: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    isPinned: PropTypes.bool.isRequired
  }).isRequired,
  handleCloseModal: PropTypes.func.isRequired
}

export default Modal;

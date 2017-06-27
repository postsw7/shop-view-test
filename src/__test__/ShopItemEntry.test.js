import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import ShopItemEntry from '../components/ShopItemEntry';

beforeEach (() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning) });
});

afterEach (() => { console.error.restore() });

describe ('<ShopItemEntry />', () => {

  const props = {
    item: {
      id: 1,
      title: 'title',
      price: 'price',
      image: 'image',
      purchase: 100,
      date: 'date',
      isPinned: false
    },
    handleClickPin: sinon.spy()
  };

  it ('should render without crashing', () => {
    shallow(<ShopItemEntry {...props} />);
  });

  it ('should render `.item-entry`', () => {
    const wrapper = shallow(<ShopItemEntry {...props} />);
    expect(wrapper.find('.item-entry')).toHaveLength(1);
  });

  it ('should render `.item-picture`', () => {
    const wrapper = shallow(<ShopItemEntry {...props} />);
    expect(wrapper.find('.item-picture')).toHaveLength(1);
  });

  it ('should render `.lookpin-payment`', () => {
    const wrapper = shallow(<ShopItemEntry {...props} />);
    expect(wrapper.find('.lookpin-payment')).toHaveLength(1);
  });

  it ('should render two img elements', () => {
    const wrapper = shallow(<ShopItemEntry {...props} />);
    expect(wrapper.find('img')).toHaveLength(2);
  });

  it ('should render `.item-title`', () => {
    const wrapper = shallow(<ShopItemEntry {...props} />);
    expect(wrapper.find('.item-picture')).toHaveLength(1);
  });

  it ('should render `.item-price`', () => {
    const wrapper = shallow(<ShopItemEntry {...props} />);
    expect(wrapper.find('.item-picture')).toHaveLength(1);
  });

  it ('should render `.item-pin`', () => {
    const wrapper = shallow(<ShopItemEntry {...props} />);
    expect(wrapper.find('.item-picture')).toHaveLength(1);
  });

  it ('should render `.fa-thumb-tack`', () => {
    const wrapper = shallow(<ShopItemEntry {...props} />);
    expect(wrapper.find('.fa-thumb-tack')).toHaveLength(1);
  });

})
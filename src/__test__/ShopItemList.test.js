import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import ShopItemList from '../components/ShopItemList';
import { items } from '../data/shopItemMockData';

beforeEach (() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning) });
});

afterEach (() => { console.error.restore() });

describe ('<ShopItemList />', () => {

  const props = {
    itemList: items,
    sortFilter: '',
    searchValue: '',
    handleClickItem: sinon.spy(),
    handleClickPin: sinon.spy()
  };

  it ('should render without crashing', () => {
    shallow(<ShopItemList {...props} />);
  });

  it ('should have expected value of items state', () => {
    const wrapper = shallow(<ShopItemList {...props} />);
    expect(wrapper.state().items).toHaveLength(100);
  });

  it ('should render `.item-list`', () => {
    const wrapper = shallow(<ShopItemList {...props} />);
    expect(wrapper.find('.item-list')).toHaveLength(1);
  })

  it ('should render 100 ShopItemEntry components', () => {
    const wrapper = shallow(<ShopItemList {...props} />);
    expect(wrapper.find('ShopItemEntry')).toHaveLength(100);
  });

})
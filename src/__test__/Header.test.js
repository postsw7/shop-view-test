import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Header from '../components/Header';
import { items } from '../data/shopItemMockData';

beforeEach (() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning) });
});

afterEach (() => { console.error.restore() });

describe ('<Header />', () => {

  const props = {
    handleSortItems: sinon.spy(),
    handleSearchItems: sinon.spy()
  };

  it ('should render without crashing', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toBeDefined();
  });

  it ('should render nav element', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('nav').length).toBe(1);
  });

  it ('should render `.container`', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('.container').length).toBe(1);
  });

  it ('should render ul and four li elements', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('ul').children()).toHaveLength(4);
  });

  it ('should have `신상품` as a default value of selected nav element', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('.select-nav').text()).toBe('신상품');
  });

});

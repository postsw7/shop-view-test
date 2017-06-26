import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import { items } from '../data/shopItemMockData';
import Header from '../components/Header';


describe ('<App />', () => {
  it ('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it ('should render main element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('main').length).toBe(1);
  });

  it ('should render `.container`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.container').length).toBe(1);
  });

  it ('should render two div elements', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toBe(2);
  });

  it ('should have default values of state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().itemId).toBe(0);
    expect(wrapper.state().showModal).toBe(false);
    expect(wrapper.state().sortFilter).toBe('');
    expect(wrapper.state().items.length).toBe(100);
    expect(wrapper.state().items).toBe(items);
  });
});


import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Modal from '../components/Modal';

beforeEach (() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning) });
});

afterEach (() => { console.error.restore() });

describe ('<Modal />', () => {

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
    handleCloseModal: sinon.spy()
  };

  it ('should render without crashing', () => {
    shallow(<Modal {...props} />);
  });

  it ('should render a h2 element', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it ('should render a img element', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it ('should render five div elements', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('div')).toHaveLength(5);
  });

  it ('should render `.modal`', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('.modal')).toHaveLength(1);
  });

  it ('should render `.modal-content`', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('.modal-content')).toHaveLength(1);
  });

  it ('should render `.modal-header`', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('.modal-header')).toHaveLength(1);
  });

  it ('should render `.modal-body`', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('.modal-body')).toHaveLength(1);
  });

  it ('should render `.modal-item-details`', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('.modal-item-details')).toHaveLength(1);
  });

  it ('should render seven span elements', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('span')).toHaveLength(7);
  });

  it ('should render `.close`', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('.close')).toHaveLength(1);
  });

  it ('should render three `.detail-head`', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('.detail-head')).toHaveLength(3);
  });

  it ('should render three `.detail-content`', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('.detail-content')).toHaveLength(3);
  });

})

/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ShopItemListComponent from 'components/ShopItemListComponent.js';

describe('ShopItemListComponent', function () {
  let component;

  beforeEach(function () {
    component = createComponent(ShopItemListComponent);
  });

  it('should have its component name as default className', function () {
    expect(component.props.className).to.equal('shopitemlist-component');
  });
});

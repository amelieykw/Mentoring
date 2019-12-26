/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

test('simple test', () => {
  shallow(<App />);
});

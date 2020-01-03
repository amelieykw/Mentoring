import React from 'react';
import { shallow } from 'enzyme';
import TrendChart from '.';

describe('<TrendChart />', () => {
  it('<TrendChart /> should render correctly', () => {
    const wrapper = shallow(<TrendChart />);
    expect(wrapper).toMatchSnapshot();
  });
});

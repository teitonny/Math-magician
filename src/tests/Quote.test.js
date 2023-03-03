import React from 'react';
import Renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('renders Quote correctly', () => {
  const tree = Renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import Renderer from 'react-test-renderer';
import Menu from '../components/menu';

it('renders the Menu correctly', () => {
  const tree = Renderer.create(<Menu />).toJSON();
  expect(tree).toMatchSnapshot();
});

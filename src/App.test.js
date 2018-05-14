import React from 'react';
import {mount} from 'enzyme';
import App, {Header} from './App';

describe('App', () => {
  it('renders correctly', () => {
    const tree = mount(<App/>);
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('text-align', 'center');
  });

  it('renders header with correct styles', () => {
    const tree = mount(<App/>);
    const header = tree.find('div').at(1);
    expect(header).toHaveLength(1);
    expect(header).toHaveStyleRule('background-color', '#222');
    expect(header).toHaveStyleRule('height', '150px');
    expect(header).toHaveStyleRule('padding', '20px');
    expect(header).toHaveStyleRule('color', 'white');
  });
});

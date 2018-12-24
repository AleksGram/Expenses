import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header';

test('renderHeaderComponet', () => {
    const render = new ReactShallowRenderer();
    render.render(<Header/>);
    expect(render.getRenderOutput()).toMatchSnapshot();
})
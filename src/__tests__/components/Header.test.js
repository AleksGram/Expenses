import React from 'react'
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';


describe('HeaderPage_test', () => {
    let startLogout, history, wrapper;

beforeAll (() => {
    startLogout = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(
        <Header
            startLogout={startLogout}
            history={history}
        />
    )
})


    test('renderHeaderComponet', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Header_logoutClick', () => {
        wrapper.find('button').simulate('click');

        expect(startLogout).toHaveBeenCalled();
    })

})


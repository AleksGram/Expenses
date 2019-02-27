import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';


describe('LoginPage_test', () => {
    let startLogin, history, wrapper;
    beforeAll(() => {
        startLogin = jest.fn();
        history={ push: jest.fn()}
        wrapper = shallow(
            <LoginPage
                startLogin={startLogin}
                history={history}
            />
        )
    })


    test('render LoginPage component', () => {

    expect(wrapper).toMatchSnapshot();
    })

    test('LoginPage_loginClick', () => {
        wrapper.find('button').simulate('click');

        expect(startLogin).toHaveBeenCalled();
    })
    

})

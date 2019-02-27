
import {login, logout } from '../../actions/auth';


describe('Auth_actions_test', () => {


    test('loginAction_test', () => {
        const uid = 'unikeUserKey';
        const action = login(uid);

        expect(action).toEqual({
            type: 'LOGIN',
            uid 
        })
    })

    test('logoutAction_test', () => {
        const action = logout();

        expect(action).toEqual({
            type: 'LOGOUT'
        })
    })
})
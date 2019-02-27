import authReducer from '../../reducers/auth';

describe('AuthReducer_test', () => {
    let defaultState, uid;
    beforeAll(() => {
        defaultState = {},
        uid = 'uniqUserKey'
    })

    test('authReducer_onLogin', () => {
        const action = {
            type: 'LOGIN',
            uid
        }
        const state = authReducer(defaultState, action);
        expect(state).toEqual({ uid: action.uid })
    })

    test('authReducer_onLogout', () => {
        const action = {
            type: 'LOGOUT'
        }
        const state = authReducer({uid}, action);
        expect(state).toEqual(defaultState)
    })


})
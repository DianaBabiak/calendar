import {loginUserOnBackend} from '@/api/authApi.ts';
import {authReducer, loginUser, logout} from "@/state/auth/authSlice.ts";
import {expect} from '@jest/globals'


describe('auth slice', () => {
    describe('reducers', () => {
        it('should logout user', () => {
            const initialState = {
                user: {
                    id: 1,
                    email: 'test@test.com',
                    name: 'Михаил',
                    photo: 'https://www.shareicon.net/data/512x512/2016/06/25/786525_people_512x512.png'
                }, isAuthenticated: true
            };
            const newState = authReducer(initialState, logout());
            expect(newState.user).toBeNull();
            expect(newState.isAuthenticated).toBeFalsy();
        });
    });

    describe('extraReducers', () => {
        it('should set user and isAuthenticated to true on loginUser.fulfilled', async () => {
            const data = await loginUserOnBackend({email: 'test@test.com', password: 'password'});

            const initialState = {user: null, isAuthenticated: false};
            const newState = authReducer(initialState, loginUser.fulfilled(data, '', {
                email: 'test@test.com',
                password: 'password'
            }));

            expect(newState.user).toEqual({
                id: 1,
                email: 'test@test.com',
                name: 'Михаил',
                photo: 'https://www.shareicon.net/data/512x512/2016/06/25/786525_people_512x512.png'
            });
            expect(newState.isAuthenticated).toBeTruthy();
        })
    })
})


import {User} from "@/types/auth.ts";

export const loginUserOnBackend = async (data: { email: string; password: string }): Promise<User> => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.email === 'test@test.com' && data.password === 'password') {
                resolve({
                    id: 1,
                    email: 'test@test.com',
                    name: 'Михаил',
                    photo: 'https://www.shareicon.net/data/512x512/2016/06/25/786525_people_512x512.png'
                });
            } else {
                reject(new Error('Invalid email or password'))
            }
        }, 1000);
    })
}

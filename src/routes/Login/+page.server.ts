import Pocketbase from 'pocketbase';
import type { Actions, PageServerLoad } from './$types';

const usersString = 'users';
const userIdString = 'userid';

export const load: PageServerLoad = async ({ cookies }) => {
    const pb = new Pocketbase('http://127.0.0.1:8090/');

    const userid = cookies.get(userIdString);
    if (userid){
        const user = await pb.collection(usersString).getOne(userid);
        return user;
    }
    return {};
};

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        const passwordVerified = data.get('passwordVerified');

        const user = {
            email: email,
            password: password,
            passwordConfirm: passwordVerified,
            name: email?.slice(0, 5)
        };

        const pb = new Pocketbase('http://127.0.0.1:8090/');
        try {
            const newUser = await pb.collection(usersString).create(user);
            cookies.set(userIdString, newUser.id);
            return {success: true};
            
        } catch (error) {
            console.log(error);
        }
    }
};
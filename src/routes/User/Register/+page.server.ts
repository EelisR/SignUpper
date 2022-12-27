import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({locals, request}) => {
        const data = await request.formData();
        const userData = Object.fromEntries(data); 
        // Some validation here
        if (!userData.email || !userData.password || userData.password !== userData.passwordConfirm){
            return {
                success: false
            };
        }
        try {
            const newUser = await locals.pb.collection("users").create(userData);
            console.log(newUser);
            await locals.pb.collection("users").authWithPassword(userData.email.toString(), userData.password.toString())
        } 
        catch(error){
            console.log(error);
            return {error}
        }
        throw redirect(300, '/Events');
    }
}
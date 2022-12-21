import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({locals, request}) => {
        let pb = locals.pb;
        const formData = await request.formData();
        const loginInfo = Object.fromEntries(formData);

        if (!(loginInfo.email && loginInfo.password)){
            return { success: false }
        }
        try {
            await pb.collection("users").authWithPassword(loginInfo.email.toString(), loginInfo.password.toString());
        } catch (err){
            return {
                error: true,
                email: loginInfo.email
            };
        }
        throw redirect(303, '/');
    }
}
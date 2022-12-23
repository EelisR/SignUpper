import { redirect, type Actions, fail } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({locals, request}) => {
        let pb = locals.pb;
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email){
            return fail(400, {
                email, missing: true
            });
        }

        if (!password){
            return fail(400, {
                password, missing: true
            });
        }
        try {
            await pb.collection("users").authWithPassword(email.toString(), password.toString());
        } catch (err){
            return fail(400, {email, incorrect: true});
        }
        throw redirect(303, '/');
    }
}
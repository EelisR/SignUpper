import { EventCollection, SignupCollection } from '$lib/server/constants';
import { serializeToPojo as toPojo } from '$lib/server/utils';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {

    if (!params?.event) {
        return { event: null }
    }

    try {
        const event = await locals.pb.collection(EventCollection).getOne<App.SignupEvent>(params.event);
        const signees = await locals.pb.collection(SignupCollection).getFullList<App.Signup>();
        const signeeAmount = signees.filter(s => s.event == params.event).length;
        return {
            event: toPojo(event),
            amount: signeeAmount
        };
    } catch (error){
        console.error(error);
        return {};
    }
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({locals, request, params}) => {
        const data = Object.fromEntries(await request.formData());
        
        const signup: App.Signup = {
            email: data.email.toString(),
            event: params.event
        } 

        try{
            await locals.pb.collection(SignupCollection).create(signup);
        } catch(error){
            return {error: true};
        }

        throw redirect(300, '/Events');

    }
}
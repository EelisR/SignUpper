import { EventCollection } from '$lib/server/constants';
import { buildError } from '$lib/server/utils';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ locals, request }) => {
        const data = Object.fromEntries(await request.formData());
        
        // Validation here
        if (!locals.user) {
            return buildError('No user is signed in.');
        }

        if (!data.name) {
            return buildError('No event name given.');
        }

        if (!data.date){
            return buildError('No event date given.');
        }

        if (!data.capacity){
            return buildError('No event capacity given.');
        }

        const createData = {
            name: data.name,
            date: data.date,
            capacity: data.capacity,
            creator: locals.user.id
        }

        await locals.pb.collection(EventCollection).create(createData);
        throw redirect(300, '/Events');
    }
}


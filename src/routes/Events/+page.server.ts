import { EventCollection } from '$lib/server/constants';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({locals}) => {
    try {
        const eventsList = await locals.pb.collection(EventCollection).getFullList<App.SignupEvent>();
        const events: App.SignupEvent[] = eventsList.map(e => {
            return {
                name: e.name,
                date: e.date,
                id: e.id,
                capacity: e.capacity,
                creator: e.creator,
                created: e.created,
                updated: e.updated
            }
        });
        
        return { events: events}
    } catch (error) {
        console.log(error);
        return {};
    }
};
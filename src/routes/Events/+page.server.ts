import { EventCollection } from '$lib/server/constants';
import { toPojos } from '$lib/server/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({locals}) => {
    try {
        const eventsList = await locals.pb.collection(EventCollection).getFullList<App.SignupEvent>();
        const events: App.SignupEvent[] = toPojos(eventsList);
        
        return { events: events}
    } catch (error) {
        console.log(error);
        return {};
    }
};
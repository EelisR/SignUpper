import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({locals, request}) => {
    locals.pb.authStore.clear();
    throw redirect(300, '/');
  } 
}
import { SECRET_DB } from '$env/static/private';
import { serializeToPojo } from '$lib/server/utils';
import type { Handle } from '@sveltejs/kit';
import pocketbaseEs from 'pocketbase';

export const handle = (async ({ event , resolve }) => {
  event.locals.pb = new pocketbaseEs(SECRET_DB);
  let pb = event.locals.pb;
  pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

  if (pb.authStore.isValid){
    try {
      pb.collection("users").authRefresh();
      event.locals.user = serializeToPojo(pb.authStore.model);
    } catch (_)
    {
      pb.authStore.clear();
    }
  }

  const response = await resolve(event);
  response.headers
    .set('set-cookie', pb.authStore.exportToCookie({ secure: false}));
  return response;

}) satisfies Handle;
import PocketBase from 'pocketbase';
import { SECRET_DB } from '$env/static/private';

export const pb = new PocketBase(SECRET_DB);
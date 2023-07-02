import type { PageServerLoad } from './$types';

import { checkIsDirector } from '$lib/utils';

export const load: PageServerLoad = async ({ locals, params }) => {
	await checkIsDirector(locals.user, params.id);

	return;
};

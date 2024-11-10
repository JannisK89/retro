import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	if (url.searchParams.get('signup') === 'success') {
		return {
			signup: true
		};
	}
	return { signup: false };
};

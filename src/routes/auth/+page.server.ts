import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			console.error(error);
			if (error.code === 'invalid_credentials') {
				return fail(401, { message: 'Invalid email or password' });
			}
			return fail(500, { message: 'Failed to sign in' });
		} else {
			redirect(303, '/board');
		}
	}
};

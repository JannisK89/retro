import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { z } from 'zod';
import { fromError } from 'zod-validation-error';

const signUpSchema = z.object({
	email: z.string().email().max(255),
	username: z.string().min(1).max(255),
	password: z.string().min(8).max(255)
});

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const passwordConfirm = formData.get('passwordConfirm') as string;
		const username = formData.get('username') as string;

		if (password !== passwordConfirm) {
			return fail(400, { message: 'Passwords do not match' });
		}

		const result = signUpSchema.safeParse({ email, username, password });
		if (!result.success) {
			const validationError = fromError(result.error).toString();
			return fail(400, { message: validationError });
		}

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: { data: { username } }
		});
		if (error) {
			console.error(error);
			return fail(500, { message: 'Failed to sign up' });
		} else {
			redirect(303, '/auth?signup=success');
		}
	}
};

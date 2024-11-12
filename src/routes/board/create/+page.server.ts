import type { Actions } from './$types';
import { createBoard } from '$lib/server/db/db';
import { insertBoardSchema } from '$lib/server/db/schema';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
		const boardName = formData.get('board-name') as string;
		const owner = locals.user?.id;
		let id = '';

		if (!owner) {
			return fail(401, { message: 'Unauthorized' });
		}

		try {
			insertBoardSchema.parse({ name: boardName, owner: owner });
			const result = await createBoard(boardName, owner);
			id = result[0].id;
		} catch (error) {
			console.error(error);
			return fail(500, {
				message: 'Failed to create board'
			});
		}
		redirect(303, `/board/${id}`);
	}
};

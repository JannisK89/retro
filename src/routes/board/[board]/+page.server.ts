import { getBoard, getBoardComments } from '$lib/db/db';
import type { Comment } from '$lib/db/schema';
import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';

const handleInserts = (payload: { new: Comment }) => {
	console.log('New comment:', payload.new);
};

export async function load({ params }: { params: { board: string } }) {
	const boards = await getBoard(params.board);
	if (boards.length === 0) throw error(404, 'Board not found');

	const comments = await getBoardComments(params.board);

	supabase
		.channel('comments')
		.on(
			'postgres_changes',
			{
				event: 'INSERT',
				schema: 'public',
				table: 'comment',
				filter: `board_id=eq.${params.board}`
			},
			handleInserts
		)
		.subscribe();

	return { board: boards[0], comments };
}

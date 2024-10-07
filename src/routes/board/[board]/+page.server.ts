import { getBoard, getBoardComments } from '$lib/db/db';
import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { board: string } }) {
	const boards = await getBoard(params.board);
	if (boards.length === 0) throw error(404, 'Board not found');

	const comments = await getBoardComments(params.board);

	return { board: boards[0], comments };
}

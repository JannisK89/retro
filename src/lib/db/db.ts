import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { board, comment } from './schema';
import { eq } from 'drizzle-orm';
import { config } from 'dotenv';

config({ path: '.env.local' });

const connectionString = process.env.DATABASE_URL!;

const client = postgres(connectionString);
const db = drizzle(client);

// Queries
export async function getBoard(id: string) {
	try {
		const data = await db.select().from(board).where(eq(board.id, id));
		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getBoardComments(boardId: string) {
	try {
		const data = await db.select().from(comment).where(eq(comment.boardId, boardId));
		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
}

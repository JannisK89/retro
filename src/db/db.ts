import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { board } from './schema';

const connectionString = process.env.DATABASE_URL!;

const client = postgres(connectionString);
const db = drizzle(client);

// Queries
export const allBoards = await db.select().from(board);

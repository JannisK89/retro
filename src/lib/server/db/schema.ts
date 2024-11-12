import { relations } from 'drizzle-orm';
import { pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const board = pgTable('board', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	owner: uuid('owner').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow()
});

export const boardRelations = relations(board, ({ many }) => ({
	comment: many(comment)
}));

export const typeEnum = pgEnum('comment_type', ['well', 'improve', 'action']);

export const comment = pgTable('comment', {
	id: uuid('id').primaryKey().defaultRandom(),
	boardId: uuid('board_id').references(() => board.id),
	text: text('text').notNull(),
	type: typeEnum('type').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow()
});

export const commentRelations = relations(comment, ({ one }) => ({
	board: one(board)
}));

export const insertBoardSchema = createInsertSchema(board, {
	name: z.string().min(1).max(100).trim(),
	owner: z.string().uuid()
}).omit({ createdAt: true });
export const selectBoardSchema = createSelectSchema(board);

export const insertCommentSchema = createInsertSchema(comment, {
	text: z.string().min(1).max(1000),
	type: z.enum(['well', 'improve', 'action'])
}).omit({ createdAt: true });
export const selectCommentSchema = createSelectSchema(comment);

export type Board = typeof board.$inferSelect;
export type Comment = typeof comment.$inferSelect;

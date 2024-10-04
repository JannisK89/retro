import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

config({ path: '.env.local' });

export default defineConfig({
	schema: './src/lib/db/schema.ts',
	dbCredentials: {
		url: process.env.DATABASE_URL!
	},
	dialect: 'postgresql',
	migrations: {
		prefix: 'supabase'
	}
});

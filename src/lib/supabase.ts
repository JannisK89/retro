import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

export const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

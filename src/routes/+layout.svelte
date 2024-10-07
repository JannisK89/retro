<script lang="ts">
	import '../app.postcss';

	import { invalidate } from '$app/navigation';
	import { onMount, type Snippet } from 'svelte';
	import type { Session, SupabaseClient } from '@supabase/supabase-js';
	interface Props {
		children?: Snippet;
		session: Session | null;
		supabase: SupabaseClient;
	}

	let data = $props();
	let { session, supabase }: Props = $derived(data);
	let { children } = data;

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="flex items-center justify-center h-screen">
	<div class="space-y-5">
		{@render children?.()}
	</div>
</div>

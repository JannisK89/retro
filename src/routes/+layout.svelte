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

	let { data, children } = $props();
	let { session, supabase }: Props = $derived(data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<main class="flex items-center justify-center h-screen">
	<div
		class="space-y-5 flex flex-col justify-center lg:bg-surface-900 p-10 rounded-2xl lg:bg-opacity-10 lg:shadow lg:min-h-96 lg:min-w-96"
	>
		{@render children?.()}
	</div>
</main>

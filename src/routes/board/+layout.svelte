<script lang="ts">
	import { invalidateAll } from '$app/navigation';

	let { data, children } = $props();
	let { supabase } = $derived(data);

	let logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
		invalidateAll();
	};
</script>

<header>
	<button class="btn btn-lg variant-filled absolute top-4 right-8" onclick={logout}>Logout</button>
</header>
<main class="flex items-center justify-center h-screen">
	<div class="space-y-5">
		{@render children?.()}
	</div>
</main>

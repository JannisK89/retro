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

<header class="lg:absolute top-4 right-8 flex gap-4 justify-center items-center">
	<p class="text-lg">
		{data.user?.user_metadata.username ? ` ${data.user.user_metadata.username}` : 'Logged In'}
	</p>
	<button class="btn variant-ringed rounded" onclick={logout}>Logout</button>
</header>
{@render children?.()}

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

<header class="lg:absolute top-4 right-8 flex justify-center items-center">
	<p class="text-lg mr-4">
		{data.user?.user_metadata.username ? ` ${data.user.user_metadata.username}` : 'Logged In'}
	</p>
	<a class="btn variant-ringed rounded" href="/">Home</a>
	<button class="btn variant-glass rounded" onclick={logout}>Logout</button>
</header>
{@render children?.()}

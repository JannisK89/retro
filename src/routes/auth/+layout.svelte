<script lang="ts">
	let { children } = $props();
</script>

<main class="flex items-center justify-center h-screen">
	<div class="space-y-5">
		{@render children?.()}
	</div>
</main>

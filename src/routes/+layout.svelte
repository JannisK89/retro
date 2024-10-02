<script lang="ts">
	import '../app.postcss';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex items-center justify-center h-screen">
	<div class="space-y-5">
		{@render children?.()}
	</div>
</div>

<script lang="ts">
	const {
		title
	}: {
		title: string;
	} = $props();
</script>

<div
	class="bg-surface-700 items-center p-8 h-full bg-opacity-30 rounded-3xl shadow flex flex-col w-96 min-h-[calc(100vh/1.2)]"
>
	<h3 class="h4 px-14 mb-8">{title}</h3>
	<textarea rows="2" class="textarea p-2 resize-none" placeholder="Write Something.."></textarea>
	<button class="btn w-full variant-filled">Add</button>
</div>

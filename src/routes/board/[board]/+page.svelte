<script lang="ts">
	export let data;
</script>

<div>Id: {data.board.id}</div>
<div>Name: {data.board.name}</div>
{#each data.comments as comment}
	<div class="flex flex-col">
		<span>Comment: {comment.text}</span>
		<span>Type: {comment.type}</span>
	</div>
{/each}

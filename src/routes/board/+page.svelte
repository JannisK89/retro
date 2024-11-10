<script lang="ts">
	let boardId = $state('');
	let { data } = $props();
</script>

<h2 class="h2">Welcome {data.user?.user_metadata.username}</h2>
<p>Enter your Board ID to start posting!</p>

<form
	action="/board"
	method="POST"
	class="flex flex-col justify-center gap-4 w-80 lg:w-96 bg-surface-600"
>
	<div class="flex flex-col gap-2">
		<label for="board-name" class="label">Board ID</label>
		<input
			type="text"
			id="board-id"
			name="board-id"
			class="input p-2"
			placeholder="Board ID"
			bind:value={boardId}
		/>
	</div>
	<button type="submit" class="btn variant-filled hover:bg-primary-500 transition duration-200"
		>Enter Board</button
	>
</form>
<p>
	Don't have a board? <a href="/board/create" class="underline italic hover:text-primary-500"
		>Create one here</a
	>
</p>

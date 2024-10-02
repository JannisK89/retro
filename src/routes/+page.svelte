<script lang="ts">
	let boardId = $state('');
	let boardPass = $state('');
</script>

<h1 class="h1">Welcome to Retro!</h1>
<p>Enter your code to get started!</p>

<form action="/board" method="POST" class="flex flex-col justify-center gap-4">
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
	<div class="flex flex-col gap-2">
		<label for="board-pass" class="label">Password</label>
		<input
			type="text"
			id="board-pass"
			name="board-pass"
			class="input p-2"
			placeholder="Password"
			bind:value={boardPass}
		/>
	</div>
	<button type="submit" class="btn variant-filled hover:bg-primary-500 transition duration-200"
		>Enter Board</button
	>
</form>
<p>
	Don't have a board? <a href="/create" class="underline italic hover:text-primary-500"
		>Create one here</a
	>
</p>

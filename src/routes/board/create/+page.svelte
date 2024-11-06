<script lang="ts">
	let boardName = $state('');
	let boardPass = $state('');
</script>

<h1 class="h1">Create a board!</h1>

<form action="/board" method="POST" class="flex flex-col justify-center gap-4">
	<div class="flex flex-col gap-2">
		<label for="board-name" class="label">Board ID</label>
		<input
			type="text"
			id="board-name"
			name="board-name"
			class="input p-2"
			placeholder="Board Name"
			bind:value={boardName}
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
	<button type="submit" class="btn variant-filled">Create Board</button>
</form>

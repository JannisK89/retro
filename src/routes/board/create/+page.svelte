<script lang="ts">
	import { enhance } from '$app/forms';

	let boardName = $state('');
</script>

<h2 class="h2">Create a board!</h2>

<form method="POST" class="flex flex-col justify-center gap-4" use:enhance>
	<div class="flex flex-col gap-2">
		<label for="board-name" class="label">Board ID</label>
		<input
			type="text"
			id="board-name"
			name="board-name"
			class="input p-2"
			placeholder="Board Name"
			bind:value={boardName}
			required
			min="1"
		/>
	</div>
	<button type="submit" class="btn variant-filled">Create Board</button>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';

	let boardName = $state('');
	let sending = $state(false);
</script>

<h2 class="h2 px-4 pb-2">Create a board</h2>

<form
	method="POST"
	class="flex flex-col justify-center gap-4"
	use:enhance={() => {
		sending = true;

		return async ({ update }) => {
			await update();
			sending = false;
		};
	}}
>
	<div class="flex flex-col gap-2">
		<label for="board-name" class="label">Board Name</label>
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
	<button type="submit" disabled={sending} class="btn variant-filled"
		>{sending ? 'Creating board...' : 'Create board'}</button
	>
</form>

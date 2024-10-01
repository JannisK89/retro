<script lang="ts">
	let boardName = '';
</script>

<div class="flex items-center justify-center h-screen">
	<div class="space-y-5">
		<h1 class="h1">Welcome to Retro!</h1>
		<p>Create a retro board to get started!</p>

<form   
		<label for="board-name" class="sr-only">Board Name</label>
		<input
			type="text"
			id="board-name"
			name="board-name"
			class="input"
			placeholder="Board Name"
			bind:value={boardName}
		/>
	</div>
</div>

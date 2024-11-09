<script lang="ts">
	import { enhance } from '$app/forms';

	let { form }: { form: { message: string } } = $props();
</script>

<h2 class="h2">Sign Up</h2>
<form method="POST" class="flex flex-col gap-2 w-80 lg:w-96" use:enhance>
	<label class="label" for="email"> Email </label>
	<input class="input p-2" name="email" type="email" id="email" placeholder="Email" required />
	<label class="label" for="username"> Username </label>
	<input
		class="input p-2"
		name="username"
		type="text"
		id="username"
		placeholder="Username"
		required
		min="1"
	/>
	<label class="label" for="password"> Password (Minimum 8 Characters)</label>
	<input
		class="input p-2"
		name="password"
		type="password"
		id="password"
		placeholder="Password"
		required
		min="8"
	/>
	<label class="label" for="passwordConfirm"> Confirm Password </label>
	<input
		class="input p-2"
		name="passwordConfirm"
		type="password"
		id="passwordConfirm"
		placeholder="Confirm Password"
		required
		min="8"
	/>
	<div class="flex justify-around gap-4 mt-4">
		<button class="btn btn-lg variant-filled w-full" formaction="?/signup">Sign up</button>
	</div>
	{#if form?.message}
		{#each form.message.split(';') as message}
			<p class="max-w-max text-warning-600 text-wrap">{message}</p>
		{/each}
	{/if}
</form>

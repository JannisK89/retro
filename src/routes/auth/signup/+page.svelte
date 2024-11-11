<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';

	let { form }: { form: { message: string } } = $props();
	let sending = $state(false);
</script>

<h2 class="h2">Sign Up</h2>
<form
	method="POST"
	class="flex flex-col gap-2 w-80 lg:w-96"
	use:enhance={() => {
		sending = true;

		return async ({ update }) => {
			await update();
			sending = false;
		};
	}}
>
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
		<button class="btn btn-lg variant-filled w-full" disabled={sending} formaction="?/signup"
			>{!sending ? 'Sign Up' : 'Signing you up'}</button
		>
	</div>
	<p class="pt-2">
		Already have an account? <a href="/auth" class="underline italic hover:text-primary-500"
			>Log in here</a
		>
	</p>
	<div class="h-2">
		{#if form?.message}
			<p in:fade|global={{ duration: 1000 }} class="max-w-max text-warning-600 text-wrap">
				{form.message.split(';')[0].replace('Validation error: ', '')}
			</p>
		{/if}
	</div>
</form>

<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';

	let { data, form }: { data: PageData; form: { message: string } } = $props();
	let sending = $state(false);
</script>

<h2 class="h2">Retro By JK</h2>
<p>Log in or create an account to start posting</p>

<form
	method="POST"
	action="?/login"
	use:enhance={() => {
		sending = true;

		return async ({ update }) => {
			await update();
			sending = false;
		};
	}}
	class="flex flex-col gap-2 w-80 lg:w-96"
>
	<label class="label" for="email"> Email </label>
	<input class="input p-2" name="email" type="email" id="email" placeholder="Email" required />
	<label class="label" for="password"> Password </label>
	<input
		class="input p-2"
		name="password"
		type="password"
		id="password"
		placeholder="Password"
		required
	/>
	<div class="flex justify-around gap-4 mt-4">
		<button class="btn btn-lg variant-filled w-full mb-2" disabled={sending}
			>{!sending ? 'Log In' : 'Logging in..'}</button
		>
	</div>
	{#if data.signup}
		<p class="text-warning-600 text-wrap w-96">
			Please confirm your email address by clicking the link in your email.
		</p>
	{:else}
		<p>
			Don't have an account yet? <a
				href="/auth/signup"
				class="underline italic hover:text-primary-500">Sign up here</a
			>
		</p>
	{/if}
	<div class="h-2">
		{#if form?.message}
			<p in:fade|global={{ duration: 1000 }} class="max-w-max text-warning-600 text-wrap">
				{form.message}
			</p>
		{/if}
	</div>
</form>

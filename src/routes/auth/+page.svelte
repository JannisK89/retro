<h2 class="h2">Welcome to Retro</h2>
<p>Log in or create an account to start posting!</p>

<form method="POST" action="?/login" class="flex flex-col gap-2 w-80 lg:w-96">
	<label class="label" for="email"> Email </label>
	<input class="input p-2" name="email" type="email" id="email" placeholder="Email" />
	<label class="label" for="password"> Password </label>
	<input class="input p-2" name="password" type="password" id="password" placeholder="Password" />
	<div class="flex justify-around gap-4 mt-4">
		<button class="btn btn-lg variant-filled w-full mb-2">Login</button>
	</div>
	<p>
		Don't have an account yet? <a
			href="/auth/signup"
			class="underline italic hover:text-primary-500">Sign up here</a
		>
	</p>
</form>

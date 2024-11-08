<h1 class="h1">Welcome to Retro!</h1>
<p>Log in or create an account to get started!</p>

<form method="POST" action="?/login" class="flex flex-col gap-2 w-full">
	<label class="label" for="email"> Email </label>
	<input class="input p-2" name="email" type="email" id="email" placeholder="Email" />
	<label class="label" for="password"> Password </label>
	<input class="input p-2" name="password" type="password" id="password" placeholder="Password" />
	<div class="flex justify-around gap-4 mt-4">
		<button class="btn btn-lg variant-filled">Login</button>
		<button class="btn btn-lg variant-filled" formaction="?/signup">Sign up</button>
	</div>
</form>

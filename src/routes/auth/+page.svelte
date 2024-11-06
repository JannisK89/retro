<form method="POST" action="?/login" class="flex flex-col gap-2 w-80">
	<label class="label"> Email </label>
	<input class="input p-2" name="email" type="email" id="email" />
	<label class="label" for="email"> Password </label>
	<input class="input p-2" name="password" type="password" id="password" />
	<div class="flex gap-4 mt-4">
		<button class="btn btn-lg variant-filled">Login</button>
		<button class="btn btn-lg variant-filled" formaction="?/signup">Sign up</button>
	</div>
</form>

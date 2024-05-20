<!-- src/routes/signup/+page.svelte -->
<script lang="ts">
	import { invalidateAll } from '$app/navigation'
	import { appwrite } from '$lib/appwrite'
	import { ID } from 'appwrite'

	let formError: string | null = null

	async function handleSubmit(event: Event) {
		event.preventDefault()
		formError = null

		const form = /** @type {HTMLFormElement} */ (event.target)
		const formData = /** @type Record<string, string | undefined> */ (
			Object.fromEntries(new FormData(form).entries())
		)

		const { name, email, password } = formData
		if (!name || !email || !password) {
			formError = 'Please fill out all fields'
			return
		}

		try {
			await appwrite.account.create(ID.unique(), email, password, name)
			await appwrite.account.createEmailPasswordSession(email, password)
			await invalidateAll()
		} catch (e) {
			formError = /** @type {import('appwrite').AppwriteException} */ (e)
				.message
		}
	}
</script>

<form on:submit={handleSubmit}>
	<label for="name">Name</label>
	<input type="text" id="name" name="name" required />
	<label for="email">Email</label>
	<input type="email" id="email" name="email" required />
	<label for="password">Password</label>
	<input
		type="password"
		id="password"
		name="password"
		placeholder="SuperSecretPassword"
		required
		minlength="8"
	/>
	<button type="submit">Signup</button>
	{#if formError}
		<p>{formError}</p>
	{/if}
</form>

<script lang="ts">
	import { invalidateAll } from '$app/navigation'
	import { appwrite } from '$lib/appwrite'
	import type { PageData } from './$types'

	export let data: PageData

	$: loggedIn = !!data.account

	$: {
		console.log(data)
	}

	async function logout() {
		await appwrite.account.deleteSession('current')
		// invalidateAll will execute all `load` functions again.
		// In our case, this means we'll fetch the account data again.
		await invalidateAll()
	}
</script>

<div class="container mx-auto space-y-8 p-8">
	<h1 class="h1">Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<section>
		<a class="variant-filled-primary btn" href="https://kit.svelte.dev/"
			>SvelteKit</a
		>
		<a class="variant-filled-secondary btn" href="https://tailwindcss.com/"
			>Tailwind</a
		>
		<a class="variant-filled-tertiary btn" href="https://github.com/">GitHub</a>
	</section>

	{#if loggedIn}
		<p>Hello {data.account?.name}!</p>
		<button on:click={logout}>Logout</button>
	{:else}
		<a href="/login">Login</a>
		<a href="/signup">Signup</a>
	{/if}
</div>

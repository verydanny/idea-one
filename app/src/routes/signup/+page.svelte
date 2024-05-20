<script lang="ts">
	import { enhance } from '$app/forms'
	import { Button } from '$lib/components/ui/button'
	import { Input } from '$lib/components/ui/input'

	// export let form: import('./$types').ActionData
</script>

<form action="?/signup" method="post" use:enhance>
	<div class="input-group input-group-divider grid-cols-[1fr_auto]">
		<Input
			id="email"
			name="email"
			placeholder="Email"
			type="email"
			class="input"
		/>
	</div>
	<div class="input-group input-group-divider grid-cols-[1fr_auto]">
		<Input
			id="password"
			name="password"
			placeholder="Password"
			type="password"
			class="input"
		/>
	</div>
	<div class="input-group input-group-divider grid-cols-[1fr_auto]">
		<Input id="name" name="name" placeholder="Name" type="text" class="input" />
	</div>
	<div class="input-group input-group-divider grid-cols-[1fr_auto]">
		<Button type="submit" class="variant-filled-secondary">Sign up</Button>
	</div>
</form>

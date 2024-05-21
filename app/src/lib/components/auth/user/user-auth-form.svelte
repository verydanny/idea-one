<script lang="ts">
  import { superForm } from 'sveltekit-superforms'
  import GithubIcon from '$lib/components/icons/github.svelte'
  import { Button } from '$lib/components/ui/button/index'
  import { Input } from '$lib/components/ui/input/index'
  import { Label } from '$lib/components/ui/label/index'
  import { cn } from '$lib/utils'
  import type { PageData as SignupPageData } from '../signup/$types'
  import type { PageData as SigninPageData } from '../signin/$types'

  let className: string | undefined | null = undefined
  export let type: 'signin' | 'signup' | undefined | null = undefined

  export { className as class }
  export let data: SignupPageData | SigninPageData

  console.log('>>> data', data)

  const { form, errors, constraints, message, enhance } = superForm(data.form)
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
  {#if $message}<h3>{$message}</h3>{/if}
  <form action="/user/auth/{type}?/{type}" method="post" use:enhance>
    <div class="grid gap-2">
      <div class="grid gap-1">
        <!-- <Label class="sr-only" for="name">Name</Label>
				<Input
					id="name"
					placeholder="Billy Bob"
					type="name"
					autocapitalize="none"
					autocomplete="name"
					autocorrect="off"
				/> -->
        {#if $errors.email}
          <span class="invalid">{$errors.email}</span>
        {/if}
        <Label class="sr-only" for="email">Email</Label>
        <Input
          type="email"
          name="email"
          aria-invalid={$errors.email ? true : undefined}
          placeholder="name@example.com"
          autocapitalize="none"
          autocomplete="email"
          autocorrect="off"
          bind:value={$form.email}
          {...$constraints.email}
        />
        {#if $errors.password}
          <span class="invalid">{$errors.password}</span>
        {/if}
        <Label class="sr-only" for="password">Email</Label>
        <Input
          type="password"
          name="password"
          aria-invalid={$errors.password ? true : undefined}
          placeholder="Password"
          autocapitalize="none"
          autocomplete="password"
          autocorrect="off"
          bind:value={$form.password}
          {...$constraints.password}
        />
      </div>
      <Button type="submit">
        {#if type === 'signin'}
          Sign In
        {:else}
          Sign Up
        {/if}
      </Button>
    </div>
  </form>
  <div class="relative">
    <div class="absolute inset-0 flex items-center">
      <span class="w-full border-t"></span>
    </div>
    <div class="relative flex justify-center text-xs uppercase">
      <span class="bg-background px-2 text-muted-foreground">
        Or continue with
      </span>
    </div>
  </div>
  <Button variant="outline" type="button">
    <GithubIcon class="mr-2 h-4 w-4" />
    GitHub
  </Button>
</div>

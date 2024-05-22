<script lang="ts">
  import { superForm } from 'sveltekit-superforms'
  import { page } from '$app/stores'
  import GithubIcon from '$lib/components/icons/github.svelte'
  import { Button } from '$lib/components/ui/button/index'
  import { Input } from '$lib/components/ui/input/index'
  import { Label } from '$lib/components/ui/label/index'
  import { cn } from '$lib/utils'

  export let data
  export let className: string | undefined | null = undefined

  const { constraints, form, capture, restore, errors } = superForm(data.form)
  const {
    url: { pathname },
    params
  } = $page
  const type = params?.type === 'in' ? 'signin' : 'signup'

  export const snapshot = { capture, restore }
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
  <form method="post" action="{pathname}?/{type}">
    <div class="grid gap-2">
      <div class="grid gap-1">
        <Label class="sr-only" for="email">Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="name@example.com"
          autocapitalize="none"
          autocomplete="email"
          autocorrect="off"
          aria-invalid={$errors.email ? true : false}
          value={$form.email}
          {...$constraints.email}
        />
        <Label class="sr-only" for="password">Email</Label>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          autocapitalize="none"
          autocomplete="password"
          autocorrect="off"
          aria-invalid={$errors.password ? true : false}
          value={$form.password}
          {...$constraints.password}
        />
      </div>
      <Button type="submit">
        {type === 'signin' ? 'Sign In' : 'Sign Up'}
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

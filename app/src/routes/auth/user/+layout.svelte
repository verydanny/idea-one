<script lang="ts">
  import type { Snippet } from 'svelte'
  import SignUpPage from '$lib/components/auth/user/sign-up-page.svelte'

  interface MyProps {
    children: Snippet
  }

  let { children }: MyProps = $props()
</script>

<div
  class="container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0"
>
  <SignUpPage>
    {@render children()}
  </SignUpPage>
</div>

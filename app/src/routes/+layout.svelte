<script lang="ts">
  import '../app.postcss'
  import { Button } from '$lib/components/ui/button'
  import Navigation from '$lib/components/navigation/navigation.svelte'

  let { data, children } = $props()
  // container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0
</script>

<div
  class="relative flex min-h-screen flex-col bg-background"
  id="page"
  data-vaul-drawer-wrapper
>
  {#if data.user}
    <Navigation />
    <Button
      href="/auth/user/signout"
      variant="secondary"
      class="right-4 top-4 md:right-8 md:top-8"
    >
      Logout
    </Button>
  {/if}
  {@render children()}
</div>

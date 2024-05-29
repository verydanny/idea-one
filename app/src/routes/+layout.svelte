<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import '../app.postcss'

  export let data
  // container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0
</script>

<div
  class="relative flex min-h-screen flex-col bg-background"
  id="page"
  data-vaul-drawer-wrapper
>
  {#if data.user}
    <Button
      href="/auth/user/signout"
      variant="secondary"
      class="right-4 top-4 md:right-8 md:top-8"
    >
      Logout
    </Button>
  {/if}
  <slot />
</div>

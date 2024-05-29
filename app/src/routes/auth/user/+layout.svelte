<script lang="ts">
  import SignUpPage from '$lib/components/auth/user/sign-up-page.svelte'
</script>

<div
  class="container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0"
>
  <SignUpPage>
    <slot />
  </SignUpPage>
</div>

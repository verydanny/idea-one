<script lang="ts">
  import AuthenticationImg from '$lib/images/authentication-bg.avif'
  import { page } from '$app/stores'
  import type { Snippet } from 'svelte'

  interface MyProps {
    children: Snippet
  }

  let { children }: MyProps = $props()

  const { params } = $page
  const typeMapping = {
    in: 'signin',
    up: 'signup',
    out: 'signout'
  } as const
  const type = typeMapping[params?.type as keyof typeof typeMapping]
</script>

<div
  class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
>
  <div
    class="absolute inset-0 bg-cover"
    style="background-image: url({AuthenticationImg})"
  ></div>
  <div class="relative z-20 flex items-center text-lg font-medium">
    <!-- <Command class="mr-2 h-6 w-6" /> -->
    Acme Inc
  </div>
  <div class="relative z-20 mt-auto">
    <blockquote class="space-y-2">
      <p class="text-lg">
        &ldquo;This library has saved me countless hours of work and helped me
        deliver stunning designs to my clients faster than ever before. Highly
        recommended!&rdquo;
      </p>
      <footer class="text-sm">Sofia Davis</footer>
    </blockquote>
  </div>
</div>
<div class="lg:p-8">
  <div
    class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
  >
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">
        {type !== 'signin' ? 'Create an account' : 'Welcome back'}
      </h1>
      <p class="text-sm text-muted-foreground">
        {type === 'signup'
          ? 'Enter your email below to create your account'
          : 'Enter your email below to log into your account'}
      </p>
    </div>
    {@render children()}
    <p class="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our
      <a href="/terms" class="underline underline-offset-4 hover:text-primary">
        Terms of Service
      </a>
      and
      <a
        href="/privacy"
        class="underline underline-offset-4 hover:text-primary"
      >
        Privacy Policy
      </a>
      .
    </p>
  </div>
</div>

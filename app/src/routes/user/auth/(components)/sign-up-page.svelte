<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import AuthenticationImg from '$lib/images/authentication-bg.avif'
  import { page } from '$app/stores'

  const isSigninPage = $page.url.pathname.includes('signin')
</script>

<div
  class="container relative grid h-[800px] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0"
>
  <Button
    href={isSigninPage ? '/user/auth/signup' : '/user/auth/signin'}
    variant="outline"
    class="absolute right-4 top-4 md:right-8 md:top-8"
  >
    {isSigninPage ? 'Register' : 'Login'}
  </Button>
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
          {!isSigninPage ? 'Create an account' : 'Welcome back'}
        </h1>
        <p class="text-sm text-muted-foreground">
          {!isSigninPage
            ? 'Enter your email below to create your account'
            : 'Enter your email below to log into your account'}
        </p>
      </div>
      <slot />
      <p class="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our
        <a
          href="/terms"
          class="underline underline-offset-4 hover:text-primary"
        >
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
</div>

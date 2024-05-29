<script lang="ts">
  import {
    Root,
    Trigger,
    Content,
    Header,
    Title,
    Description
    // Footer,
    // Close,
    // Portal
  } from '$lib/components/ui/drawer'
  import { Button } from '../ui/button'
</script>

<Root direction="right">
  <Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline">Navigation</Button>
  </Trigger>
  <Content
    class="hide-shadcdn-dragging-icon left-auto right-0 top-0 !mt-0 h-screen w-[400px] rounded-none"
  >
    <div
      class="absolute top-[50%] mx-auto ml-4 h-[100px] w-2 rounded-full bg-muted"
    ></div>
    <div class="h-screen">
      <div class="mx-auto w-full p-5">
        <Header>
          <Title>Navigation Menu</Title>
          <Description>Navigate Below</Description>
        </Header>
        <div class="space-y-4 p-4 pb-0">
          <Button
            class="flex h-12 w-[100%] items-center justify-center rounded-lg bg-muted"
            >Account</Button
          >
          <Button
            class="flex h-12 w-[100%] items-center justify-center rounded-lg bg-muted"
            >Account</Button
          >
          <Button
            class="flex h-12 w-[100%] items-center justify-center rounded-lg bg-muted"
            >Account</Button
          >
          <Button
            class="flex h-12 w-[100%] items-center justify-center rounded-lg bg-muted"
            >Account</Button
          >
        </div>
      </div>
    </div>
  </Content>
  <!-- <Content>
    <div>
      Hello World
    </div>
    <div class="mx-auto w-full max-w-sm">
        <Header>
          <Title>Move Goal</Title>
          <Description>Set your daily activity goal.</Description>
        </Header>
        <div class="p-4 pb-0">
          <div class="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              class="h-8 w-8 shrink-0 rounded-full"
            >
              <span class="sr-only">Decrease</span>
            </Button>
            <div class="flex-1 text-center">
              <div class="text-7xl font-bold tracking-tighter"></div>
              <div class="text-[0.70rem] uppercase text-muted-foreground">
                Calories/day
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              class="h-8 w-8 shrink-0 rounded-full"
            >
              <span class="sr-only">Increase</span>
            </Button>
          </div>
          <div class="mt-3 h-[120px]">Dingle</div>
        </div>
        <Footer>
          <Button>Submit</Button>
          <Close asChild let:builder>
            <Button builders={[builder]} variant="outline">Cancel</Button>
          </Close>
        </Footer>
      </div>
  </Content> -->
</Root>

<style>
  :global(.hide-shadcdn-dragging-icon) > :global(div:first-child) {
    display: none;
  }
</style>

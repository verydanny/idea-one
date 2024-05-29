<script>
  import Terminal from 'lucide-svelte/icons/terminal'
  import * as Alert from '$lib/components/ui/alert'

  let { data } = $props()

  const { user } = data
</script>

<div class="container">
  <Alert.Root class="m-auto mt-20 w-[90%] items-center justify-center">
    <Terminal class="h-4 w-4" />
    <Alert.Title>Heads up!</Alert.Title>
    <Alert.Description>Email: {user.email}</Alert.Description>
    <Alert.Description>Name: {user.name}</Alert.Description>
    <Alert.Description>Updated At: {user.$updatedAt}</Alert.Description>
  </Alert.Root>
</div>

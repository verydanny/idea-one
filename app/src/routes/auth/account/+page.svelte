<script>
  import Terminal from 'lucide-svelte/icons/terminal'
  import * as Alert from '$lib/components/ui/alert'

  export let data

  const { user } = data
</script>

<Alert.Root>
  <Terminal class="h-4 w-4" />
  <Alert.Title>Heads up!</Alert.Title>
  <Alert.Description>Email: {user.email}</Alert.Description>
</Alert.Root>

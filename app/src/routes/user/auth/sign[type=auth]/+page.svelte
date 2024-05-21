<script lang="ts">
  import { page } from '$app/stores'
  import UserAuthForm from '../(components)/user-auth-form.svelte'

  export let data

  const type = $page.params.type === 'in' ? 'signin' : 'signup'
</script>

<UserAuthForm {data} {type} />

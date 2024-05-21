<script lang="ts">
  import UserAuthForm from '../(components)/user-auth-form.svelte'

  export let data
</script>

<UserAuthForm type="signup" {data} />

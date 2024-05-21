import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
  if (!locals.user) {
    redirect(301, '/user/auth/signin')
  }

  redirect(301, '/account')
}

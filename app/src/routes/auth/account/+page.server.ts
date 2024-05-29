import { SESSION_COOKIE, createSessionClient } from '$lib/server/appwrite.js'
import { redirect } from '@sveltejs/kit'

export const ssr = true
export const csr = false

export async function load({ locals }) {
  // Logged out users can't access this page.
  if (!locals.user) redirect(301, '/auth/user/signup')

  // Pass the stored user local to the page.
  return {
    user: locals.user
  }
}

// Define our log out endpoint/server action.
export const actions = {
  default: async ({ cookies }) => {
    // Create the Appwrite client.
    const { account } = createSessionClient(cookies)

    // Delete the session on Appwrite, and delete the session cookie.
    await account.deleteSession('current')
    cookies.delete(SESSION_COOKIE, { path: '/' })

    // Redirect to the sign up page.
    redirect(301, '/auth/user/signin')
  }
}

import { redirect } from '@sveltejs/kit'

export const ssr = true
export const csr = false

export async function load({ locals }) {
  // Pass the stored user local to the page.
  return {
    user: locals.user
  }
}

export const ssr = true
export const csr = true

export async function load({ locals }) {
  // Pass the stored user local to the page.
  return {
    user: locals.user
  }
}

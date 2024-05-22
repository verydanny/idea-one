import { ID } from 'node-appwrite'
import { typebox } from 'sveltekit-superforms/adapters'
import { superValidate, message } from 'sveltekit-superforms'
import { fail } from '@sveltejs/kit'

import { SESSION_COOKIE, createAdminClient } from '$lib/server/appwrite'
import { loginSchema } from '$lib/schema/auth/user'

export const ssr = true
export const csr = false

export const load = async () => {
  const form = await superValidate(typebox(loginSchema))

  return { form }
}

export const actions = {
  signup: async ({ request, cookies }) => {
    const form = await superValidate(request, typebox(loginSchema))

    if (!form.valid) {
      return fail(400, { form })
    }

    // Create the Appwrite client.
    const { account } = createAdminClient()

    // Create the session using the client
    await account.create(ID.unique(), form.data.email, form.data.password)
    const session = await account.createEmailPasswordSession(
      form.data.email,
      form.data.password
    )

    // Set the session cookie with the secret
    cookies.set(SESSION_COOKIE, session.secret, {
      sameSite: 'strict',
      expires: new Date(session.expire),
      secure: true,
      path: '/'
    })

    return message(form, 'Registered successfully')
  },
  signin: async ({ request, cookies }) => {
    const form = await superValidate(request, typebox(loginSchema))

    if (!form.valid) {
      return fail(400, { form })
    }

    // Create the Appwrite client.
    const { account } = createAdminClient()

    // Create the session using the client
    await account.create(ID.unique(), form.data.email, form.data.password)
    const session = await account.createEmailPasswordSession(
      form.data.email,
      form.data.password
    )

    // Set the session cookie with the secret
    cookies.set(SESSION_COOKIE, session.secret, {
      sameSite: 'strict',
      expires: new Date(session.expire),
      secure: true,
      path: '/'
    })

    return message(form, 'Registered successfully')
  }
}

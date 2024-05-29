import { typebox } from 'sveltekit-superforms/adapters'
import { superValidate } from 'sveltekit-superforms'
import { fail, redirect } from '@sveltejs/kit'

import {
  SESSION_COOKIE,
  createAppwriteEmailPasswordAccount,
  createSessionClient
} from '$lib/server/appwrite'
import { loginSchema } from '$lib/schema/auth/user'
import type { RequestEvent } from './$types'

export const ssr = true
export const csr = false

export const load = async ({ locals, params, cookies }) => {
  const form = await superValidate(typebox(loginSchema))

  if (locals.user) {
    if (params?.type === 'out') {
      const { account } = createSessionClient(cookies)

      await account.deleteSession('current')
      cookies.delete(SESSION_COOKIE, { path: '/' })

      redirect(301, '/auth/user/signin')
    }

    redirect(301, '/auth/account')
  }

  return { form }
}

const signup = async ({ request, cookies }: RequestEvent) => {
  const form = await superValidate(request, typebox(loginSchema))

  if (!form.valid) {
    return fail(400, { form })
  }

  const session = await createAppwriteEmailPasswordAccount(
    form.data.email,
    form.data.password,
    true
  )

  // Set the session cookie with the secret
  cookies.set(SESSION_COOKIE, session.secret, {
    sameSite: 'strict',
    expires: new Date(session.expire),
    secure: true,
    path: '/'
  })

  return redirect(301, '/auth/account')
}

const signin = async ({ request, cookies }: RequestEvent) => {
  const form = await superValidate(request, typebox(loginSchema))

  if (!form.valid) {
    return fail(400, { form })
  }

  // Create the Appwrite session
  const session = await createAppwriteEmailPasswordAccount(
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

  return redirect(301, '/auth/account')
}

export const actions = {
  signup,
  signin
}

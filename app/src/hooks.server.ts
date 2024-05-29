import { createSessionClient } from '$lib/server/appwrite'

export async function handle({ event, resolve }) {
  try {
    const { account } = createSessionClient(event.cookies)

    event.locals.user = await account.get()
  } catch {
    // dingus
  }

  return resolve(event)
}

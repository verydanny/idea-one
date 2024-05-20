import { appwrite } from '$lib/appwrite'

export const ssr = true
export const csr = false

export const load = async () => {
	try {
		const account = await appwrite.account.get()

		return {
			account
		}
	} catch {
		return {
			account: null
		}
	}
}

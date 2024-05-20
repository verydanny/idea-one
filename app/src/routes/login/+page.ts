import { redirect } from '@sveltejs/kit'

export const load = async ({ parent }) => {
	// Gets the data returned from the root layout
	const { account } = await parent()
	if (account) {
		redirect(303, '/')
	}
}

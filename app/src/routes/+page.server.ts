import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
	if (!locals.user) {
		redirect(301, '/signup')
	}

	redirect(301, '/account')
}

import type { ParamMatcher } from '@sveltejs/kit'

export const match: ParamMatcher = function match(params) {
  return /(in|up|out)$/.test(params)
}

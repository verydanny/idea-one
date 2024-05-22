import { Object, String } from '@sinclair/typebox'

export const loginSchema = Object({
  email: String({ format: 'email', examples: 'name@example.com' }),
  password: String({ minLength: 8, maxLength: 150 })
})

export type LoginSchema = typeof loginSchema

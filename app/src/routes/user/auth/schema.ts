import { Type } from '@sinclair/typebox'

export const schema = Type.Object({
  email: Type.String({ format: 'email', examples: 'name@example.com' }),
  password: Type.String({ minLength: 8, maxLength: 150 })
})

import type { Models, Account } from 'node-appwrite'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user: Models.User<Models.Preferences> | undefined
      account?: Account
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export type {}

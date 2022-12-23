// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// and what to do when importing types
declare namespace App {
	interface Locals 
	{
		pb: import('pocketbase').default,
		user: import('pocketbase').Admin | import('pocketbase').Record | null
	}

	type SignupEvent =
	{
		id?: string,
		name: string,
		date: Date,
		capacity: number,
		creator: string,
		created?: Date,
		updated?: Date
	}

	type Signup =
	{
		id?: string,
		email: string,
		event: string,
		created?: Date,
		updated?: Date
	}
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

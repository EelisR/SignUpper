<script lang="ts">
	import { FormGroup, Label, Input, Button } from 'sveltestrap/src';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<form method="POST">
	{#if form?.missing}<p>Please provide an email.</p>{/if}
	{#if form?.incorrect}<p>The email or password was not correct</p>{/if}
	<FormGroup>
		<Label>
			Email address
			<Input placeholder="Email address" type="email" name="email" value={form?.email}/>
		</Label>
	</FormGroup>
	<FormGroup>
		<Label>
			Please enter password
			<Input placeholder="Password" type="password" name="password" />
		</Label>
	</FormGroup>
	<Button type="submit">Log in</Button>
</form>

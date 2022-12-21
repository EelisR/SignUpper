<script lang="ts">
	import { FormGroup, Label, Input, Button } from 'sveltestrap/src';
</script>

<form method="POST">
	<FormGroup>
		<Label>
			Email address
			<Input placeholder="Email address" type="email" name="email" />
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

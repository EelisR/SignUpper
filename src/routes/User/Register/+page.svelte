<script lang="ts">
	import { Button, FormGroup, Input, Label } from 'sveltestrap/src';
</script>

<form method="POST">
	<FormGroup>
    <Label>
      Email address
      <Input placeholder="Email address" type="email" name="email"/>
    </Label>
	</FormGroup>
	<FormGroup>
    <Label>
      Please enter password
      <Input placeholder="Password" type="password" name="password"/>
    </Label>
	</FormGroup>
	<FormGroup>
    <Label>
      Please repeat the password
      <Input placeholder="Repeat password" type="password" name="passwordConfirm"/>
    </Label>
	</FormGroup>
  <Button type="submit">Register</Button>
</form>

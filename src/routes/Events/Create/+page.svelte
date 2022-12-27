<script lang="ts">
	import { Button, FormGroup, Input, Label } from 'sveltestrap/src';
</script>

<form method="POST">
	<FormGroup>
        <Label for="name">
            Event name:
            <Input placeholder="Event name" type="text" name="name"/>
        </Label>
    </FormGroup>
    <FormGroup>
        <Label for="date">
            Event date:
            <Input placeholder="Date" type="date" name="date"/>
        </Label>
    </FormGroup>
    <FormGroup>
        <Label for="capacity">
            Event capacity:
            <Input placeholder="Capacity" type="number" name="capacity" min="1"/>
        </Label>
	</FormGroup>
  <Button type="submit">Create</Button>
</form>

<script lang="ts">
	import type { PageData } from './$types';
	import { Button } from 'sveltestrap/src';
	export let data: PageData;
</script>

{#if data.user}
	<form method="POST">
		<Button type="submit">Log out</Button>
	</form>
{:else}
	<Button href="User/Login">Login</Button>
	<Button href="User/Register">Register</Button>
{/if}

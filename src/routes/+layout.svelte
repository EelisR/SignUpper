<script lang="ts">
	import Navbar from '../lib/Navbar.svelte';
	import type { PageData } from './$types';

  export let data: PageData;
</script>

<Navbar loggedIn={data.loggedIn}/>

<main>
	<slot />
</main>

<style>
  main {
    text-align: center;
    max-width: 60%;
    margin: auto;
    margin-top: 5em;
  }
</style>
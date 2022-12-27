<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte';
	import type { PageData } from './$types';

  export let data: PageData;
</script>

<Navbar loggedIn={data.user != null}/>

<main>
	<slot />
</main>

<style>
  main {
    text-align: center;
    max-width: 60%;
    margin: auto;
    margin-top: 5em;
    min-height: 70vh;
  }
</style>
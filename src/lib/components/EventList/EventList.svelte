<script lang="ts">
	import EventListItem from './EventListItem.svelte';
	export let events: App.SignupEvent[];
</script>

<table class="event-list">
	{#each events as event}
		<tr>
			<EventListItem {event} />
		</tr>
	{/each}
</table>

<style>
  table.event-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    justify-content: space-around;
  }
</style>

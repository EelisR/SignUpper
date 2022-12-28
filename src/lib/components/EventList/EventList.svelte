<script lang="ts">
  import type { Admin, Record } from 'pocketbase';
	import EventListItem from './EventListItem.svelte';
	export let events: App.SignupEvent[];

  const sorted = events.sort((a, b) => {
    return a.date.valueOf() - b.date.valueOf();
  });
</script>

<div class="events">
  <table class="event-list">
    {#each sorted as event}
      <tr>
        <EventListItem {event} />
      </tr>
    {/each}
  </table>
</div>

<style>
  table.event-list {
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    justify-content: space-around;
  }
  .events {
    display: flex;
  }
</style>

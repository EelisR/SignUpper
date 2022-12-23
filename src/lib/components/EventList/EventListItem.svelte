<script lang="ts">
  import { Button } from 'sveltestrap/src';
  export let event: App.SignupEvent;
</script>

<div class="event-list-item">
  <p>Event name: <span>{event.name}</span></p>
  <p>Happening on: <span>{event.date}</span></p>
  <p>Capacity: <span>{event.capacity}</span></p>
  <Button>Open</Button>
</div>

<style>
  div.event-list-item {
    display: grid;
    text-align: left;
    border: 1px solid grey;
    border-radius: 10px;
  }
</style>
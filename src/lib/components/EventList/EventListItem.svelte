<script lang="ts">
  import { Button } from 'sveltestrap/src';
  export let event: App.SignupEvent;
</script>

<div class="event-list-item">
  <div class="info">
    <p>Event name: <span>{event.name}</span></p>
    <p>Happening on: <span>{event.date}</span></p>
    <p>Capacity: <span>{event.capacity}</span></p>
  </div>
  <div class="button">
    <Button href="/Events/{event.id}">Open</Button>
  </div>
</div>

<style>
  div.event-list-item {
    display: flex;
    text-align: left;
    border: 0.1em solid grey;
    border-radius: 10px;
  }
  .button {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>
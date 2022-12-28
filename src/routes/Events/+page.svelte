<script lang="ts">
    import EventList from '$lib/components/EventList/EventList.svelte';
    import { Button } from 'sveltestrap';
    import type { PageData } from './$types';
    
    export let data: PageData;
    const events = data.events;
    const user = data.user ?? null;
</script>


<div class="page">
    {#if events && events.length > 0}
        <EventList events={events} />
        {#if user}
            <Button class="create-button" href="Events/Create" style="height: fit-content;">Create Event</Button>
        {/if}
    {:else}
        <h1>No open events at the moment</h1>
    {/if}
</div>

<style scoped>
    .page {
        display: grid;
        grid-template-columns: 3fr 1fr;
    }
</style>